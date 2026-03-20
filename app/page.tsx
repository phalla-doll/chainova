import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Engine from '@/components/Engine';
import Topology from '@/components/Topology';
import Telemetry from '@/components/Telemetry';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-[#0000ff] selection:text-white">
      <Header />
      <Hero />
      <Features />
      <Engine />
      <Topology />
      <Telemetry />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
    </div>
  );
}
