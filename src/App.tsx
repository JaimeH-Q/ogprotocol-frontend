import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      {/* <header style={{padding:12, borderBottom:'1px solid #eee'}}>
        <nav style={{display:'flex', gap:12}}>
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
