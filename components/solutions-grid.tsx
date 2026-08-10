import { ChevronRight, WalletCards, MessageSquareWarning, Activity, Cpu } from "lucide-react";
import Image from "next/image";
import solution1 from "@/assets/images/solution1.png";
import solution2 from "@/assets/images/solution2.png";
import solution3 from "@/assets/images/solution3.png";
import solution4 from "@/assets/images/solution4.png";

export function SolutionsGrid() {
  const features = [
    {
      title: "Claim Sync",
      desc: "Automate and streamline your claims lifecycle with AI-driven validation. Reduce processing errors by 40% while ensuring complete HIPAA compliance and transparent audit trails for large-scale operations.",
      icon: <WalletCards className="h-5 w-5" />,
      image: solution1,
      color: "text-teal-600"
    },
    {
      title: "Complaint Management",
      desc: "Transform patient feedback into actionable quality improvements. Our intelligent triage system identifies critical concerns in real-time, facilitating rapid resolution and enhancing patient satisfaction.",
      icon: <MessageSquareWarning className="h-5 w-5" />,
      image: solution2,
      color: "text-blue-600"
    },
    {
      title: "Incident Management",
      desc: "Enhance patient safety through proactive risk mitigation. Record, track, and analyze clinical incidents with automated reporting to regulatory bodies and deep-dive root cause analysis tools.",
      icon: <Activity className="h-5 w-5" />,
      image: solution3,
      color: "text-red-500"
    },
    {
      title: "Asset Management",
      desc: "Optimise your facility's operational readiness. Track medical equipment lifecycle, manage preventative maintenance schedules, and reduce downtime with IoT-integrated asset monitoring solutions.",
      icon: <Cpu className="h-5 w-5" />,
      image: solution4,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="pb-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col rounded-[2rem] border border-slate-100 bg-white overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300">
              
              {/* Image Section */}
              <div className="relative w-full aspect-[16/9] bg-slate-50 overflow-hidden flex items-center justify-center p-4">
                <Image 
                  src={feat.image} 
                  alt={feat.title} 
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-slate-50 rounded-lg ${feat.color}`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1053]">{feat.title}</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-10 flex-grow">
                  {feat.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                  <button className="flex items-center text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors">
                    View More <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                  <button className="rounded-full bg-[#1A1053] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1A1053]/90 transition-all">
                    Book A Demo
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
