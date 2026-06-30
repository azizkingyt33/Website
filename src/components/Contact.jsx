import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { SOCIALS } from "../utils/constants";
import RippleButton from "./RippleButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    { icon: <FaEnvelope />, label: "Email", href: SOCIALS.email },
    { icon: <FaGithub />, label: "GitHub", href: SOCIALS.github },
    { icon: <FaTelegram />, label: "Telegram", href: SOCIALS.telegram },
    { icon: <FaLinkedin />, label: "LinkedIn", href: SOCIALS.linkedin },
  ];

  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-medium tracking-widest uppercase mb-3 text-sm text-center"
      >
        Get In Touch
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-display font-bold text-center mb-14"
      >
        Let's Work Together
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <p className="text-white/60 leading-relaxed mb-2">
            Have a project in mind or just want to say hello? My inbox is always open.
            I'll do my best to get back to you within a day or two.
          </p>
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="glass glow-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:translate-x-1 transition-transform"
            >
              <span className="text-accent text-xl">{c.icon}</span>
              <span className="font-medium">{c.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 flex flex-col gap-5"
        >
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30"
          />
          <textarea
            required
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-white/30 resize-none"
          />
          <RippleButton
            type="submit"
            className="bg-accent text-white font-semibold rounded-xl py-3.5 hover:scale-[1.02] transition-transform"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </RippleButton>
        </motion.form>
      </div>
    </section>
  );
}
