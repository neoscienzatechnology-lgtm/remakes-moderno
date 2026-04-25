import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Cpu, Bot, Stethoscope, Crown } from "lucide-react";

const courses = [
  {
    Icon: Cpu,
    name: "InovaTech",
    tag: "Tecnologia",
    desc: "Profissional multidisciplinar em programacao, IA e IoT. Do Front-End ao Python, do No-Code ao empreendedorismo digital.",
    hours: "176h",
    duration: "24 meses",
    highlights: ["IA & ChatGPT", "Python & Data", "IoT & Arduino", "Front-End"],
    href: "/inovatech",
    gradFrom: "rgba(155,48,255,0.30)",
    gradTo: "rgba(79,127,255,0.15)",
    border: "rgba(155,48,255,0.45)",
    accentClass: "text-accent",
  },
  {
    Icon: Bot,
    name: "TechKids",
    tag: "Infantojuvenil",
    desc: "Tecnologia, automacao e IA para criancas e adolescentes. Scratch, robotica, impressao 3D e desenvolvimento de apps.",
    hours: "176h",
    duration: "24 meses",
    highlights: ["Robotica & Arduino", "Scratch & Games", "Modelagem 3D", "Apps Sem Codigo"],
    href: "/techkids",
    gradFrom: "rgba(107,127,255,0.30)",
    gradTo: "rgba(155,48,255,0.15)",
    border: "rgba(107,127,255,0.45)",
    accentClass: "text-cyan",
  },
  {
    Icon: Stethoscope,
    name: "Auxiliar de Veterinario",
    tag: "Saude Animal",
    desc: "Capacitacao completa para clinicas veterinarias, petshops e hospitais. 13 modulos com teoria e 16h de pratica clinica.",
    hours: "80h",
    duration: "10 meses",
    highlights: ["Clinica & Cirurgia", "Farmacologia", "Primeiros Socorros", "Pratica Real"],
    href: "/auxiliar-veterinario",
    gradFrom: "rgba(155,48,255,0.30)",
    gradTo: "rgba(79,127,255,0.15)",
    border: "rgba(155,48,255,0.45)",
    accentClass: "text-accent",
  },
  {
    Icon: Crown,
    name: "VIP",
    tag: "Personalizavel",
    desc: "Curso sob medida: escolha sua area entre design, programacao, marketing digital, AutoCAD, video e muito mais.",
    hours: "Flexivel",
    duration: "Personalizado",
    highlights: ["Office & Power BI", "Design & Video", "Marketing Digital", "AutoCAD & Unity"],
    href: "/vip",
    gradFrom: "rgba(107,127,255,0.30)",
    gradTo: "rgba(155,48,255,0.15)",
    border: "rgba(107,127,255,0.45)",
    accentClass: "text-cyan",
  },
];

export function CoursesSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)" }} />

      <div className="relative container mx-auto px-4 md:px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Todos os cursos</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Escolha seu <span className="text-gradient">caminho</span>.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="text-white/45 text-base lg:text-lg leading-relaxed lg:pb-1">
            Da tecnologia a saude animal, do infantojuvenil ao profissional personalizado.
            57 anos formando quem transforma o mercado.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {courses.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col bg-primary hover:bg-white/[0.025] transition-colors overflow-hidden"
            >
              {/* Brand-consistent gradient header */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${c.gradFrom}, ${c.gradTo})`, border: `0 0 0 0` }}>
                <div className="absolute inset-0 circuit-pattern opacity-25" />
                {/* Large faded icon background */}
                <c.Icon className="absolute h-32 w-32 opacity-[0.07] text-white" strokeWidth={1} />
                {/* Glowing icon */}
                <div className="relative flex h-16 w-16 items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.35)", border: `1px solid ${c.border}`, backdropFilter: "blur(8px)", boxShadow: `0 0 24px ${c.border}` }}>
                  <c.Icon className={`h-7 w-7 ${c.accentClass}`} />
                </div>
                {/* Tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: `linear-gradient(135deg, ${c.gradFrom.replace("0.30","0.85")}, rgba(79,127,255,0.85))` }}>
                  {c.tag}
                </span>
                {/* Duration */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] text-white/55">
                  <Clock className="h-3 w-3" />{c.duration}
                </div>
                <div className="absolute bottom-0 inset-x-0 h-10"
                  style={{ background: "linear-gradient(to top, rgba(7,7,18,1), transparent)" }} />
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-5">
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${c.accentClass}`}>{c.hours}</div>
                <h3 className="font-display text-lg font-bold text-white leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.highlights.map((h) => (
                    <span key={h} className="px-2 py-0.5 text-[10px] font-medium text-white/50 border border-white/10">{h}</span>
                  ))}
                </div>
                <Link to={c.href}
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${c.accentClass} hover:text-white transition-colors`}>
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
