import { useState } from "react";

export default function RippleButton({ children, className = "", onClick, as = "button", ...props }) {
  const [ripples, setRipples] = useState([]);
  const Comp = as;

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    if (onClick) onClick(e);
  };

  return (
    <Comp
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 animate-ripple pointer-events-none"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </Comp>
  );
}
