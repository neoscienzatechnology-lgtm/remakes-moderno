import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  accentColor: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sofia (15 anos)",
    role: "Aluna · Jovem Profissional IA",
    quote: "Fechei meu primeiro cliente no mes 8 fazendo gestao de Instagram com IA. Ja estou ganhando R$300 por mes no meu proprio negocio.",
    initials: "SO",
    accentColor: "#9B30FF",
  },
  {
    name: "Fernanda — mae do Lucas (14)",
    role: "Mae de aluno",
    quote: "Em 6 meses meu filho saiu da timidez para apresentar o portfolio na feira de pais. A confianca dele mudou completamente.",
    initials: "FL",
    accentColor: "#6B7FFF",
  },
  {
    name: "Pedro (16 anos)",
    role: "Aluno · Kids IA",
    quote: "Estou criando minha marca pessoal e ja tenho 3 clientes recorrentes. A escola me ensinou a vender, nao so a usar ferramentas de IA.",
    initials: "PE",
    accentColor: "#9B30FF",
  },
  {
    name: "Ana — mae da Julia (15)",
    role: "Mae de aluna",
    quote: "O entregavel mensal faz toda a diferenca. A cada 30 dias vejo um trabalho concreto. Nao e teoria — e pratica real.",
    initials: "AJ",
    accentColor: "#4F7FFF",
  },
  {
    name: "Gabriel (17 anos)",
    role: "Formado · Turma piloto",
    quote: "Me formei e fui direto para meu primeiro emprego como editor de video junior com IA. O portfolio fez toda a diferenca.",
    initials: "GB",
    accentColor: "#9B30FF",
  },
  {
    name: "Marcos — pai da Beatriz (14)",
    role: "Pai de aluna",
    quote: "A reuniao trimestral com os pais e genial. Acompanhamos o progresso e entendemos exatamente onde nossa filha esta crescendo.",
    initials: "MB",
    accentColor: "#6B7FFF",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface-soft py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "#9B30FF" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#9B30FF" }}>Historias reais</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-on-light leading-[1.05]">
              Alunos ja{" "}
              <span className="text-gradient">faturando</span>{" "}
              com IA.
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-light text-base lg:text-lg leading-relaxed lg:pb-1">
            Alunos e familias contando como o metodo Remington IA mudou rotina, confianca e resultado financeiro.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative bg-white flex flex-col card-shadow card-lift overflow-hidden"
              style={{ border: "1px solid rgba(11,8,30,0.07)" }}
            >
              {/* Colored top bar */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${t.accentColor}, ${t.accentColor}88)` }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" style={{ color: t.accentColor }} />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className="h-6 w-6 mb-3 opacity-20" style={{ color: t.accentColor }} />

                {/* Quote */}
                <p className="text-muted-light leading-relaxed text-[15px] flex-1 italic">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-display font-bold text-sm flex-shrink-0 text-white"
                    style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentColor}99)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-on-light text-sm">{t.name}</div>
                    <div className="text-xs mt-0.5 text-muted-light">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
