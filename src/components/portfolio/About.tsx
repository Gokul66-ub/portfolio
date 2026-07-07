import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Sparkles } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: Brain,
    title: "AI & Data Science",
    text: "Deep interest in machine learning, deep learning, and building intelligent systems.",
  },
  {
    icon: Code2,
    title: "BI & Data Analytics",
    text: "Skilled in Power BI, DAX, Excel and SQL — building interactive dashboards and data-driven reporting solutions.",
  },
  {
    icon: Rocket,
    title: "Real-world Impact",
    text: "Motivated to solve real problems with clean, scalable, production-ready solutions.",
  },
  {
    icon: Sparkles,
    title: "Fast Learner",
    text: "Strong analytical thinking, curious mindset, and always shipping something new.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Turning ideas into intelligent products"
      description="B.Tech student in Artificial Intelligence & Data Science, with hands-on experience in computer vision, LLM-based retrieval systems, and BI development — actively looking for full-time opportunities in a data-driven organisation."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group relative rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand shadow-[var(--shadow-glow)]">
              <h.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {h.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
