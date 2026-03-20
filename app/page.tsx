import { ArrowUpRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#e5e5e5] p-4 md:p-12 flex flex-col items-center justify-center font-sans text-gray-900">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12 text-gray-900">Design by me</h1>

      <div className="w-full max-w-[1300px] bg-white border border-gray-300 shadow-2xl rounded-sm overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row border-b border-gray-300">
          <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex items-center justify-center md:justify-start">
            <span className="font-bold tracking-widest uppercase text-sm">Chainova</span>
          </div>
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex items-center justify-center gap-8 md:gap-16">
            <a href="#" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
          </div>
          <div className="w-full md:w-1/4 p-6 flex items-center justify-center md:justify-end">
            <button className="bg-[#0000ff] text-white px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors">
              Log In <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 border-r border-gray-300 flex flex-col">
            {/* Hatch Top */}
            <div className="flex border-b border-gray-300 h-24 shrink-0">
              <div className="w-1/2 border-r border-gray-300 bg-hatch"></div>
              <div className="w-1/2 bg-hatch"></div>
            </div>

            {/* Hero Text */}
            <div className="flex-grow p-8 md:p-12 border-b border-gray-300 flex flex-col justify-center">
              <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-sm text-xs font-medium text-gray-600 mb-8 self-start">
                Trusted by 500+ global enterprises
              </div>
              <h2 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
                Turn supply chains<br />into predictive<br />machines
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-md mb-10 leading-relaxed">
                Use AI to forecast demand, eliminate inefficiencies, and make every supply-chain decision faster, smarter, and more profitable.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="bg-gray-100 text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
                  Request a Demo
                </button>
                <button className="bg-[#0000ff] text-white px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors w-full sm:w-auto">
                  Start 14 Days Free Trial <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Logos */}
            <div className="flex h-24 shrink-0 overflow-x-auto">
              <div className="w-1/4 min-w-[100px] border-r border-gray-300 flex items-center justify-center p-4">
                <span className="text-xl font-bold text-gray-400">Google</span>
              </div>
              <div className="w-1/4 min-w-[120px] border-r border-gray-300 flex items-center justify-center p-4 gap-2">
                <div className="grid grid-cols-2 gap-[2px]">
                  <div className="w-2 h-2 bg-gray-400"></div><div className="w-2 h-2 bg-gray-400"></div>
                  <div className="w-2 h-2 bg-gray-400"></div><div className="w-2 h-2 bg-gray-400"></div>
                </div>
                <span className="text-lg font-semibold text-gray-400">Microsoft</span>
              </div>
              <div className="w-1/4 min-w-[100px] border-r border-gray-300 flex items-center justify-center p-4">
                <span className="text-xl font-bold text-gray-400 tracking-tighter">stripe</span>
              </div>
              <div className="w-1/4 min-w-[100px] flex items-center justify-center p-4">
                <span className="text-xl font-bold text-gray-400">amazon</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Stats */}
            <div className="flex border-b border-gray-300 shrink-0">
              <div className="w-1/3 border-r border-gray-300 p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-medium mb-2">50B+</div>
                <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Data points processed</div>
              </div>
              <div className="w-1/3 border-r border-gray-300 p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-medium mb-2">70+</div>
                <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">AI models deployed</div>
              </div>
              <div className="w-1/3 p-6 md:p-8">
                <div className="text-2xl md:text-3xl font-medium mb-2">40+</div>
                <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Predictive models</div>
              </div>
            </div>

            {/* Image Area */}
            <div className="flex-grow border-b border-gray-300 p-8 md:p-16 flex items-center justify-center bg-white min-h-[400px]">
              <div className="relative w-full max-w-[400px] aspect-square">
                {/* Custom SVG to replicate the pixelated isometric cube aesthetic */}
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#0000ff]">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.6"/>
                    </pattern>
                  </defs>
                  
                  {/* Main isometric cube faces filled with dot pattern */}
                  <path d="M100 30 L160 65 L100 100 L40 65 Z" fill="url(#dots)" />
                  <path d="M40 65 L100 100 L100 170 L40 135 Z" fill="url(#dots)" opacity="0.85"/>
                  <path d="M100 100 L160 65 L160 135 L100 170 Z" fill="url(#dots)" opacity="0.7"/>

                  {/* Floating blocks - Top */}
                  <path d="M100 5 L112 12 L100 19 L88 12 Z" fill="currentColor" />
                  <path d="M88 12 L100 19 L100 33 L88 26 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M100 19 L112 12 L112 26 L100 33 Z" fill="currentColor" opacity="0.7"/>

                  {/* Floating blocks - Right */}
                  <path d="M175 85 L187 92 L175 99 L163 92 Z" fill="currentColor" />
                  <path d="M163 92 L175 99 L175 113 L163 106 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M175 99 L187 92 L187 106 L175 113 Z" fill="currentColor" opacity="0.7"/>

                  {/* Floating blocks - Left */}
                  <path d="M25 105 L37 112 L25 119 L13 112 Z" fill="currentColor" />
                  <path d="M13 112 L25 119 L25 133 L13 126 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M25 119 L37 112 L37 126 L25 133 Z" fill="currentColor" opacity="0.7"/>
                  
                  {/* Floating blocks - Bottom Right */}
                  <path d="M140 150 L152 157 L140 164 L128 157 Z" fill="currentColor" />
                  <path d="M128 157 L140 164 L140 178 L128 171 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M140 164 L152 157 L152 171 L140 178 Z" fill="currentColor" opacity="0.7"/>
                  
                  {/* Floating blocks - Bottom Left */}
                  <path d="M60 140 L72 147 L60 154 L48 147 Z" fill="currentColor" />
                  <path d="M48 147 L60 154 L60 168 L48 161 Z" fill="currentColor" opacity="0.85"/>
                  <path d="M60 154 L72 147 L72 161 L60 168 Z" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
            </div>

            {/* Hatch Bottom */}
            <div className="h-24 bg-hatch shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
