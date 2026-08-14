import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Image from "next/image";
import image3 from "@/assets/images/image3.png"; // Using a dashboard-like image

export function InfraHero() {
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-[#1A1053] mb-8">
              <ShieldCheck className="h-4 w-4" />
              Trusted by Global Health Systems
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#1A1053] sm:text-5xl lg:text-[3.5rem] leading-[1.15]">
              Scaling Healthcare<br />
              Intelligence for the<br />
              Modern Enterprise
            </h1>

            <p className="mt-6 max-w-[600px] text-[1.125rem] text-slate-600 leading-[1.75]">
              HealthSync delivers mission-critical data infrastructure for large-scale hospital networks and government projects. Unified, secure, and infinitely scalable.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#1A1053] px-8 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-indigo-900/20 hover:bg-[#1A1053]/90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                Schedule an Enterprise Briefing <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-white border-2 border-slate-200 px-8 py-3.5 text-[15px] font-semibold text-[#1A1053] hover:border-slate-300 hover:bg-slate-50 transition-all">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src={image3}
                  alt="Infrastructure Dashboard"
                  className="object-cover w-full h-full opacity-90"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-cyan-400 p-3 rounded-xl text-white shadow-lg shadow-cyan-400/30">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-[#1A1053] text-sm">Live Fleet Monitoring</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Active across 140+ locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
