// import { ArrowRight, ShieldCheck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import image1 from "@/assets/images/image1.png";

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-12 lg:pt-16 pb-16">
//       {/* Background blobs */}
//       <div className="absolute top-0 -left-1/4 w-1/2 h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 -right-1/4 w-1/2 h-[500px] bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
//         <div className="flex flex-1 flex-col items-start gap-6">
//           <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-[#1A1053]">
//             <span className="flex h-2 w-2 rounded-full bg-[#1A1053]" />
//             Next-Gen Health SaaS
//           </div>

//           <h1 className="text-4xl font-bold tracking-tight text-[#1A1053] sm:text-3xl lg:text-[4rem] max-w-2xl leading-[1.15]">
//             Healthcare Intelligence For Hospitals & Doctors
//           </h1>

//           <p className="max-w-[600px] text-[1.125rem] text-slate-600 leading-[1.75] text-justify md:text-left">
//             HealthSync is an intelligent healthcare platform designed to empower hospitals and doctors with data-driven insights
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
//             {/* <Link
//               href="/solutions"
//               className="inline-flex items-center justify-center rounded-full bg-[#1A1053] hover:bg-[#1A1053]/90 text-white px-8 py-3.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-all"
//             >
//               Explore Solutions
//               <ArrowRight className="ml-2 text-white" />
//             </Link> */}
//             <Link
//               href="/solutions"
//               className="inline-flex items-center justify-center rounded-full bg-[#1A1053] hover:bg-[] text-white px-8 py-3.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 transition-all"
//             >
//               Explore Solutions
//               <ArrowRight className="ml-2 text-white" />
//             </Link>
//             <Link
//               href="/demo"
//               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1053] shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-all"
//             >
//               Book Demo
//             </Link>
//           </div>
//         </div>

//         <div className="relative flex-1 w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
//           <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-indigo-900/10 border border-white/40 overflow-hidden transform lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
//             {/* Using user provided image */}
//             <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
//               <Image
//                 src={image1}
//                 alt="Health Sync Dashboard"
//                 className="object-cover w-full h-full opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
//             </div>

//             <div className="absolute -left-6 -bottom-6 md:left-6 md:-bottom-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
//                 <ShieldCheck className="h-6 w-6" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold text-slate-900">99.9%</span>
//                 <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">System reliability</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { ArrowRight, ShieldCheck, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import image1 from "@/assets/images/image1.png";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] pt-18 pb-24 md:pt-24 md:pb-32 lg:pt-10 lg:pb-36"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#1A1053]/[0.03] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#1A1053]/[0.02] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#1A1053]/[0.025] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#1A1053 1px, transparent 1px), linear-gradient(90deg, #1A1053 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left Content */}
          <div className={`flex flex-[0.95] flex-col items-start gap-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-sm font-semibold text-[#1A1053] backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A1053] opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A1053]" />
              </span>
              Next-Gen Health SaaS
            </div>

            {/* Heading */}
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-[#1A1053] max-w-2xl leading-[1.1]">
              Healthcare Intelligence For{" "}
              <span className="relative inline-block">
                Hospitals
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#1A1053]/20" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              & Doctors
            </h1>

            {/* Description */}
            <p className="max-w-[540px] text-lg text-slate-500 leading-relaxed">
              HealthSync is an intelligent healthcare platform designed to empower hospitals and doctors with data-driven insights, seamless workflows, and real-time analytics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center rounded-full bg-[#1A1053] text-white px-8 py-4 text-[15px] font-semibold shadow-[0_8px_30px_rgba(26,16,83,0.25)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_12px_40px_rgba(26,16,83,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/demo"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#1A1053] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#1A1053]/20 hover:shadow-[0_8px_30px_rgba(26,16,83,0.08)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1053]/5 group-hover:bg-[#1A1053]/10 transition-colors">
                  <Play className="h-3.5 w-3.5 fill-[#1A1053] text-[#1A1053] ml-0.5" />
                </span>
                Book Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-slate-200/60 w-full sm:w-auto">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">500+</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Hospitals</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">10k+</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Doctors</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">99.9%</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative flex-[1.05] w-full max-w-xl lg:max-w-none lg:-mt-31 xl:-mt-40 transition-all duration-1000 delay-300 ease-out xl:ml-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>

            <div className="relative">
              {/* Decorative ring behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1A1053]/5 to-transparent rounded-[2rem] blur-xl" />

              {/* Main image container */}
              <div className="relative rounded-[1.5rem] bg-white p-2.5 shadow-[0_25px_60px_-12px_rgba(26,16,83,0.15)] border border-slate-100/80 overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-slate-100">
                  <Image
                    src={image1}
                    alt="Health Sync Dashboard"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1053]/10 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                </div>

                {/* Floating stat card - top right */}
                <div className="absolute -top-4 -right-4 md:top-4 md:right-4 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 animate-float">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-slate-900 leading-none">99.9%</span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Reliable</span>
                  </div>
                </div>

                {/* Floating users card - bottom left */}
                <div className="absolute -bottom-3 -left-3 md:bottom-6 md:-left-6 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl py-3 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/50 animate-float-delayed">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-[#1A1053] to-[#3d2b9c] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 leading-none">2,000+</span>
                    <span className="text-[11px] font-medium text-slate-400">Active Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
