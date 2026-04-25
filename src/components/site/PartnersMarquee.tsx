import { Building2 } from "lucide-react";

const partners = [
  "Magazine Luiza",
  "Bradesco",
  "Itaú",
  "Nubank",
  "Bayer",
  "Nestlé",
  "Bosch",
  "Johnson & Johnson",
  "Unilever",
  "Stone",
  "Ambev",
  "Klabin",
];

export function PartnersMarquee() {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Empresas parceiras
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
            Nossos alunos foram contratados por
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            +200 empresas confiam na formação Remington para encontrar talentos.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-7 py-4 rounded-2xl bg-secondary/60 border border-border min-w-[210px]"
            >
              <Building2 className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-display font-semibold text-foreground whitespace-nowrap">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

