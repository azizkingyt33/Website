import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-medium tracking-widest uppercase mb-3 text-sm text-center"
      >
        About Me
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-display font-bold text-center mb-10"
      >
        The Person Behind the Code
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass rounded-3xl p-8 sm:p-12 text-center"
      >
        <p className="text-white/70 leading-relaxed text-lg">
          I'm Muhammadaziz, a Frontend Developer passionate about building interfaces
          that are both beautiful and functional. I specialize in React and modern
          CSS frameworks like Tailwind, focusing on performance, accessibility and
          pixel-perfect detail. I enjoy turning complex problems into simple, elegant
          solutions — and I'm constantly exploring new tools and techniques to push
          the web forward. When I'm not coding, I'm studying design trends, refining
          my craft, and looking for the next interesting challenge to build.
        </p>
      </motion.div>
    </section>
  );
}
