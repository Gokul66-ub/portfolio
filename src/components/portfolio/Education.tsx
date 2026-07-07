import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { Section } from "./Section";

const schoolEducation = [
  {
    level: "HSC",
    school: "Maharishi Higher Secondary School",
    year: "2022",
    score: "96.6%",
  },
  {
    level: "SSLC",
    school: "Maharishi Higher Secondary School",
    year: "2020",
    score: "98.2%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      <div className="mx-auto max-w-3xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand shadow-[var(--shadow-glow)]">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                Bachelor of Technology - Artificial Intelligence And Data Science
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Madras Institute of Technology | 2022 - 2026
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-border bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    CGPA
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-gradient">
                    7.5 / 10.0
                  </dd>
                </div>
                <div className="rounded-xl border border-border bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-medium">
                    AI, ML &amp; Data Science
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {schoolEducation.map((edu, i) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand">
                  <School className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display text-base font-semibold">
                    {edu.level}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {edu.school} | {edu.year}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gradient">
                    {edu.score}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}