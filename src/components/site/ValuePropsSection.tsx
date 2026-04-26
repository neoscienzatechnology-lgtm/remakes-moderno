import { motion } from "framer-motion";
import { Brain, TrendingUp, DollarSign, Rocket, type LucideIcon } from "lucide-react";

type Prop = { Icon: LucideIcon; title: string; desc: string; iconBg: string; iconColor: string };

const valueProps: Prop[] = [
  {
    Icon: Brain,
    title: "Inteligencia Artificial",
    desc: "Domine os principais modelos de IA, prompts avancados e agentes autonomos que transformam sua producao.",
    iconBg: "rgba(155,48,255,0.12)",
    iconColor: "#9B30FF",
  },
  {
    Icon: TrendingUp,
    title: "Produtividade na Pratica",
    desc: "Crie workflows inteligentes, elimine tarefas repetitivas e multiplique seus resultados com automacoes.",
    iconBg: "rgba(107,127,255,0.12)",
    iconColor: "#6B7FFF",
  },
  {
    Icon: DollarSign,
    title: "Geracao de Renda",
    desc: "Transforme conhecimento em servicos, produtos digitais e negocio proprio com sua primeira venda.",
    iconBg: "rgba(155,48,255,0.12)",
    iconColor: "#9B30FF",
  },
  {
    Icon: Rocket,
    title: "Resultados Reais",
    desc: "Portfolio profissional, clientes reais, certificacoes reconhecidas e plano de carreira estruturado.",
    iconBg: "rgba(79,127,255,0.12)",
    iconColor: "#4F7FFF",
  },
];

export function ValuePropsSection() {
  return (
    <section className="bg-surface-light border-y border-black/[0.06]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-black/[0.06]">
          {valueProps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-start gap-4 px-8 py-10 hover:bg-white transition-colors"
            >
              <div
                className="flex h-12 w-12 items-center justify-center flex-shrink-0"
                style={{ background: item.iconBg, border: `1px solid ${item.iconColor}30` }}
              >
                <item.Icon className="h-5 w-5" style={{ color: item.iconColor }} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-on-light">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
