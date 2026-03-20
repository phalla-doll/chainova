import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const hatchStyle = { 
    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, #e5e7eb 4px, #e5e7eb 5px)' 
  };

  return (
    <section className="flex flex-col border-b border-gray-300 min-h-[calc(100vh-73px)]">
      {/* Top Row: Hatch & Stats */}
      <div className="flex flex-col lg:flex-row border-b border-gray-300 shrink-0">
        {/* Hatch Top */}
        <div className="w-full lg:w-1/2 flex border-b lg:border-b-0 lg:border-r border-gray-300 h-24 md:h-32 lg:h-auto">
          <div className="w-1/2 border-r border-gray-300" style={hatchStyle}></div>
          <div className="w-1/2" style={hatchStyle}></div>
        </div>
        
        {/* Stats */}
        <div className="w-full lg:w-1/2 flex">
          <div className="w-1/3 border-r border-gray-300 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-xl md:text-3xl lg:text-4xl font-medium mb-1 md:mb-2 text-[#0000ff]">50B+</div>
            <div className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Data points</div>
          </div>
          <div className="w-1/3 border-r border-gray-300 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-xl md:text-3xl lg:text-4xl font-medium mb-1 md:mb-2 text-[#0000ff]">70+</div>
            <div className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">AI models</div>
          </div>
          <div className="w-1/3 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="text-xl md:text-3xl lg:text-4xl font-medium mb-1 md:mb-2 text-[#0000ff]">99%</div>
            <div className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Uptime SLA</div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Hero Text & Image */}
      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 border-r border-gray-300 flex flex-col">
          {/* Hero Text */}
          <div className="flex-grow p-6 md:p-12 lg:p-16 border-b border-gray-300 flex flex-col justify-center">
            <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-sm text-[10px] md:text-xs font-medium text-gray-600 mb-6 md:mb-8 self-start uppercase tracking-wider">
              Trusted by 500+ global enterprises
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
              Turn supply chains<br />into predictive<br />machines
            </h1>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-md mb-8 md:mb-10 leading-relaxed">
              Use AI to forecast demand, eliminate inefficiencies, and make every supply-chain decision faster, smarter, and more profitable.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="bg-gray-100 text-gray-900 px-6 py-3.5 text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors text-center uppercase tracking-wider">
                Request a Demo
              </button>
              <button className="bg-[#0000ff] text-white px-6 py-3.5 text-xs md:text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors uppercase tracking-wider">
                Start 14 Days Free Trial <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Logos */}
          <div className="flex h-16 md:h-24 shrink-0 overflow-x-auto hide-scrollbar">
            <div className="w-1/4 min-w-[100px] border-r border-gray-300 flex items-center justify-center p-4 hover:bg-gray-50 transition-colors cursor-default">
              <span className="text-lg md:text-xl font-bold text-gray-400">Google</span>
            </div>
            <div className="w-1/4 min-w-[120px] border-r border-gray-300 flex items-center justify-center p-4 gap-2 hover:bg-gray-50 transition-colors cursor-default">
              <div className="grid grid-cols-2 gap-[2px]">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400"></div><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400"></div><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400"></div>
              </div>
              <span className="text-base md:text-lg font-semibold text-gray-400">Microsoft</span>
            </div>
            <div className="w-1/4 min-w-[100px] border-r border-gray-300 flex items-center justify-center p-4 hover:bg-gray-50 transition-colors cursor-default">
              <span className="text-lg md:text-xl font-bold text-gray-400 tracking-tighter">stripe</span>
            </div>
            <div className="w-1/4 min-w-[100px] flex items-center justify-center p-4 hover:bg-gray-50 transition-colors cursor-default">
              <span className="text-lg md:text-xl font-bold text-gray-400">amazon</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Image Area */}
          <div className="flex-grow border-b border-gray-300 p-8 md:p-16 flex items-center justify-center bg-gray-50 min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative w-full max-w-[400px] aspect-square transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#0000ff]">
                <defs>
                  <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                    <animate attributeName="y" values="0;4" dur="2s" repeatCount="indefinite" />
                    <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.5"/>
                  </pattern>
                  <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Data Connections */}
                <g stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4">
                  <path d="M100 65 L100 33">
                    <animate attributeName="stroke-dashoffset" values="6;0" dur="1s" repeatCount="indefinite" />
                  </path>
                  <path d="M160 100 L163 106">
                    <animate attributeName="stroke-dashoffset" values="6;0" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  <path d="M40 100 L37 126">
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="1.2s" repeatCount="indefinite" />
                  </path>
                  <path d="M130 152 L140 150">
                    <animate attributeName="stroke-dashoffset" values="6;0" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M70 152 L60 140">
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="1.8s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Main Cube */}
                <g>
                  <path d="M100 30 L160 65 L100 100 L40 65 Z" fill="url(#dots)" />
                  <path d="M40 65 L100 100 L100 170 L40 135 Z" fill="url(#dots)" opacity="0.85"/>
                  <path d="M100 100 L160 65 L160 135 L100 170 Z" fill="url(#dots)" opacity="0.7"/>
                  
                  {/* Scanning Plane */}
                  <path d="M100 30 L160 65 L100 100 L40 65 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" filter="url(#hero-glow)">
                    <animate attributeName="transform" type="translate" values="0,0; 0,70; 0,0" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0; 1; 1; 0; 0" keyTimes="0; 0.1; 0.9; 1; 1" dur="5s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* Floating Cubes */}
                {/* Top Cube */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="4s" repeatCount="indefinite" />
                  <path d="M100 5 L112 12 L100 19 L88 12 Z" fill="currentColor" filter="url(#hero-glow)" opacity="0.9" />
                  <path d="M88 12 L100 19 L100 33 L88 26 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M100 19 L112 12 L112 26 L100 33 Z" fill="currentColor" opacity="0.7"/>
                </g>
                
                {/* Right Cube */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="3.5s" begin="-1s" repeatCount="indefinite" />
                  <path d="M175 85 L187 92 L175 99 L163 92 Z" fill="currentColor" filter="url(#hero-glow)" opacity="0.9" />
                  <path d="M163 92 L175 99 L175 113 L163 106 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M175 99 L187 92 L187 106 L175 113 Z" fill="currentColor" opacity="0.7"/>
                </g>

                {/* Left Cube */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4.5s" begin="-2s" repeatCount="indefinite" />
                  <path d="M25 105 L37 112 L25 119 L13 112 Z" fill="currentColor" filter="url(#hero-glow)" opacity="0.9" />
                  <path d="M13 112 L25 119 L25 133 L13 126 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M25 119 L37 112 L37 126 L25 133 Z" fill="currentColor" opacity="0.7"/>
                </g>

                {/* Bottom Right Cube */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="3s" begin="-0.5s" repeatCount="indefinite" />
                  <path d="M140 150 L152 157 L140 164 L128 157 Z" fill="currentColor" filter="url(#hero-glow)" opacity="0.9" />
                  <path d="M128 157 L140 164 L140 178 L128 171 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M140 164 L152 157 L152 171 L140 178 Z" fill="currentColor" opacity="0.7"/>
                </g>

                {/* Bottom Left Cube */}
                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0; 0,-4; 0,0" dur="5s" begin="-3s" repeatCount="indefinite" />
                  <path d="M60 140 L72 147 L60 154 L48 147 Z" fill="currentColor" filter="url(#hero-glow)" opacity="0.9" />
                  <path d="M48 147 L60 154 L60 168 L48 161 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M60 154 L72 147 L72 161 L60 168 Z" fill="currentColor" opacity="0.7"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Hatch Bottom */}
          <div className="h-16 md:h-24 shrink-0" style={hatchStyle}></div>
        </div>
      </div>
    </section>
  );
}
