import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { HeroBanner } from "@/components/site/HeroBanner";
import { InstitutionalSection } from "@/components/site/InstitutionalSection";
import { CoursesSection } from "@/components/site/CoursesSection";
import { ShowcaseSection } from "@/components/site/ShowcaseSection";
import { DiferenciaisSection } from "@/components/site/DiferenciaisSection";
import { ProgramaSection } from "@/components/site/ProgramaSection";
import { Testimonials } from "@/components/site/Testimonials";
import { BlogSection } from "@/components/site/BlogSection";
import { CtaSection } from "@/components/site/CtaSection";
import heroImg from "@/assets/jpia-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remington · Educação para o Futuro" },
      {
        name: "description",
        content:
          "Há mais de 57 anos formando profissionais em Ribeirão Preto. Cursos profissionalizantes com foco em Inteligência Artificial, tecnologia e empregabilidade real.",
      },
      { property: "og:title", content: "Remington · Educação para o Futuro" },
      {
        property: "og:description",
        content:
          "Formação profissional com 57 anos de experiência. Jovem Profissional IA, Kids IA, Auxiliar de Veterinário e muito mais.",
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
      <InstitutionalSection />
      <CoursesSection />
      <ShowcaseSection />
      <DiferenciaisSection />
      <ProgramaSection />
      <Testimonials />
      <BlogSection />
      <CtaSection />
    </SiteShell>
  );
}
