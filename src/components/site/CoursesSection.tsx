import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Bot, Stethoscope, Crown, GraduationCap } from "lucide-react";

const courses = [
  {
    Icon: GraduationCap,
    name: "Jovem Profissional IA",
    tag: "Profissionalizante",
    tagColor: "#9B30FF",
    desc: "Formacao completa em IA para o mercado de trabalho. Domine as ferramentas que as empresas mais exigem hoje.",
    hours: "176h",
    duration: "24 meses",
    highlights: ["ChatGPT & Claude", "Office com IA", "Producao de Conteudo", "Empregabilidade"],
    href: "/jovem-profissional-ia",
    accentColor: "#9B30FF",
  },
  {
    Icon: Bot,
    name: "Kids IA",
    tag: "Infantojuvenil",
    tagColor: "#6B7FFF",
    desc: "Tecnologia, automacao e IA para criancas e adolescentes. Scratch, robotica, impressao 3D e apps.",
    hours: "176h",
    duration: "24 meses",
    highlights: ["Robotica & Arduino", "Scratch & Games", "Modelagem 3D", "Apps com IA"],
    href: "/kids-ia",
    accentColor: "#6B7FFF",
  },
  {
    Icon: Stethoscope,
    name: "Auxiliar de Veterinario",
    tag: "Saude Animal",
    tagColor: "#9B30FF",
    desc: "Capacitacao completa para clinicas, petshops e hospitais. 13 modulos e 16h de pratica clinica real.",
    hours: "80h",
    duration: "10 meses",
    highlights: ["Clinica & Cirurgia", "Farmacologia", "Primeiros Socorros", "Pratica Real"],
    href: "/auxiliar-veterinario",
    accentColor: "#9B30FF",
  },
  {
    Icon: Crown,
    name: "Curso VIP",
    tag: "Personalizavel",
    tagColor: "#4F7FFF",
    desc: "Curso sob medida: escolha sua area entre design, programacao, marketing, AutoCAD, video e muito mais.",
    hours: "Flexivel",
    duration: "Personalizado",
    highlights: ["Office & Power BI", "Design & Video", "Marketing Digital", "AutoCAD & Unity"],
    href: "/vip",
    accentColor: "#4F7FFF",
  },
];

export function CoursesSection() {
  return (
    <section className="bg-surface-light py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "#9B30FF" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9B30FF" }}>Todos os cursos</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-on-light">
              Escolha seu{" "}
              <span className="text-gradient">caminho</span>.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="text-muted-light text-base lg:text-lg leading-relaxed lg:pb-1">
            Da tecnologia a saude animal, do infantojuvenil ao profissional personalizado.
            57 anos formando quem transforma o mercado.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col bg-white card-shadow card-lift overflow-hidden"
              style={{ border: "1px solid rgba(11,8,30,0.07)" }}
            >
              {/* Gradient header */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${c.accentColor}22, ${c.accentColor}0a)` }}>
                <div className="absolute inset-0 circuit-pattern opacity-20" />
                <c.Icon className="absolute h-28 w-28 opacity-[0.06]" strokeWidth={1} style={{ color: c.accentColor }} />
                <div className="relative flex h-16 w-16 items-center justify-center"
                  style={{ background: "white", border: `1.5px solid ${c.accentColor}40`, boxShadow: `0 4px 20px ${c.accentColor}25` }}>
                  <c.Icon className="h-7 w-7" style={{ color: c.accentColor }} />
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: c.tagColor }}>
                  {c.tag}
                </span>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-medium"
                  style={{ color: c.accentColor }}>
                  <Clock className="h-3 w-3" /> {c.duration}
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-5">
                <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: c.accentColor }}>{c.hours}</div>
                <h3 className="font-display text-base font-bold text-on-light leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-light leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.highlights.map(h => (
                    <span key={h} className="px-2 py-0.5 text-[10px] font-medium"
                      style={{ background: `${c.accentColor}10`, color: c.accentColor, border: `1px solid ${c.accentColor}25` }}>
                      {h}
                    </span>
                  ))}
                </div>
                <Link to={c.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: c.accentColor }}>
                  Ver curso completo <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
