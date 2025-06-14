import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {

  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%"
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() => {

    
    if(!showContent) return;

    gsap.to(".main",{
scale: 1,
rotate: 0,
duration:2,
delay:-1,
ease:"Expo.easeInOut"
    })

  
 
     gsap.to(".sky",{
scale: 1.2,
rotate: 0,
duration:2,
delay:-.8,
ease:"Expo.easeInOut"
    })

       gsap.to(".bg",{
scale: 1.4,
rotate: 0,
duration:2,
delay:-1,
ease:"Expo.easeInOut"
    })

      gsap.to(".text",{
scale: 1,
rotate: 0,
duration:2,
delay:-1,
ease:"Expo.easeInOut"
    })


  
       gsap.to(".character",{
scale: 0.7,
x:"-50%",
bottom:"-65%",
rotate: 0,
duration:2,
delay:-1,
ease:"Expo.easeInOut"
    })

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".imagesdiv .text", {
        x: `${xMove}%`
      })


      gsap.to(".sky", {
        x: `${xMove * 0.07}%`
      })

      gsap.to(".bg", {
        x: `${xMove * 0.08}%`
      })

    })
  }, [showContent])



  return (
    <>
      <div className='svg fixed flex justify-center items-center top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id='viMask'>
              <rect width="100%" height="100%" fill="black" />
              <g className='vi-mask-group'>
                <text
                  x='50%'
                  y='50%'
                  fontSize="250"
                  textAnchor='middle'
                  fill='white'
                  dominantBaseline='middle'
                  fontFamily='Arial Black'
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask='url(#viMask)'
          />
        </svg>
      </div>

      {showContent &&
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 w-full py-10 px-10 z-[10]'>
              <div className='logo flex gap-7'>
                <div className='lines flex flex-col gap-2'>
                  <div className='line w-10 h-1 bg-white'> </div>
                  <div className='line w-8 h-1 bg-white'> </div>
                  <div className='line w-5 h-1 bg-white'> </div>
                </div>
                <h3 className='text-3xl -mt-[8px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>

            <div className='imagesdiv relative overflow-hidden w-full h-screen'>
              <img className='sky scale-[1.7] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover' src='./sky.png' />

              <img className='bg scale-[1.5] rotate-[-3deg]  absolute top-0 left-0 w-full h-full object-cover' src='./bg.png' />
              <div className='text text-white flex flex-col gap-4 absolute top-17 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
                <h1 className='text-[5rem] leading-none -ml-20'> grand</h1>
                <h1 className='text-[5rem] leading-none ml-10'> theft</h1>
                <h1 className='text-[5rem] leading-none -ml-20'> auto</h1>
              </div>
              <img className='character absolute bottom-[-150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]' src='./girlbg.png' />
            </div>

            <div className='btmbar text-white absolute left-0 bottom-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className='flex items-center gap-4'>
                <i className="text-xl ri-arrow-down-line"></i>
                <h3 className='text-xl font-[HelveticaNowDisplay]'>Scroll Down</h3>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35px]" src="./ps5.png" />
            </div>

          </div>
          <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
            <div className='cntnr flex text-white w-full h-[80%]'>

              <div className='relative limg w-1/2 h-full'>
                <img className="absolute scale-[0.7] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src='./imag.png' />
              </div>
              <div className='rg w-[40%] py-20'>
                <h1 className='text-4xl'>Still Running</h1>
                <h1 className='text-4xl'>Not Hunting</h1>
                <p className='mt-10 font-[HelveticaNowDisplay] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='mt-3 font-[HelveticaNowDisplay] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className='mt-3 font-[HelveticaNowDisplay] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <button className='bg-yellow-500 px-4 py-4 text-2xl text-black mt-5'>Download Now</button>
              </div>

            </div>

          </div>
        </div>
      }
    </>
  )
}

export default App