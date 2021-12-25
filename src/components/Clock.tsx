import React from 'react'
import ReactDOM from 'react-dom'


function Clock(props) {
    // cancelInterval = setInterval(() => console.log(new Date()), 1000)

    // let tick = () => {
        return (
            <h2>{new Date().toLocaleDateString()}</h2>

        )
    // }
    // return (
    //     <div>
    //         {/* {setInterval(tick, 1000)} */}
    //         {

    //             // setTimeout(() => clearInterval(cancelInterval), 5000)
    //         }
    //     </div>
    // )
}

function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('clock')
    );
  }
  

export default function Display() {
    return (
        setInterval(tick, 1000)
    )
}

