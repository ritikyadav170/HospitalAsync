import { Navbar } from "@/components/navbar";
import { CareersHero } from "@/components/careers-hero";
import { CareersCulture } from "@/components/careers-culture";
import { CareersJobs } from "@/components/careers-jobs";
import { CareersApplication } from "@/components/careers-application";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CareersHero />
        <CareersCulture />
        <CareersJobs />
        <CareersApplication />
      </div>
      <Footer />
    </main>
  );
}
