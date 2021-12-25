import React from 'react'

function Clock() {
    // cancelInterval = setInterval(() => console.log(new Date()), 1000)

    let tick = () => {
        return (
            <h2>{new Date().toLocaleDateString()}</h2>

        )
    }
    // return (
    //     <div>
    //         {/* {setInterval(tick, 1000)} */}
    //         {

    //             // setTimeout(() => clearInterval(cancelInterval), 5000)
    //         }
    //     </div>
    // )
}

export default function Display() {
    return (
        setInterval(Clock, 1000)
    )
}

