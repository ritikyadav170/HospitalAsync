import Image from "next/image";
import { Monitor, Smartphone, Cpu } from "lucide-react";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";

export function DevicesSection() {
  return (
    <section className="pt-16 pb-20 md:pb-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Tight Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-[#1A1053] mb-3 border border-indigo-100/80 shadow-sm">
            <Cpu className="h-3.5 w-3.5 text-teal-600" />
            Seamless Accessibility
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
            Built for Every Device
          </h2>
          <p className="mt-2 text-base md:text-lg text-slate-600 max-w-xl mx-auto">
            Consistent, high-performance experience across mobile, tablet, and desktop.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-semibold text-slate-600 mb-10">
          <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Monitor className="h-3.5 w-3.5 text-blue-600" /> Desktop Dashboard
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <Smartphone className="h-3.5 w-3.5 text-teal-600" /> Mobile Companion App
          </span>
        </div>

        {/* Mockups Container with Centered Tight Alignment */}
        <div className="flex justify-center items-end max-w-5xl mx-auto relative h-[340px] sm:h-[420px] md:h-[500px]">

          {/* Desktop Monitor Mockup */}
          <div className="relative w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] z-10 drop-shadow-2xl ">
            <div className="rounded-2xl md:rounded-3xl border-[6px] sm:border-[8px] md:border-[12px] border-slate-900 bg-slate-900 overflow-hidden aspect-video relative shadow-2xl">
              <Image
                src={image4}
                alt="Desktop view"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Monitor Stand Base */}
            <div className="w-1/5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-slate-300 to-slate-400 mx-auto rounded-b-lg shadow-md" />
            <div className="w-2/5 h-1.5 sm:h-2 bg-slate-300 mx-auto rounded-t-md" />
          </div>

          {/* Mobile Phone Mockup Overlay */}
          <div className="absolute right-2 sm:right-8 md:right-16 lg:right-24 bottom-2 sm:bottom-4 w-[28%] sm:w-[24%] md:w-[22%] lg:w-[20%] z-20 drop-shadow-2xl">
            <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border-[5px] sm:border-[8px] md:border-[10px] border-white bg-white overflow-hidden aspect-[9/19] relative shadow-2xl ring-1 ring-slate-200/80">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 sm:h-4 bg-slate-900 rounded-b-xl z-30" />
              <Image
                src={image5}
                alt="Mobile view"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
