"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CareersApplication() {
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

  return (
    <section ref={sectionRef} id="general-app" className="py-18 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
        <div className={`flex flex-col lg:flex-row bg-[#f8fafc] rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Left Side */}
          <div className={`w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl font-bold text-[#1A1053] mb-6">Your Journey Starts Here</h2>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Our application process is designed to be as fluid as our data models. Tell us about your background and what excites you about the future of health technology.
            </p>

            <div className="space-y-2">
              <div className="flex gap-4 group">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 fill-teal-100 group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] mb-1 group-hover:text-teal-700 transition-colors">Initial Review</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Our talent team reviews every application within 72 hours.</p>
                </div>
              </div>
              <div className="flex gap-4 group mt-6">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-teal-600 fill-teal-100 group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] mb-1 group-hover:text-teal-700 transition-colors">Clinical & Technical Sync</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Engage with future teammates on real-world HealthSync challenges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`w-full lg:w-1/2 p-10 md:p-16 bg-white shadow-xl shadow-slate-200/20 lg:rounded-l-[2.5rem] border-l border-slate-100 transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-[#1A1053] mb-8">Quick Apply</h3>

            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold text-slate-600">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full bg-[#f8fafc] border-transparent focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 rounded-xl px-4 py-3 text-sm transition-all outline-none" />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-bold text-slate-600">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-[#f8fafc] border-transparent focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 rounded-xl px-4 py-3 text-sm transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600">Email Address</label>
                <input type="email" placeholder="jane.doe@example.com" className="w-full bg-[#f8fafc] border-transparent focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 rounded-xl px-4 py-3 text-sm transition-all outline-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600">LinkedIn Profile (Optional)</label>
                <input type="text" placeholder="linkedin.com/in/janedoe" className="w-full bg-[#f8fafc] border-transparent focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 rounded-xl px-4 py-3 text-sm transition-all outline-none" />
              </div>

              <button type="button" className="w-full bg-[#0B0A26] text-white rounded-xl py-4 font-bold text-[15px] hover:bg-[#1A1053] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mt-4 active:scale-95">
                Begin Application
              </button>

              <p className="text-xs text-slate-500 text-center leading-relaxed mt-6">
                By clicking, you agree to our <a href="#" className="underline hover:text-indigo-600 transition-colors">Privacy Policy</a> regarding applicant data.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
