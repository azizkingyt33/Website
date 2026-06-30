import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ProjectPageHeader from "../components/ProjectPageHeader";

const BUTTONS = [
  ["AC", "DEL", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("0");

  const evaluate = (e) => {
    try {
      const sanitized = e.replace(/×/g, "*").replace(/÷/g, "/").replace(/%/g, "/100");
      if (!sanitized) return "0";
      // eslint-disable-next-line no-new-func
      const val = Function(`"use strict"; return (${sanitized})`)();
      if (val === undefined || Number.isNaN(val) || !Number.isFinite(val)) return "Error";
      return String(Math.round(val * 1e10) / 1e10);
    } catch {
      return "Error";
    }
  };

  const press = useCallback(
    (key) => {
      if (key === "AC") {
        setExpr("");
        setResult("0");
        return;
      }
      if (key === "DEL") {
        setExpr((p) => p.slice(0, -1));
        return;
      }
      if (key === "=") {
        setResult(evaluate(expr));
        return;
      }
      setExpr((p) => p + key);
    },
    [expr]
  );

  useEffect(() => {
    setResult(evaluate(expr || "0"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expr]);

  useEffect(() => {
    const handler = (e) => {
      const map = { "*": "×", "/": "÷", Enter: "=" };
      const key = map[e.key] || e.key;
      if (/^[0-9.+\-×÷%]$/.test(key)) {
        press(key);
      } else if (key === "=") {
        press("=");
      } else if (e.key === "Backspace") {
        press("DEL");
      } else if (e.key === "Escape") {
        press("AC");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [press]);

  return (
    <div className="min-h-screen pb-20">
      <ProjectPageHeader title="Calculator" subtitle="Fully functional, keyboard supported" />

      <div className="max-w-sm mx-auto px-6">
        <div className="glass glow-border rounded-3xl p-6">
          <div className="bg-black/40 rounded-2xl p-5 mb-5 text-right min-h-[90px] flex flex-col justify-end">
            <p className="text-white/40 text-sm h-5 truncate">{expr || " "}</p>
            <p className="text-4xl font-display font-bold truncate">{result}</p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {BUTTONS.flat().map((btn, i) => (
              <motion.button
                key={btn + i}
                whileTap={{ scale: 0.9 }}
                onClick={() => press(btn)}
                className={`py-4 rounded-xl font-semibold text-lg transition-colors ${
                  btn === "="
                    ? "col-span-2 bg-accent hover:bg-accent/90"
                    : ["AC", "DEL"].includes(btn)
                    ? "bg-white/10 hover:bg-white/20 text-accent"
                    : ["÷", "×", "-", "+", "%"].includes(btn)
                    ? "bg-white/10 hover:bg-white/20 text-accent"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {btn}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
