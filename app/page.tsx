import { ModeToggle } from "@/components/mode-toggle";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Volunteering from "@/components/volunteering";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">SF</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#volunteering"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Volunteering
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <ModeToggle />
        </div>
      </header>

      <main className="container py-8 space-y-20">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Experience />
        <Volunteering />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
