import { motion } from "framer-motion";
import { ArrowRight, Play, Code, Cpu, Wifi, Bot } from "lucide-react";

const metaStats = [
  { num: "57", suffix: "+", label: "anos de história" },
  { num: "50", suffix: "+", label: "qualificações profissionais" },
  { num: "98", suffix: "%", label: "satisfação dos alunos" },
];

const marqueeItems = [
  "Ribeirão Preto", "·", "57 anos", "·", "Formação profissional", "·",
  "Inteligência Artificial", "·", "Prepara, Qualifica e Encaminha", "·",
  "Carreira tech", "·", "Educação para o futuro", "·",
  "Ribeirão Preto", "·", "57 anos", "·", "Formação profissional", "·",
  "Inteligência Artificial", "·", "Prepara, Qualifica e Encaminha", "·",
  "Carreira tech", "·", "Educação para o futuro", "·",
];

const chips = [
  { Icon: Code, label: "Python", top: "12%", left: "18%", delay: 0 },
  { Icon: Cpu, label: "IA", top: "42%", left: "-2%", delay: 1.5 },
  { Icon: Wifi, label: "IoT", bottom: "18%", right: "8%", delay: 3 },
];

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden" style={{ background: "oklch(0.07 0.05 282)" }}>

      {/* Background layers */}
      <div className="absolute inset-0 circuit-pattern-nodes opacity-[0.15]" />
      <div className="absolute inset-0 hex-pattern opacity-[0.05]" />

      {/* Glows */}
      <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.20) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.15) 0%, transparent 65%)" }} />

      {/* Main content */}
      <div className="relative container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px", paddingTop: "clamp(100px,12vw,160px)", paddingBottom: "clamp(60px,8vw,100px)" }}>

        <div className="grid lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.15, 1] }}
          >
            {/* Eyebrow */}
            <span className="eyebrow mb-6 block">
              <span className="eyebrow-dot" />
              Educação para o Futuro · desde 1969
            </span>

            {/* Headline */}
            <h1 className="section-title section-title-light mb-6" style={{ fontSize: "clamp(2.5rem,5.5vw,4rem)" }}>
              Formamos quem vai{" "}
              <em style={{ fontStyle: "normal", color: "oklch(0.58 0.28 292)" }}>programar</em>{" "}
              o próximo capítulo do mercado.
            </h1>

            {/* Sub */}
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(15px,1.4vw,17px)", maxWidth: "52ch" }}>
              Há <strong style={{ color: "#fff" }}>57 anos</strong> qualificando profissionais em Ribeirão Preto.
              Mais de <strong style={{ color: "#fff" }}>50 cursos</strong> que unem fundamentos clássicos à inteligência
              artificial, IoT e empregabilidade real.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#cursos"
                className="inline-flex items-center gap-2 h-12 px-7 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "oklch(0.58 0.28 292)", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.5)" }}>
                <span>Explorar cursos</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programa"
                className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium transition-all hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px" }}>
                <Play className="h-4 w-4" />
                Prepara, Qualifica e Encaminha
              </a>
            </div>

            {/* Meta stats */}
            <div className="flex flex-wrap gap-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {metaStats.map(s => (
                <div key={s.label}>
                  <div className="flex items-end gap-0.5 leading-none mb-1.5">
                    <span className="font-display font-bold text-white"
                      style={{ fontSize: "clamp(28px,4vw,40px)", letterSpacing: "-0.03em" }}>
                      {s.num}
                    </span>
                    <span className="font-display font-bold text-[oklch(0.58_0.28_292)] text-xl pb-1">{s.suffix}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Mockup Stage ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.7, 0.15, 1] }}
            className="relative hidden lg:block"
            style={{ minHeight: "420px" }}
          >
            {/* Laptop mockup */}
            <div className="relative mx-auto" style={{ maxWidth: "480px" }}>
              <div className="rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
                }}>
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
                  <div className="ml-3 flex-1 h-6 rounded-full flex items-center px-3 text-[11px]"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}>
                    remington.com.br/jovem-profissional-ia
                  </div>
                </div>

                {/* Screen content */}
                <div className="p-6 space-y-3">
                  <div className="h-3 rounded-full w-1/3" style={{ background: "rgba(155,48,255,0.4)" }} />
                  <div className="h-2 rounded-full w-3/4" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="h-2 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.07)" }} />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["ChatGPT", "Claude", "Gemini", "Copilot", "Midjourney", "Canva"].map(t => (
                      <div key={t} className="rounded-lg py-2 px-3 text-[11px] font-medium"
                        style={{ background: "rgba(155,48,255,0.15)", color: "rgba(155,48,255,0.9)", border: "1px solid rgba(155,48,255,0.2)" }}>
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 p-2 rounded-lg"
                    style={{ background: "rgba(155,48,255,0.1)", border: "1px solid rgba(155,48,255,0.15)" }}>
                    <Bot className="h-4 w-4" style={{ color: "oklch(0.58 0.28 292)" }} />
                    <span className="text-xs font-medium text-white/70">
                      Jovem Profissional IA · Turma 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone mockup — overlapping bottom-right */}
              <div className="absolute -bottom-8 -right-10 w-36 rounded-[24px] overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5)",
                }}>
                <div className="mx-auto mt-3 h-1 w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
                <div className="p-3 mt-2 space-y-2">
                  <div className="h-2 rounded-full" style={{ background: "rgba(107,127,255,0.4)" }} />
                  <div className="h-1.5 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <div className="h-1.5 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.06)" }} />
                  <div className="mt-3 rounded-lg p-2 text-[10px] font-medium"
                    style={{ background: "rgba(107,127,255,0.15)", color: "rgba(107,127,255,0.9)", border: "1px solid rgba(107,127,255,0.2)" }}>
                    <Bot className="h-3 w-3 mb-1" />
                    Kids IA · 8–14 anos
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              {chips.map(({ Icon, label, delay, ...pos }) => (
                <div
                  key={label}
                  className="absolute animate-float hidden xl:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 text-white/80"
                  style={{
                    ...pos,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "999px",
                    backdropFilter: "blur(8px)",
                    animationDelay: `${delay}s`,
                  }}
                >
                  <Icon className="h-3.5 w-3.5 text-[oklch(0.58_0.28_292)]" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="relative overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "20px 0",
          marginTop: "clamp(40px,6vw,80px)",
        }}>
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ fontSize: "clamp(14px,1.2vw,18px)" }}>
            {marqueeItems.map((item, i) => (
              <span key={i}
                style={{ color: item === "·" ? "rgba(155,48,255,0.8)" : "rgba(255,255,255,0.55)" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
