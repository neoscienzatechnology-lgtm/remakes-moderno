import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroBanner } from "@/components/site/HeroBanner";
import { ValuePropsSection } from "@/components/site/ValuePropsSection";
import { MethodologySection } from "@/components/site/MethodologySection";
import { CoursesSection } from "@/components/site/CoursesSection";
import { AnimatedStats } from "@/components/site/AnimatedStats";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogSection } from "@/components/site/BlogSection";
import { CtaSection } from "@/components/site/CtaSection";
import heroImg from "@/assets/jpia-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remington IA · Produtividade e Renda com Inteligencia Artificial" },
      {
        name: "description",
        content:
          "Instituto de Ensino especializado em Inteligencia Artificial. Aprenda, automatize e monetize suas habilidades com IA. 57 anos de tradicao formando profissionais.",
      },
      { property: "og:title", content: "Remington IA · Produtividade e Renda com IA" },
      {
        property: "og:description",
        content:
          "Domine as ferramentas de IA mais poderosas do mercado, aumente sua produtividade e gere renda real. Instituto de Ensino Remington IA.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <HeroBanner />
      <ValuePropsSection />
      <MethodologySection />
      <CoursesSection />
      <AnimatedStats />
      <Testimonials />
      <BlogSection />
      <CtaSection />
    </SiteShell>
  );
}


