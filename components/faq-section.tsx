"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "Is HealthSync HIPAA and GDPR compliant?",
      answer: "Yes, HealthSync is 100% HIPAA and GDPR compliant. We employ enterprise-grade 256-bit AES encryption for all data at rest and in transit, strict role-based access control (RBAC), automated compliance logging, and routine SOC2 Type II audits to guarantee total clinical data security."
    },
    {
      question: "Can it integrate with our existing LIMS?",
      answer: "Absolutely. HealthSync provides turnkey FHIR R4 and HL7 v2/v3 standard connectors alongside modern REST APIs. It interfaces smoothly with leading LIMS, EHR, and billing systems including Epic, Cerner, MEDITECH, and AthenaHealth without disrupting ongoing operations."
    },
    {
      question: "How long does the implementation take?",
      answer: "Standard deployment typically takes between 2 to 4 weeks. Our dedicated integration specialists handle automated data migration, custom API mapping, and comprehensive staff onboarding to ensure a seamless transition with zero clinical downtime."
    },
    {
      question: "What level of support and SLA guarantees do you provide?",
      answer: "We guarantee a 99.9% operational uptime SLA. Every client receives 24/7 priority technical assistance, regular system updates, and a dedicated clinical account team to support your operations round the clock."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-sky-50/20 to-slate-50 relative overflow-hidden">
      {/* Background blobs for visual symmetry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-900 mb-4 border border-indigo-100 shadow-sm">
            <HelpCircle className="h-4 w-4 text-indigo-600" />
            Support & Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about HealthSync integration, compliance, and deployment.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-300 border bg-white ${
                  isOpen
                    ? "border-indigo-200 shadow-xl shadow-indigo-950/5 ring-1 ring-indigo-500/10"
                    : "border-slate-200/80 shadow-md shadow-slate-200/30 hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1A1053] text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex h-2 w-2 rounded-full ${isOpen ? "bg-teal-500" : "bg-slate-300"}`} />
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? "bg-indigo-50 text-indigo-600 rotate-180" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5 shrink-0" />
                  </div>
                </button>

                {/* Animated Dropdown Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 mt-1">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
