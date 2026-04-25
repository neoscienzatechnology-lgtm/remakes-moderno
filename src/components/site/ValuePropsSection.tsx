import { motion } from "framer-motion";
import { Brain, TrendingUp, DollarSign, Rocket, type LucideIcon } from "lucide-react";

type Prop = { Icon: LucideIcon; title: string; desc: string; accentColor: string };

const valueProps: Prop[] = [
  {
    Icon: Brain,
    title: "Inteligencia Artificial",
    desc: "Domine os principais modelos de IA, prompts avancados e agentes autonomos que transformam sua producao.",
    accentColor: "rgba(155,48,255,0.8)",
  },
  {
    Icon: TrendingUp,
    title: "Produtividade na Pratica",
    desc: "Crie workflows inteligentes, elimine tarefas repetitivas e multiplique seus resultados com automacoes.",
    accentColor: "rgba(107,127,255,0.8)",
  },
  {
    Icon: DollarSign,
    title: "Geracao de Renda",
    desc: "Transforme conhecimento em servicos, produtos digitais e negocio proprio com sua primeira venda.",
    accentColor: "rgba(155,48,255,0.8)",
  },
  {
    Icon: Rocket,
    title: "Resultados Reais",
    desc: "Portfolio profissional, clientes reais, certificacoes reconhecidas e plano de carreira estruturado.",
    accentColor: "rgba(79,127,255,0.8)",
  },
];

export function ValuePropsSection() {
  return (
    <section className="relative bg-secondary border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {valueProps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-start gap-4 px-8 py-10 hover:bg-white/[0.025] transition-colors"
            >
              <div
                className="flex h-12 w-12 items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${item.accentColor.replace("0.8", "0.15")}, rgba(79,127,255,0.1))`,
                  border: `1px solid ${item.accentColor.replace("0.8", "0.3")}`,
                }}
              >
                <item.Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
