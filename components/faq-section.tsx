

"use client";

import { useState, useId } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is HealthSync?",
    answer: "HealthSync is a healthcare intelligence and e-claims platform that helps providers, payers, and healthcare organizations streamline claims, automate workflows, validate data, and improve operational efficiency."
  },
  {
    question: "What healthcare solutions does HealthSync provide?",
    answer: "HealthSync offers solutions for e-claim conversion and validation, claims management, revenue cycle workflows, clinical decision support, complaint and incident management, and healthcare asset management."
  },
  {
    question: "Who can use HealthSync?",
    answer: "HealthSync is designed for healthcare providers, payers, administrators, healthcare authorities, and other organizations involved in managing healthcare operations and claims."
  },
  {
    question: "How does HealthSync improve claim accuracy?",
    answer: "HealthSync validates claim data against configured rules and requirements, helping identify missing, inconsistent, or incorrect information before claims are submitted."
  },
   {
    question: "Can HealthSync help reduce claim rejections?",
    answer: "Yes. By validating data and identifying potential issues before submission, HealthSync helps organizations improve first-pass claim accuracy and reduce avoidable rejections and delays"
  },
   {
    question: "Does HealthSync provide analytics and reporting?",
    answer: "Yes. HealthSync provides actionable insights into claims and operational performance, helping organizations identify trends, monitor issues, and make data-driven decisions."
  }
];

export function FaqSection() {
  // CHANGED: Initialized with 'null' instead of '0' so all are closed on load
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about HealthSync integration, compliance, and deployment.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-faq-button-${i}`;
            const contentId = `${baseId}-faq-content-${i}`;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border bg-white ${isOpen
                  ? "border-indigo-200 shadow-xl shadow-indigo-950/5 ring-1 ring-indigo-500/10"
                  : "border-slate-200/80 shadow-md shadow-slate-200/30 hover:border-slate-300 hover:shadow-lg"
                  }`}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1A1053] text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-2 w-2 rounded-full transition-colors duration-300 ${isOpen ? "bg-teal-500" : "bg-slate-300"
                        }`}
                    />
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? "bg-indigo-50 text-indigo-600 rotate-180" : "bg-slate-100 text-slate-500"
                      }`}
                  >
                    <ChevronDown className="h-5 w-5 shrink-0" />
                  </div>
                </button>

                {/* Animated Dropdown Answer */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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