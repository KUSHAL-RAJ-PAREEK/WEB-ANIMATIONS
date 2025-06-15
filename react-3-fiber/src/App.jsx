import React from 'react'
import { Canvas,useFrame } from "@react-three/fiber" 
import {useRef} from "react"; 
import { FirstPersonControls, GizmoHelper, GizmoViewcube,
  useHelper
} from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { SpotLightHelper } from 'three';


function LightWithhelper(){
  const light = useRef();

  useHelper(light, SpotLightHelper,'orange')
return <spotLight ref= {light} intensity={80} color={0xffea00} position={[2,5,1]} />

}

function AnimatedBox(){

  const boxRef = useRef(); 

  // const { speed } = useControls("Rotation",{
  //   speed:{
  //     value:0.005,
  //     min:0.0,
  //     max:0.03,
  //     step:0.001
  //   }
  // })
  useFrame(() =>{
    boxRef.current.rotation.x +=0.005;
        boxRef.current.rotation.y += 0.005;
            boxRef.current.rotation.z += 0.005;
  })
return(
  <mesh ref ={boxRef}>
<boxGeometry args={[2,2,2]}/>
    <axesHelper args={[10]}/>
<meshStandardMaterial color={0x00bfff}/>
  </mesh>
)
}

function App() {
  return (
    <div id = 'canvas-container'>
    <Canvas style={{height:"100vh"}}>
    <OrbitControls/>
    <GizmoHelper alignment='bottom-right' margin={[80,80]}>
<GizmoViewcube/>
    </GizmoHelper>
    <gridHelper args={[20,20]}/>
    {/* <axesHelper args={[10]}/> */}
    {/* <FirstPersonControls movementSpeed={1} autoForward/> */}

      {/* <mesh position={[-2,2,-1]} rotation={[0,0,Math.PI]} 
      scale={[2,2,2]}>
        <sphereGeometry args={[3,8,8]}/>
        <torusKnotGeometry args={[1.7,0.3,256,256]}/>
        <meshToonMaterial color='gold' />
        <directionalLight position={[1,5,1]}></directionalLight>
      </mesh> */}
      <AnimatedBox/>
      <pointLight intensity={50} position={[2,5,1]}/>
      {/* <LightWithhelper/> */}
      {/* <ambientLight intensity={1} color={0xfcfcfc}/> */}
      {/* <directionalLight position={[2,5,1]}/> */}
    </Canvas>
    </div>
  )
}

export default App