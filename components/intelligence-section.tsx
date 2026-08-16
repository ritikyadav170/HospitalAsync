// import { QrCode, Stethoscope } from "lucide-react";
// import Image from "next/image";
// import image3 from "@/assets/images/image3.png";

// export function IntelligenceSection() {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Decorative gradient orb */}
//       <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl pointer-events-none" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-16">

//           {/* Left: Content */}
//           <div className="flex-1 flex flex-col items-start gap-8">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight">
//              Smart Healthcare <br/>Intelligence
//               </h2>
//               <p className="mt-6 text-lg text-slate-600 leading-relaxed text-justify md:text-left">
//                 HealthSync connects critical workflows from e-claim conversion and validation to revenue cycle management, clinical decision support, and operational insights. With intelligent automation and data-driven solutions, HealthSync helps healthcare organizations reduce manual effort, improve accuracy, accelerate processing, and make better-informed decisions.
//                </p>
//             </div>

//             <div className="flex flex-col gap-6 w-full">
//               {/* Card 1 */}
//               <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-blue-50/50 transition-colors">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
//                     <QrCode className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#1A1053]">End-to-End Efficiency</h3>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed text-justify md:text-left">
//                  From e-prior authorizations to e-claims, adjudication, and resubmissions, HealthSync supports your healthcare organization throughout the complete claims cycle. 
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-indigo-50/50 transition-colors">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                     <Stethoscope className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#1A1053]">Accurate & Reliable Claims</h3>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed text-justify md:text-left">
//                  Validate claims data before submission, identify errors and missing information, and improve first-pass acceptance with intelligent validation and conversion
//                 </p>
//               </div>
//                  <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-indigo-50/50 transition-colors">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                     <Stethoscope className="h-5 w-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#1A1053]">Actionable Insights</h3>
//                 </div>
//                 <p className="text-slate-600 leading-relaxed text-justify md:text-left">
//                   Gain clear visibility into your claims performance. Track trends, identify potential issues, and use actionable insights to reduce denials and improve revenue cycle efficiency.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right: AI Brain Image */}
//           <div className="flex-1 w-full relative">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-slate-200 bg-slate-900 p-2 transform lg:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
//                {/* Abstract placeholder for AI Brain Dashboard */}
//                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
//                  <Image 
//                    src={image3} 
//                    alt="AI Brain Dashboard" 
//                    className="w-full h-full object-cover opacity-80 mix-blend-screen"
//                  />
//                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
//                </div>
//             </div>
//             {/* Glowing background */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/20 blur-[100px] -z-10 rounded-full" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { QrCode, Stethoscope, BarChart3, BrainCircuit } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import image3 from "@/assets/images/image3.png";

const features = [
  {
    icon: QrCode,
    title: "End-to-End Efficiency",
    desc: "From e-prior authorizations to e-claims, adjudication, and resubmissions, HealthSync supports your healthcare organization throughout the complete claims cycle.",
    accent: "#0ea5e9",
    lightBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Stethoscope,
    title: "Accurate & Reliable Claims",
    desc: "Validate claims data before submission, identify errors and missing information, and improve first-pass acceptance with intelligent validation and conversion.",
    accent: "#6366f1",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    desc: "Gain clear visibility into your claims performance. Track trends, identify potential issues, and use actionable insights to reduce denials and improve revenue cycle efficiency.",
    accent: "#8b5cf6",
    lightBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

export function IntelligenceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
    >
      {/* Premium background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#1A1053]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1A1053]/[0.015] rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`flex flex-1 flex-col items-start gap-10 transition-all duration-1000 ease-out ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Header */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-4 py-1.5 text-sm font-semibold text-[#1A1053] mb-6 backdrop-blur-sm">
                <BrainCircuit className="h-4 w-4" />
                AI-Powered Intelligence
              </div>

              <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight text-[#1A1053] leading-[1.1]">
                Smart Healthcare{" "}
                <span className="relative inline-block">
                  Intelligence
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-[10px] text-[#1A1053]/12"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                HealthSync connects critical workflows from e-claim conversion
                and validation to revenue cycle management, clinical decision
                support, and operational insights. With intelligent automation
                and data-driven solutions, HealthSync helps healthcare
                organizations reduce manual effort, improve accuracy, accelerate
                processing, and make better-informed decisions.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-5 w-full">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className={`group relative rounded-2xl bg-[#f8f9fc] border border-slate-100 p-6 md:p-7 transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_12px_40px_rgba(26,16,83,0.08)] hover:border-[#1A1053]/10 hover:-translate-y-1 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                      }`}
                    style={{ transitionDelay: `${300 + i * 150}ms` }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: feature.accent }}
                    />

                    <div className="flex items-start gap-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.lightBg} transition-all duration-300 group-hover:scale-110`}
                        style={{
                          boxShadow: `0 4px 20px ${feature.accent}20`,
                        }}
                      >
                        <Icon
                          className={`h-6 w-6 ${feature.iconColor}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#1A1053] mb-2 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[15px] leading-[1.7] text-slate-500">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`flex-1 w-full max-w-xl lg:max-w-none transition-all duration-1000 delay-300 ease-out ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#1A1053]/5 via-transparent to-sky-100/20 rounded-[2.5rem] blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-[2rem] bg-[#0f172a] p-3 shadow-[0_30px_80px_-12px_rgba(26,16,83,0.25)] border border-slate-800/50 overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-900">
                  <Image
                    src={image3}
                    alt="AI Brain Dashboard"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />

                  {/* Premium gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1053]/30 via-transparent to-sky-500/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />

                  {/* Floating stat badge */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-xl px-4 py-3 border border-white/10 shadow-lg animate-pulse-slow">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/80">AI Processing</p>
                      <p className="text-sm font-bold text-white">Real-time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-2 opacity-20">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-[#1A1053]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}