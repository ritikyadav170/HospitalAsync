// import { UserRound, Stethoscope, Microscope, PackagePlus } from "lucide-react";
// import Link from "next/link";

// export function SolutionsSection() {
//   const cards = [
//     {
//       icon: <UserRound className="h-8 w-8 text-sky-500" />,
//       title: "Claim Sync",
//       desc: "Automate e-claim conversion, validation, submission, and resubmission to improve accuracy and accelerate reimbursement.",
//       href: "/solutions/claim-sync"
//     },
//     {
//       icon: <Stethoscope className="h-8 w-8 text-sky-500" />,
//       title: "Complaint Management",
//       desc: "Manage claims efficiently with intelligent validation, data conversion, tracking, and actionable insights that help reduce rejections and delays.",
//       href: "/solutions/complaint-management"
//     },
//     {
//       icon: <Microscope className="h-8 w-8 text-sky-500" />,
//       title: "Incident Management",
//       desc: "Support providers with intelligent clinical insights, data-driven recommendations, and tools that enhance decision-making and care quality.",
//       href: "/solutions/incident-management"
//     },
//     {
//       icon: <PackagePlus className="h-8 w-8 text-sky-500" />,
//       title: "Asset Management",
//       desc: "Improve the management of medical assets, equipment, and inventory with greater visibility, control, and operational efficiency.",
//       href: "/solutions/asset-management"
//     }
//   ];

//   return (
//     <section className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50/50 to-white">
//       {/* Background decoration */}
//       <div className="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100/50 via-white/0 to-transparent pointer-events-none" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053]">
//             Solutions for Every Healthcare Stakeholder
//           </h2>
//           <p className="mt-6 text-lg text-slate-600 text-justify md:text-center">
//            Our integrated platform delivers intelligent solutions that simplify healthcare operations, improve claims efficiency, and support better outcomes across the entire healthcare ecosystem.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card, i) => (
//             <div key={i} className="group flex flex-col rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
//               <div className="flex justify-center mb-6">
//                 <div className="p-4 bg-sky-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
//                   {card.icon}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-center text-[#1A1053] mb-3">{card.title}</h3>
//               <p className="text-center text-slate-500 mb-8 flex-grow">{card.desc}</p>

//               <div className="flex gap-3 w-full">
//                 <Link
//                   href={card.href}
//                   className="flex-1 py-2.5 text-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
//                 >
//                   View More
//                 </Link>
//                 <Link
//                   href="/demo"
//                   className="flex-1 py-2.5 text-center rounded-full bg-[#1A1053] text-sm font-semibold text-white shadow-md hover:bg-[#1A1053]/90 transition-colors"
//                 >
//                   Demo
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  UserRound,
  Stethoscope,
  Microscope,
  PackagePlus,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    icon: UserRound,
    title: "Claim Sync",
    desc: "Automate e-claim conversion, validation, submission, and resubmission to improve accuracy and accelerate reimbursement cycles.",
    href: "/solutions/claim-sync",
    accent: "#1A1053",
    gradient: "from-[#1A1053] to-[#3d2b9c]",
    lightBg: "bg-[#1A1053]/[0.06]",
  },
  {
    icon: Stethoscope,
    title: "Complaint Management",
    desc: "Manage claims efficiently with intelligent validation, data conversion, tracking, and actionable insights that reduce rejections.",
    href: "/solutions/complaint-management",
    accent: "#059669",
    gradient: "from-emerald-600 to-emerald-400",
    lightBg: "bg-emerald-50",
  },
  {
    icon: Microscope,
    title: "Incident Management",
    desc: "Support providers with intelligent clinical insights, data-driven recommendations, and tools that enhance care quality.",
    href: "/solutions/incident-management",
    accent: "#d97706",
    gradient: "from-amber-600 to-amber-400",
    lightBg: "bg-amber-50",
  },
  {
    icon: PackagePlus,
    title: "Asset Management",
    desc: "Improve the management of medical assets, equipment, and inventory with greater visibility, control, and efficiency.",
    href: "/solutions/asset-management",
    accent: "#e11d48",
    gradient: "from-rose-600 to-rose-400",
    lightBg: "bg-rose-50",
  },
];

export function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      className="relative overflow-hidden bg-[#f8f9fc] py-12 md:py-16 lg:py-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#1A1053]/[0.025] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#1A1053]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-[#1A1053]/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center mb-20 lg:mb-24 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-sm font-semibold text-[#1A1053] mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Our Solutions
          </div>

          <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] font-bold tracking-tight text-[#1A1053] leading-[1.1]">
            Solutions for Every{" "}
            <span className="relative inline-block">
              Healthcare
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-[10px] text-[#1A1053]/15"
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
            </span>{" "}
            Stakeholder
          </h2>

          <p className="mt-7 text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Our integrated platform delivers intelligent solutions that simplify
            healthcare operations, improve claims efficiency, and support better
            outcomes across the entire ecosystem.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col rounded-[1.75rem] bg-white/80 backdrop-blur-xl p-8 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:shadow-[0_24px_60px_rgba(26,16,83,0.12)] hover:-translate-y-3 hover:bg-white ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                {/* Top glow bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(to right, ${solution.accent}40, ${solution.accent})`,
                  }}
                />

                {/* Floating number */}
                <span className="absolute top-6 right-6 text-[4rem] font-bold leading-none text-slate-100/80 select-none transition-colors duration-300 group-hover:text-slate-100">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7">
                  <div
                    className={`inline-flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-2xl ${solution.lightBg} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                    style={{
                      boxShadow: isHovered
                        ? `0 8px 30px ${solution.accent}25`
                        : "none",
                    }}
                  >
                    <Icon
                      className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: solution.accent }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1A1053] mb-3 tracking-tight group-hover:text-[#1A1053] transition-colors">
                  {solution.title}
                </h3>

                <p className="text-[15px] leading-[1.7] text-slate-500 mb-10 flex-grow">
                  {solution.desc}
                </p>

                {/* Actions */}
                <div className="flex gap-3 w-full mt-auto">
                  <Link
                    href={solution.href}
                    className="group/btn flex flex-1 items-center justify-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/50 py-3 text-[13px] font-semibold text-slate-600 transition-all duration-300 hover:border-[#1A1053]/20 hover:bg-[#1A1053]/[0.03] hover:text-[#1A1053]"
                  >
                    Details
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/demo"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1A1053] py-3 text-[13px] font-semibold text-white shadow-[0_4px_16px_rgba(26,16,83,0.25)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_8px_28px_rgba(26,16,83,0.35)] active:scale-[0.97]"
                  >
                    Demo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 lg:mt-24 text-center transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-3 rounded-full bg-white border border-slate-200/80 px-9 py-4 text-[15px] font-semibold text-[#1A1053] shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#1A1053]/15 hover:shadow-[0_12px_40px_rgba(26,16,83,0.1)] hover:-translate-y-0.5 active:translate-y-0"
          >
            View All Solutions
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1053]/[0.06] group-hover:bg-[#1A1053]/10 transition-colors">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}