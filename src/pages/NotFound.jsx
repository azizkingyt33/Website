import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-display font-bold text-accent mb-4">404</h1>
      <p className="text-white/60 mb-8">Page not found.</p>
      <Link to="/" className="px-6 py-3 rounded-full bg-accent text-white font-semibold">
        Back Home
      </Link>
    </div>
  );
}
