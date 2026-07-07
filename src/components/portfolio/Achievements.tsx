import { motion } from "framer-motion";
import { Trophy, Code2, Award, Github, Star } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Award, title: "Certifications", text: "Multiple industry-recognized certifications across AI and analytics." },
  { icon: Trophy, title: "Typewriting", text: "Junior Grade Typewriting Certificate - Tamil Nadu Government Technical Examinations." },
  { icon: Star, title: "LeetCode", text: "Active on LeetCode - sharpening problem-solving daily." },
  { icon: Code2, title: "Coding", text: "Consistent problem-solver across data structures and algorithms." },
  { icon: Github, title: "GitHub", text: "Regular open-source contributions and personal project commits." },
];
export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones & highlights"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand">
              <it.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
