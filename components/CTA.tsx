import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  const hatchStyle = { 
    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, #e5e7eb 4px, #e5e7eb 5px)' 
  };

  return (
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
  );
}
