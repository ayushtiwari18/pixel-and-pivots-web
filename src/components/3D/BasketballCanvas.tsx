
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Neural connections component inside the basketball
const NeuralConnections = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 200;
  const particlePositions = new Float32Array(particlesCount * 3);
  
  // Create random positions for neural nodes
  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    particlePositions[i3] = (Math.random() - 0.5) * 0.7;
    particlePositions[i3 + 1] = (Math.random() - 0.5) * 0.7;
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 0.7;
  }
  
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  
  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#8B5CF6" sizeAttenuation transparent />
      </points>
      {/* Lines connecting some of the points to create a neural network look */}
      <lineSegments>
        <edgesGeometry args={[new THREE.SphereGeometry(0.4, 10, 10)]} />
        <lineBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
      </lineSegments>
    </>
  );
};

// Basketball component that contains the neural connections
const Basketball = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      {/* Basketball exterior */}
      <Sphere args={[0.8, 64, 64]}>
        <MeshDistortMaterial 
          color="#FF914D" 
          attach="material" 
          distort={0.05} 
          speed={1.5} 
          roughness={0.4}
        />
      </Sphere>
      
      {/* Neural network connections inside */}
      <NeuralConnections />
    </mesh>
  );
};

// Main canvas component
const BasketballCanvas = () => {
  return (
    <Canvas style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Basketball />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default BasketballCanvas;
