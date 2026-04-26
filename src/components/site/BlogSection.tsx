import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    cat: "Carreira",
    catColor: "#9B30FF",
    title: "Como é o curso profissionalizante?",
    desc: "Um panorama sobre o formato, duração, pré-requisitos e o que esperar do primeiro dia ao certificado.",
    href: "#blog",
    gradient: "from-[#9B30FF]/20 to-[#6B7FFF]/10",
  },
  {
    cat: "Mercado",
    catColor: "#4F7FFF",
    title: "A importância dos cursos profissionalizantes na construção da carreira",
    desc: "Por que a formação técnica se tornou a alavanca de carreira mais rápida na última década.",
    href: "#blog",
    gradient: "from-[#4F7FFF]/20 to-[#9B30FF]/10",
  },
  {
    cat: "Orientação",
    catColor: "#6B7FFF",
    title: "Quem pode fazer um curso profissionalizante?",
    desc: "Da primeira vaga à transição de carreira: o perfil real dos estudantes que se formam na Remington.",
    href: "#blog",
    gradient: "from-[#6B7FFF]/20 to-[#4F7FFF]/10",
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

export function BlogSection() {
  return (
    <section id="blog" className="section-y bg-white">
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Head */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Blog Remington
            </span>
            <h2 className="section-title section-title-dark">
              Conteúdo que abre portas antes do <em>primeiro dia de aula.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="section-lead text-[#6B7380]">
            Dicas, análises de carreira e estudos sobre o mundo profissional. Para quem está decidindo,
            começando ou trocando de rumo.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {posts.map(p => (
            <motion.a
              key={p.title}
              href={p.href}
              variants={fadeUp}
              className="group flex flex-col rounded-[28px] overflow-hidden bg-white cursor-pointer"
              style={{
                border: "1px solid rgba(11,8,30,0.06)",
                transition: "transform 0.3s cubic-bezier(0.2,0.7,0.15,1), box-shadow 0.3s cubic-bezier(0.2,0.7,0.15,1)",
              }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px -20px rgba(0,39,68,0.18)" }}
            >
              {/* Media */}
              <div className={`relative aspect-video bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 circuit-pattern opacity-[0.12]" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-full"
                    style={{ background: p.catColor }}>
                    {p.cat}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-6 gap-3">
                <h3 className="font-display font-semibold text-[#0B1420] text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[#6B7380] leading-relaxed flex-1">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all duration-200"
                  style={{ color: p.catColor }}>
                  Leia mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
