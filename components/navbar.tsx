"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import finalLogo from "@/assets/images/final_logo.png";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-28 sm:h-32 md:h-36 items-center justify-between px-6 lg:px-12 max-w-7xl">

        {/* Brand Logo - Extra Large & Ultra Prominent */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02] py-2 justify-start">
          <Image
            src={finalLogo}
            alt="HealthSync Logo"
            className="h-18 sm:h-18 md:h-20 lg:h-24 w-auto max-w-[300px] sm:max-w-[380px] md:max-w-[440px] object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            className={`text-[16px] transition-colors ${pathname === '/'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1.5'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className={`text-[16px] transition-colors ${pathname === '/solutions' || pathname.startsWith('/solutions/')
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1.5'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Solutions
          </Link>
          <Link
            href="/infrastructure"
            className={`text-[16px] transition-colors ${pathname === '/infrastructure'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1.5'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Global Infrastructure
          </Link>
          <Link
            href="/about"
            className={`text-[16px] transition-colors ${pathname === '/about'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1.5'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className={`text-[16px] transition-colors ${pathname === '/careers'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1.5'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Careers
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-8">
          <Link
            href="/demo"
            className="rounded-full bg-[#1A1053] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 hover:-translate-y-0.5 transition-all"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
