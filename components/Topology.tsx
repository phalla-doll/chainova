import { Map as MapIcon, ArrowUpRight } from 'lucide-react';

export default function Topology() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-gray-300">
      <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-300 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8">
          <MapIcon className="w-5 h-5 text-[#0000ff]" />
          <h2 className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff]">Topology</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
          Global Node<br/>Synchronization
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Map your entire supply chain into a single, cohesive neural grid. Monitor shipments, warehouses, and fleets in absolute real-time across 10,000+ active logistics nodes.
        </p>
        <button className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff] flex items-center gap-2 hover:text-blue-800 transition-colors w-max">
          Explore the Map <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div className="w-full lg:w-2/3 p-0 relative bg-gray-50 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[400px]">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Animated Network SVG */}
        <svg className="relative z-10 w-full h-full min-h-[300px] max-h-[500px]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Glow filter for nodes */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Paths for data flow */}
            <path id="route1" d="M200 150 L400 100 L600 180" fill="none" />
            <path id="route2" d="M600 180 L500 280 L300 250 L200 150" fill="none" />
            <path id="route3" d="M400 100 L500 280" fill="none" />
            <path id="route4" d="M200 150 L300 250" fill="none" />
          </defs>

          {/* Perspective Grid Lines */}
          <g stroke="#0000ff" strokeWidth="1" opacity="0.15">
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="260" x2="800" y2="260" />
            <line x1="0" y1="340" x2="800" y2="340" />
            <line x1="400" y1="150" x2="400" y2="400" />
            <line x1="400" y1="150" x2="200" y2="400" />
            <line x1="400" y1="150" x2="600" y2="400" />
            <line x1="400" y1="150" x2="0" y2="400" />
            <line x1="400" y1="150" x2="800" y2="400" />
          </g>
          
          {/* Static Connections */}
          <g fill="none" stroke="#0000ff" strokeWidth="1.5" className="opacity-30">
            <use href="#route1" strokeDasharray="4 4" />
            <use href="#route2" strokeDasharray="4 4" />
            <use href="#route3" strokeDasharray="4 4" />
            <use href="#route4" strokeDasharray="4 4" />
            <path d="M600 180 L700 120" strokeDasharray="4 4" />
            <path d="M200 150 L100 200" strokeDasharray="4 4" />
          </g>

          {/* Animated Data Packets */}
          <g fill="#0000ff">
            <circle r="3" filter="url(#glow)">
              <animateMotion dur="4s" repeatCount="indefinite">
                <mpath href="#route1" />
              </animateMotion>
            </circle>
            <circle r="3" filter="url(#glow)">
              <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
                <mpath href="#route2" />
              </animateMotion>
            </circle>
            <circle r="3" filter="url(#glow)">
              <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s">
                <mpath href="#route3" />
              </animateMotion>
            </circle>
            <circle r="3" filter="url(#glow)">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.5s">
                <mpath href="#route4" />
              </animateMotion>
            </circle>
          </g>

          {/* Nodes */}
          <g fill="#0000ff">
            {/* Node 1 */}
            <circle cx="200" cy="150" r="6" filter="url(#glow)" />
            <circle cx="200" cy="150" r="6" fill="none" stroke="#0000ff" strokeWidth="2">
              <animate attributeName="r" values="6; 20; 6" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            
            {/* Node 2 */}
            <circle cx="400" cy="100" r="8" filter="url(#glow)" />
            <circle cx="400" cy="100" r="8" fill="none" stroke="#0000ff" strokeWidth="2">
              <animate attributeName="r" values="8; 25; 8" dur="4s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="4s" repeatCount="indefinite" begin="1s" />
            </circle>
            
            {/* Node 3 */}
            <circle cx="600" cy="180" r="5" filter="url(#glow)" />
            <circle cx="600" cy="180" r="5" fill="none" stroke="#0000ff" strokeWidth="2">
              <animate attributeName="r" values="5; 18; 5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            
            {/* Node 4 */}
            <circle cx="500" cy="280" r="7" filter="url(#glow)" />
            <circle cx="500" cy="280" r="7" fill="none" stroke="#0000ff" strokeWidth="2">
              <animate attributeName="r" values="7; 22; 7" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            
            {/* Node 5 */}
            <circle cx="300" cy="250" r="5" filter="url(#glow)" />
            <circle cx="300" cy="250" r="5" fill="none" stroke="#0000ff" strokeWidth="2">
              <animate attributeName="r" values="5; 15; 5" dur="3s" repeatCount="indefinite" begin="2s" />
              <animate attributeName="opacity" values="0.8; 0; 0.8" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>

            {/* Peripheral Nodes */}
            <circle cx="700" cy="120" r="4" opacity="0.6" />
            <circle cx="100" cy="200" r="4" opacity="0.6" />
          </g>
        </svg>
      </div>
    </section>
  );
}
