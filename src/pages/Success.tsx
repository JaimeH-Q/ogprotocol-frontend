import React from 'react'
import styles from '../styles/Leaderboard.module.css'

import { useLocation, useNavigate } from 'react-router-dom'
import { NavbarLogin } from "../components/NavbarLogin";

import OG_ICONO from "../static/OG_ICONO.png";
import { Button } from '../components/ui/Button';
import { web3Enable, web3Accounts, web3FromAddress } from '@polkadot/extension-dapp'
import { stringToU8a, u8aToHex } from '@polkadot/util'


export default function Success() {
  return (
    <div className="min-h-screen bg-black">
      <NavbarLogin />
        <section className="flex flex-col items-center min-h-screen bg-linear-to-br from-gray-900 via-black to-blue-950 circuit-pattern">
                  <div className="flex items-center w-full justify-center">
                      <img src={OG_ICONO} alt="OG Logo" className="w-35 m-10 mt-30"/>
                  </div>


                  <div className="max-w-4xl text-center mb-6 text-white md:text-5xl font-bold">
                     Succesfully logged in! ✅
                  </div>
                  <div className="text-center mb-6 text-gray-400 md:text-2xl font-bold">
                     Go back to the game
                  </div>
        </section>

      
    </div>
  )
}
