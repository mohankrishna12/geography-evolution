import { html } from 'htm/react';
import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

export default function Globe({ era }) {
    const meshRef = useRef();

    // Load texture
    // Note: useLoader caches results, so switching eras is efficient after first load
    const texture = useLoader(TextureLoader, era.texture);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05; // Slow rotation
        }
    });

    return html`
    <mesh ref=${meshRef} rotation=${[0, 0, 0]}>
      <sphereGeometry args=${[2, 64, 64]} />
      <meshStandardMaterial 
        map=${texture} 
        roughness=${0.7}
        metalness=${0.1}
      />
    </mesh>
    <mesh scale=${[2.02, 2.02, 2.02]}>
        <sphereGeometry args=${[2.02, 64, 64]} />
        <meshStandardMaterial
            color="#38bdf8"
            transparent=${true}
            opacity=${0.1}
            side=${THREE.BackSide}
        />
    </mesh>
  `;
}
