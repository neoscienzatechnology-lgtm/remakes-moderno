import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Bot, Stethoscope, Crown } from "lucide-react";

const courses = [
  {
    wide: true,
    Icon: GraduationCap,
    accent: "#9B30FF",
    tag: "Profissionalizante · Tech",
    name: "Jovem Profissional IA",
    desc: "Formação completa em Inteligência Artificial para o mercado de trabalho. Domine ChatGPT, Claude, automações e ferramentas que as empresas mais exigem hoje.",
    href: "/jovem-profissional-ia",
  },
  {
    wide: false,
    Icon: Bot,
    accent: "#6B7FFF",
    tag: "Infantojuvenil · Kids",
    name: "Kids IA",
    desc: "Tecnologia, automação e IA para crianças e adolescentes. Scratch, robótica, impressão 3D e apps.",
    href: "/kids-ia",
  },
  {
    wide: false,
    Icon: Stethoscope,
    accent: "#4F7FFF",
    tag: "Profissionalizante · Saúde",
    name: "Auxiliar de Veterinário",
    desc: "Capacitação prática para atuar em clínicas, petshops, hospitais veterinários e centros cirúrgicos.",
    href: "/auxiliar-veterinario",
  },
  {
    wide: false,
    Icon: Crown,
    accent: "#9B30FF",
    tag: "Curso VIP · Personalizado",
    name: "Curso VIP",
    desc: "Conteúdo personalizado e focado em resultados a curto prazo. Para quem precisa do mercado agora.",
    href: "/vip",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.15, 1] } },
};

export function CoursesSection() {
  return (
    <section id="cursos" className="section-y"
      style={{ background: "linear-gradient(180deg, #fff 0%, oklch(0.975 0.006 282) 100%)" }}>
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Section head */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Cursos &amp; Trilhas
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title section-title-dark">
              Quatro produtos,<br />um único objetivo:{" "}
              <em>sua próxima conquista.</em>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-lead text-[#6B7380] lg:pb-2"
          >
            Do profissionalizante que acelera sua entrada no mercado às trilhas especializadas.
            Cada curso foi desenhado para um momento real de carreira.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group flex flex-col rounded-[28px] overflow-hidden bg-white cursor-pointer${c.wide ? " sm:col-span-2 lg:col-span-2" : ""}`}
              style={{
                border: "1px solid rgba(11,8,30,0.06)",
                transition: "transform 0.3s cubic-bezier(0.2,0.7,0.15,1), box-shadow 0.3s cubic-bezier(0.2,0.7,0.15,1), border-color 0.3s",
              }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -20px rgba(0,39,68,0.2)", borderColor: "transparent" }}
            >
              {/* Media / gradient area */}
              <div className="relative overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: c.wide ? "16/7" : "16/9",
                  background: `linear-gradient(160deg, ${c.accent}20, ${c.accent}08)`,
                }}>
                <div className="absolute inset-0 circuit-pattern opacity-[0.15]" />
                <c.Icon
                  className="absolute opacity-[0.07] transition-transform duration-700 group-hover:scale-110"
                  style={{ width: "clamp(80px,16vw,140px)", height: "clamp(80px,16vw,140px)", color: c.accent }}
                  strokeWidth={0.8}
                />
                {/* Flag icon */}
                <div className="absolute top-4 left-4 h-14 w-14 rounded-[16px] flex items-center justify-center"
                  style={{ background: c.accent, boxShadow: `0 12px 30px -10px ${c.accent}80` }}>
                  <c.Icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-7 gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.08em]" style={{ color: c.accent }}>
                  {c.tag}
                </span>
                <h3 className="font-display text-[clamp(22px,2.2vw,28px)] font-semibold text-[#0B1420] leading-tight">
                  {c.name}
                </h3>
                <p className="text-[15px] text-[#6B7380] leading-[1.55] flex-1">{c.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold mt-3 transition-all duration-200"
                  style={{ color: "#0B1420" }}
                  onMouseEnter={e => (e.currentTarget.style.color = c.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "#0B1420")}>
                  Conheça o curso <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
