import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Stat = { end: number; suffix: string; label: string; desc: string; color: string };

const stats: Stat[] = [
  { end: 57, suffix: "", label: "Anos", desc: "de tradicao e excelencia", color: "text-accent" },
  { end: 3000, suffix: "+", label: "Formados", desc: "profissionais no mercado", color: "text-cyan" },
  { end: 96, suffix: "%", label: "Empregados", desc: "taxa de empregabilidade", color: "text-accent" },
  { end: 100, suffix: "%", label: "Pratica", desc: "aprendizado aplicado", color: "text-cyan" },
];

function useCountUp(end: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(end);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return value;
}

function StatItem({ stat, start, index }: { stat: Stat; start: boolean; index: number }) {
  const value = useCountUp(stat.end, 1600, start);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center px-6 py-10 group"
    >
      <div className="font-display font-bold text-white tabular-nums leading-none">
        <span className="text-6xl sm:text-7xl lg:text-8xl">{value}</span>
        <span className={`text-4xl sm:text-5xl ${stat.color}`}>{stat.suffix}</span>
      </div>
      <div className="mt-4 font-display text-lg font-semibold text-white/85">{stat.label}</div>
      <div className="mt-1 text-sm text-white/40 tracking-wide">{stat.desc}</div>
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/8 hidden lg:block last:hidden" />
    </motion.div>
  );
}

export function AnimatedStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-primary border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.08]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-64 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 pt-12 pb-2">
          <span className="h-px w-8 bg-accent flex-shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Remington IA em numeros
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
