import { UserRound, Stethoscope, Microscope, PackagePlus } from "lucide-react";
import Link from "next/link";

export function SolutionsSection() {
  const cards = [
    {
      icon: <UserRound className="h-8 w-8 text-sky-500" />,
      title: "Claim Sync",
      desc: "Automate and streamline your claims lifecycle.",
      href: "/solutions/claim-sync"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-sky-500" />,
      title: "Complaint Management",
      desc: "Transform patient feedback into actionable quality improvements.",
      href: "/solutions"
    },
    {
      icon: <Microscope className="h-8 w-8 text-sky-500" />,
      title: "Incident Management",
      desc: "Automated billing and reporting.",
      href: "/solutions"
    },
    {
      icon: <PackagePlus className="h-8 w-8 text-sky-500" />,
      title: "Asset Management",
      desc: "Basic care and inventory optimization.",
      href: "/solutions"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-sky-50/50 to-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100/50 via-white/0 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053]">
            Solutions for Every Stakeholder
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our modular platform scales to meet the unique needs of the entire healthcare lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="group flex flex-col rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-sky-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-[#1A1053] mb-3">{card.title}</h3>
              <p className="text-center text-slate-500 mb-8 flex-grow">{card.desc}</p>
              
              <div className="flex gap-3 w-full">
                <Link 
                  href={card.href}
                  className="flex-1 py-2.5 text-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  View More
                </Link>
                <Link 
                  href="/demo"
                  className="flex-1 py-2.5 text-center rounded-full bg-[#1A1053] text-sm font-semibold text-white shadow-md hover:bg-[#1A1053]/90 transition-colors"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
