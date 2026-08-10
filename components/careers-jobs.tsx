import { ArrowRight, MapPin, Clock, Server, Stethoscope, LineChart, LayoutGrid } from "lucide-react";

export function CareersJobs() {
  const jobs = [
    {
      title: "Senior Backend Engineer (HL7/FHIR)",
      location: "Remote",
      type: "Full-time",
      dept: "Engineering",
      icon: <Server className="h-5 w-5" />,
      color: "bg-indigo-900 text-indigo-300"
    },
    {
      title: "Director of Clinical Interoperability",
      location: "New York, NY",
      type: "Full-time",
      dept: "Clinical Ops",
      icon: <Stethoscope className="h-5 w-5" />,
      color: "bg-[#2bc4ff] text-[#0a4666]"
    },
    {
      title: "Enterprise Account Executive",
      location: "Chicago / Remote",
      type: "Full-time",
      dept: "Sales",
      icon: <LineChart className="h-5 w-5" />,
      color: "bg-green-400 text-green-900"
    },
    {
      title: "Senior Product Designer",
      location: "Remote",
      type: "Full-time",
      dept: "Product",
      icon: <LayoutGrid className="h-5 w-5" />,
      color: "bg-indigo-100 text-indigo-700"
    }
  ];

  const tabs = ["All Roles", "Engineering", "Clinical Operations", "Sales & Growth", "Product"];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A1053] mb-4">Open Positions</h2>
          <p className="text-slate-500">Find your place in the HealthSync ecosystem.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button 
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 
                  ? "bg-[#1A1053] text-white" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4 mb-16">
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-indigo-200 hover:bg-indigo-50/50 transition-all cursor-pointer group">
              <div className="flex items-center gap-6 mb-4 sm:mb-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${job.color}`}>
                  {job.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1053] mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="bg-slate-200/50 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {job.dept}
                </span>
                <ArrowRight className="h-5 w-5 text-[#1A1053] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500 mb-4">Don't see a role that fits? We're always looking for talented individuals.</p>
          <a href="#general-app" className="text-[15px] font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1 hover:text-indigo-700 hover:border-indigo-700 transition-colors">
            Send a General Application
          </a>
        </div>
      </div>
    </section>
  );
}
