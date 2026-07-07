import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Gokul E — Software Engineer, AI & Machine Learning Enthusiast, and Full Stack Developer. Final-year IT student building intelligent, data-driven applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen">
      <PageLoader />
      <ParticleBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </motion.main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
