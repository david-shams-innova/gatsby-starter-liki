import React from 'react'

function Clock() {
    let tick = () => {
        return (
            <h2>{new Date().toLocaleDateString()}</h2>
        )
    }
    return (
        <div>
            {setInterval(tick, 1000)}
        </div>
    )
}

export default function Display() {
   return (
       setInterval(Clock, 1000)
   )
  }
  
  