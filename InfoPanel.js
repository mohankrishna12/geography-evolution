import { html } from 'htm/react';

export default function InfoPanel({ era }) {
    return html`
    <div class="absolute top-24 left-8 z-20 max-w-sm">
      <div class="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        <div class="flex items-center space-x-2 mb-2">
          <div class="h-px w-8 bg-geo-blue"></div>
          <span class="text-geo-blue text-xs font-bold tracking-widest uppercase">Geological Era</span>
        </div>
        
        <h2 class="text-3xl font-bold text-white mb-1">${era.name}</h2>
        <p class="text-geo-gold font-mono text-sm mb-4">${era.year}</p>
        
        <p class="text-gray-300 leading-relaxed text-sm border-l-2 border-white/10 pl-4">
          ${era.description}
        </p>
      </div>
    </div>
  `;
}
