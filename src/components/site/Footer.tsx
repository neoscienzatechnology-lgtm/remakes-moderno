import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logoR1 from "@/assets/remington-logo-r1.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "oklch(0.07 0.05 282)" }}>
      {/* Top separator */}
      <div className="h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(155,48,255,0.4), rgba(79,127,255,0.3), transparent)" }} />

      <div className="container mx-auto px-[clamp(20px,4vw,40px)] py-16"
        style={{ maxWidth: "1280px" }}>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <a href="#top" aria-label="Remington IA" className="inline-block mb-5 hover:-translate-y-px transition-transform">
              <img src={logoR1} alt="Remington IA"
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            </a>
            <p className="text-sm text-white/45 leading-relaxed max-w-[28ch] mb-6">
              Educação para o Futuro desde 1969. Mais de 57 anos formando profissionais em Ribeirão Preto.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Youtube, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="flex h-9 w-9 items-center justify-center transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(155,48,255,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(155,48,255,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "";
                  }}>
                  <Icon className="h-4 w-4 text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.58 0.28 292)" }}>Institucional</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Sobre a Remington", href: "#institucional" },
                { label: "57 Anos", href: "#institucional" },
                { label: "Ribeirão Preto", href: "#institucional" },
                { label: "Empregabilidade", href: "#programa" },
                { label: "Depoimentos", href: "/depoimentos" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.58 0.28 292)" }}>Cursos</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Jovem Profissional IA", href: "/jovem-profissional-ia" },
                { label: "Kids IA", href: "/kids-ia" },
                { label: "Auxiliar de Veterinário", href: "/auxiliar-veterinario" },
                { label: "Curso VIP", href: "/vip" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conteúdo */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "oklch(0.58 0.28 292)" }}>Conteúdo</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Blog", href: "#blog" },
                { label: "Tutoriais", href: "#blog" },
                { label: "FAQ", href: "/faq" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5">
            {[
              "Quero fazer um curso",
              "Trabalhe conosco",
              "Dúvidas",
            ].map(label => (
              <a key={label} href="#contato"
                className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white/70 hover:text-white transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(155,48,255,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/30"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p>© {year} Remington · Educação para o Futuro · Todos os direitos reservados</p>
          <p>Ribeirão Preto · SP · (16) 2102-0077</p>
        </div>
      </div>
    </footer>
  );
}
