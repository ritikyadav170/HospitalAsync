import { ArrowDown } from "lucide-react";

export function CareersHero() {
  return (
    <section className="pt-32 pb-24 bg-white text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="inline-flex items-center justify-center rounded-full bg-cyan-100/50 px-4 py-1.5 text-xs font-bold tracking-widest text-[#1A1053] uppercase mb-8">
          Join the Mission
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#1A1053] leading-[1.1] mb-6">
          Help us synchronize the future of global healthcare.
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          We're building the infrastructure for the next generation of medical innovation.
          Join a team of visionaries dedicated to making health data fluid, secure, and life-saving.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-[#1A1053] px-8 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-indigo-900/20 hover:bg-[#1A1053]/90 transition-all flex items-center gap-2">
            View Openings <ArrowDown className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white border border-slate-200 px-8 py-3.5 text-[15px] font-semibold text-[#1A1053] shadow-sm hover:border-slate-300 transition-all">
            Our Culture
          </button>
        </div>
      </div>
    </section>
  );
}
