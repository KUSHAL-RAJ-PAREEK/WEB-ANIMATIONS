import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import "./style.css"
import { OrbitControls } from '@react-three/drei';
import Cyl from "./Cyl"
const App = () => {

  return (
    <>
<Canvas flat camera={{fov: 35}}>
   <OrbitControls/>
   <ambientLight/>
<Cyl/>
<EffectComposer>
 <Bloom
 mipmapBlur
    intensity={7.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
/>
</EffectComposer>
   </Canvas>
   <div className='w-full bg-black text-cyan-200 py-32'>
    Welcome to channel
   </div>
    </>
   
  )
}


export default App;