"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import finalLogo from "@/assets/images/final_logo.png";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-[#f3f4fb]/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto flex h-[84px] items-center justify-between px-6 max-w-7xl lg:px-12">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center justify-start py-1 transition-transform duration-200 hover:scale-[1.02]">
          <Image
            src={finalLogo}
            alt="HealthSync Logo"
            className="h-10 w-auto max-w-[240px] object-contain sm:h-11 md:h-12 lg:h-[54px]"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          <Link
            href="/"
            className={`text-[15px] transition-colors ${pathname === '/'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-2'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className={`text-[15px] transition-colors ${pathname === '/solutions' || pathname.startsWith('/solutions/')
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-2'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Solutions
          </Link>
          <Link
            href="/infrastructure"
            className={`text-[15px] transition-colors ${pathname === '/infrastructure'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-2'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            Global Infrastructure
          </Link>
          <Link
            href="/about"
            className={`text-[15px] transition-colors ${pathname === '/about'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-2'
              : 'font-medium text-slate-600 hover:text-[#1A1053]'
              }`}
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className={`text-[15px] transition-colors ${pathname === '/careers'
              ? 'font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-2'
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
            className="inline-flex h-[52px] w-[182px] items-center justify-center rounded-full bg-[#1A1053] px-5 text-[15px] font-semibold text-white shadow-[0_12px_25px_rgba(26,16,83,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1A1053]/95"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
