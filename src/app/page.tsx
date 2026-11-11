import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsShowcase />
        <Services />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
