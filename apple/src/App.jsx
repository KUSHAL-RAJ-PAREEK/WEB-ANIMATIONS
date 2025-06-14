import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => {
  return <div className='w-full h-screen'>
  <div className="absolute flex flex-col items-center text-white top-21 left-1/2 -translate-x-1/2">
   <h3 className='text-7xl tracking-righter font-[700]'>macbook pro.</h3>
   <h5>Oh so pro !</h5>
   <p className='text-center w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
    {/* <OrbitControls/> */}
    <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr']} />
    <ScrollControls pages={3}>
      <MacContainer />
    </ScrollControls>

  </Canvas>
  </div>
}

export default App