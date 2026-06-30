import { NAME, ROLE, SOCIALS } from "../utils/constants";
import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold">
            © 2026 {NAME}
          </p>
          <p className="text-white/50 text-sm">{ROLE}</p>
        </div>
        <div className="flex gap-5 text-xl text-white/60">
          <a href={SOCIALS.email} className="hover:text-accent transition-colors"><FaEnvelope /></a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
          <a href={SOCIALS.telegram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaTelegram /></a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
