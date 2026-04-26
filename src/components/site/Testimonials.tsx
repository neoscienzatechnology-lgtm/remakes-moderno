import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const alumni = [
  {
    initials: "AL",
    name: "Ana Lima",
    curso: "Jovem Profissional IA",
    accentColor: "#9B30FF",
    role: "Analista de IA Júnior",
    company: "Stefanini · Ribeirão Preto",
    quote: "A Remington me deu a base técnica e a confiança para encarar minha primeira entrevista na área de tecnologia.",
  },
  {
    initials: "LF",
    name: "Lucas Ferreira",
    curso: "Jovem Profissional IA",
    accentColor: "#9B30FF",
    role: "Analista de Suporte Jr.",
    company: "Raízen · Ribeirão Preto",
    quote: "Aprendi na prática o que o mercado precisava. Três meses após me formar, já estava empregado.",
  },
  {
    initials: "MS",
    name: "Mariana Souza",
    curso: "Auxiliar de Veterinário",
    accentColor: "#4F7FFF",
    role: "Auxiliar Veterinária",
    company: "PetLove · Ribeirão Preto",
    quote: "O curso me abriu portas que eu não sabia que existiam. Hoje trabalho com o que sempre amei.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.15, 1] } },
};

export function Testimonials() {
  return (
    <section id="alumni" className="section-y"
      style={{ background: "linear-gradient(180deg, oklch(0.975 0.006 282) 0%, #fff 100%)" }}>
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Head */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Jovens Aprendizes
            </span>
            <h2 className="section-title section-title-dark">
              Alunos que conquistaram sua <em>primeira vaga.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="section-lead text-[#6B7380]">
            Mais de 1.000 alunos encaminhados ao mercado nos últimos anos. Veja quem deu o primeiro
            passo com a Remington — e onde chegou.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
        >
          {alumni.map(a => (
            <motion.article
              key={a.name}
              variants={fadeUp}
              className="alumni-card flex flex-col"
              style={{ "--card-accent": a.accentColor } as React.CSSProperties}
            >
              {/* Top */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white text-sm"
                  style={{ background: `linear-gradient(135deg, ${a.accentColor}, ${a.accentColor}88)` }}>
                  {a.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-[#0B1420] text-sm leading-tight">{a.name}</div>
                  <div className="text-[11px] font-medium mt-0.5 px-2 py-0.5 rounded-full inline-block"
                    style={{ background: `${a.accentColor}15`, color: a.accentColor }}>
                    {a.curso}
                  </div>
                </div>
              </div>

              {/* Job box */}
              <div className="mb-4 p-3 rounded-xl"
                style={{ background: "oklch(0.975 0.006 282)", border: "1px solid rgba(11,8,30,0.06)" }}>
                <div className="font-semibold text-[#0B1420] text-sm">{a.role}</div>
                <div className="text-[12px] text-[#6B7380] mt-0.5">{a.company}</div>
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#6B7380] leading-relaxed italic flex-1 pl-3"
                style={{ borderLeft: `2px solid ${a.accentColor}40` }}>
                "{a.quote}"
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a href="/depoimentos"
            className="inline-flex items-center gap-2 h-12 px-6 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#9B30FF", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.45)" }}>
            Ver todos os depoimentos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
