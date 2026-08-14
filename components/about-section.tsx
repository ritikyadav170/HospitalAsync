import { Zap, ShieldCheck, Heart, Share2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutHero from "@/assets/images/about-hero.png";
import aboutCeo from "@/assets/images/about-ceo.png";
import aboutCto from "@/assets/images/about-cto.png";
import aboutCfo from "@/assets/images/about-cfo.png";

export function AboutSection() {
  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Hero Header Section */}
      <section className="relative w-full h-[520px] sm:h-[600px] md:h-[650px] overflow-hidden flex items-center">
        {/* Background AI Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutHero}
            alt="HealthSync Modern Facility"
            className="w-full h-full object-cover"
            priority
          />
          {/* Dark Blue Gradient Overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1053] via-[#1A1053]/95 sm:via-[#1A1053]/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-white max-w-7xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-slate-200 uppercase mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              ESTABLISHED 2018
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              The Future of Connected Healthcare
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              HealthSync is the architectural backbone of modern medicine, orchestrating global clinical data to empower providers and protect patients.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Headline */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-4">
                01. OUR MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight tracking-tight">
                Bridging clinical excellence with digital intelligence.
              </h2>
            </div>

            {/* Right Content Paragraphs & Stats */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                In an era of fragmented data and siloed systems, HealthSync was founded on a singular premise: that the flow of information should never be a barrier to the quality of care. We believe that clinical data, when orchestrated with precision and security, becomes the most powerful tool in the physician&apos;s arsenal.
              </p>

              <hr className="border-slate-100 my-2" />

              <p className="text-slate-600">
                Our platform doesn&apos;t just store records; it builds a living ecosystem where interoperability is the default, not the exception. By integrating advanced machine learning with rigorous HIPAA-compliant infrastructure, we provide healthcare systems with the clarity they need to make life-saving decisions in real-time.
              </p>

              {/* Stats Below Mission */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100 mt-4">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#1A1053] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mt-2">
                    UPTIME RELIABILITY
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-8">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#1A1053] tracking-tight">
                    Zero
                  </div>
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mt-2">
                    DATA BREACHES
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Dark Blue Stats Banner */}
      <section className="bg-[#1A1053] py-16 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">

            <div className="flex flex-col items-start justify-center pt-4 md:pt-0">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                GLOBAL REACH
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                500+
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Medical Partners Worldwide
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                VOLUME
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                1.2M
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Daily Data Syncs
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                EFFICIENCY
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
                40%
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Reduction in Admin Latency
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-24 bg-[#f0f6fa]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
              02. OUR CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
              The Principles of Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Innovation */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Innovation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Constantly pushing the boundaries of what&apos;s possible in health tech through rigorous R&D.
              </p>
            </div>

            {/* Card 2: Security */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Security</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A foundational commitment to privacy, maintaining SOC2 Type II and HIPAA compliance at every layer.
              </p>
            </div>

            {/* Card 3: Compassion */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Compassion</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Never forgetting that every data point represents a person seeking care and a better life.
              </p>
            </div>

            {/* Card 4: Scalability */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Scalability</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built for the future, ensuring our infrastructure grows as rapidly as the healthcare landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Section */}
      <section className="py-24 bg-[#f0f6fa]">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
                03. LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-4">
                The Visionaries
              </h2>
              <p className="text-slate-600 max-w-2xl text-base sm:text-lg">
                A multidisciplinary team combining decades of clinical medicine, venture scale engineering, and global logistics.
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-[#1A1053] px-6 py-2.5 text-sm font-semibold text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors shrink-0"
            >
              View Full Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leader 1: Dr. Elena Rodriguez */}
            <div className="flex flex-col">
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/4] bg-slate-200 shadow-md">
                <Image
                  src={aboutCeo}
                  alt="Dr. Elena Rodriguez"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <span className="absolute bottom-4 left-4 bg-[#1A1053] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                  CEO
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1A1053] mb-2">
                Dr. Elena Rodriguez
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Former Chief of Informatics at Metro Health. Elena leads HealthSync with a focus on patient-centric data architecture and clinical integration.
              </p>
            </div>

            {/* Leader 2: Marcus Thorne */}
            <div className="flex flex-col">
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/4] bg-slate-200 shadow-md">
                <Image
                  src={aboutCto}
                  alt="Marcus Thorne"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <span className="absolute bottom-4 left-4 bg-[#1A1053] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                  CTO
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1A1053] mb-2">
                Marcus Thorne
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Previously Lead Infrastructure Architect for global cloud providers. Marcus oversees our zero-trust security and data orchestration engine.
              </p>
            </div>

            {/* Leader 3: Sarah Chen */}
            <div className="flex flex-col">
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/4] bg-slate-200 shadow-md">
                <Image
                  src={aboutCfo}
                  alt="Sarah Chen"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <span className="absolute bottom-4 left-4 bg-[#1A1053] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                  CFO
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1A1053] mb-2">
                Sarah Chen
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A veteran of healthcare private equity and fintech. Sarah directs our global expansion and partnership strategy across six continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f6fa] via-sky-50/40 to-slate-100 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-8">
            Ready to synchronize your medical enterprise?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="w-full sm:w-auto rounded-full bg-[#1A1053] px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-950/20 hover:bg-[#1A1053]/90 transition-all"
            >
              Request System Audit
            </Link>
            <Link
              href="/infrastructure"
              className="w-full sm:w-auto rounded-full bg-transparent border border-[#1A1053] px-9 py-4 text-sm font-semibold text-[#1A1053] hover:bg-slate-50 transition-all"
            >
              Contact Global Hubs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
