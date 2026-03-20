import { CheckSquare } from 'lucide-react';

export default function Pricing() {
  return (
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
  );
}
