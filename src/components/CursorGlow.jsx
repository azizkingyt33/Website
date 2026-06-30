import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(255,45,45,0.12) 0%, rgba(255,45,45,0) 70%)",
        transition: "transform 0.12s ease-out",
      }}
    />
  );
}
