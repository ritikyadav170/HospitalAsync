import { ShieldAlert, CheckCircle2, Globe, Shield, ShieldCheck } from "lucide-react";

export function InfraSecurity() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="bg-[#0B0A26] rounded-[2.5rem] p-10 md:p-16 lg:p-24 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Military-Grade Security. Medical-Grade Compliance.
              </h2>
              <p className="text-indigo-200/80 mb-10 text-lg max-w-md leading-relaxed">
                Our infrastructure is purpose-built to exceed the rigorous standards of national health ministries and global private networks.
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>HIPAA / HITECH Compliant Hosting</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>SOC 2 Type II Certified Infrastructure</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0" />
                  <span>GDPR & PIPEDA Regional Sovereignty</span>
                </li>
              </ul>
              
              <div>
                <button className="bg-white text-[#0B0A26] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors">
                  Download Security Whitepaper
                </button>
              </div>
            </div>

            {/* Right Content - 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square mt-0 sm:mt-12">
                <ShieldAlert className="h-10 w-10 text-indigo-300 mb-4" />
                <h3 className="text-white font-bold mb-1">HIPAA</h3>
                <p className="text-indigo-300/70 text-xs">Certified</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square">
                <ShieldCheck className="h-10 w-10 text-indigo-300 mb-4" />
                <h3 className="text-white font-bold mb-1">SOC 2</h3>
                <p className="text-indigo-300/70 text-xs">Type II</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square">
                <Globe className="h-10 w-10 text-indigo-300 mb-4" />
                <h3 className="text-white font-bold mb-1">GDPR</h3>
                <p className="text-indigo-300/70 text-xs">Universal</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center aspect-square mt-0 sm:-mt-12">
                <Shield className="h-10 w-10 text-indigo-300 mb-4" />
                <h3 className="text-white font-bold mb-1">ISO 27001</h3>
                <p className="text-indigo-300/70 text-xs">Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
