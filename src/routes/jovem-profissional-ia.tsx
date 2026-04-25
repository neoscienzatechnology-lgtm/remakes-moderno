import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Clock, Trophy, Users, Calendar, Check, Rocket, Target,
  ShoppingBag, Zap, GraduationCap, Brain, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { CourseEnrollDialog } from "@/components/site/CourseEnrollDialog";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/jpia-hero.jpg";
import phase1 from "@/assets/jpia-phase-1.jpg";
import phase2 from "@/assets/jpia-phase-2.jpg";
import phase3 from "@/assets/jpia-phase-3.jpg";
import phase4 from "@/assets/jpia-phase-4.jpg";

const COURSE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Jovem Profissional IA",
  description:
    "Formação profissionalizante de 24 meses para jovens de 14 a 17 anos dominarem Inteligência Artificial e gerarem renda própria.",
  provider: {
    "@type": "EducationalOrganization",
    name: "Remington",
    sameAs: "https://remington.com.br",
  },
  educationalLevel: "Profissionalizante",
  timeRequired: "P24M",
  totalHistoricalEnrollment: "+200",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    location: {
      "@type": "Place",
      name: "Remington Ribeirão Preto",
    },
  },
};

export const Route = createFileRoute("/jovem-profissional-ia")({
  head: () => ({
    meta: [
      { title: "Jovem Profissional IA · Formação 24 meses · Remington" },
      {
        name: "description",
        content:
          "A primeira formação que prepara jovens de 14 a 17 anos para ganhar dinheiro usando Inteligência Artificial. 24 meses, 196 horas, 24 habilidades e portfólio real.",
      },
      { property: "og:title", content: "Jovem Profissional IA · Remington" },
      {
        property: "og:description",
        content:
          "24 meses · 196 horas · 24 habilidades. Seu filho pronto para ganhar dinheiro com IA.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(COURSE_JSONLD) },
    ],
  }),
  component: JovemProfissionalIA,
});

type Phase = {
  number: string;
  range: string;
  title: string;
  Icon: LucideIcon;
  image: string;
  intro: string;
  modules: { month: string; name: string; deliverable: string }[];
  accent: string;
};

const phases: Phase[] = [
  {
    number: "Fase 1",
    range: "Meses 1 a 6",
    title: "Domine a IA",
    Icon: Brain,
    image: phase1,
    accent: "from-cyan to-accent",
    intro:
      "O jovem sai dominando as principais ferramentas de IA e entrega um portfólio digital profissional pronto para mostrar no Instagram e WhatsApp.",
    modules: [
      { month: "01", name: "Prompt Master", deliverable: "Biblioteca pessoal com 50 prompts profissionais" },
      { month: "02", name: "Imagem com IA", deliverable: "Portfólio com 10 artes profissionais" },
      { month: "03", name: "Vídeo e Reels com IA", deliverable: "3 reels completos prontos para publicação" },
      { month: "04", name: "Copywriting com IA", deliverable: "Kit completo de copy (anúncio, bio, legendas)" },
      { month: "05", name: "Design Profissional com IA", deliverable: "Identidade visual para um negócio real" },
      { month: "06", name: "Instagram Profissional (Marco)", deliverable: "Checkpoint: Feira de Portfólios com os pais" },
    ],
  },
  {
    number: "Fase 2",
    range: "Meses 7 a 12",
    title: "Venda seus serviços",
    Icon: ShoppingBag,
    image: phase2,
    accent: "from-orange to-accent",
    intro:
      "O jovem faz sua primeira venda real e, ao final da fase, recebe o certificado intermediário em cerimônia pública. Este é o marco de transformação do programa.",
    modules: [
      { month: "07", name: "Primeira Venda: Artes e Thumbnails", deliverable: "Primeira venda real (meta R$20–50)" },
      { month: "08", name: "Social Media Jr.", deliverable: "Primeiro cliente real de gestão de perfil" },
      { month: "09", name: "Edição de Vídeo Paga", deliverable: "Venda de edição de 3 reels para cliente" },
      { month: "10", name: "Landing Page com IA", deliverable: "Site de uma página entregue a cliente real" },
      { month: "11", name: "Fotografia e Ensaio com IA", deliverable: "Ensaio fotográfico entregue a cliente" },
      { month: "12", name: "Criador de Conteúdo (Marco)", deliverable: "Checkpoint: Certificado Intermediário + Cerimônia" },
    ],
  },
  {
    number: "Fase 3",
    range: "Meses 13 a 18",
    title: "Construa sua marca",
    Icon: Target,
    image: phase3,
    accent: "from-accent to-primary-glow",
    intro:
      "O jovem desenvolve sua marca pessoal, aprende gestão financeira, vendas profissionais e automações avançadas com IA.",
    modules: [
      { month: "13", name: "Marca Pessoal", deliverable: "Marca pessoal estruturada e publicada" },
      { month: "14", name: "LinkedIn Jovem", deliverable: "Perfil LinkedIn + 3 publicações" },
      { month: "15", name: "Atendimento e Vendas", deliverable: "Script próprio + 1 orçamento fechado" },
      { month: "16", name: "Gestão Financeira do Jovem Empreendedor", deliverable: "Planilha de controle + meta de renda" },
      { month: "17", name: "Produtividade com IA", deliverable: "Método próprio de produtividade documentado" },
      { month: "18", name: "Automação e Chatbots", deliverable: "Bot de atendimento para negócio real" },
    ],
  },
  {
    number: "Fase 4",
    range: "Meses 19 a 24",
    title: "Profissional completo",
    Icon: GraduationCap,
    image: phase4,
    accent: "from-primary-glow to-cyan",
    intro:
      "O jovem lança produto digital próprio, aprende inglês profissional, se prepara para o mercado de trabalho e se forma com portfólio completo e plano de carreira.",
    modules: [
      { month: "19", name: "Produto Digital Próprio", deliverable: "Produto digital publicado para venda" },
      { month: "20", name: "E-commerce com IA", deliverable: "Loja montada com primeiro produto" },
      { month: "21", name: "Análise e Relatórios com IA", deliverable: "Relatório de resultados entregue a cliente" },
      { month: "22", name: "Inglês Profissional com IA", deliverable: "Apresentação gravada + perfil bilíngue" },
      { month: "23", name: "Empregabilidade", deliverable: "Currículo + simulação + 5 vagas aplicadas" },
      { month: "24", name: "Projeto Final e Formatura (Marco)", deliverable: "Formatura: cerimônia aberta + apresentação pública" },
    ],
  },
];

const differentials = [
  { Icon: Trophy, title: "Entregável mensal real", desc: "Ao final de cada mês, um trabalho concreto vendável ou publicável. Nada de teoria pela teoria." },
  { Icon: Zap, title: "Sistema de níveis", desc: "Progressão gamificada em 4 fases com badges e reconhecimento a cada etapa." },
  { Icon: ShoppingBag, title: "Primeira venda real", desc: "A partir do mês 7, vitrine interna garante a primeira venda real do aluno. Marco transformador." },
  { Icon: Users, title: "Reunião com os pais", desc: "A cada 3 meses, encontro de 1h apresentando o progresso. Família engajada, indicações reais." },
  { Icon: GraduationCap, title: "Certificação em 3 etapas", desc: "Portfólio (mês 6), Certificado Intermediário (mês 12) e Formatura Completa (mês 24)." },
  { Icon: Rocket, title: "Clube dos ex-alunos", desc: "Quem se forma continua na rede — vagas, indicações e eventos semestrais vitalícios." },
];

function JovemProfissionalIA() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan/40 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-orange/30 blur-3xl animate-blob [animation-delay:-7s]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />

        <div className="relative container mx-auto px-4 md:px-6 pt-16 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-cyan" />
                Carro-chefe Remington · Turmas limitadas
              </span>

              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Jovem <span className="text-cyan">Profissional</span><br className="hidden sm:block" /> {" "}
                <span className="relative inline-block">
                  <span className="relative z-10">IA</span>
                  <span className="absolute inset-x-0 bottom-2 h-4 bg-orange/70 -z-0 rounded" />
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                A primeira formação profissionalizante que prepara jovens de{" "}
                <strong className="text-cyan">14 a 17 anos</strong> para ganhar dinheiro usando
                Inteligência Artificial. Em 24 meses, seu filho desenvolve uma nova habilidade a
                cada 30 dias e constrói um portfólio profissional real.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                <Stat big="24" small="meses" />
                <Stat big="196" small="horas" />
                <Stat big="24" small="habilidades" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <CourseEnrollDialog
                  courseName="Jovem Profissional IA"
                  Icon={Sparkles}
                  triggerLabel="Reservar aula experimental"
                />
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white font-semibold px-6 backdrop-blur"
                >
                  <Link to="/contato">
                    Falar com a equipe <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
                <img
                  src={heroImg}
                  alt="Jovem usando Inteligência Artificial em laptop"
                  width={1280}
                  height={896}
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                  <div className="text-xs uppercase tracking-wider text-cyan font-bold">
                    Aula experimental gratuita
                  </div>
                  <div className="text-sm text-white mt-1 leading-snug">
                    "Como seu filho pode fazer os primeiros R$100 usando IA"
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Por que IA, por que agora
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            A IA não vai substituir pessoas. <br />
            <span className="text-gradient">Vai substituir quem não souber usar IA.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Vivemos a maior revolução tecnológica dos últimos 30 anos. A Inteligência Artificial está
            transformando profissões, criando novas oportunidades de renda e redefinindo o mercado
            de trabalho.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            O <strong className="text-accent">Jovem Profissional IA</strong> nasceu para preparar
            adolescentes desse novo cenário. Em 24 meses, seu filho aprende a gerar renda — seja
            conquistando o primeiro emprego ou empreendendo com serviços próprios.
          </p>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Metodologia
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              1 habilidade a cada <span className="text-gradient">30 dias</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg">
              Cada módulo segue estrutura fixa de 4 encontros semanais (8 horas/mês), mantendo ritmo
              constante e previsível — exatamente o que jovens dessa faixa precisam para permanecer
              engajados.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { week: "Semana 1", desc: "Apresentação da ferramenta + demonstração" },
              { week: "Semana 2", desc: "Prática guiada passo a passo" },
              { week: "Semana 3", desc: "Produção do entregável do mês" },
              { week: "Semana 4", desc: "Apresentação e refinamento do trabalho" },
            ].map((w, i) => (
              <motion.div
                key={w.week}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.04] p-6 hover:border-accent/40 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold">
                  {i + 1}
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                  {w.week}
                </div>
                <p className="mt-2 text-sm text-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Grade curricular completa
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              4 fases. 24 meses. <br />Uma transformação completa.
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, idx) => (
              <PhaseBlock key={phase.number} phase={phase} reversed={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Diferenciais do programa
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Muito mais do que aulas
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg">
              Um sistema completo pensado para manter o jovem engajado, evoluindo e gerando
              resultados reais durante os 24 meses.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-white/10 bg-white/[0.04] p-6 hover:border-accent/40 hover:-translate-y-1 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan text-white shadow-glow">
                  <d.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CHAMADA AULA EXPERIMENTAL */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-hero animate-gradient text-white">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-cyan/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-orange/30 blur-3xl animate-blob [animation-delay:-5s]" />

        <div className="relative container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5 text-cyan" /> Próximo passo
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Aula experimental <span className="text-cyan">gratuita</span>
          </h2>
          <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Em <strong>2 horas</strong>, seu filho sai produzindo trabalhos profissionais usando
            Inteligência Artificial — e vocês entendem juntos se o programa faz sentido para a
            família.
          </p>
          <div className="mt-6 inline-block glass rounded-2xl px-6 py-4 italic text-cyan text-base">
            "Como seu filho pode fazer os primeiros R$100 usando Inteligência Artificial"
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <FactCard Icon={Users} title="12 alunos" sub="por turma, no máximo" />
            <FactCard Icon={Clock} title="2 horas" sub="aula experimental" />
            <FactCard Icon={Check} title="Pais convidados" sub="a participar" />
          </div>

          <div className="mt-10">
            <CourseEnrollDialog
              courseName="Jovem Profissional IA — Aula Experimental"
              Icon={Sparkles}
              triggerLabel="Reservar minha vaga agora"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="rounded-2xl glass p-3 text-center">
      <div className="font-display text-3xl font-bold text-cyan leading-none">{big}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-white/70">{small}</div>
    </div>
  );
}

function FactCard({ Icon, title, sub }: { Icon: LucideIcon; title: string; sub: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <Icon className="h-5 w-5 text-cyan mx-auto" />
      <div className="mt-2 font-display text-xl font-bold">{title}</div>
      <div className="text-xs text-white/70 mt-0.5">{sub}</div>
    </div>
  );
}

function PhaseBlock({ phase, reversed }: { phase: Phase; reversed: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
    >
      <div className="lg:col-span-5 lg:sticky lg:top-24">
        <div className="relative overflow-hidden border border-white/15">
          <img
            src={phase.image}
            alt={`${phase.title} — ${phase.range}`}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-auto aspect-[4/3] object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${phase.accent} opacity-25`} />
          <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md text-white">
            <phase.Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-7">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {phase.number} · {phase.range}
        </span>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
          {phase.title}
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">{phase.intro}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {phase.modules.map((m) => (
            <div
              key={m.month}
              className="border border-white/10 bg-white/[0.04] p-4 hover:border-accent/30 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${phase.accent} text-white`}>
                  Mês {m.month}
                </span>
              </div>
              <h4 className="mt-2 font-display text-base font-bold text-foreground leading-tight">
                {m.name}
              </h4>
              <p className="mt-1.5 text-xs text-muted-foreground flex items-start gap-1.5">
                <Check className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                <span>{m.deliverable}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}




