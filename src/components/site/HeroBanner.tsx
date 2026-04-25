import { Link } from "@tanstack/react-router";
import heroBannerImg from "@/assets/hero-banner.png";

export function HeroBanner() {
  return (
    <section className="relative w-full bg-primary">
      <Link to="/contato" className="block w-full" aria-label="Transforme Conhecimento em Resultados — fale com a Remington IA">
        <img
          src={heroBannerImg}
          alt="Remington IA — O Futuro Não Espera. Quem Não Usa IA, Fica Para Trás."
          className="w-full h-auto block"
          loading="eager"
        />
      </Link>
    </section>
  );
}
