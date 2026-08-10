export function StatsSection() {
  return (
    <section className="bg-[#2A2B66] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-4xl md:text-5xl font-serif text-slate-200">100K<span className="text-slate-400 font-sans font-light">+</span></span>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Patients Managed</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-4xl md:text-5xl font-serif text-slate-200">500<span className="text-slate-400 font-sans font-light">+</span></span>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Medical Centers</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-4xl md:text-5xl font-serif text-slate-200">1.2M</span>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Daily Syncs</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-4xl md:text-5xl font-serif text-slate-200">24/7</span>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
