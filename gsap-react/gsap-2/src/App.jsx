import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

const App = () => {


 const [box, setBox] = useState(0)
 const [roti, setRoti] = useState(0)

 useGSAP(()=>{
  gsap.to(".box",{
    x:box,
    duration:0.5,
    rotate:roti,

  })
 },{
  dependencies:[box,roti]
 })
  return (
  <>
  <main>
         <button onClick={()=>{
                const random = gsap.utils.random(-500,500,100);
                const rotateX = gsap.utils.random(-360,360,30);
setRoti(rotateX)
      setBox(random)
    console.log(random)
    }} >Animate</button>
    <div  className="box"></div> 
  </main>
      <div  className="box"></div> 

  </>
  )
}

export default App;