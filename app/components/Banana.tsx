'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import * as THREE from 'three'

export default function Banana() {
  const bananaRef = useRef<Group>(null)
  const leftEyeRef = useRef<Mesh>(null)
  const rightEyeRef = useRef<Mesh>(null)
  const mouthRef = useRef<Mesh>(null)
  const tearLeftRef = useRef<Mesh>(null)
  const tearRightRef = useRef<Mesh>(null)

  const [isCrying, setIsCrying] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsCrying(true), 1000)
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (bananaRef.current) {
      bananaRef.current.rotation.y = Math.sin(t * 0.5) * 0.1
      bananaRef.current.position.y = Math.sin(t * 2) * 0.1
    }

    if (leftEyeRef.current && rightEyeRef.current) {
      const blinkSpeed = 3
      const blinkAmount = Math.max(0, Math.sin(t * blinkSpeed))
      leftEyeRef.current.scale.y = 0.3 + blinkAmount * 0.7
      rightEyeRef.current.scale.y = 0.3 + blinkAmount * 0.7
    }

    if (isCrying && tearLeftRef.current && tearRightRef.current) {
      tearLeftRef.current.position.y = -0.5 - (t % 2) * 1.5
      tearRightRef.current.position.y = -0.5 - ((t + 0.5) % 2) * 1.5
      if ('opacity' in tearLeftRef.current.material) {
        tearLeftRef.current.material.opacity = Math.max(0, 1 - (t % 2) / 2)
      }
      if ('opacity' in tearRightRef.current.material) {
        tearRightRef.current.material.opacity = Math.max(0, 1 - ((t + 0.5) % 2) / 2)
      }
    }
  })

  return (
    <group ref={bananaRef} castShadow>
      <mesh castShadow position={[0, 0, 0]}>
        <group>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI * 0.15]}>
            <capsuleGeometry args={[0.6, 3, 32, 32]} />
            <meshStandardMaterial
              color="#FFE135"
              roughness={0.3}
              metalness={0.1}
              emissive="#FFD700"
              emissiveIntensity={0.2}
            />
          </mesh>

          <mesh position={[-0.2, 1.5, 0.1]}>
            <cylinderGeometry args={[0.15, 0.2, 0.4, 16]} />
            <meshStandardMaterial color="#8B7355" roughness={0.8} />
          </mesh>

          <mesh position={[-0.4, 0.7, 0.55]} ref={leftEyeRef}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0.4, 0.7, 0.55]} ref={rightEyeRef}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          <mesh position={[-0.35, 0.75, 0.7]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.45, 0.75, 0.7]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>

          <mesh position={[0, 0, 0.6]} rotation={[Math.PI, 0, 0]} ref={mouthRef}>
            <torusGeometry args={[0.35, 0.08, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>

          <mesh position={[-0.4, 0.4, 0.55]} ref={tearLeftRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#87CEEB"
              transparent
              opacity={0.8}
              metalness={0.5}
              roughness={0.1}
            />
          </mesh>
          <mesh position={[0.4, 0.4, 0.55]} ref={tearRightRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#87CEEB"
              transparent
              opacity={0.8}
              metalness={0.5}
              roughness={0.1}
            />
          </mesh>

          <mesh position={[-0.6, 0, 0.3]} rotation={[0, 0, Math.PI / 4]}>
            <capsuleGeometry args={[0.2, 0.8, 16, 16]} />
            <meshStandardMaterial color="#FFE135" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0.6, 0, 0.3]} rotation={[0, 0, -Math.PI / 4]}>
            <capsuleGeometry args={[0.2, 0.8, 16, 16]} />
            <meshStandardMaterial color="#FFE135" roughness={0.3} metalness={0.1} />
          </mesh>

          <mesh position={[-0.3, -1.8, 0.2]} rotation={[0, 0, Math.PI / 6]}>
            <capsuleGeometry args={[0.25, 1, 16, 16]} />
            <meshStandardMaterial color="#FFE135" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0.3, -1.8, 0.2]} rotation={[0, 0, -Math.PI / 6]}>
            <capsuleGeometry args={[0.25, 1, 16, 16]} />
            <meshStandardMaterial color="#FFE135" roughness={0.3} metalness={0.1} />
          </mesh>
        </group>
      </mesh>
    </group>
  )
}
