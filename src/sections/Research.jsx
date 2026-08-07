import { motion } from "motion/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const researchHighlights = [
  {
    label: "Research focus",
    value: "Medical AI, clinical decision support, and responsible healthcare technology",
  },
  {
    label: "Current status",
    value: "Research paper under review",
  },
  {
    label: "Contribution",
    value: "Technical prototyping, research synthesis, and product-minded experimentation",
  },
];

const Research = () => {
  const paperUrl = "/assets/Research_Paper.pdf";

  return (
    <section
      id="research"
      className="min-h-screen rounded-t-[2rem] bg-[#0f1012] px-6 py-20 text-white sm:px-10 lg:px-16"
    >
      <AnimatedHeaderSection
        subTitle={"Research, systems, and responsible AI"}
        title={"Research"}
        text={
          "Exploring AI systems for healthcare, interpretability, and meaningful medical technology impact."
        }
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.article
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.35rem] text-white/60">
            Brand positioning
          </p>
          <h2 className="mt-4 text-3xl font-light sm:text-4xl">
            Building software products while moving toward medical AI research.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            I develop full-stack applications with a strong product and engineering foundation,
            while gradually expanding into medical AI research, healthcare-focused experimentation,
            and responsible AI systems that could support real-world clinical workflows.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {researchHighlights.map((item) => (
              <div key={item.label} className="rounded-[1.1rem] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.3rem] text-white/45">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/80">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://profile.mughees.xyz"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.25rem] text-white/80 transition hover:border-white hover:bg-white/10"
            >
              View Mughees Rashid&apos;s profile
            </a>
            <a
              href="https://medisense.mughees.xyz"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.25rem] text-white/80 transition hover:border-white hover:bg-white/10"
            >
              Explore Medisense
            </a>
            <a
              href="https://mediscan.mughees.xyz"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.25rem] text-white/80 transition hover:border-white hover:bg-white/10"
            >
              Explore Mediscan
            </a>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.25 }}
          className="rounded-[2rem] border border-white/10 bg-[#15171b] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#1f2430] via-[#11141b] to-[#0b0d11] p-5">
            <div className="rounded-[1.2rem] border border-white/10 bg-black/30 p-4">
              <p className="text-sm uppercase tracking-[0.35rem] text-white/60">
                Research paper preview
              </p>
              <div className="mt-5 rounded-[1rem] border border-white/10 bg-white/10 p-4">
                <div className="flex min-h-[220px] flex-col justify-between rounded-[0.9rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_40%)] p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35rem] text-white/50">Under review</p>
                    <h3 className="mt-3 text-2xl font-light leading-tight text-white">
                      Medical AI Research Paper
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      A research-focused exploration of AI-assisted healthcare systems, machine learning
                      applications, and thoughtful implementation strategy.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                    >
                      Open PDF
                    </a>
                    <a
                      href={paperUrl}
                      download
                      className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      Download Research Paper (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.35rem] text-white/50">Paper details</p>
              <h3 className="mt-3 text-2xl font-light text-white">
                Mughees Rashid — Medical AI Research Paper
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                This paper highlights the role of machine learning and intelligent systems in healthcare,
                while framing the broader research direction behind responsible medical AI innovation.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                <li>
                  <span className="font-medium text-white">Research domain:</span> Medical AI,
                  Machine Learning, Healthcare AI
                </li>
                <li>
                  <span className="font-medium text-white">My contribution:</span> Technical research,
                  implementation strategy, and product-focused experimentation
                </li>
                <li>
                  <span className="font-medium text-white">Current status:</span> Under Review
                </li>
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Research;
