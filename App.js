import { html } from 'htm/react';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from './components/Globe.js';
import Timeline from './components/Timeline.js';
import InfoPanel from './components/InfoPanel.js';
import { eras } from './data/eras.js';

export default function App() {
  const [currentEraIndex, setCurrentEraIndex] = useState(0);
  const currentEra = eras[currentEraIndex];

  return html`
    <div class="relative w-full h-full bg-black overflow-hidden">
      <!-- Header -->
      <div class="absolute top-0 left-0 w-full z-10 p-6 pointer-events-none flex justify-between items-start">
        <div>
          <h1 class="text-4xl font-bold text-white tracking-tighter drop-shadow-lg">
            GEO<span class="text-geo-blue">EVO</span>
          </h1>
          <p class="text-gray-400 text-sm mt-1 tracking-wide">Interactive Geological History</p>
        </div>
        
        <div class="pointer-events-auto">
            <a href="https://github.com/google-deepmind" target="_blank" class="text-white/50 hover:text-white text-xs transition-colors">
                Built with React Three Fiber
            </a>
        </div>
      </div>

      <!-- Info Panel -->
      <${InfoPanel} era=${currentEra} />

      <!-- 3D Scene -->
      <div class="w-full h-full cursor-move">
        <${Canvas} camera=${{ position: [0, 0, 6.5], fov: 45 }}>
          <ambientLight intensity=${0.8} />
          <pointLight position=${[15, 15, 15]} intensity=${1.5} />
          <pointLight position=${[-10, -10, -5]} intensity=${0.5} color="#38bdf8" />
          
          <${Suspense} fallback=${null}>
            <${Globe} era=${currentEra} />
            <${Stars} radius=${100} depth=${50} count=${7000} factor=${4} saturation=${0} fade speed=${0.5} />
          </${Suspense}>
          
          <${OrbitControls} 
            enableZoom=${true} 
            enablePan=${false} 
            minDistance=${3.5} 
            maxDistance=${12} 
            autoRotate=${true}
            autoRotateSpeed=${0.5}
          />
        </${Canvas}>
      </div>

      <!-- Timeline -->
      <${Timeline} 
        eras=${eras} 
        currentEraIndex=${currentEraIndex} 
        onSelectEra=${setCurrentEraIndex} 
      />
    </div>
  `;
}
