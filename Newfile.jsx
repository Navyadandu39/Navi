import React from 'react'
let a="no problems have been detected ";
let b=(1,2,3,4)
function Newfile() {
  return (
    <div>
        <h2>what is react <br/> {a}</h2>
        <p>it is an frontend <br/> {b} </p>
        <img className="image" src='https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg?cs=srgb&dl=bloom-blossom-flora-53141.jpg&fm=jpg' alt='flowers'/>
        <button>get</button>
    </div>
  )
}

export default Newfile
console.log(typeof b)


