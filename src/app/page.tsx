import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Education from "../components/education";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import TechLogos from "../components/techlogos";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-bg bg-cyber-grid text-slate-100">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <TechLogos /> {/* Posisikan sebelum Footer */}
      </div>
      <Footer />
    </main>
  );
}