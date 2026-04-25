import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Lightbulb, Trophy } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { AnimatedStats } from "@/components/site/AnimatedStats";
import { SchoolGallery } from "@/components/site/SchoolGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaSection } from "@/components/site/CtaSection";
import { BrandImage } from "@/components/site/BrandImage";
import aboutLegacy from "@/assets/about-legacy.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre · 57 anos de história · Remington" },
      { name: "description", content: "Conheça a história da Remington — escola de Ribeirão Preto desde 1968, hoje pioneira em formar jovens para a era da Inteligência Artificial." },
      { property: "og:title", content: "Sobre a Remington" },
      { property: "og:description", content: "57 anos de tradição educando para o futuro. Carro-chefe atual: Jovem Profissional IA." },
      { property: "og:image", content: aboutLegacy },
      { name: "twitter:image", content: aboutLegacy },
    ],
  }),
  component: SobrePage,
});

const milestones = [
  { year: "1968", title: "Fundação", desc: "Nasce a Remington em Ribeirão Preto, com vocação técnica e profissionalizante." },
  { year: "1990s", title: "Era da informática", desc: "Pioneirismo em cursos de informática quando o computador chegou às empresas brasileiras." },
  { year: "2010s", title: "Expansão tecnológica", desc: "Novos laboratórios, programação, robótica e empregabilidade entram no DNA da escola." },
  { year: "2025", title: "Jovem Profissional IA", desc: "Lançamento do carro-chefe que prepara adolescentes para gerar renda usando Inteligência Artificial." },
];

const values = [
  { Icon: Heart, title: "Pessoas no centro", desc: "Cada aluno é único. Acompanhamos famílias e individualizamos o caminho." },
  { Icon: Lightbulb, title: "Pioneirismo prático", desc: "Não esperamos a tendência chegar — trazemos primeiro e ensinamos com mão na massa." },
  { Icon: Trophy, title: "Resultado real", desc: "Entregáveis concretos a cada mês. Portfólio, primeira venda e plano de carreira." },
];

function SobrePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan/30 blur-3xl animate-blob" />
        <div className="relative container mx-auto px-4 md:px-6">
          <Link to="/" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1 mb-6">← Voltar</Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                <Sparkles className="h-3.5 w-3.5" /> Nossa história
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <span className="text-cyan">57 anos</span> educando para o que vem a seguir
              </h1>
              <p className="mt-5 max-w-2xl text-white/85 text-lg">
                Desde 1968, a Remington forma profissionais para os ciclos econômicos que importam.
                Hoje, esse compromisso se traduz no Jovem Profissional IA — preparando a geração que
                vai liderar a era da Inteligência Artificial.
              </p>
            </div>
            <div className="relative">
              <BrandImage
                src={aboutLegacy}
                alt="Linha do tempo da Remington — 57 anos de história"
                width={1280}
                height={832}
                aspect="aspect-[16/10]"
                intensity={60}
                watermark
              />
            </div>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Linha do tempo</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Da máquina de escrever ao prompt
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m) => (
              <div key={m.year} className="border border-white/10 bg-white/5 p-6 hover:border-accent/40 transition-all">
                <div className="font-display text-3xl font-bold text-gradient">{m.year}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">O que nos move</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nossos valores
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow" style={{ background: "linear-gradient(135deg, #9B30FF, #4F7FFF)" }}>
                  <v.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedStats />
      <SchoolGallery />
      <Testimonials />
      <CtaSection />
    </SiteShell>
  );
}





