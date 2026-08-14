"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, ShieldCheck, ArrowRight, Send, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dubaiMap from "@/assets/images/dubai-map.png";

export function HipaaSection() {
  const [inquiryType, setInquiryType] = useState("Sales Inquiry");

  return (
    <div className="w-full bg-white font-sans text-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] tracking-tight leading-[1.15] mb-4">
            Let&apos;s build the future of <span className="text-[#02a9da]">digital health</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you&apos;re looking for enterprise clinical solutions or require technical assistance with our API, our global team is ready to sync.
          </p>
        </div>

        {/* 2 Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* Left Form Box Card */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-200/40">
            {/* Top Switch Pills */}
            <div className="inline-flex p-1.5 bg-slate-100 rounded-full mb-8">
              <button
                type="button"
                onClick={() => setInquiryType("Sales Inquiry")}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${
                  inquiryType === "Sales Inquiry"
                    ? "bg-[#1A1053] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sales Inquiry
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("Technical Support")}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all ${
                  inquiryType === "Technical Support"
                    ? "bg-[#1A1053] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Technical Support
              </button>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl font-extrabold text-[#1A1053] mb-1">
              Connect with Sales
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Speak with a specialist about custom healthcare enterprise solutions.
            </p>

            {/* Form Fields Grid */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@hospital.com"
                    placeholder="john@hospital.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Organization
                  </label>
                  <input
                    type="text"
                    defaultValue="General Medical Center"
                    placeholder="General Medical Center"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      defaultValue="Integration Partnership"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 pr-10"
                    >
                      <option>Integration Partnership</option>
                      <option>Enterprise Deployment</option>
                      <option>Compliance Audit</option>
                      <option>API Support</option>
                    </select>
                    <ChevronDown className="absolute right-3 top.1/2 -translate-y-1/2 top-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can our clinical engineering team help you today?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1053] hover:bg-[#1A1053]/90 text-white rounded-full font-bold text-sm shadow-lg shadow-indigo-950/20 transition-all flex items-center justify-center gap-2 mt-2"
              >
                Submit Inquiry
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dubai Headquarters Card */}
            <div className="bg-[#1A1053] text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A2B66] text-cyan-400 mb-6">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Dubai Headquarters
              </h3>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest block mb-4">
                Global Enterprise Hub
              </span>

              <div className="text-sm text-slate-300 leading-relaxed space-y-1 mb-6 font-normal">
                <p>HealthSync Tower, Suite 402</p>
                <p>Dubai International Financial Centre (DIFC)</p>
                <p>Dubai, United Arab Emirates</p>
              </div>

              {/* Map Graphic Visual */}
              <div className="w-full h-44 relative rounded-2xl overflow-hidden shadow-inner border border-white/10">
                <Image
                  src={dubaiMap}
                  alt="Dubai DIFC Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Email Support Box */}
            <div className="bg-slate-100/80 border border-slate-200/60 rounded-2xl p-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                  EMAIL SUPPORT
                </span>
                <span className="text-base font-extrabold text-[#1A1053]">
                  enterprise@healthsync.io
                </span>
              </div>
            </div>

            {/* Phone Support Box */}
            <div className="bg-slate-100/80 border border-slate-200/60 rounded-2xl p-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-600 shadow-sm shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block">
                  PHONE SUPPORT
                </span>
                <span className="text-base font-extrabold text-[#1A1053]">
                  +971 4 555 SYNC
                </span>
              </div>
            </div>

            {/* HIPAA & GDPR Compliant Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm space-y-1">
              <ShieldCheck className="h-7 w-7 text-emerald-500 mx-auto mb-2" />
              <h4 className="font-extrabold text-[#1A1053] text-sm sm:text-base">
                HIPAA & GDPR Compliant
              </h4>
              <p className="text-xs text-slate-500">
                Your data is encrypted using military-grade AES-256 protocols.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Global Clinical Presence Section */}
      <section className="bg-slate-50/70 border-t border-slate-100 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1053] tracking-tight mb-3">
                Global Clinical Presence
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                We maintain 14 regional nodes to ensure sub-10ms latency for critical clinical operations globally.
              </p>
            </div>

            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors shrink-0"
            >
              View All Locations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location 1: Singapore */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1">
              <h3 className="text-lg font-extrabold text-[#1A1053]">Singapore</h3>
              <p className="text-xs font-medium text-slate-500">Asia-Pacific Tech Center</p>
              <p className="text-xs font-medium text-slate-500">One North, Buona Vista</p>
            </div>

            {/* Location 2: London */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1">
              <h3 className="text-lg font-extrabold text-[#1A1053]">London</h3>
              <p className="text-xs font-medium text-slate-500">EMEA Regulatory HQ</p>
              <p className="text-xs font-medium text-slate-500">Canary Wharf, E14</p>
            </div>

            {/* Location 3: Boston */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1">
              <h3 className="text-lg font-extrabold text-[#1A1053]">Boston</h3>
              <p className="text-xs font-medium text-slate-500">Clinical Research Lab</p>
              <p className="text-xs font-medium text-slate-500">Kendall Square, MA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
