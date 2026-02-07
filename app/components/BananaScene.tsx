'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import Banana from './Banana'
import TextOverlay from './TextOverlay'

export default function BananaScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
        />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffd700" />

        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <Banana />
        </Suspense>

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
          <planeGeometry args={[50, 50]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>

      <TextOverlay />
    </div>
  )
}
