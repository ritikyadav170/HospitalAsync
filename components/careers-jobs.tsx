"use client";

import { ArrowRight, MapPin, Clock, Server, Stethoscope, LineChart, LayoutGrid } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CareersJobs() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const jobs = [
    {
      title: "Senior Backend Engineer (HL7/FHIR)",
      location: "Remote",
      type: "Full-time",
      dept: "Engineering",
      icon: <Server className="h-5 w-5" />,
      color: "bg-[#1A1053] text-[#2bc4ff]",
      delay: "delay-100"
    },
    {
      title: "Director of Clinical Interoperability",
      location: "New York, NY",
      type: "Full-time",
      dept: "Clinical Ops",
      icon: <Stethoscope className="h-5 w-5" />,
      color: "bg-teal-500 text-white",
      delay: "delay-200"
    },
    {
      title: "Enterprise Account Executive",
      location: "Chicago / Remote",
      type: "Full-time",
      dept: "Sales",
      icon: <LineChart className="h-5 w-5" />,
      color: "bg-emerald-600 text-white",
      delay: "delay-300"
    },
    {
      title: "Senior Product Designer",
      location: "Remote",
      type: "Full-time",
      dept: "Product",
      icon: <LayoutGrid className="h-5 w-5" />,
      color: "bg-indigo-600 text-white",
      delay: "delay-400"
    }
  ];

  const tabs = ["All Roles", "Engineering", "Clinical Operations", "Sales & Growth", "Product"];

  return (
    <section ref={sectionRef} id="openings" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
            JOIN US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1053] tracking-tight mb-4">
            Open Positions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Find your place in the HealthSync ecosystem and accelerate global care.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex flex-wrap items-center justify-center gap-2 mb-12 transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all hover:scale-105 ${i === 0
                  ? "bg-[#1A1053] text-white shadow-md"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4 mb-14">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 rounded-3xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1 transition-all duration-500 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${job.delay}`}
            >
              <div className="flex items-center gap-5 mb-4 sm:mb-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${job.color}`}>
                  {job.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#1A1053] mb-1.5 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" /> {job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
                  {job.dept}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1A1053] group-hover:bg-[#1A1053] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm text-slate-500 mb-3">Don&apos;t see a role that fits? We&apos;re always looking for talented individuals.</p>
          <a href="#general-app" className="text-sm font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
            Send a General Application
          </a>
        </div>
      </div>
    </section>
  );
}
