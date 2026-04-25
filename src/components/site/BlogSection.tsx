import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import careerImg from "@/assets/blog-career.jpg";
import aiImg from "@/assets/blog-ai.jpg";
import roboticsImg from "@/assets/blog-robotics.jpg";

const posts = [
  {
    tag: "Carreira",
    title: "Como dar o primeiro passo na area de IA e tecnologia em 2025",
    date: "12 Mar 2025",
    image: careerImg,
  },
  {
    tag: "IA",
    title: "Inteligencia Artificial: o que estudar para se destacar no mercado",
    date: "28 Fev 2025",
    image: aiImg,
  },
  {
    tag: "Automatizacao",
    title: "Como automatizar tarefas repetitivas e ganhar horas no seu dia",
    date: "10 Fev 2025",
    image: roboticsImg,
  },
  {
    tag: "Renda",
    title: "5 formas de monetizar seus conhecimentos de IA ainda este ano",
    date: "05 Fev 2025",
    image: careerImg,
  },
  {
    tag: "Produtividade",
    title: "Prompts que todo profissional deveria conhecer para trabalhar mais rapido",
    date: "22 Jan 2025",
    image: aiImg,
  },
  {
    tag: "Mercado",
    title: "Por que empresas estao priorizando profissionais com IA no curriculo",
    date: "10 Jan 2025",
    image: roboticsImg,
  },
];

export function BlogSection() {
  return (
    <section className="relative bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.08) 0%, transparent 70%)" }} />

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Blog Remington IA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Conteudo que abre caminhos
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white transition-colors"
          >
            Ver todos os artigos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px md:grid-cols-3 bg-white/8">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-primary hover:bg-white/[0.025] transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,5,16,0.75) 0%, rgba(5,5,16,0.2) 50%, transparent 100%)" }} />
                <span
                  className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: "linear-gradient(135deg, rgba(155,48,255,0.85), rgba(79,127,255,0.85))" }}
                >
                  {p.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-white/35">
                  <Calendar className="h-3.5 w-3.5" /> {p.date}
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-white leading-snug group-hover:text-accent transition-colors flex-1">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Leia mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
