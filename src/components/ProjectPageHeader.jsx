import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectPageHeader({ title, subtitle }) {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-10">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors mb-6 text-sm"
      >
        <FaArrowLeft /> Back to Portfolio
      </Link>
      <h1 className="text-4xl sm:text-5xl font-display font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-white/50">{subtitle}</p>}
    </div>
  );
}
