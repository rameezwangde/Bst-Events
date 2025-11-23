import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, size, speed }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01 * speed;
      mesh.current.rotation.y += 0.015 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[size, 0]} /> {/* Low poly args=[radius, detail=0] for "Gem" look */}
        <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.8} 
            transparent 
            opacity={0.8}
            envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  // BST Colors: Blue, Orange, White
  const shapes = [
    { pos: [-4, 2, -5], color: '#3b82f6', size: 1.2, speed: 1.5 }, // Blue
    { pos: [4, -2, -4], color: '#f97316', size: 1.0, speed: 1.2 }, // Orange
    { pos: [0, 3, -8], color: '#ffffff', size: 0.5, speed: 0.8 }, // White
    { pos: [-6, -3, -6], color: '#1e3a8a', size: 0.8, speed: 1.0 }, // Dark Blue
    { pos: [5, 3, -6], color: '#fb923c', size: 0.6, speed: 1.3 }, // Light Orange
    { pos: [2, 0, -3], color: '#60a5fa', size: 0.4, speed: 2.0 }, // Light Blue (Small fast)
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#f97316" />
      
      {/* Sparkles for magical effect */}
      <Sparkles 
        count={40} 
        scale={12} 
        size={4} 
        speed={0.4} 
        opacity={0.5} 
        color="#ffffff" 
      />

      {/* Floating Gems */}
      {shapes.map((shape, i) => (
        <FloatingShape 
            key={i} 
            position={shape.pos as [number, number, number]} 
            color={shape.color} 
            size={shape.size} 
            speed={shape.speed} 
        />
      ))}

      <Environment preset="city" />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Scene />
      </Canvas>
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bst-dark/80 via-bst-dark/40 to-bst-dark/90 pointer-events-none"></div>
    </div>
  );
};

export default ThreeBackground;