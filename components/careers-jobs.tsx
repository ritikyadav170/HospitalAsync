import { ArrowRight, MapPin, Clock, Server, Stethoscope, LineChart, LayoutGrid } from "lucide-react";

export function CareersJobs() {
  const jobs = [
    {
      title: "Senior Backend Engineer (HL7/FHIR)",
      location: "Remote",
      type: "Full-time",
      dept: "Engineering",
      icon: <Server className="h-5 w-5" />,
      color: "bg-[#1A1053] text-[#2bc4ff]"
    },
    {
      title: "Director of Clinical Interoperability",
      location: "New York, NY",
      type: "Full-time",
      dept: "Clinical Ops",
      icon: <Stethoscope className="h-5 w-5" />,
      color: "bg-teal-500 text-white"
    },
    {
      title: "Enterprise Account Executive",
      location: "Chicago / Remote",
      type: "Full-time",
      dept: "Sales",
      icon: <LineChart className="h-5 w-5" />,
      color: "bg-emerald-600 text-white"
    },
    {
      title: "Senior Product Designer",
      location: "Remote",
      type: "Full-time",
      dept: "Product",
      icon: <LayoutGrid className="h-5 w-5" />,
      color: "bg-indigo-600 text-white"
    }
  ];

  const tabs = ["All Roles", "Engineering", "Clinical Operations", "Sales & Growth", "Product"];

  return (
    <section id="openings" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
            JOIN US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1053] tracking-tight mb-4">
            Open Positions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Find your place in the HealthSync ecosystem and accelerate global care.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${i === 0
                  ? "bg-[#1A1053] text-white shadow-md"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4 mb-14">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 rounded-3xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-5 mb-4 sm:mb-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${job.color}`}>
                  {job.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#1A1053] mb-1.5 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-slate-400" /> {job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold">
                  {job.dept}
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1A1053] group-hover:bg-[#1A1053] group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-3">Don&apos;t see a role that fits? We&apos;re always looking for talented individuals.</p>
          <a href="#general-app" className="text-sm font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
            Send a General Application
          </a>
        </div>
      </div>
    </section>
  );
}
