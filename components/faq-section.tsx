

// "use client";

// import { useState, useId } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// const FAQS: FaqItem[] = [
//   {
//     question: "What is HealthSync?",
//     answer: "HealthSync is a healthcare intelligence and e-claims platform that helps providers, payers, and healthcare organizations streamline claims, automate workflows, validate data, and improve operational efficiency."
//   },
//   {
//     question: "What healthcare solutions does HealthSync provide?",
//     answer: "HealthSync offers solutions for e-claim conversion and validation, claims management, revenue cycle workflows, clinical decision support, complaint and incident management, and healthcare asset management."
//   },
//   {
//     question: "Who can use HealthSync?",
//     answer: "HealthSync is designed for healthcare providers, payers, administrators, healthcare authorities, and other organizations involved in managing healthcare operations and claims."
//   },
//   {
//     question: "How does HealthSync improve claim accuracy?",
//     answer: "HealthSync validates claim data against configured rules and requirements, helping identify missing, inconsistent, or incorrect information before claims are submitted."
//   },
//    {
//     question: "Can HealthSync help reduce claim rejections?",
//     answer: "Yes. By validating data and identifying potential issues before submission, HealthSync helps organizations improve first-pass claim accuracy and reduce avoidable rejections and delays"
//   },
//    {
//     question: "Does HealthSync provide analytics and reporting?",
//     answer: "Yes. HealthSync provides actionable insights into claims and operational performance, helping organizations identify trends, monitor issues, and make data-driven decisions."
//   }
// ];

// export function FaqSection() {
//   // CHANGED: Initialized with 'null' instead of '0' so all are closed on load
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const baseId = useId();

//   const toggleFaq = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-sky-50/20 to-slate-50 relative overflow-hidden">
//       {/* Background blobs for visual symmetry */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">

//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-900 mb-4 border border-indigo-100 shadow-sm">
//             <HelpCircle className="h-4 w-4 text-indigo-600" />
//             Support & Clarity
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-slate-600 text-justify md:text-center">
//             Everything you need to know about HealthSync integration, compliance, and deployment.
//           </p>
//         </div>

//         {/* FAQ Accordion List */}
//         <div className="max-w-4xl mx-auto flex flex-col gap-4">
//           {FAQS.map((faq, i) => {
//             const isOpen = openIndex === i;
//             const buttonId = `${baseId}-faq-button-${i}`;
//             const contentId = `${baseId}-faq-content-${i}`;

//             return (
//               <div
//                 key={faq.question}
//                 className={`rounded-2xl transition-all duration-300 border bg-white ${isOpen
//                   ? "border-indigo-200 shadow-xl shadow-indigo-950/5 ring-1 ring-indigo-500/10"
//                   : "border-slate-200/80 shadow-md shadow-slate-200/30 hover:border-slate-300 hover:shadow-lg"
//                   }`}
//               >
//                 <button
//                   id={buttonId}
//                   onClick={() => toggleFaq(i)}
//                   className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1A1053] text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
//                   aria-expanded={isOpen}
//                   aria-controls={contentId}
//                 >
//                   <span className="flex items-center gap-3">
//                     <span
//                       className={`flex h-2 w-2 rounded-full transition-colors duration-300 ${isOpen ? "bg-teal-500" : "bg-slate-300"
//                         }`}
//                     />
//                     {faq.question}
//                   </span>
//                   <div
//                     className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? "bg-indigo-50 text-indigo-600 rotate-180" : "bg-slate-100 text-slate-500"
//                       }`}
//                   >
//                     <ChevronDown className="h-5 w-5 shrink-0" />
//                   </div>
//                 </button>

//                 {/* Animated Dropdown Answer */}
//                 <div
//                   id={contentId}
//                   role="region"
//                   aria-labelledby={buttonId}
//                   className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//                     }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 mt-1">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }






"use client";

import { useState, useId } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { useEffect, useRef } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is HealthSync?",
    answer: "HealthSync is a healthcare intelligence and e-claims platform that helps providers, payers, and healthcare organizations streamline claims, automate workflows, validate data, and improve operational efficiency.",
  },
  {
    question: "What healthcare solutions does HealthSync provide?",
    answer: "HealthSync offers solutions for e-claim conversion and validation, claims management, revenue cycle workflows, clinical decision support, complaint and incident management, and healthcare asset management.",
  },
  {
    question: "Who can use HealthSync?",
    answer: "HealthSync is designed for healthcare providers, payers, administrators, healthcare authorities, and other organizations involved in managing healthcare operations and claims.",
  },
  {
    question: "How does HealthSync improve claim accuracy?",
    answer: "HealthSync validates claim data against configured rules and requirements, helping identify missing, inconsistent, or incorrect information before claims are submitted.",
  },
  {
    question: "Can HealthSync help reduce claim rejections?",
    answer: "Yes. By validating data and identifying potential issues before submission, HealthSync helps organizations improve first-pass claim accuracy and reduce avoidable rejections and delays.",
  },
  {
    question: "Does HealthSync provide analytics and reporting?",
    answer: "Yes. HealthSync provides actionable insights into claims and operational performance, helping organizations identify trends, monitor issues, and make data-driven decisions.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const baseId = useId();

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

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-8 md:py-12 lg:py-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A1053]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#1A1053]/[0.015] rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-sky-100/20 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-4xl">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-sm font-semibold text-[#1A1053] mb-8 backdrop-blur-sm">
            <MessageCircleQuestion className="h-4 w-4" />
            Support & Clarity
          </div>

          <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight text-[#1A1053] leading-[1.1]">
            Frequently Asked{" "}
            <span className="relative inline-block">
              Questions
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

          <p className="mt-7 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about HealthSync integration,
            compliance, and deployment.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-faq-button-${i}`;
            const contentId = `${baseId}-faq-content-${i}`;

            return (
              <div
                key={faq.question}
                className={`group rounded-[1.25rem] bg-white/70 backdrop-blur-xl border transition-all duration-500 ease-out ${isOpen
                    ? "border-[#1A1053]/15 shadow-[0_12px_40px_rgba(26,16,83,0.08)] bg-white"
                    : "border-slate-100/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-slate-200/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${150 + i * 80}ms` }}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 md:p-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1053]/20 rounded-[1.25rem]"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${isOpen
                          ? "bg-[#1A1053] scale-110"
                          : "bg-slate-300 group-hover:bg-slate-400"
                        }`}
                    />
                    <span
                      className={`text-[15px] md:text-base font-semibold transition-colors duration-300 ${isOpen ? "text-[#1A1053]" : "text-slate-700"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "bg-[#1A1053] text-white rotate-180 shadow-[0_4px_12px_rgba(26,16,83,0.25)]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#1A1053]/10 group-hover:text-[#1A1053]"
                      }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-400 ease-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                      <div className="border-t border-slate-100 pt-5">
                        <p className="text-[15px] leading-[1.75] text-slate-500 pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 text-center transition-all duration-1000 delay-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-slate-400 text-sm mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1A1053] px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_28px_rgba(26,16,83,0.22)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_12px_36px_rgba(26,16,83,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <HelpCircle className="h-4 w-4" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}