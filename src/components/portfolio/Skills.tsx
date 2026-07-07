import { motion } from "framer-motion";
import {
  Code, Layout, Server, Database, Brain, BarChart3, Wrench, BookOpen
} from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code,
    title: "Programming",
    items: ["Python", "SQL","JavaScript"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: [ "HTML", "CSS","Javascript","React","Bootstrap", ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    items: [
      "Machine Learning", "Deep Learning", "PyTorch", "RAG", "LLMs",
      "Pandas", "NumPy", "OpenCV", "YOLOv8",
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL","MongoDB"],
  },
  {
    icon: BookOpen,
    title: "Core Concepts",
    items: ["OOP", "DBMS"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    items: ["Power BI", "Excel"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with"
      description="A stack that spans intelligent systems, clean interfaces and everything in between."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-6 "
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-brand">
                <g.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-foreground/90 transition hover:border-brand-purple/60 hover:bg-white/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
