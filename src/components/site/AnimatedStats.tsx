import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Stat = { end: number; suffix: string; label: string; desc: string; accentColor: string };

const stats: Stat[] = [
  { end: 57,   suffix: "",  label: "Anos",       desc: "de tradicao e excelencia",    accentColor: "#9B30FF" },
  { end: 3000, suffix: "+", label: "Formados",   desc: "profissionais no mercado",    accentColor: "#6B7FFF" },
  { end: 96,   suffix: "%", label: "Empregados", desc: "taxa de empregabilidade",     accentColor: "#9B30FF" },
  { end: 100,  suffix: "%", label: "Pratica",    desc: "aprendizado 100% aplicado",  accentColor: "#4F7FFF" },
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
      className="relative flex flex-col items-center text-center px-6 py-12 group"
    >
      {/* Glow behind number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="h-32 w-32 rounded-full blur-2xl" style={{ background: `${stat.accentColor}18` }} />
      </div>

      <div className="relative font-display font-bold tabular-nums leading-none">
        <span className="text-6xl sm:text-7xl lg:text-8xl text-white">{value}</span>
        <span className="text-4xl sm:text-5xl font-bold" style={{ color: stat.accentColor }}>{stat.suffix}</span>
      </div>
      <div className="mt-4 font-display text-lg font-semibold text-white/90 tracking-tight">{stat.label}</div>
      <div className="mt-1.5 text-sm text-white/40 tracking-wide leading-relaxed">{stat.desc}</div>

      {/* Right divider */}
      <div className="absolute right-0 top-8 bottom-8 w-px hidden lg:block last:hidden"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(155,48,255,0.25), transparent)" }} />
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
    <section ref={ref} className="relative bg-primary overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(155,48,255,0.5), rgba(79,127,255,0.4), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(79,127,255,0.3), rgba(155,48,255,0.4), transparent)" }} />

      <div className="absolute inset-0 circuit-pattern opacity-[0.07]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-80 w-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(155,48,255,0.09) 0%, transparent 70%)" }} />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 pt-12 pb-2">
          <span className="h-px w-8 flex-shrink-0" style={{ background: "#9B30FF" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9B30FF" }}>
            Remington IA em numeros
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} start={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
