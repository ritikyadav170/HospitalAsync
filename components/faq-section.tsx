import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const faqs = [
    "Is HealthSync HIPAA and GDPR compliant?",
    "Can it integrate with our existing LIMS?",
    "How long does the implementation take?"
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053]">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((q, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
              <span className="font-semibold text-slate-700">{q}</span>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
