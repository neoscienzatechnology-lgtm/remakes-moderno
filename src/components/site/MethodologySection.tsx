import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, TrendingUp, DollarSign, Rocket, type LucideIcon } from "lucide-react";
import phase1Img from "@/assets/jpia-phase-1.jpg";
import phase2Img from "@/assets/jpia-phase-2.jpg";
import phase3Img from "@/assets/jpia-phase-3.jpg";
import phase4Img from "@/assets/jpia-phase-4.jpg";

type CourseCard = {
  Icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  accent: string;
  accentRgb: string;
  image: string;
};

const courses: CourseCard[] = [
  {
    Icon: Brain,
    number: "01",
    title: "Inteligencia Artificial",
    subtitle: "Fundamentos e ferramentas",
    desc: "Domine os principais modelos de IA, prompts avancados, agentes autonomos e automacoes que transformam sua producao.",
    accent: "text-accent",
    accentRgb: "155,48,255",
    image: phase1Img,
  },
  {
    Icon: TrendingUp,
    number: "02",
    title: "Produtividade na Pratica",
    subtitle: "Workflows e automacoes",
    desc: "Crie fluxos de trabalho inteligentes, elimine tarefas repetitivas e multiplique seus resultados com processos movidos a IA.",
    accent: "text-cyan",
    accentRgb: "107,127,255",
    image: phase2Img,
  },
  {
    Icon: DollarSign,
    number: "03",
    title: "Geracao de Renda",
    subtitle: "Monetize suas habilidades",
    desc: "Transforme seu conhecimento em servicos, produtos digitais e negocio proprio — com sua primeira venda ainda no curso.",
    accent: "text-accent",
    accentRgb: "155,48,255",
    image: phase3Img,
  },
  {
    Icon: Rocket,
    number: "04",
    title: "Resultados Reais",
    subtitle: "Portfolio e carreira",
    desc: "Saia com portfolio profissional, clientes reais, certificacoes reconhecidas e plano de carreira estruturado.",
    accent: "text-cyan",
    accentRgb: "107,127,255",
    image: phase4Img,
  },
];

export function MethodologySection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.07]" />
      <div
        className="absolute top-0 right-0 h-[500px] w-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(155,48,255,0.08) 0%, transparent 60%)" }}
      />

      <div className="relative container mx-auto px-4 md:px-6 py-20 lg:py-28">

        {/* Section heading */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Conteudo do curso</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              4 modulos.{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Uma transformacao</span>{" "}
              completa.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="text-white/50 text-base lg:text-lg leading-relaxed">
              Cada modulo e desenvolvido com aulas praticas, projetos reais e entregas mensais. Voce sai com
              portfolio profissional, renda comprovada e as habilidades mais valorizadas do mercado.
            </p>
            <Link
              to="/jovem-profissional-ia"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
            >
              Ver grade curricular completa <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Course cards — 4 cols on desktop, 2 on tablet */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {courses.map((c, i) => (
            <motion.article
              key={c.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col bg-primary hover:bg-white/[0.025] transition-colors overflow-hidden"
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(7,7,18,0.95) 0%, rgba(${c.accentRgb},0.25) 60%, transparent 100%)`,
                  }}
                />
                {/* Module number badge */}
                <span
                  className={`absolute top-4 left-4 font-display text-4xl font-bold opacity-40 ${c.accent}`}
                >
                  {c.number}
                </span>
                {/* Icon box */}
                <div
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: `1px solid rgba(${c.accentRgb},0.4)`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <c.Icon className={`h-5 w-5 ${c.accent}`} />
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 flex flex-col p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-1.5">
                  {c.subtitle}
                </div>
                <h3 className="font-display text-lg font-bold text-white leading-snug">{c.title}</h3>
                <p className="mt-2.5 text-sm text-white/50 leading-relaxed flex-1">{c.desc}</p>
                <Link
                  to="/jovem-profissional-ia"
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${c.accent} hover:text-white transition-colors`}
                >
                  Saiba mais{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
