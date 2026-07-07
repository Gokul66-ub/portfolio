import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Gokul66-ub",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gokul66/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:gokulegk123@gmail.com",
    label: "Email",
  },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great"
      description="Open to internships, collaborations, and full-time Software Engineer / AI Engineer roles."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col justify-between rounded-3xl p-8"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold">Reach out</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              I'll get back within 24–48 hours. For faster replies, DM me on
              LinkedIn.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand">
                  <Mail className="h-4 w-4 text-white" />
                </span>
                <a href="mailto:your.email@example.com" className="hover:underline">
                  gokulegk123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand">
                  <Github className="h-4 w-4 text-white" />
                </span>
                <a
                  href="https://github.com/Gokul66-ub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/Gokul66-ub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand">
                  <Linkedin className="h-4 w-4 text-white" />
                </span>
                <a
                  href="https://www.linkedin.com/in/gokul66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/gokul66
                </a>
              </li>
            </ul>
          </div>
          
         <div className="mt-10 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white/5 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl p-8"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Name
              </span>
              <input
                required
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-purple focus:bg-white/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-purple focus:bg-white/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-purple focus:bg-white/10"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message sent!" : "Send message"}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
