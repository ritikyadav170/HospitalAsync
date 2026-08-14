import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
