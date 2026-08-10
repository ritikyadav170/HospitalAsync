export function InfraStats() {
  const stats = [
    { value: "42%", label: "EFFICIENCY GAIN", desc: "Reduction in administrative overhead across multi-site networks." },
    { value: "99.9%", label: "UPTIME SLA", desc: "Enterprise-grade reliability for mission-critical care environments." },
    { value: "₹14M", label: "ANNUAL SAVINGS", desc: "Average cost reduction for networks with 5,000+ beds." },
    { value: "<1S", label: "LATENCY", desc: "Real-time data synchronization across international jurisdictions." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#1A1053] mb-4">Quantifiable Enterprise Impact</h2>
          <p className="text-slate-600">Driving operational excellence and superior clinical outcomes through data-driven automation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center">
              <div className="text-5xl font-serif text-[#1A1053] mb-4 font-bold">{stat.value}</div>
              <div className="text-xs font-bold text-teal-600 tracking-wider mb-3">{stat.label}</div>
              <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
