import { Database, Cpu, Network } from 'lucide-react';

export default function Engine() {
  return (
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
  );
}
