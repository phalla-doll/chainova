import { Terminal } from 'lucide-react';

export default function Telemetry() {
  return (
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
  );
}
