import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Gokul66-ub",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gokul66",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:gokulegk123@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gokul E. Crafted with care.
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-white/5 transition hover:bg-white/10"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}