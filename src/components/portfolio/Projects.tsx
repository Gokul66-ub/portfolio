import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Scale, BarChart3,ShoppingBag,Database,Music } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Cpu,
    title: "Continual Learning-Based Smart City Surveillance System",
    description:
      "Real-time traffic surveillance system achieving 85.5% mAP and 14 FPS on a self-curated 75-class Indian traffic dataset. Engineered a continual learning pipeline that adds new object classes without retraining from scratch, plus automated helmet-violation detection at 89% precision.",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "CNN", "Gradio"],
    gradient: "from-brand-blue/40 via-brand-purple/30 to-brand-cyan/20",
    github:"https://github.com/Gokul66-ub/Smart-city-survelliance",
    image:"/projects/smart_city.jpeg"
  },
  {
    icon: Scale,
    title: "AI-Powered Legal Assistance System",
   description:
      "End-to-end RAG system turning 850+ legal Acts into an instant Q&A assistant, hitting 88% retrieval accuracy through embedding model benchmarking. Delivers structured legal analysis, summaries, and source citations through an interactive interface — cutting manual legal research time.",
    tags: ["RAG", "LangChain", "Pinecone", "LlamaCloud", "Streamlit"],
    gradient: "from-brand-cyan/40 via-brand-blue/30 to-brand-purple/20",
    github:"",
    image:"/projects/legal_ai.jpeg"
  },
  {
    icon: BarChart3,
    title: "Library Analytics Portal",
    description:
      "Transformed fragmented data from 5 branches into a unified analytics system, giving management real-time visibility into circulation trends, member activity, and overdue-loan risk. Built a 5-page interactive dashboard powering data-driven decisions across the library network.",
    tags: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
    gradient: "from-brand-purple/40 via-brand-cyan/30 to-brand-blue/20",
    github:"https://github.com/Gokul66-ub/Library-Analytics-Portal",
    image:"/projects/library_portal.jpeg"
  },
  {
    icon: ShoppingBag,
    title: "Evara - E-Commerce Fashion Website",
    description: "Fully responsive e-commerce fashion site built with vanilla HTML, CSS, and JavaScript — no frameworks. Features a complete shopping flow across 8 pages including product browsing, cart, wishlist, comparison, and account dashboard, with dynamic cart calculations and live deal countdowns.",
    tags: ["HTML5", "CSS3", "JavaScript", "DOM"],
    gradient: "from-brand-cyan/40 via-brand-purple/30 to-brand-blue/20",
    github: "https://github.com/Gokul66-ub/e-commerce-website",
    demo: "https://shopping-site-dusky.vercel.app/",
    image:"/projects/ecommerce_shop.jpeg"
  },
  {
    icon: Music,
    title: "Spotify Clone – Interactive Music Streaming Platform",
    description:
      "Developed a responsive Spotify-inspired music streaming application using React 18 and Context API. Integrated the HTML5 Audio API for real-time playback, synchronized seekbar updates, dynamic playlist navigation, and seamless user interaction through React Router.",
    tags: [
      "React 18",
      "Context API",
      "React Router",
      "Bootstrap 5",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    gradient: "from-brand-green/40 via-brand-blue/30 to-brand-purple/20",
    github: "https://github.com/Gokul66-ub/sql_p2_library_management",
    demo: "https://spotify-clone-kappa-blush-93.vercel.app/",
    image:"/projects/spotify.jpeg"
  },
  {
    icon: Database,
    title: "Food Delivery System - SQL Analytics",
    description:
      "Designed a normalized database simulating a food delivery platform (customers, restaurants, riders, orders, deliveries) and synthesized realistic data using Python's Faker library. Wrote 20+ advanced SQL queries using window functions and CTEs to analyze customer segmentation, restaurant growth, rider performance, and revenue trends.",
    tags: ["SQL", "MySQL", "Window Functions", "Python"],
    gradient: "from-brand-cyan/40 via-brand-blue/30 to-brand-purple/20",
    github: "https://github.com/Gokul66-ub/sql_p3_food_delivery_system",
    image:"/projects/food_delivery.jpeg"
  },
  {
    icon: Database,
    title: "Library Management System - SQL Analytics",
    description:
      "Designed a normalized SQL database with 6 interrelated tables covering branches, employees, members, and book transactions. Implemented stored procedures for automated book issuing/returns, and wrote advanced queries for overdue tracking, fine calculation, and branch-wise performance reporting.",
    tags: ["SQL", "MySQL", "Database Design", "Stored Procedures"],
    gradient: "from-brand-blue/40 via-brand-cyan/30 to-brand-purple/20",
    github: "https://github.com/Gokul66-ub/sql_p2_library_management",
    image:"/projects/library_bi.jpeg"
  }
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Work I'm proud of"
      description="A selection of projects across AI, full stack development and data analytics."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-3xl transition hover:-translate-y-1"
          >
            {/* Cover */}
           <div
              className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-72 w-full object-cover object-top transition group-hover:scale-105"
                />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"
                  />
                  <span className="grid h-20 w-20 place-items-center rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                    <p.icon className="h-10 w-10 text-white" />
                  </span>
                </>
              )}
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={p.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-3.5 py-2 text-xs font-semibold transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-3.5 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
