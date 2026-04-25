import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Remington",
  alternateName: "Escola Remington",
  url: "https://remington.com.br",
  description:
    "Escola de tecnologia em Ribeirão Preto desde 1968. Carro-chefe: Jovem Profissional IA — formação profissionalizante em Inteligência Artificial para jovens de 14 a 17 anos.",
  foundingDate: "1968",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Independência, 1234",
    addressLocality: "Ribeirão Preto",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-16-3236-0000",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "pt-BR",
  },
};

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero animate-gradient px-4 text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-orange/30 blur-3xl animate-blob" />
      <div className="relative max-w-lg text-center">
        <div className="font-display text-[10rem] sm:text-[12rem] leading-none font-bold text-cyan drop-shadow-[0_0_30px_rgba(0,200,255,0.5)]">
          404
        </div>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
          Essa página saiu da grade curricular
        </h1>
        <p className="mt-4 text-white/80">
          O endereço que você procura não existe ou foi movido. Mas calma — temos muito conteúdo
          esperando por você na Remington.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-primary shadow-glow transition hover:bg-cyan"
          >
            Voltar para a home
          </Link>
          <Link
            to="/jovem-profissional-ia"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Conhecer Jovem Profissional IA
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Remington · Jovem Profissional IA — Renda própria com Inteligência Artificial" },
      {
        name: "description",
        content:
          "A primeira formação profissionalizante para jovens de 14 a 17 anos ganharem dinheiro usando Inteligência Artificial. 24 meses, 196 horas, 24 habilidades.",
      },
      { name: "author", content: "Remington" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Remington" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://remington.com.br/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}


