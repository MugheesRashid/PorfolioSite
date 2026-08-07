import { motion } from "motion/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const aiProjects = [
  {
    name: "Medisense",
    description:
      "An AI-assisted health exploration experience designed to make symptom understanding more interactive and accessible.",
    technologies: ["React", "AI Integration", "Health UX"],
    link: "https://medisense.mughees.xyz",
    purpose: "Healthcare AI experience",
  },
  {
    name: "Mediscan",
    description:
      "A healthcare-focused AI project centered on intelligent analysis, experimentation, and forward-looking medical technology engagement.",
    technologies: ["React", "AI Systems", "Medical Tech"],
    link: "https://mediscan.mughees.xyz",
    purpose: "Medical AI experimentation",
  },
];

const AIProjects = () => {
  return (
    <section id="ai-projects" className="min-h-screen bg-[#ecebe6] px-6 py-20 sm:px-10 lg:px-16">
      <AnimatedHeaderSection
        subTitle={"AI, healthcare, and future-facing product thinking"}
        title={"Medical AI"}
        text={"Visible pathways into medical AI exploration, healthcare innovation, and experimental systems."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {aiProjects.map((project) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
          >
            <p className="text-sm uppercase tracking-[0.35rem] text-black/50">{project.purpose}</p>
            <h3 className="mt-4 text-3xl font-light text-black">{project.name}</h3>
            <p className="mt-4 text-lg leading-8 text-black/70">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-sm uppercase tracking-[0.2rem] text-black/70"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-black px-4 py-2 text-sm uppercase tracking-[0.25rem] text-white transition hover:opacity-90"
            >
              Explore {project.name}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default AIProjects;
