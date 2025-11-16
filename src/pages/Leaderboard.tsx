import React from 'react'
import styles from '../styles/Leaderboard.module.css'

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-black">
      <h1 className={styles.title}>Leaderboard</h1>
      <p className={styles.text}>Página de clasificación en /leaderboard</p>
      <div className={styles.card}>
        <strong>#1</strong> Usuario Ejemplo — 12345 pts
      </div>
    </div>
  )
}
