import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/assets/images/image1.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-12 lg:pt-16 pb-16">
      {/* Background blobs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-[500px] bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-[#1A1053]">
            <span className="flex h-2 w-2 rounded-full bg-[#1A1053]" />
            Next-Gen Health SaaS
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#1A1053] sm:text-3xl lg:text-[4rem] max-w-2xl leading-[1.15]">
            Healthcare Intelligence For Hospitals & Doctors
          </h1>

          <p className="max-w-[600px] text-[1.125rem] text-slate-600 leading-[1.75]">
            HealthSync is an intelligent healthcare platform designed to empower hospitals and doctors with data-driven insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 transition-all">
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link 
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1053] shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-all"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <div className="relative flex-1 w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
          <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-indigo-900/10 border border-white/40 overflow-hidden transform lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
            {/* Using user provided image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={image1}
                alt="Health Sync Dashboard"
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>

            <div className="absolute -left-6 -bottom-6 md:left-6 md:-bottom-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900">99.9%</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">System reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
