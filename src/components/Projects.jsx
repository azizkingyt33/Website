import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../utils/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-medium tracking-widest uppercase mb-3 text-sm text-center"
      >
        Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-display font-bold text-center mb-14"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
