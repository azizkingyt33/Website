import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaMobileAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SKILLS } from "../utils/constants";

const icons = {
  HTML: <FaHtml5 className="text-3xl" />,
  CSS: <FaCss3Alt className="text-3xl" />,
  JavaScript: <FaJsSquare className="text-3xl" />,
  React: <FaReact className="text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-3xl" />,
  Git: <FaGitAlt className="text-3xl" />,
  "Responsive Design": <FaMobileAlt className="text-3xl" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-medium tracking-widest uppercase mb-3 text-sm text-center"
      >
        My Toolbox
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-display font-bold text-center mb-14"
      >
        Skills &amp; Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.06, y: -6 }}
            className="glass glow-border rounded-2xl p-6 flex flex-col items-center gap-4 cursor-default"
          >
            <div className="text-accent">{icons[skill.name]}</div>
            <p className="font-medium">{skill.name}</p>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
