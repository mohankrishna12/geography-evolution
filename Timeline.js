import { html } from 'htm/react';

export default function Timeline({ eras, currentEraIndex, onSelectEra }) {
    return html`
    <div class="absolute bottom-8 left-0 w-full z-20 px-8">
      <div class="max-w-4xl mx-auto bg-black/50 backdrop-blur-md rounded-full p-4 border border-white/10">
        <div class="flex justify-between items-center relative">
          <!-- Connecting Line -->
          <div class="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -z-10"></div>
          
          ${eras.map((era, index) => {
        const isActive = index === currentEraIndex;
        return html`
              <button 
                key=${era.id}
                onClick=${() => onSelectEra(index)}
                class="group relative flex flex-col items-center focus:outline-none transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}"
              >
                <!-- Dot -->
                <div class="w-4 h-4 rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-geo-blue border-geo-blue shadow-[0_0_15px_rgba(56,189,248,0.8)]' : 'bg-black border-white/50 group-hover:border-white'}"></div>
                
                <!-- Label -->
                <div class="absolute top-6 whitespace-nowrap text-xs font-semibold tracking-wider transition-colors duration-300 ${isActive ? 'text-geo-blue' : 'text-gray-400 group-hover:text-white'}">
                  ${era.mya > 0 ? `${era.mya} MYA` : 'Present'}
                </div>
              </button>
            `;
    })}
        </div>
      </div>
    </div>
  `;
}
