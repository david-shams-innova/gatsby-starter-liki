import React from 'react'
import cat from '../data/images/cat.jpeg'

export default function index() {
  return (
    <main>
      <h1>Gatsby</h1>
      {/* <img src="../images/cat.jpeg" alt="Cat" /> */}
      <img src={cat} alt="Cat" />
      <h3>Mushik</h3>
    </main>
  )
}
