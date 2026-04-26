import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Prepara",
    desc: "Identificação de perfil, postura profissional, comunicação e habilidades comportamentais.",
  },
  {
    num: "02",
    title: "Qualifica",
    desc: "Curso técnico intensivo com projetos práticos, mentorias e certificação reconhecida.",
  },
  {
    num: "03",
    title: "Encaminha",
    desc: "Conexão direta com empresas parceiras, banco de currículos e vagas exclusivas.",
  },
];

const stats = [
  { num: "1.000", suffix: "+", label: "alunos contratados ao longo dos últimos anos" },
  { num: "50", suffix: "+", label: "empresas parceiras em Ribeirão Preto e região" },
  { num: "9,9", suffix: "", label: "nota de satisfação (NPS) dos nossos egressos" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.15, 1] } },
};

export function ProgramaSection() {
  return (
    <section id="programa" className="section-y bg-white">
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-[clamp(40px,6vw,80px)] items-start">

          {/* ── LEFT — Copy + Steps ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Programa exclusivo
            </motion.span>

            <motion.h2 variants={fadeUp} className="section-title section-title-dark mb-6">
              Prepara, Qualifica e <em>Encaminha.</em>
            </motion.h2>

            <motion.p variants={fadeUp} className="section-lead text-[#6B7380] mb-10 max-w-[52ch]">
              A Remington não para quando o curso acaba — é só o começo. Nosso programa de empregabilidade
              desenvolve as aptidões que o mercado procura e conecta você com empresas parceiras que estão
              contratando agora.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-6 mb-10">
              {steps.map(s => (
                <motion.article
                  key={s.num}
                  variants={fadeUp}
                  className="flex gap-5"
                >
                  <span className="font-display text-3xl font-bold flex-shrink-0 leading-none"
                    style={{ color: "rgba(155,48,255,0.2)", letterSpacing: "-0.03em", marginTop: "2px" }}>
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#0B1420] mb-1.5">{s.title}</h3>
                    <p className="text-[15px] text-[#6B7380] leading-relaxed">{s.desc}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a href="#contato"
                className="inline-flex items-center gap-2 h-12 px-6 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#9B30FF", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.45)" }}>
                <span>Conheça o programa</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contato"
                className="inline-flex items-center h-12 px-6 text-sm font-medium transition-all hover:bg-black/[0.04]"
                style={{ color: "#0B1420", border: "1px solid rgba(11,20,32,0.15)", borderRadius: "999px" }}>
                Cadastrar currículo
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Stats sidebar ── */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {stats.map((s, i) => (
              <div key={s.label}
                className="p-6 rounded-[20px] transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: i % 2 === 0 ? "oklch(0.975 0.006 282)" : "#fff",
                  border: "1px solid rgba(11,8,30,0.06)",
                  boxShadow: "0 2px 8px rgba(0,39,68,0.06)",
                }}>
                <div className="flex items-end gap-1 mb-2 leading-none">
                  <span className="font-display font-bold text-[#0B1420]"
                    style={{ fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.03em" }}>
                    {s.num}
                  </span>
                  {s.suffix && (
                    <span className="font-display font-bold text-[oklch(0.58_0.28_292)] text-2xl pb-1.5">{s.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-[#6B7380] leading-snug">{s.label}</p>
              </div>
            ))}

            {/* Highlight card */}
            <div className="p-6 rounded-[20px] text-white"
              style={{
                background: "linear-gradient(160deg, oklch(0.10 0.06 280) 0%, oklch(0.07 0.05 282) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(155,48,255,0.2)" }}>
                  <Briefcase className="h-4 w-4" style={{ color: "oklch(0.58 0.28 292)" }} />
                </div>
                <h4 className="font-display font-semibold text-white">Vagas abertas agora</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Atualizamos o quadro semanalmente com posições exclusivas para alunos Remington.
              </p>
              <a href="#contato"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "oklch(0.58 0.28 292)" }}>
                Ver vagas <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
