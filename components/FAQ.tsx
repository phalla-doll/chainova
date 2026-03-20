import { HelpCircle, Plus } from 'lucide-react';

export default function FAQ() {
  return (
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
  );
}
