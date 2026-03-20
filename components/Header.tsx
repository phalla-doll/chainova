import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
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
  );
}
