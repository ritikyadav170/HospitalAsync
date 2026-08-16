import { QrCode, Stethoscope } from "lucide-react";
import Image from "next/image";
import image3 from "@/assets/images/image3.png";

export function IntelligenceSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-start gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight">
             Smart Healthcare <br/>Intelligence
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed text-justify md:text-left">
                HealthSync connects critical workflows from e-claim conversion and validation to revenue cycle management, clinical decision support, and operational insights. With intelligent automation and data-driven solutions, HealthSync helps healthcare organizations reduce manual effort, improve accuracy, accelerate processing, and make better-informed decisions.
               </p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              {/* Card 1 */}
              <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-blue-50/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    <QrCode className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1053]">End-to-End Efficiency</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify md:text-left">
                 From e-prior authorizations to e-claims, adjudication, and resubmissions, HealthSync supports your healthcare organization throughout the complete claims cycle. 
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-indigo-50/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1053]">Accurate & Reliable Claims</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify md:text-left">
                 Validate claims data before submission, identify errors and missing information, and improve first-pass acceptance with intelligent validation and conversion
                </p>
              </div>
                 <div className="rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100/50 hover:bg-indigo-50/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1053]">Actionable Insights</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-justify md:text-left">
                  Gain clear visibility into your claims performance. Track trends, identify potential issues, and use actionable insights to reduce denials and improve revenue cycle efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Right: AI Brain Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 border border-slate-200 bg-slate-900 p-2 transform lg:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
               {/* Abstract placeholder for AI Brain Dashboard */}
               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                 <Image 
                   src={image3} 
                   alt="AI Brain Dashboard" 
                   className="w-full h-full object-cover opacity-80 mix-blend-screen"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               </div>
            </div>
            {/* Glowing background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/20 blur-[100px] -z-10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
