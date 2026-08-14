import { Globe, Share2, AtSign, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import finalLogo from "@/assets/images/final_logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100 font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            <Link href="/" className="flex items-center hover:opacity-95 transition-opacity w-fit">
              <Image
                src={finalLogo}
                alt="HealthSync Logo"
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[340px] object-contain"
              />
            </Link>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Global leader in enterprise healthcare connectivity. Building the digital infrastructure for the future of medicine.
            </p>

            <div className="flex gap-3">
              <Link 
                href="/infrastructure"
                title="Global Infrastructure"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <Link 
                href="/solutions"
                title="Explore Solutions"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
              >
                <Share2 className="h-4 w-4" />
              </Link>
              <a 
                href="mailto:enterprise@healthsync.io"
                title="Contact Enterprise Support"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-[#1A1053] hover:bg-[#1A1053] hover:text-white transition-colors"
              >
                <AtSign className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Product</h4>
            <Link href="/solutions/claim-sync" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Hospital ERP</Link>
            <Link href="/solutions/complaint-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Lab LIMS</Link>
            <Link href="/solutions/incident-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Patient App</Link>
            <Link href="/solutions/asset-management" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">AI Assistant</Link>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Resources</h4>
            <Link href="/infrastructure" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">API Documentation</Link>
            <Link href="/compliance" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Security Portal</Link>
            <Link href="/about" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Case Studies</Link>
            <Link href="/hipaa" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Support Hub</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#1A1053] text-sm tracking-wider uppercase mb-2">Legal</h4>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Privacy Policy</Link>
            <Link href="/compliance" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Compliance</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">Terms of Service</Link>
            <Link href="/hipaa" className="text-sm text-slate-500 hover:text-[#1A1053] transition-colors">HIPAA Statement</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2024 HealthSync Enterprise. HIPAA Compliant.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <Link href="/compliance" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <ShieldCheck className="h-4 w-4 text-green-500" /> SOC2 Certified
            </Link>
            <Link href="/hipaa" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
              <ShieldCheck className="h-4 w-4 text-green-500" /> ISO 27001
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
