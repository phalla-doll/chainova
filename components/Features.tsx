import { Activity, Globe, AlertTriangle } from 'lucide-react';

export default function Features() {
  return (
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
  );
}
