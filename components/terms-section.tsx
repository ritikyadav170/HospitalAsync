import { ShieldCheck, Shield, Sparkles, CheckCircle2, Download, HelpCircle, Mail, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import termsIp from "@/assets/images/terms-ip.png";

export function TermsSection() {
  const navItems = [
    { id: "sec-1", label: "1. Introduction" },
    { id: "sec-2", label: "2. User Obligations" },
    { id: "sec-3", label: "3. Intellectual Property" },
    { id: "sec-4", label: "4. Limitation of Liability" },
    { id: "sec-5", label: "5. Governing Law" },
    { id: "sec-6", label: "6. Support & Contact" },
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
        
        {/* Header Title Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-bold text-teal-700 border border-cyan-200/80 shadow-sm mb-6">
            <ShieldCheck className="h-4 w-4 text-teal-600" />
            TRUST & COMPLIANCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1053] tracking-tight mb-4">
            Terms of Service
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Last updated: October 24, 2024. These terms outline our mutual commitments to security, HIPAA compliance, and enterprise integrity.
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-8">
            <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-6 shadow-sm">
              <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-4 block">
                ON THIS PAGE
              </span>
              <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:text-[#1A1053] hover:font-bold transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Need a PDF Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col items-start gap-3">
              <h4 className="font-bold text-[#1A1053] text-base">Need a PDF?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Download a signed copy for your legal department.
              </p>
              <button className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#1A1053] hover:underline">
                <Download className="h-4 w-4 text-[#1A1053]" />
                Download Document
              </button>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. Introduction Section */}
            <div id="sec-1" className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight mb-6">
                1. Introduction
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Welcome to HealthSync. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our enterprise healthcare platform, including our HIPAA-compliant data analytics, patient management tools, and integrated API services. By accessing our platform, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                  HealthSync provides a secure digital infrastructure designed for healthcare providers, pharmaceutical enterprises, and medical research institutions. Our mission is to synchronize health data while maintaining the highest standards of clinical privacy and technological security.
                </p>
              </div>

              {/* 3 Mini Feature Badges Box Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm">
                    <Shield className="h-4 w-4 text-blue-600" />
                    HIPAA Ready
                  </div>
                  <span className="text-xs text-slate-500">Fully compliant data handling</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm">
                    <Sparkles className="h-4 w-4 text-teal-600" />
                    Secure API
                  </div>
                  <span className="text-xs text-slate-500">Encrypted data transmission</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Enterprise SLA
                  </div>
                  <span className="text-xs text-slate-500">99.99% uptime commitment</span>
                </div>
              </div>
            </div>

            {/* 2. User Obligations Section */}
            <div id="sec-2" className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1053] text-white font-bold text-sm">
                  2
                </div>
                <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                  User Obligations
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To maintain the integrity of the HealthSync ecosystem, all users must adhere to the following professional standards:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Verification:</strong> Users must provide accurate, current, and complete registration information and maintain its accuracy.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Security Credentials:</strong> You are responsible for safeguarding the credentials used to access the Service and for any activities or actions under your password.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 font-bold">Compliance:</strong> Users must comply with all local, state, and federal healthcare regulations, specifically including HIPAA and HITECH requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Intellectual Property Section */}
            <div id="sec-3" className="bg-[#1A1053] rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  3. Intellectual Property
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed">
                  All clinical algorithms, interface designs, software architectures, and trademarks are the exclusive property of HealthSync. We grant you a limited, non-transferable license to access our services for professional use only.
                </p>
                <div className="pt-2">
                  <button className="rounded-full bg-cyan-400 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-300 transition-colors">
                    Read Licensing Agreement
                  </button>
                </div>
              </div>

              {/* Visual Image */}
              <div className="w-full md:w-64 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md shrink-0">
                <Image
                  src={termsIp}
                  alt="Medical History Form"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 4. Limitation of Liability Section */}
            <div id="sec-4" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                4. Limitation of Liability
              </h2>

              {/* Amber Left Accent Quote Box */}
              <div className="border-l-4 border-amber-400 bg-amber-50/40 p-4 sm:p-5 rounded-r-xl text-slate-700 italic font-medium text-sm sm:text-base">
                &ldquo;HealthSync provides professional medical management tools, not medical advice. Our platform is intended to assist qualified medical professionals in data organization and should not replace clinical judgment.&rdquo;
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To the maximum extent permitted by applicable law, HealthSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services.
              </p>
            </div>

            {/* 5. Governing Law Section */}
            <div id="sec-5" className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                5. Governing Law
              </h2>

              <div className="bg-slate-100/70 border border-slate-200/60 rounded-2xl p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-slate-200/80 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                    State of Delaware
                  </span>
                  <span className="bg-slate-200/80 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                    Arbitration Clause
                  </span>
                  <span className="bg-slate-200/80 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                    International Use
                  </span>
                </div>
              </div>
            </div>

            {/* 6. Support & Contact Section */}
            <div id="sec-6" className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-sm space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#1A1053] mx-auto">
                <HelpCircle className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                6. Support & Contact
              </h2>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Have questions about our Terms of Service or need clarification on a specific enterprise clause? Our legal and support teams are here to help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#1A1053]/90 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Contact Legal
                </Link>
                <Link
                  href="/faq"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#1A1053] px-8 py-3.5 text-sm font-semibold text-[#1A1053] hover:bg-slate-50 transition-all"
                >
                  <HelpCircle className="h-4 w-4" />
                  Help Center
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
