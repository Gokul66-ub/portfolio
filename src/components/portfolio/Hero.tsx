import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-purple/30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-48 h-[28rem] w-[28rem] rounded-full bg-brand-blue/25 blur-3xl animate-blob [animation-delay:-6s]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:-12s]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
            </span>
            Seeking full-time opportunities
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Gokul E</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">
            AI Engineer{" "}
            <span className="text-muted-foreground">|</span> Data Analytics
            <span className="text-muted-foreground">|</span> Frontend Developer
            <span className="text-muted-foreground">|</span> Computer Vision{" "}
            
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            B.Tech student in Artificial Intelligence &amp; Data Science with hands-on
            experience building production-grade AI applications, computer vision
            solutions, LLM-powered retrieval systems, and interactive data analytics
            dashboards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { k: "6+", v: "Projects" },
              { k: "4", v: "Certifications" },
              { k: "2026", v: "Graduating" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <dt className="text-2xl font-bold text-gradient">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-[22rem] shrink-0 lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-tri opacity-30 blur-3xl" />
          <div className="glass relative flex h-full w-full items-center justify-center rounded-3xl border-gradient">
            <div className="text-center">
             <div className="mx-auto h-58 w-58 overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.4)]">
                <img
                  src="/p1.jpeg"
                  alt="Gokul E"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-6 font-display text-lg font-semibold">
                AI Engineer
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Turning ideas into intelligent solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
