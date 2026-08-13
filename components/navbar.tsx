"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
            <Shield className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Health<span className="text-teal-500">Sync</span>
          </span>
        </div>

        <div className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            className={`text-[15px] transition-colors ${pathname === '/' ? 'font-semibold text-blue-900 border-b-2 border-blue-600 pb-1.5' : 'font-medium text-slate-500 hover:text-blue-900'}`}
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className={`text-[15px] transition-colors ${pathname === '/solutions' ? 'font-semibold text-blue-900 border-b-2 border-blue-600 pb-1.5' : 'font-medium text-slate-500 hover:text-blue-900'}`}
          >
            Solutions
          </Link>
          <Link
            href="/infrastructure"
            className={`text-[15px] transition-colors ${pathname === '/infrastructure' ? 'font-semibold text-blue-900 border-b-2 border-blue-600 pb-1.5' : 'font-medium text-slate-500 hover:text-blue-900'}`}
          >
            Global Infrastructure
          </Link>
          <Link
            href="/careers"
            className={`text-[15px] transition-colors ${pathname === '/careers' ? 'font-semibold text-blue-900 border-b-2 border-blue-600 pb-1.5' : 'font-medium text-slate-500 hover:text-blue-900'}`}
          >
            Careers
          </Link>
        </div>

        <div className="flex items-center gap-8">
          {/* <Link 
            href="/login"
            className="text-[15px] font-medium text-slate-500 hover:text-blue-900 transition-colors hidden sm:block"
          >
            Login
          </Link> */}
          <Link
            href="/demo"
            className="rounded-full bg-[#1A1053] px-7 py-3 text-[15px] font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 hover:-translate-y-0.5 transition-all"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
