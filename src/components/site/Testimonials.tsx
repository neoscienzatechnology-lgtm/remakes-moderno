import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  accent: string;
  border: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sofia (15 anos)",
    role: "Aluna · Pillar 2",
    quote: "Fechei meu primeiro cliente no mes 8 fazendo gestao de Instagram com IA. Ja estou ganhando R$300 por mes no meu proprio negocio.",
    initials: "SO",
    accent: "text-accent",
    border: "rgba(155,48,255,0.5)",
  },
  {
    name: "Fernanda (mae do Lucas, 14)",
    role: "Mae de aluno",
    quote: "Em 6 meses meu filho saiu da timidez para apresentar o portfolio na feira de pais. A confianca dele mudou completamente.",
    initials: "FL",
    accent: "text-cyan",
    border: "rgba(107,127,255,0.5)",
  },
  {
    name: "Pedro (16 anos)",
    role: "Aluno · Pillar 3",
    quote: "Estou criando minha marca pessoal e ja tenho 3 clientes recorrentes. A escola me ensinou a vender, nao so a usar ferramentas de IA.",
    initials: "PE",
    accent: "text-accent",
    border: "rgba(155,48,255,0.5)",
  },
  {
    name: "Ana (mae da Julia, 15)",
    role: "Mae de aluna",
    quote: "O entregavel mensal faz toda a diferenca. A cada 30 dias vejo um trabalho concreto. Nao e teoria — e pratica real.",
    initials: "AJ",
    accent: "text-cyan",
    border: "rgba(107,127,255,0.5)",
  },
  {
    name: "Gabriel (17 anos)",
    role: "Formado · Turma piloto",
    quote: "Me formei e fui direto para meu primeiro emprego como editor de video junior com IA. O portfolio fez toda a diferenca.",
    initials: "GB",
    accent: "text-accent",
    border: "rgba(155,48,255,0.5)",
  },
  {
    name: "Marcos (pai da Beatriz, 14)",
    role: "Pai de aluna",
    quote: "A reuniao trimestral com os pais e genial. Acompanhamos o progresso e entendemos exatamente onde nossa filha esta crescendo.",
    initials: "MB",
    accent: "text-cyan",
    border: "rgba(107,127,255,0.5)",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-primary border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(155,48,255,0.4), rgba(79,127,255,0.4), transparent)" }} />

      <div className="relative container mx-auto px-4 md:px-6 py-20 lg:py-28">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Historias reais</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05]">
              Alunos ja{" "}
              <span className="text-gradient">faturando</span>{" "}
              com IA.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/45 text-base lg:text-lg leading-relaxed lg:pb-1"
          >
            Alunos e familias contando como o metodo Remington IA mudou rotina, confianca e resultado financeiro.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-primary p-7 hover:bg-white/[0.025] transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed text-[15px] flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center font-display font-bold text-sm flex-shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, rgba(155,48,255,0.8), rgba(79,127,255,0.8))", border: `1px solid ${t.border}` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className={`text-xs mt-0.5 ${t.accent} opacity-70`}>{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
