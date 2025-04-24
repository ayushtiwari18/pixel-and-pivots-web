
import React, { useRef, useEffect, Suspense } from 'react';
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
        <pointsMaterial size={0.02} color="#8B5CF6" sizeAttenuation transparent opacity={1} />
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
      
      <NeuralConnections />
    </mesh>
  );
};

// Fallback component to show when 3D fails to load
const FallbackComponent = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-court-orange/20 to-ml-purple/20 rounded-xl">
      <div className="text-center p-8">
        <div className="w-24 h-24 rounded-full bg-court-orange mx-auto mb-4 animate-bounce"></div>
        <p className="text-lg font-medium">Interactive 3D Basketball</p>
      </div>
    </div>
  );
};

// Main canvas component
const BasketballCanvas = () => {
  // Check if WebGL is supported
  const isWebGLAvailable = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  };

  if (!isWebGLAvailable()) {
    return <FallbackComponent />;
  }

  return (
    <div className="h-full w-full">
      <ErrorBoundary fallback={<FallbackComponent />}>
        <Canvas 
          style={{ height: '100%', width: '100%' }}
          camera={{ position: [0, 0, 3], fov: 50 }}
          dpr={[1, 2]} // Limit device pixel ratio for better performance
        >
          <Suspense fallback={null}>
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
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Error Boundary component to catch rendering errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Three.js rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default BasketballCanvas;
