import { Globe, Share2, AtSign, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Health<span className="text-teal-500">Sync</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Global leader in enterprise healthcare connectivity. Building the digital infrastructure for the future of medicine.
            </p>
            <div className="flex gap-3">
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors">
                <Globe className="h-4 w-4" />
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors">
                <AtSign className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Product</h4>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Hospital ERP</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Lab LIMS</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Patient App</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">AI Assistant</a>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Resources</h4>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">API Documentation</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Security Portal</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Case Studies</a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Support Hub</a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Legal</h4>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Compliance</a>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</Link>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">HIPAA Statement</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2024 HealthSync Enterprise. HIPAA Compliant.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-500" /> SOC2 Certified</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-500" /> ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
