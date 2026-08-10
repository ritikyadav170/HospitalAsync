import { Heart, Rocket, Globe2, Users2 } from "lucide-react";

export function CareersCulture() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        {/* Header Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1A1053] mb-4">Life at HealthSync</h2>
            <p className="text-slate-600 leading-relaxed">
              We prioritize clinical precision with technical agility. Our culture is built on trust, transparency, and a shared passion for patient outcomes.
            </p>
          </div>
          <div className="flex gap-8 border-l-2 border-slate-100 pl-6 shrink-0">
            <div>
              <div className="text-3xl font-extrabold text-[#1A1053]">500+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Employees</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#1A1053]">12</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Countries</div>
            </div>
          </div>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Large Image Card */}
          <div className="lg:col-span-2 relative rounded-[2rem] overflow-hidden group">
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1053]/90 via-transparent to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaborating" 
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20">
              <h3 className="text-2xl font-bold text-white mb-3">Interdisciplinary Excellence</h3>
              <p className="text-white/80 max-w-md text-sm md:text-base leading-relaxed">
                Bridging the gap between software engineering and clinical operations requires a unique blend of empathy and technical rigour.
              </p>
            </div>
          </div>

          {/* Blue Highlight Card */}
          <div className="bg-[#2bc4ff] rounded-[2rem] p-8 md:p-10 flex flex-col text-[#0a4666]">
            <Heart className="h-8 w-8 mb-6 stroke-[1.5]" />
            <h3 className="text-2xl font-bold mb-4">Health First</h3>
            <p className="leading-relaxed font-medium">
              Comprehensive medical, dental, and mental health support for every single employee from day one.
            </p>
          </div>

          {/* 3 Bottom Cards */}
          <div className="border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/20">
            <div className="bg-green-400 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
              <Rocket className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#1A1053] mb-3">Continuous Growth</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Annual learning stipends and internal mobility programs to keep your career synchronized with your goals.
            </p>
          </div>

          <div className="border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/20">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              <Globe2 className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#1A1053] mb-3">Remote-Native</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Work from where you are most productive. Our infrastructure is built for global collaboration.
            </p>
          </div>

          <div className="border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/20">
            <div className="bg-cyan-100 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-600 mb-6">
              <Users2 className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-[#1A1053] mb-3">Work-Life Balance</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Unlimited PTO and parental leave policies designed to support your life beyond the screen.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
