import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, DoorOpen, TrendingUp, BookOpen, GraduationCap, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoR1 from "@/assets/remington-logo-r1.png";
import studentsImg from "@/assets/hero-students.jpg";

const aiTools = [
  { name: "ChatGPT", color: "#10a37f" },
  { name: "Claude", color: "#d97706" },
  { name: "Gemini", color: "#4285f4" },
  { name: "Copilot", color: "#0078d4" },
  { name: "Midjourney", color: "#9B30FF" },
  { name: "Canva", color: "#e63d8f" },
  { name: "Notion AI", color: "#6b7280" },
];

const rightFeatures = [
  { Icon: BarChart2, label: "+PRODUTIVIDADE", desc: "Automatize tarefas e ganhe tempo" },
  { Icon: DoorOpen, label: "+OPORTUNIDADES", desc: "Novas habilidades, novas portas" },
  { Icon: TrendingUp, label: "+RESULTADOS", desc: "Mais eficiência, mais lucro" },
];

const bottomCards = [
  { Icon: BookOpen, label: "Cursos Práticos", desc: "100% aplicados ao mercado" },
  { Icon: Users, label: "Professores Especialistas", desc: "Com experiência real" },
  { Icon: Award, label: "Certificado", desc: "Reconhecido pelo mercado" },
  { Icon: GraduationCap, label: "Suporte e Comunidade", desc: "Aprenda e cresça junto" },
];

export function HeroBanner() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern-nodes opacity-[0.18]" />
      <div className="absolute inset-0 hex-pattern opacity-[0.06]" />
      <div className="absolute inset-0 scanlines" />
      <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.22) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.18) 0%, transparent 65%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(107,127,255,0.08) 0%, transparent 70%)" }} />
      {/* Data stream lines */}
      {[15, 35, 55, 75, 90].map((left, i) => (
        <div key={i} className="data-stream-line" style={{ left: `${left}%`, animationDelay: `${i * 0.7}s`, animationDuration: `${3 + i * 0.4}s` }} />
      ))}

      <div className="relative container mx-auto px-4 md:px-6 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT COLUMN */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>

            {/* Brand header */}
            <div className="flex items-center gap-3 mb-8">
              <img src={logoR1} alt="Remington IA" className="h-12 w-auto drop-shadow-[0_0_10px_rgba(155,48,255,0.6)]" />
              <div>
                <div className="text-white font-bold text-base tracking-[0.15em] leading-tight">REMINGTON IA</div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">Ensino de Tecnologia</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent">Produtividade e Renda com IA</div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black leading-[1.02] tracking-tight mb-6">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">O FUTURO NÃO ESPERA.</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">
                QUEM <span className="text-gradient glow-accent">NÃO USA IA</span>,
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-accent glow-accent">FICA PARA TRÁS.</span>
            </h1>

            {/* Body */}
            <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-2">
              A Inteligência Artificial já está transformando profissões, negócios e vidas.
            </p>
            <p className="text-sm lg:text-base leading-relaxed mb-8">
              <span className="text-accent font-semibold">Domine as ferramentas de IA</span>{" "}
              <span className="text-white/70">e aumente sua produtividade e sua renda!</span>
            </p>

            {/* AI Tools */}
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-3">
                Aprenda na Remington · Todas as principais ferramentas de IA em um só lugar
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {aiTools.map(t => (
                  <span key={t.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border text-white/80"
                    style={{ borderColor: `${t.color}40`, background: `${t.color}15` }}>
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
                    {t.name}
                  </span>
                ))}
                <span className="text-xs font-bold text-accent tracking-wide">+ E MUITO MAIS!</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild
                className="h-12 px-8 rounded-none bg-accent hover:bg-accent/85 text-white font-bold text-sm tracking-wide shadow-glow neon-pulse uppercase corner-bracket">
                <Link to="/contato">
                  Transforme Conhecimento em Resultados <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline"
                className="h-12 px-6 rounded-none border-white/20 text-white/70 hover:border-cyan/50 hover:text-white font-semibold text-sm">
                <Link to="/jovem-profissional-ia">Ver cursos</Link>
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-xs text-white/35 tracking-wide">
              Mais produtividade. Mais oportunidades. <span className="text-white/55 font-medium">Mais liberdade.</span>
            </p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4">

            {/* Feature pills */}
            <div className="flex flex-col gap-2">
              {rightFeatures.map(f => (
                <div key={f.label}
                  className="holo-card flex items-center gap-3 border border-accent/20 px-4 py-2.5 neon-border"
                  style={{ background: "rgba(155,48,255,0.08)" }}>
                  <f.Icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-xs font-bold text-accent tracking-widest uppercase glow-accent">{f.label}</span>
                  <span className="text-xs text-white/45 ml-auto">{f.desc}</span>
                </div>
              ))}
            </div>

            {/* Students image */}
            <div className="relative overflow-hidden"
              style={{ border: "1px solid rgba(155,48,255,0.2)" }}>
              <img src={studentsImg} alt="Alunos Remington IA"
                className="w-full h-48 lg:h-56 object-cover object-top" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(7,7,18,0.3) 0%, rgba(155,48,255,0.1) 100%)" }} />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  O futuro é agora — e ele começa com você.
                </span>
              </div>
            </div>

            {/* Bottom cards */}
            <div className="grid grid-cols-2 gap-2">
              {bottomCards.map(c => (
                <div key={c.label}
                  className="holo-card corner-bracket flex items-start gap-2.5 border border-cyan/15 px-3 py-3"
                  style={{ background: "rgba(79,127,255,0.06)" }}>
                  <c.Icon className="h-4 w-4 text-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-white leading-tight">{c.label}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA line */}
            <div className="text-center border-t border-white/8 pt-3">
              <p className="text-[11px] text-white/40">
                <span className="text-accent font-semibold">Dê o primeiro passo hoje!</span>{" "}
                Invista em você. Aprenda IA. Aumente sua renda.
              </p>
              <p className="text-[10px] text-white/25 mt-1 tracking-widest">remington.com.br</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
