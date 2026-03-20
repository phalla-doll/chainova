import { MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
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
            <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed mb-8">&quot;Chainova&apos;s predictive routing cut our global transit delays by 18% in the first quarter alone. The ROI was immediate and measurable.&quot;</p>
          </div>
          <div className="border-t border-gray-300 pt-6">
            <div className="text-sm font-bold uppercase tracking-tight">Sarah Jenkins</div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">VP Logistics, GlobalTech</div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-8 md:p-12 flex flex-col justify-between hover:bg-gray-50 transition-colors">
          <div>
            <div className="text-[#0000ff] font-mono text-4xl md:text-5xl mb-6 tracking-tight">99.4%</div>
            <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed mb-8">&quot;We achieved 99.4% inventory accuracy. The continuous optimization loop completely eliminated our stockout issues across 40 warehouses.&quot;</p>
          </div>
          <div className="border-t border-gray-300 pt-6">
            <div className="text-sm font-bold uppercase tracking-tight">Marcus Chen</div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">COO, RetailPrime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
