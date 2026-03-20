import { ArrowUpRight, Activity, Globe, AlertTriangle, Database, Cpu, Network, Terminal, Map as MapIcon, CheckSquare, MessageSquare, HelpCircle, Plus } from 'lucide-react';

export default function Page() {
  // Custom hatch pattern for the brutalist/technical aesthetic
  const hatchStyle = { 
    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, #e5e7eb 4px, #e5e7eb 5px)' 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-[#0000ff] selection:text-white">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white flex flex-col md:flex-row border-b border-gray-300 shrink-0">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-4 md:p-6 flex items-center justify-center md:justify-start">
          <span className="font-bold tracking-widest uppercase text-sm">Chainova</span>
        </div>
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 p-4 md:p-6 flex items-center justify-center gap-6 md:gap-12 lg:gap-16 overflow-x-auto">
          <a href="#features" className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors whitespace-nowrap">Features</a>
          <a href="#engine" className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors whitespace-nowrap">Engine</a>
          <a href="#pricing" className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors whitespace-nowrap">Pricing</a>
        </div>
        <div className="w-full md:w-1/4 p-4 md:p-6 flex items-center justify-center md:justify-end">
          <button className="bg-[#0000ff] text-white px-6 py-2.5 text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors w-full md:w-auto justify-center">
            Log In <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row border-b border-gray-300 min-h-[calc(100vh-73px)]">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 border-r border-gray-300 flex flex-col">
          {/* Hatch Top */}
          <div className="flex border-b border-gray-300 h-24 md:h-32 lg:h-36 shrink-0">
            <div className="w-1/2 border-r border-gray-300" style={hatchStyle}></div>
            <div className="w-1/2" style={hatchStyle}></div>
          </div>

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
          {/* Stats */}
          <div className="flex border-b border-gray-300 shrink-0">
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

          {/* Image Area */}
          <div className="flex-grow border-b border-gray-300 p-8 md:p-16 flex items-center justify-center bg-gray-50 min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative w-full max-w-[400px] aspect-square transform group-hover:scale-105 transition-transform duration-700 ease-out">
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#0000ff]">
                <defs>
                  <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" opacity="0.6"/>
                  </pattern>
                </defs>
                <path d="M100 30 L160 65 L100 100 L40 65 Z" fill="url(#dots)" />
                <path d="M40 65 L100 100 L100 170 L40 135 Z" fill="url(#dots)" opacity="0.85"/>
                <path d="M100 100 L160 65 L160 135 L100 170 Z" fill="url(#dots)" opacity="0.7"/>
                <path d="M100 5 L112 12 L100 19 L88 12 Z" fill="currentColor" />
                <path d="M88 12 L100 19 L100 33 L88 26 Z" fill="currentColor" opacity="0.85"/>
                <path d="M100 19 L112 12 L112 26 L100 33 Z" fill="currentColor" opacity="0.7"/>
                <path d="M175 85 L187 92 L175 99 L163 92 Z" fill="currentColor" />
                <path d="M163 92 L175 99 L175 113 L163 106 Z" fill="currentColor" opacity="0.85"/>
                <path d="M175 99 L187 92 L187 106 L175 113 Z" fill="currentColor" opacity="0.7"/>
                <path d="M25 105 L37 112 L25 119 L13 112 Z" fill="currentColor" />
                <path d="M13 112 L25 119 L25 133 L13 126 Z" fill="currentColor" opacity="0.85"/>
                <path d="M25 119 L37 112 L37 126 L25 133 Z" fill="currentColor" opacity="0.7"/>
                <path d="M140 150 L152 157 L140 164 L128 157 Z" fill="currentColor" />
                <path d="M128 157 L140 164 L140 178 L128 171 Z" fill="currentColor" opacity="0.85"/>
                <path d="M140 164 L152 157 L152 171 L140 178 Z" fill="currentColor" opacity="0.7"/>
                <path d="M60 140 L72 147 L60 154 L48 147 Z" fill="currentColor" />
                <path d="M48 147 L60 154 L60 168 L48 161 Z" fill="currentColor" opacity="0.85"/>
                <path d="M60 154 L72 147 L72 161 L60 168 Z" fill="currentColor" opacity="0.7"/>
              </svg>
            </div>
          </div>

          {/* Hatch Bottom */}
          <div className="h-16 md:h-24 shrink-0" style={hatchStyle}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col border-b border-gray-300">
        <div className="flex border-b border-gray-300">
          <div className="w-full p-6 md:p-8 flex items-center">
            <h2 className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff]">Core Capabilities</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Feature 1 */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-12 transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="text-2xl font-mono text-gray-300 group-hover:text-[#0000ff] transition-colors">01</div>
              <Activity className="w-6 h-6 text-gray-400 group-hover:text-[#0000ff] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">Demand Forecasting</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Predict stock requirements with 99.9% accuracy using historical data, market trends, and real-time consumer behavior.</p>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-12 transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="text-2xl font-mono text-gray-300 group-hover:text-[#0000ff] transition-colors">02</div>
              <Globe className="w-6 h-6 text-gray-400 group-hover:text-[#0000ff] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">Dynamic Routing</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Automatically reroute global shipments in real-time based on weather patterns, port congestion, and geopolitical events.</p>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-12 transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="text-2xl font-mono text-gray-300 group-hover:text-[#0000ff] transition-colors">03</div>
              <AlertTriangle className="w-6 h-6 text-gray-400 group-hover:text-[#0000ff] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">Supplier Risk</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Identify vulnerabilities in your multi-tier supply network before they impact your production line or bottom line.</p>
          </div>
        </div>
      </section>

      {/* Architecture / Engine Section */}
      <section id="engine" className="flex flex-col lg:flex-row border-b border-gray-300">
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 flex flex-col">
          <div className="p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center">
            <h2 className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 mb-8">The Engine</h2>
            <h3 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
              Continuous<br/>Optimization<br/>Loop
            </h3>
            <p className="text-gray-500 text-sm md:text-base max-w-md mb-12 leading-relaxed">
              Our proprietary neural networks continuously ingest data from IoT sensors, ERP systems, and external APIs to refine predictive models in real-time.
            </p>
            <ul className="space-y-0">
              <li className="flex items-center gap-6 border-t border-gray-300 py-5 group">
                <Database className="w-5 h-5 text-gray-400 group-hover:text-[#0000ff] transition-colors shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Phase 1 / Ingest</span>
                  <span className="text-sm font-medium">10M+ data points processed per second</span>
                </div>
              </li>
              <li className="flex items-center gap-6 border-t border-gray-300 py-5 group">
                <Cpu className="w-5 h-5 text-gray-400 group-hover:text-[#0000ff] transition-colors shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Phase 2 / Analyze</span>
                  <span className="text-sm font-medium">Sub-millisecond anomaly detection</span>
                </div>
              </li>
              <li className="flex items-center gap-6 border-t border-gray-300 py-5 group">
                <Network className="w-5 h-5 text-gray-400 group-hover:text-[#0000ff] transition-colors shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Phase 3 / Act</span>
                  <span className="text-sm font-medium">Automated procurement & routing decisions</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col bg-gray-50">
          {/* Abstract visualization of the engine */}
          <div className="flex-grow p-8 md:p-16 flex items-center justify-center min-h-[400px]">
             <div className="w-full max-w-md aspect-video border border-gray-300 bg-white relative overflow-hidden flex flex-col shadow-xl">
               <div className="h-8 border-b border-gray-300 flex items-center px-4 gap-2 bg-gray-50 shrink-0">
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="ml-auto text-[9px] font-mono text-gray-400 uppercase tracking-widest">Live Feed</div>
               </div>
               <div className="flex-grow p-4 flex items-end gap-1.5 relative z-10">
                 {/* Animated Bar chart */}
                 {[40, 70, 45, 90, 65, 85, 120, 95, 110, 80, 130, 100, 60, 85, 115].map((h, i) => (
                   <div 
                     key={i} 
                     className="flex-1 bg-[#0000ff] opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out" 
                     style={{ height: `${(h/130)*100}%`, animationDelay: `${i * 0.1}s` }}
                   ></div>
                 ))}
               </div>
               {/* Overlay grid */}
               <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* Topology / Global Node Network Section */}
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
          
          {/* Pulsing Nodes SVG */}
          <svg className="relative z-10 w-full h-full min-h-[300px] max-h-[500px]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
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
            
            {/* Connections */}
            <path d="M200 150 L400 100 L600 180 L500 280 L300 250 Z" fill="none" stroke="#0000ff" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
            <path d="M400 100 L500 280" fill="none" stroke="#0000ff" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
            <path d="M200 150 L300 250" fill="none" stroke="#0000ff" strokeWidth="2" strokeDasharray="4 4" className="opacity-60" />
            <path d="M600 180 L700 120" fill="none" stroke="#0000ff" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
            <path d="M200 150 L100 200" fill="none" stroke="#0000ff" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />

            {/* Nodes */}
            <g fill="#0000ff">
              <circle cx="200" cy="150" r="6" />
              <circle cx="200" cy="150" r="14" className="animate-ping opacity-50" />
              
              <circle cx="400" cy="100" r="8" />
              <circle cx="400" cy="100" r="20" className="animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
              
              <circle cx="600" cy="180" r="5" />
              <circle cx="600" cy="180" r="12" className="animate-ping opacity-50" style={{ animationDelay: '1s' }} />
              
              <circle cx="500" cy="280" r="7" />
              <circle cx="500" cy="280" r="16" className="animate-ping opacity-50" style={{ animationDelay: '0.2s' }} />
              
              <circle cx="300" cy="250" r="5" />
              <circle cx="300" cy="250" r="12" className="animate-ping opacity-50" style={{ animationDelay: '0.8s' }} />

              <circle cx="700" cy="120" r="4" opacity="0.6" />
              <circle cx="100" cy="200" r="4" opacity="0.6" />
            </g>
          </svg>
        </div>
      </section>

      {/* Live Telemetry / Terminal Section */}
      <section className="border-b border-gray-300 bg-[#0000ff] text-white flex flex-col relative overflow-hidden">
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
        
        <div className="border-b border-blue-800 p-4 flex justify-between items-center px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 opacity-70" />
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-70">System_Logs // Live_Telemetry</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 hidden sm:inline">Status: Active</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="p-6 md:p-12 lg:p-16 font-mono text-xs md:text-sm leading-loose opacity-90 overflow-x-auto relative z-10 min-h-[300px]">
          <p className="text-blue-300 mb-4">CHAINOVA_OS v4.2.1 [AI Core Online]</p>
          <p>{`> INITIATING ROUTE OPTIMIZATION PROTOCOL... [OK]`}</p>
          <p>{`> ANALYZING 45,291 ACTIVE SHIPMENTS... [OK]`}</p>
          <p>{`> CROSS-REFERENCING GLOBAL WEATHER PATTERNS... [OK]`}</p>
          <p className="text-yellow-300 mt-4">{`> WARNING: SEVERE WEATHER ANOMALY DETECTED IN SECTOR 7G (PACIFIC_NORTH).`}</p>
          <p className="text-yellow-300">{`> IMPACT PROBABILITY: 87.4%. ESTIMATED DELAY: 48 HOURS.`}</p>
          <p className="mt-4">{`> CALCULATING ALTERNATIVE ROUTES...`}</p>
          <p>{`> REROUTING FLEET ALPHA VIA SECTOR 4B.`}</p>
          <p className="text-green-300">{`> SUCCESS: ROUTE UPDATED. ESTIMATED SAVINGS: $142,000. DELAY MITIGATED.`}</p>
          <p className="mt-4">{`> AWAITING NEXT INSTRUCTION...`}</p>
          <p className="animate-pulse mt-2">_</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col lg:flex-row border-b border-gray-300">
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-300 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#0000ff 1px, transparent 1px), linear-gradient(90deg, #0000ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-5 h-5 text-[#0000ff]" />
              <h2 className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff]">Verified Outcomes</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
              Enterprise<br/>Telemetry
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Real-world performance metrics from active deployments across global supply networks.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-gray-300 p-8 md:p-12 flex flex-col justify-between hover:bg-gray-50 transition-colors">
            <div>
              <div className="text-[#0000ff] font-mono text-4xl md:text-5xl mb-6 tracking-tight">-18%</div>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed mb-8">"Chainova's predictive routing cut our global transit delays by 18% in the first quarter alone. The ROI was immediate and measurable."</p>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <div className="text-sm font-bold uppercase tracking-tight">Sarah Jenkins</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">VP Logistics, GlobalTech</div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-8 md:p-12 flex flex-col justify-between hover:bg-gray-50 transition-colors">
            <div>
              <div className="text-[#0000ff] font-mono text-4xl md:text-5xl mb-6 tracking-tight">99.4%</div>
              <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed mb-8">"We achieved 99.4% inventory accuracy. The continuous optimization loop completely eliminated our stockout issues across 40 warehouses."</p>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <div className="text-sm font-bold uppercase tracking-tight">Marcus Chen</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">COO, RetailPrime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col lg:flex-row border-b border-gray-300">
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-300 p-8 md:p-12 lg:p-16 flex flex-col">
          <h2 className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff] mb-8">Knowledge Base</h2>
          <h3 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight uppercase mb-12">
            System<br/>Queries
          </h3>
          <div className="flex-grow flex items-end">
            <div className="w-16 h-16 border border-gray-300 flex items-center justify-center text-gray-400">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="border-b border-gray-300 p-8 md:p-12 hover:bg-gray-50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start gap-6">
              <div className="text-[10px] font-mono text-[#0000ff] uppercase tracking-widest mt-1.5 shrink-0">Q.01</div>
              <div className="flex-grow">
                <h4 className="text-base md:text-lg font-semibold uppercase tracking-tight group-hover:text-[#0000ff] transition-colors mb-4">How long does deployment take?</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Standard cluster deployments take 14-21 days including data ingestion and initial model training. Custom network deployments vary based on infrastructure complexity and legacy system integration requirements.</p>
              </div>
              <Plus className="w-5 h-5 text-gray-300 group-hover:text-[#0000ff] transition-all duration-300 shrink-0 mt-1" />
            </div>
          </div>
          <div className="border-b border-gray-300 p-8 md:p-12 hover:bg-gray-50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start gap-6">
              <div className="text-[10px] font-mono text-[#0000ff] uppercase tracking-widest mt-1.5 shrink-0">Q.02</div>
              <div className="flex-grow">
                <h4 className="text-base md:text-lg font-semibold uppercase tracking-tight group-hover:text-[#0000ff] transition-colors mb-4">What ERP systems are supported?</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Chainova natively integrates with SAP, Oracle, Microsoft Dynamics, and provides a robust REST/GraphQL API for custom or legacy system connections. Data streams are normalized automatically upon ingestion.</p>
              </div>
              <Plus className="w-5 h-5 text-gray-300 group-hover:text-[#0000ff] transition-all duration-300 shrink-0 mt-1" />
            </div>
          </div>
          <div className="p-8 md:p-12 hover:bg-gray-50 transition-colors group cursor-pointer">
            <div className="flex justify-between items-start gap-6">
              <div className="text-[10px] font-mono text-[#0000ff] uppercase tracking-widest mt-1.5 shrink-0">Q.03</div>
              <div className="flex-grow">
                <h4 className="text-base md:text-lg font-semibold uppercase tracking-tight group-hover:text-[#0000ff] transition-colors mb-4">Is my supply chain data secure?</h4>
                <p className="text-gray-500 text-sm leading-relaxed">All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II, ISO 27001, and GDPR compliant. Dedicated single-tenant environments are available for Network tier enterprise clients.</p>
              </div>
              <Plus className="w-5 h-5 text-gray-300 group-hover:text-[#0000ff] transition-all duration-300 shrink-0 mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="flex flex-col border-b border-gray-300">
        <div className="flex border-b border-gray-300">
          <div className="w-full p-6 md:p-8 flex items-center">
            <h2 className="text-[11px] font-semibold tracking-widest uppercase text-[#0000ff]">Deployment Tiers</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Tier 1 */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Node</span>
            <div className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">$4k<span className="text-lg text-gray-400 font-normal">/mo</span></div>
            <ul className="space-y-4 text-sm text-gray-600 font-medium flex-grow mb-12">
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Up to 10M data points</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> 5 Predictive Models</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Standard Support</li>
            </ul>
            <button className="w-full border border-gray-300 py-4 text-[11px] font-semibold hover:bg-gray-100 transition-colors uppercase tracking-widest">Select Node</button>
          </div>
          
          {/* Tier 2 (Highlighted) */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 p-8 md:p-12 flex flex-col bg-gray-50 relative shadow-[inset_0_0_0_1px_#0000ff] z-10">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0000ff]"></div>
            <span className="text-[10px] font-mono text-[#0000ff] uppercase tracking-widest mb-4">Cluster</span>
            <div className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-[#0000ff]">$12k<span className="text-lg text-gray-400 font-normal">/mo</span></div>
            <ul className="space-y-4 text-sm text-gray-900 font-medium flex-grow mb-12">
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Unlimited data points</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> 25 Predictive Models</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Real-time Routing</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> 24/7 Priority Support</li>
            </ul>
            <button className="w-full bg-[#0000ff] text-white py-4 text-[11px] font-semibold hover:bg-blue-800 transition-colors uppercase tracking-widest">Select Cluster</button>
          </div>
          
          {/* Tier 3 */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Network</span>
            <div className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">Custom</div>
            <ul className="space-y-4 text-sm text-gray-600 font-medium flex-grow mb-12">
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Dedicated Infrastructure</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Unlimited Models</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> Custom Integrations</li>
              <li className="flex items-center gap-3"><CheckSquare className="w-4 h-4 text-[#0000ff]" /> On-premise Deployment</li>
            </ul>
            <button className="w-full border border-gray-300 py-4 text-[11px] font-semibold hover:bg-gray-100 transition-colors uppercase tracking-widest">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 bg-[#0000ff] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 uppercase">
            Ready to<br/>optimize?
          </h2>
          <button className="bg-white text-[#0000ff] px-8 py-4 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full sm:w-max uppercase tracking-wider">
            Deploy Chainova Today <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-grow min-h-[150px] md:min-h-[200px]" style={hatchStyle}></div>
          <div className="border-t border-gray-300 p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 bg-white shrink-0">
            <span className="font-bold tracking-widest uppercase text-sm">Chainova &copy; 2026</span>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors">Twitter</a>
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-[#0000ff] transition-colors">Github</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
