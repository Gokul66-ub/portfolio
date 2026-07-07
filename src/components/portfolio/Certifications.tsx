import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { name: "Power BI Data Analyst Professional Certificate", issuer: "Microsoft",link:"https://drive.google.com/file/d/1o82m81__7LzWAXLF_SI0cGkXJA16lIiO/view"},
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI",link:"https://drive.google.com/file/d/1VshgrmARlyV7skrcpmkDil4Epokc8jvJ/view"},
  { name: "Python 3 Programming Specialization", issuer: "University of Michigan",link:"https://drive.google.com/file/d/117Xly_xV_YT1qHvErc3qSz1IVrRnhS3P/view" },
  { name: "Excel Skills for Business Specialization", issuer: "Macquarie University",link:"https://drive.google.com/file/d/1vC0dxyh020ckwwLemCrrHNO5BPEzI4rt/view"},
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      description="Selected certifications backing my skills in AI, data and software development."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand">
              <Award className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-snug">
              {c.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
            <a
              href={c.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs font-semibold text-brand-cyan hover:underline"
            >
              View credential →
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
