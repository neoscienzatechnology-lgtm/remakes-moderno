import { motion } from "framer-motion";

const features = [
  { num: "01", title: "57 anos de experiência", desc: "Mais de meio século dedicados a uma única coisa: formação profissional que funciona." },
  { num: "02", title: "Infraestrutura de última geração", desc: "Laboratórios equipados, ambientes confortáveis e tecnologia acessível para cada turma." },
  { num: "03", title: "Professores qualificados", desc: "Time com vivência real na indústria — nossos professores têm quilometragem de mercado." },
  { num: "04", title: "Teoria e prática juntas", desc: "Aulas construídas em torno de projetos reais. O que você aprende na segunda, aplica na terça." },
  { num: "05", title: "Acompanhamento pedagógico", desc: "Você tem um time ao lado durante todo o curso. Não aprender não é uma opção." },
  { num: "06", title: "Aula presencial", desc: "Em Ribeirão Preto, no nosso campus próprio. Troca, contato e bancada ao vivo." },
  { num: "07", title: "Carga horária inteligente", desc: "Apenas 2 horas semanais. Encaixa na rotina de quem estuda, trabalha ou ambos." },
  { num: "08", title: "Programa de empregabilidade", desc: "Prepara, Qualifica e Encaminha: preparamos o aluno e encaminhamos para vagas reais." },
  { num: "09", title: "Garantia de ensino", desc: "Se você estuda, você aprende. É um compromisso nosso — não uma promessa de marketing." },
];

export function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="section-y relative" style={{ background: "oklch(0.07 0.05 282)" }}>
      <div className="absolute inset-0 circuit-pattern-nodes opacity-[0.08]" />

      <div className="relative container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Head */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow mb-5 block">
              <span className="eyebrow-dot" />
              Por que estudar na Remington
            </span>
            <h2 className="section-title section-title-light">
              Nove motivos para escolher <em>a Remington.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="section-lead" style={{ color: "rgba(255,255,255,0.5)" }}>
            Cada detalhe foi pensado para garantir algo que poucos lugares entregam: uma experiência de
            estudo alinhada com o que o mercado pede agora.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {features.map((f, i) => (
            <motion.article
              key={f.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="feature-card"
              style={{ background: "oklch(0.07 0.05 282)" }}
            >
              <div className="feature-num">{f.num}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
