import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react'
import * as THREE from 'three';

const MacContainer = () => {
    let model = useGLTF("./mac.glb")
    let meshes = {};
    let tex = useTexture("./red.jpg");
    model.scene.traverse(e => {
        meshes[e.name] = e;
    })

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;


    let data = useScroll();

    useFrame((state, delta) => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    })
    return (
        <group position={[0, -10, 20]}>
            <primitive object={model.scene} />
        </group>
    )
}

export default MacContainer;
