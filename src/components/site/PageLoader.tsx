import { useEffect, useState } from "react";

const LETTERS = ["R", "E", "M", "I", "N", "G", "T", "O", "N"];

export function PageLoader() {
  const [gone, setGone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 2000);
    const t2 = setTimeout(() => setHidden(true), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{
        background: "oklch(0.07 0.05 282)",
        transition: "opacity 0.6s cubic-bezier(0.2,0.7,0.15,1), visibility 0.6s cubic-bezier(0.2,0.7,0.15,1)",
        opacity: gone ? 0 : 1,
        visibility: gone ? "hidden" : "visible",
        pointerEvents: gone ? "none" : "auto",
      }}
    >
      <div className="flex gap-[clamp(4px,0.8vw,10px)] font-display font-bold text-white"
        style={{ fontSize: "clamp(32px,6vw,56px)", letterSpacing: "-0.02em" }}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="loader-letter"
            style={{
              animationDelay: `${0.02 + i * 0.04}s`,
              color: i === 8 ? "oklch(0.58 0.28 292)" : "#fff",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
