import { Sparkles } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function HeroLeadCard() {
  return (
    <div className="glass rounded-2xl p-6 sm:p-7 shadow-elegant text-white"
      style={{ border: "1px solid rgba(155,48,255,0.25)" }}>
      <div className="flex items-center gap-2 text-accent mb-1">
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">Vagas limitadas</span>
      </div>
      <h3 className="font-display text-xl font-bold leading-snug">
        Reserve a aula experimental gratuita
      </h3>
      <p className="text-sm text-white/65 mt-1 mb-4">
        Descubra como dominar IA e gerar renda com as ferramentas mais poderosas do mercado.
      </p>
      <LeadForm origem="hero" variant="dark" cta="Reservar minha vaga" />
    </div>
  );
}
