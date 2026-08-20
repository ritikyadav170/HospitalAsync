"use client";

import { Zap, ShieldCheck, Heart, Share2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import aboutHero from "@/assets/images/about-hero.png";
import aboutCeo from "@/assets/images/about-ceo.png";
import aboutCto from "@/assets/images/about-cto.png";
import aboutCfo from "@/assets/images/about-cfo.png";

export function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* 1. Hero Header Section */}
      <section className="relative w-full h-[520px] sm:h-[600px] md:h-[650px] overflow-hidden flex items-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        {/* Background AI Image */}
        <div className="absolute inset-0 z-0 animate-float" style={{ animationDuration: '10s' }}>
          <Image
            src={aboutHero}
            alt="HealthSync Modern Facility"
            className="w-full h-full object-cover scale-105"
            priority
          />
          {/* Dark Blue Gradient Overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1053] via-[#1A1053]/95 sm:via-[#1A1053]/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-white max-w-7xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-slate-200 uppercase mb-6 shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              ESTABLISHED 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              HealthSync: Building the Future of Healthcare
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Healthcare is becoming more connected, data-driven, and technology-enabled. But for providers, payers, and healthcare organizations, connecting systems and information can still be complex.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-20 md:py-28 bg-white animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Headline */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-4">
                01. OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight tracking-tight">
                What We Believe
              </h2>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="font-bold text-[#1A1053] text-xl block sm:inline mr-2">1) Technology Should Empower People:</span>
                  <span>Technology should help healthcare professionals do their jobs better not make their jobs harder.</span>
                </div>
                <div>
                  <span className="font-bold text-[#1A1053] text-xl block sm:inline mr-2">2) Data Should Create Value:</span>
                  <span>Healthcare data is most powerful when the right information reaches the right people at the right time.</span>
                </div>
                <div>
                  <span className="font-bold text-[#1A1053] text-xl block sm:inline mr-2">3) Simplicity Is Powerful:</span>
                  <span>Sophisticated technology should still feel intuitive to the people using it every day.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Dark Blue Stats Banner */}
      <section className="bg-[#1A1053] py-16 text-white relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="flex flex-col items-start justify-center pt-4 md:pt-0 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                GLOBAL REACH
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                500+
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Medical Partners Worldwide
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                VOLUME
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                1.2M
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Daily Data Syncs
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                EFFICIENCY
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                40%
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Reduction in Admin Latency
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Commitment Section */}
      <section className="py-24 bg-white animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
              Our Commitment
            </h2>
          </div>
        </div>
        
        <hr className="border-slate-200 mb-12 w-full" />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-4xl text-slate-700 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl font-bold text-[#1A1053] mb-6">
              Secure. Responsible. Connected.
            </h3>
            <div className="flex flex-col gap-6">
              <p>
                Healthcare technology comes with a responsibility to protect sensitive information and support the organizations that depend on it.
              </p>
              <p>
                HealthSync approaches technology development with security, controlled access, responsible data management, and operational reliability in mind.
              </p>
              <p>
                Our solutions are designed to help organizations build connected workflows without losing sight of the importance of trust, privacy, and accountability.
              </p>
              <p className="italic text-slate-500 mt-4">
                Specific security, compliance, and regulatory controls depend on the applicable HealthSync solution, deployment architecture, and customer environment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 6. Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f6fa] via-sky-50/40 to-slate-100 border-t border-slate-100 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-8">
            Ready to Transform Your Healthcare Operations?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-[#1A1053] px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-950/20 hover:bg-[#1A1053]/90 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
