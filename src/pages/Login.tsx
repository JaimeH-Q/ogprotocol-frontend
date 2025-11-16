import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavbarLogin } from "../components/NavbarLogin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import OG_ICONO from "../static/OG_ICONO.png";
import { Button } from '../components/ui/Button';
import { web3Enable, web3Accounts, web3FromAddress } from '@polkadot/extension-dapp'
import { stringToU8a, u8aToHex } from '@polkadot/util'

export default function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const token = params.get('token')
  const username = params.get('username')
  const ip = params.get('ip')
  const redirectTo = params.get('redirect') ?? '/success'


  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleLogin() {
    setError(null)
    if (!token) {
      setError('Missing token parameter in URL')
      return
    }
    if (!username) {
      setError('Missing username parameter in URL')
      return
    }

    if (!ip) {
      setError('Missing IP parameter in URL')
      return
    }


    setLoading(true)
    try {
      const extensions = await web3Enable('OG Protocol')
      if (!extensions || extensions.length === 0) {
        throw new Error('No wallet extension detected or access was denied')
      }

      const accounts = await web3Accounts()
      if (!accounts || accounts.length === 0) throw new Error('No accounts found in wallet')

      const account = accounts[0]

      const injector = await web3FromAddress(account.address)
      const messageHex = u8aToHex(stringToU8a(token))

      if (!injector.signer || typeof injector.signer.signRaw !== 'function') {
        throw new Error('Your wallet does not support raw signing')
      }

      const signed = await injector.signer.signRaw({
        address: account.address,
        data: messageHex,
        type: 'bytes'
      })

      // debug logs: show signature and payload
      console.log('handleLogin: signed', signed)

      // Ensure fetch URL includes protocol - browsers require a full URL for cross-origin
      const apiUrl = 'http://129.151.100.83:25594/login'
      console.log('handleLogin: POST ->', apiUrl)

      let res: Response
      try {
        res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // credentials: 'include',
          body: JSON.stringify({ token, username, address: account.address, ip: ip, signature: signed.signature })
        })
      } catch (networkErr) {
        console.error('handleLogin: network error', networkErr)
        throw new Error('Network error when contacting login server')
      }

      console.log('handleLogin: server responded status', res.status)

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Login failed')
      }

      navigate(redirectTo)
    } catch (err: any) {
      console.error(err)
      setError(err?.message ?? 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="h-screen bg-black overflow-hidden">

      <NavbarLogin />
      <section className="flex flex-col items-center min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-950 circuit-pattern">
          <div className="flex items-center w-full justify-center">
              <img src={OG_ICONO} alt="OG Logo" className="w-35 m-10 mt-30"/>
          </div>
          <div className="max-w-4xl text-center mb-6 text-white md:text-5xl font-bold">
              Login with your wallet
          </div>
          {/* <Button onClick={handleLogin} disabled={loading} className='w-40 text-white'>
            {loading ? 'Connecting...' : 'Connect'}
          </Button> */}
          <div className="text-black ">
                  <button
                    className="w-40 h-10 bg-gray-100 flex text-center justify-center items-center mouse-pointer rounded-md font-mediumbg-gray-100 text-black hover:bg-gray-600 hover:text-white transition-colors"
                    onClick={handleLogin}
                    disabled={loading}
                    >
                    {loading ? 'Conecting...' : 'Connect'}
                  </button>
          </div>
                  {error && <div className="text-red-500 mt-4 flex items-center justify-center">{error}</div>}
      </section>
      

      
    </div>
  )
}
