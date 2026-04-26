import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Phone, Mail, Brain, TrendingUp, DollarSign, Rocket } from "lucide-react";
import logoR1 from "@/assets/remington-logo-r1.png";

const pillars = [
  { Icon: Brain, label: "Inteligencia Artificial" },
  { Icon: TrendingUp, label: "Produtividade na Pratica" },
  { Icon: DollarSign, label: "Geracao de Renda" },
  { Icon: Rocket, label: "Resultados Reais" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.15) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.12) 0%, transparent 70%)" }} />

      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(155,48,255,0.5), rgba(79,127,255,0.5), transparent)" }} />

      <div className="relative container mx-auto px-4 md:px-6 py-16">

        {/* Brand + pillars strip */}
        <div className="mb-12 pb-10 border-b border-white/10">
          <Link to="/" className="inline-flex items-center gap-3 mb-6" aria-label="Remington IA">
            <img
              src={logoR1}
              alt="Remington IA"
              className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(155,48,255,0.4)]"
            />
          </Link>

          <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
            Ha 57 anos formando profissionais. Hoje preparando pessoas para gerar renda e produtividade com Inteligencia Artificial.
          </p>

          {/* 4 pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {pillars.map(({ Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 border border-white/8 px-3 py-2 text-xs text-white/45 hover:border-accent/30 hover:text-white/70 transition-colors"
              >
                <Icon className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Redes sociais</h4>
            <div className="flex gap-2">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 hover:border-accent/50 transition-all"
                  style={{ }}
                  aria-label="social"
                >
                  <Icon className="h-4 w-4 text-white/50 hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Cursos</h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link to="/jovem-profissional-ia" className="hover:text-accent transition">Jovem Profissional IA</Link></li>
              <li><Link to="/kids-ia" className="hover:text-accent transition">Kids IA</Link></li>
              <li><Link to="/auxiliar-veterinario" className="hover:text-accent transition">Auxiliar de Veterinario</Link></li>
              <li><Link to="/vip" className="hover:text-accent transition">Curso VIP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Institucional</h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><Link to="/sobre" className="hover:text-accent transition">Nossa historia</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Av. Independencia, 1234<br />Ribeirao Preto · SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                (16) 3236-0000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                contato@remington.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Remington IA — Instituto de Ensino. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidade" className="hover:text-accent transition">Politica de Privacidade</Link>
            <Link to="/privacidade" className="hover:text-accent transition">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
