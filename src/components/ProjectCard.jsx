import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="glass glow-border rounded-3xl overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.name}</h3>
        <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={project.path}
            className="flex-1 text-center px-4 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
