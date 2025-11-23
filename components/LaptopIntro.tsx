import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, ScrollControls, Html, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Objects ---

const ScreenContent = () => {
  return (
    // We transform the HTML to sit on the screen plane.
    // Scale reduced to 0.41 and 'center' prop added to ensure perfect centering and no clipping
    <Html
      transform
      occlude
      position={[0, 8, 0.2]} // Positioned such that 0.5 (parent) + 8.0 = 8.5 (center of screen)
      rotation={[0, 0, 0]}
      scale={0.41} 
      center
      style={{ width: '920px', height: '620px', pointerEvents: 'none' }}
    >
      {/* This is a mini replica of the Home Hero Section */}
      <div className="w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1e3a8a] via-[#0f172a] to-[#020617] overflow-hidden flex flex-col relative rounded-lg select-none shadow-2xl border border-white/10 font-sans">
        {/* Mini Nav */}
        <div className="w-full p-8 flex justify-between items-center border-b border-white/5 bg-slate-900/50 backdrop-blur-md z-20">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                 <div className="w-5 h-5 border-2 border-white"></div>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">BST EVENTS</span>
           </div>
           <div className="flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
              <span className="text-white">Home</span>
              <span>About</span>
              <span>Services</span>
           </div>
        </div>

        {/* Mini Hero */}
        <div className="flex-1 flex items-center px-16 relative">
            {/* Background Gradients - More subtle and premium */}
           <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
           
           <div className="relative z-10 w-full">
               <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-bold text-blue-300 mb-6 tracking-[0.2em] uppercase backdrop-blur-sm">
                 Premium Event Management
               </div>
               <h1 className="text-7xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-xl">
                  Create Moments <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200">That Inspire</span>
               </h1>
               <p className="text-gray-300 text-lg font-medium max-w-xl mb-10 leading-relaxed opacity-90 font-light">
                  Corporate Events, Award Ceremonies & Gala Dinners. We bring your vision to life.
               </p>
               <div className="flex gap-4">
                  <div className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/25 border border-white/10">
                     Plan Your Event
                  </div>
               </div>
           </div>
        </div>
      </div>
    </Html>
  );
};

const StylizedLaptop = () => {
  const group = useRef<THREE.Group>(null);

  // Float animation for the whole laptop assembly
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      // Gentle float with very subtle rotation
      group.current.position.y = -3 + Math.sin(t / 2) * 0.1; 
      group.current.rotation.y = Math.sin(t / 4) * 0.02;
    }
  });

  return (
    // Lowered position to -3 to bring it down as requested
    <group ref={group} position={[0, -3, 0]}> 
      {/* --- Base --- */}
      {/* Bottom casing */}
      <RoundedBox args={[24, 1.2, 16]} radius={0.6} smoothness={4} position={[0, 0, 0]}>
         <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
      </RoundedBox>
      
      {/* Keyboard Area */}
      <group position={[0, 0.61, -2]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[22, 9]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Keys (Simplified rows) */}
        {[-1.5, -0.5, 0.5, 1.5, 2.5].map((row) => (
           <mesh key={row} position={[0, 0.1, row * 1.2 - 2]}>
              <boxGeometry args={[20, 0.15, 0.8]} />
              <meshStandardMaterial color="#334155" roughness={0.5} />
           </mesh>
        ))}
      </group>

      {/* Trackpad */}
      <RoundedBox args={[8, 0.1, 5]} radius={0.2} smoothness={4} position={[0, 0.65, 5]}>
        <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.5} />
      </RoundedBox>

      {/* Highlighted BST EVENTS Text on Keyboard Deck */}
      <Text
        position={[0, 0.66, 1.5]} // Positioned just above keys, below trackpad/space area
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={1.2}
        letterSpacing={0.2}
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
      >
        BST EVENTS
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={1.5} toneMapped={false} />
      </Text>

      {/* --- Screen Assembly --- */}
      <group position={[0, 0.6, -7.5]} rotation={[Math.PI / -12, 0, 0]}> {/* Less tilted, more upright */}
        {/* Lid Back */}
        <RoundedBox args={[24, 17, 0.8]} radius={0.6} smoothness={4} position={[0, 8.5, -0.4]}>
             <meshStandardMaterial color="#1e3a8a" roughness={0.2} metalness={0.7} />
        </RoundedBox>
        
        {/* Screen Bezel */}
        <mesh position={[0, 8.5, 0.01]}>
             <planeGeometry args={[23, 16]} />
             <meshStandardMaterial color="#000000" roughness={0.1} />
        </mesh>

        {/* The Display Backing (Emissive Bloom edge) */}
        <mesh position={[0, 8.5, 0.02]}>
            <planeGeometry args={[22, 15]} />
            <meshStandardMaterial color="#1e3a8a" emissive="#2563eb" emissiveIntensity={0.2} />
        </mesh>

        {/* HTML Content on Screen - Adjusted position to center vertically in bezel */}
        <group position={[0, 0.5, 0]}>
            <ScreenContent />
        </group>
      </group>
    </group>
  );
};

const Mouse = () => {
    return (
        <group position={[15, -3, 6]}>
            <RoundedBox args={[3.5, 1.5, 5.5]} radius={1} smoothness={4}>
                <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.6} />
            </RoundedBox>
            <mesh position={[0, 0.76, -1.5]}>
                <boxGeometry args={[0.5, 0.1, 1]} />
                <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.8} />
            </mesh>
        </group>
    )
}

const DeskLamp = () => {
  return (
    <group position={[-18, -4.5, -5]} rotation={[0, 0.5, 0]}>
      {/* Base */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[2.5, 2.8, 0.4, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 6, 0]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.25, 12, 16]} />
        <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
      </mesh>
       {/* Pivot */}
      <mesh position={[0, 12, 1.2]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} />
      </mesh>
      {/* Head */}
      <group position={[0, 12, 1.2]} rotation={[Math.PI / 2.5, 0, 0]}>
         <mesh position={[0, 2, 0]}>
           <coneGeometry args={[2.5, 5, 32, 1, true]} />
           <meshStandardMaterial color="#1e293b" side={THREE.DoubleSide} metalness={0.5} roughness={0.5} />
         </mesh>
         {/* Bulb */}
         <mesh position={[0, 0.5, 0]}>
           <sphereGeometry args={[0.8]} />
           <meshStandardMaterial color="#ffddaa" emissive="#ffddaa" emissiveIntensity={2} />
         </mesh>
         {/* SpotLight specifically for the lamp */}
         <spotLight position={[0, 0, 0]} angle={0.6} penumbra={0.4} intensity={20} color="#ffddaa" distance={25} target-position={[0, -10, 0]} />
      </group>
    </group>
  );
};

const Pen = () => {
  return (
    <group position={[12, -4.45, 8]} rotation={[Math.PI / 2, 0, -0.8]}>
       {/* Body */}
       <mesh>
         <cylinderGeometry args={[0.15, 0.15, 4, 16]} />
         <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
       </mesh>
       {/* Tip */}
       <mesh position={[0, 2.2, 0]}>
         <coneGeometry args={[0.15, 0.5, 16]} />
         <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
       </mesh>
       {/* Cap/End */}
       <mesh position={[0, -2.1, 0]}>
         <cylinderGeometry args={[0.16, 0.16, 0.5, 16]} />
         <meshStandardMaterial color="#f97316" />
       </mesh>
    </group>
  );
};

const FloatingCube = () => {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
            // Float higher
            mesh.current.position.y = 2 + Math.sin(state.clock.getElapsedTime()) * 0.5;
        }
    })
    return (
        <RoundedBox ref={mesh} args={[2.5, 2.5, 2.5]} radius={0.4} smoothness={4} position={[-16, 2, -4]} rotation={[0.5, 0.5, 0]}>
            <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.8} emissive="#3b82f6" emissiveIntensity={0.5} />
        </RoundedBox>
    )
}

const SceneContent = ({ onComplete }: { onComplete: () => void }) => {
  const scroll = useScroll();
  const { camera } = useThree();
  const [finished, setFinished] = useState(false);

  useFrame(() => {
    const offset = scroll.offset; // 0 to 1

    // Camera movement logic
    // Start: isometric-ish view, slightly lower Y to match lowered laptop
    const startPos = new THREE.Vector3(25, 12, 25);
    
    // Target position: Zoomed into screen
    // Since group is at y=-3, and screen center is roughly y=5.5 (8.5 - 3), 
    // we aim the camera there.
    const endPos = new THREE.Vector3(0, 5.5, -1); 

    camera.position.lerpVectors(startPos, endPos, offset);
    
    // LookAt logic
    // Start: Looking at laptop base center (which is now lower)
    const startLook = new THREE.Vector3(0, -3, 0);
    
    // End: Looking at screen center
    // Screen is at [0, 8.5, -7.5] relative to group [0, -3, 0]
    // Global Screen Y approx = 5.5
    const endLook = new THREE.Vector3(0, 5.5, -7.5);
    
    const currentLook = new THREE.Vector3().lerpVectors(startLook, endLook, offset);
    camera.lookAt(currentLook);

    if (offset > 0.96 && !finished) {
      setFinished(true);
      onComplete();
    }
  });

  return (
    <>
      {/* Lighting matching BST Brand (Blue/Orange) */}
      <ambientLight intensity={0.5} />
      
      {/* Warm Orange light from left */}
      <pointLight position={[-25, 10, 15]} intensity={3} color="#f97316" distance={100} />
      {/* Cool Blue light from right */}
      <pointLight position={[25, 10, 15]} intensity={3} color="#3b82f6" distance={100} />
      {/* Rim light from back - brighter for outline */}
      <pointLight position={[0, 20, -25]} intensity={2} color="#60a5fa" distance={100} />

      <StylizedLaptop />
      <Mouse />
      <DeskLamp />
      <Pen />
      <FloatingCube />

      {/* Floor Reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.5, 0]}>
         <planeGeometry args={[200, 200]} />
         <meshStandardMaterial color="#020617" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
         <mesh key={i} position={[
             (Math.random() - 0.5) * 60,
             (Math.random() - 0.5) * 40,
             (Math.random() - 0.5) * 60
         ]}>
             <sphereGeometry args={[0.05 + Math.random() * 0.15]} />
             <meshBasicMaterial color={Math.random() > 0.5 ? "#f97316" : "#3b82f6"} toneMapped={false} />
         </mesh>
      ))}
      
      {/* Scroll Hint */}
      <Html position={[0, -6, 12]} center style={{ opacity: 1 - scroll.offset * 3, pointerEvents: 'none' }}>
        <div className="flex flex-col items-center text-white animate-bounce">
            <p className="text-xs font-bold mb-2 uppercase tracking-[0.3em] text-blue-400 text-shadow-lg font-sans">Scroll to Enter</p>
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </Html>
    </>
  );
};

interface LaptopIntroProps {
  onIntroComplete: () => void;
}

const LaptopIntro: React.FC<LaptopIntroProps> = ({ onIntroComplete }) => {
  return (
    // Background gradient: Deep Blue to Dark Slate
    <div className="h-screen w-full bg-gradient-to-br from-[#020617] via-[#172554] to-[#020617] relative">
      <Canvas shadows camera={{ position: [25, 12, 25], fov: 32 }} dpr={[1, 2]}>
        <ScrollControls pages={2.5} damping={0.4}>
          <SceneContent onComplete={onIntroComplete} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default LaptopIntro;