import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const time = clock.getElapsedTime();
      cameraRef.current.position.y = Math.sin(time * 0.5) * 0.3;
      cameraRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} />;
}