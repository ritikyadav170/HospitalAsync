import Image from "next/image";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";

export function DevicesSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053]">
            Built for Every Device
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Consistent, high-performance experience across mobile, tablet, and desktop.
          </p>
        </div>

        <div className="flex justify-center items-end max-w-5xl mx-auto relative h-[400px] md:h-[600px]">
          
          {/* Desktop Monitor Mockup */}
          <div className="relative w-[80%] md:w-[70%] lg:w-[65%] z-10 left-0 md:-ml-20 drop-shadow-2xl">
            <div className="rounded-2xl md:rounded-3xl border-[8px] md:border-[12px] border-slate-800 bg-slate-900 overflow-hidden aspect-video relative shadow-2xl">
              <Image 
                src={image4} 
                alt="Desktop view" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Monitor stand */}
            <div className="w-1/4 h-8 md:h-12 bg-gradient-to-b from-slate-300 to-slate-400 mx-auto rounded-b-lg shadow-lg"></div>
            <div className="w-1/2 h-2 md:h-3 bg-slate-300 mx-auto rounded-t-lg"></div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="absolute right-4 md:right-12 bottom-0 w-[30%] md:w-[25%] lg:w-[22%] z-20 drop-shadow-2xl">
            <div className="rounded-[2rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-white bg-white overflow-hidden aspect-[9/19] relative shadow-2xl ring-1 ring-slate-200">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-white rounded-b-xl z-30"></div>
              <Image 
                src={image5} 
                alt="Mobile view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* Dark bottom bar to anchor the design like the image */}
      <div className="absolute bottom-0 w-full h-8 bg-[#1A1053]" />
    </section>
  );
}
