import React from 'react'
import Display from '../components/Clock'
import Clock from '../components/Clock'
import SiteMap from '../components/site-map/SiteMap'
import cat from '../data/images/cat.jpeg'

export default function index() {
  return (
    <main>
      <h1>Gatsby</h1>
      {/* <img src="../images/cat.jpeg" alt="Cat" /> */}
      <img src={cat} alt="Cat" />
      <h3>Mushik</h3>
      <div id="clock"></div>
      {/* <Clock /> */}
      {/* <Display /> */}
      <SiteMap />
    </main>
  )
}
