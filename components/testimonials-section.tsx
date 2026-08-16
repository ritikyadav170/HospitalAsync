import { Star } from "lucide-react";
import Image from "next/image";
import userImg from "@/assets/images/user.jpg";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        '"HealthSync has helped us streamline our e-claim processes from data conversion and validation through submission. The reduction in manual work has made our claims operations significantly more efficient."',
      author: "Dr. Elena Rodriguez",
      role: "Chief Information Officer, St. Jude's Network",
    },
    {
      quote:
        '"The validation capabilities have made a real difference to our claims process. We can identify data issues before submission, helping our team improve claim accuracy and reduce avoidable rework."',
      author: "Michael Thompson",
      role: "Director of Revenue Cycle, Mercy Health System",
    },
    {
      quote:
        '"HealthSync gives our team greater visibility across claims and operational workflows. Having actionable data and insights in one platform helps us respond faster and make better-informed decisions."',
      author: "Priya Shah",
      role: "VP of Clinical Operations, North Valley Medical Group",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053]">
            Trusted by Healthcare Pioneers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-1 mb-6 text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              
              <p className="text-slate-600 italic leading-relaxed flex-grow mb-8 font-medium">
                {item.quote}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm ring-1 ring-slate-100">
                  <Image src={userImg} alt={item.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] text-sm">{item.author}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
