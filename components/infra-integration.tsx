import { Box, Layers, BarChart, ShieldAlert } from "lucide-react";

export function InfraIntegration() {
  const cards = [
    {
      title: "Unified EHR Connect",
      desc: "Sync patient records across disparate platforms in real-time with bidirectional data flow.",
      icon: <Layers className="h-5 w-5" />
    },
    {
      title: "Predictive Flow",
      desc: "Advanced ML models that integrate with existing scheduling tools to optimize bed management.",
      icon: <BarChart className="h-5 w-5" />
    },
    {
      title: "Cloud-Hybrid Mesh",
      desc: "Combine on-premise data security with cloud-based analytics for the best of both worlds.",
      icon: <Box className="h-5 w-5" />
    },
    {
      title: "Zero Trust Access",
      desc: "Granular permission layers and biometric authentication for every API endpoint.",
      icon: <ShieldAlert className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1053] mb-6 leading-tight">
              Strategic Integration & Interoperability
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Bridge the gap between legacy systems and modern intelligence. HealthSync's robust API layer ensures zero-friction deployments.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="bg-teal-50 p-2 rounded-lg text-teal-600 mt-1">
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] text-sm">REST & GraphQL APIs</h4>
                  <p className="text-sm text-slate-500 mt-0.5">Full developer control</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] text-sm">Legacy System Bridge</h4>
                  <p className="text-sm text-slate-500 mt-0.5">HL7, FHIR, and DICOM support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-200/40">
                  <div className="bg-slate-100 text-slate-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1053] mb-3">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
