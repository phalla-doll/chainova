import { ArrowUpRight, Activity, Globe, AlertTriangle, Database, Cpu, Network } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white flex flex-col font-sans text-gray-900 min-h-screen">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white flex flex-col md:flex-row border-b border-gray-300 shrink-0">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex items-center justify-center md:justify-start">
          <span className="font-bold tracking-widest uppercase text-sm">Chainova</span>
        </div>
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 p-6 flex items-center justify-center gap-8 md:gap-16">
          <a href="#features" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Features</a>
          <a href="#engine" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Engine</a>
          <a href="#pricing" className="text-[11px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
        </div>
        <div className="w-full md:w-1/4 p-6 flex items-center justify-center md:justify-end">
          <button className="bg-[#0000ff] text-white px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-blue-800 transition-colors">
            Log In <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row border-b border-gray-300 min-h-[calc(100vh-73px)]">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 border-r border-gray-300 flex flex-col">
          {/* Hatch Top */}
          <div className="flex border-b border-gray-300 h-24 shrink-0">
            <div className="w-1/2 border-r border-gray-300 bg-hatch"></div>
            <div className="w-1/2 bg-hatch"></div>
          </div>

          {/* Hero Text */}
          <div className="flex-grow p-8 md:p-12 lg:p-16 border-b border-gray-300 flex flex-col justify-center">
            <div className="inline-block bg-gray-100 px-3 py-1.5 rounded-sm text-xs font-medium text-gray-600 mb-8 self-start">
              Trusted by 500+ global enterprises
            </div>
            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
              Turn supply chains<br />into predictive<br />machines
            </h1>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-md mb-10 leading-relaxed">
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
              <div className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">50B+</div>
              <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Data points processed</div>
            </div>
            <div className="w-1/3 border-r border-gray-300 p-6 md:p-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">70+</div>
              <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">AI models deployed</div>
            </div>
            <div className="w-1/3 p-6 md:p-8">
              <div className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">40+</div>
              <div className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-tight">Predictive models</div>
            </div>
          </div>

          {/* Image Area */}
          <div className="flex-grow border-b border-gray-300 p-8 md:p-16 flex items-center justify-center bg-white min-h-[400px]">
            <div className="relative w-full max-w-[500px] aspect-square">
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
          <div className="h-24 bg-hatch shrink-0"></div>
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
            <div className="flex justify-between items-start mb-12">
              <div className="text-2xl font-mono text-gray-300 group-hover:text-[#0000ff] transition-colors">01</div>
              <Activity className="w-6 h-6 text-gray-400 group-hover:text-[#0000ff] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">Demand Forecasting</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Predict stock requirements with 99.9% accuracy using historical data, market trends, and real-time consumer behavior.</p>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-12">
              <div className="text-2xl font-mono text-gray-300 group-hover:text-[#0000ff] transition-colors">02</div>
              <Globe className="w-6 h-6 text-gray-400 group-hover:text-[#0000ff] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold uppercase tracking-tight mb-4">Dynamic Routing</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Automatically reroute global shipments in real-time based on weather patterns, port congestion, and geopolitical events.</p>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col hover:bg-gray-50 transition-colors group">
            <div className="flex justify-between items-start mb-12">
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
            <h3 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight mb-6 uppercase">
              Continuous<br/>Optimization<br/>Loop
            </h3>
            <p className="text-gray-500 text-sm md:text-base max-w-md mb-12 leading-relaxed">
              Our proprietary neural networks continuously ingest data from IoT sensors, ERP systems, and external APIs to refine predictive models in real-time.
            </p>
            <ul className="space-y-0">
              <li className="flex items-center gap-6 border-t border-gray-300 py-4">
                <Database className="w-5 h-5 text-[#0000ff] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Phase 1 / Ingest</span>
                  <span className="text-sm font-medium">10M+ data points processed per second</span>
                </div>
              </li>
              <li className="flex items-center gap-6 border-t border-gray-300 py-4">
                <Cpu className="w-5 h-5 text-[#0000ff] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Phase 2 / Analyze</span>
                  <span className="text-sm font-medium">Sub-millisecond anomaly detection</span>
                </div>
              </li>
              <li className="flex items-center gap-6 border-t border-gray-300 py-4">
                <Network className="w-5 h-5 text-[#0000ff] shrink-0" />
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
                     style={{ height: `${(h/130)*100}%` }}
                   ></div>
                 ))}
               </div>
               {/* Overlay grid */}
               <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 bg-[#0000ff] text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-8 uppercase">
            Ready to<br/>optimize?
          </h2>
          <button className="bg-white text-[#0000ff] px-8 py-4 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full sm:w-max">
            Deploy Chainova Today <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-grow bg-hatch min-h-[200px]"></div>
          <div className="border-t border-gray-300 p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 bg-white shrink-0">
            <span className="font-bold tracking-widest uppercase text-sm">Chainova &copy; 2026</span>
            <div className="flex gap-6">
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">Github</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
