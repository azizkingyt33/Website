import { motion } from "framer-motion";
import TypingText from "./TypingText";
import RippleButton from "./RippleButton";
import { NAME } from "../utils/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-medium tracking-widest uppercase mb-4 text-sm"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold font-display tracking-tight mb-4"
        >
          {NAME}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-display text-gradient mb-6 h-10"
        >
          <TypingText words={["Frontend Developer", "React Specialist", "UI/UX Enthusiast"]} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft fast, accessible and visually striking web experiences —
          turning ideas into clean, interactive interfaces that feel as good as they look.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <RippleButton
            as="a"
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,45,45,0.4)]"
          >
            View Projects
          </RippleButton>
          <RippleButton
            as="a"
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/20 font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Contact Me
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
}
