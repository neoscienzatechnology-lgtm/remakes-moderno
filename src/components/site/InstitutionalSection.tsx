import { motion } from "framer-motion";
import { Compass, MountainSnow, ShieldCheck, Check } from "lucide-react";

const pillars = [
  {
    Icon: Compass,
    title: "Missão",
    desc: "Melhorar a vida dos nossos alunos através da formação profissional.",
  },
  {
    Icon: MountainSnow,
    title: "Visão",
    desc: "A formação profissional é o melhor caminho para o seu sucesso.",
  },
  {
    Icon: ShieldCheck,
    title: "Valores",
    desc: "Integridade, Sinceridade, Fidelidade, Humildade, Dignidade e Verdade.",
  },
];

const bullets = [
  "Aulas presenciais em Ribeirão Preto",
  "Programa de empregabilidade ativo",
  "Certificação reconhecida pelo mercado",
  "Professores com vivência real na indústria",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.15, 1] } },
};

export function InstitutionalSection() {
  return (
    <section id="institucional" className="section-y bg-white">
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-[clamp(40px,6vw,80px)] items-start">

          {/* ── LEFT — Copy ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Quem somos
            </motion.span>

            <motion.h2 variants={fadeUp} className="section-title section-title-dark mb-6">
              A maior rede de formação profissional de{" "}
              <em>Ribeirão Preto</em>.
            </motion.h2>

            <motion.p variants={fadeUp} className="section-lead text-[#6B7380] max-w-[55ch] mb-10">
              A Remington nasceu para resolver uma pergunta simples: como preparar pessoas para o mercado real?
              Ao longo de mais de meio século, criamos{" "}
              <strong style={{ color: "#0B1420" }}>mais de 50 qualificações profissionais</strong>{" "}
              com um propósito único — transformar estudo em carreira.
            </motion.p>

            {/* Pillars */}
            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-3 gap-4"
            >
              {pillars.map(({ Icon, title, desc }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  className="p-6 rounded-[20px] border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "oklch(0.975 0.006 282)",
                    border: "1px solid rgba(11,8,30,0.06)",
                    boxShadow: "0 2px 8px rgba(0,39,68,0.06)",
                  }}
                  whileHover={{ boxShadow: "0 12px 32px -12px rgba(0,39,68,0.18)" }}
                >
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "oklch(0.07 0.05 282)" }}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0B1420] mb-1.5">{title}</h3>
                  <p className="text-sm text-[#6B7380] leading-relaxed">{desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Visual box ── */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.15, 1] }}
            className="relative rounded-[28px] p-10 overflow-hidden text-white"
            style={{
              background: "linear-gradient(160deg, oklch(0.10 0.06 280) 0%, oklch(0.07 0.05 282) 100%)",
            }}
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(155,48,255,0.25) 0%, transparent 70%)", filter: "blur(40px)", opacity: 0.5 }} />

            {/* Big stat */}
            <div className="flex items-end gap-4 mb-10 relative">
              <span className="font-display font-semibold text-white leading-none"
                style={{ fontSize: "clamp(64px,8vw,96px)", letterSpacing: "-0.03em" }}>
                57
              </span>
              <span className="font-display font-semibold text-[oklch(0.58_0.28_292)] pb-3"
                style={{ fontSize: "clamp(32px,4vw,48px)" }}>
                +
              </span>
              <span className="text-white/60 pb-3 text-sm uppercase tracking-wider leading-snug">
                anos<br />de história
              </span>
            </div>

            {/* Bullets */}
            <ul className="relative flex flex-col gap-3">
              {bullets.map(b => (
                <li key={b} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0"
                    style={{ background: "rgba(155,48,255,0.15)", border: "1px solid rgba(155,48,255,0.3)" }}>
                    <Check className="h-3 w-3" style={{ color: "oklch(0.58 0.28 292)" }} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
