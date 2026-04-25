import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/jpia-hero.jpg";
import { BrandImage } from "./BrandImage";

export function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-[0.12]" />

      {/* Purple glow blobs */}
      <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.10) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.06) 0%, transparent 70%)" }} />

      <div className="relative container mx-auto px-4 md:px-6 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 border border-accent/30 px-4 py-1.5"
              style={{ background: "linear-gradient(135deg, rgba(155,48,255,0.1), rgba(79,127,255,0.1))" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Remington IA · Instituto de Ensino
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.0] tracking-tight text-white">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Produtividade
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-gradient mt-1">
                e Renda
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] mt-1">
                com{" "}
                <span className="relative inline-block">
                  IA
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(90deg, #9B30FF, #4F7FFF)" }} />
                </span>
                .
              </span>
            </h1>

            {/* Sub */}
            <p className="mt-8 text-white/55 text-base lg:text-lg leading-relaxed max-w-lg">
              Instituto especializado em{" "}
              <span className="text-white/85 font-medium">Inteligencia Artificial aplicada.</span>{" "}
              Aprenda, automatize e monetize suas habilidades com as ferramentas mais poderosas do mercado.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/jovem-profissional-ia"
                className="inline-flex items-center gap-2 h-13 px-7 font-semibold text-sm tracking-wide text-white hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #9B30FF, #4F7FFF)" }}
              >
                Conhecer os cursos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 h-13 px-7 border border-white/20 text-white/75 font-semibold text-sm tracking-wide hover:border-accent/50 hover:text-white transition-colors"
              >
                Aula experimental gratuita
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Neon corner accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l"
              style={{ borderColor: "rgba(155,48,255,0.5)" }} />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r"
              style={{ borderColor: "rgba(79,127,255,0.5)" }} />

            {/* Outer glow */}
            <div className="absolute inset-0 rounded-sm pointer-events-none"
              style={{ boxShadow: "0 0 60px rgba(155,48,255,0.15), 0 0 120px rgba(79,127,255,0.08)" }} />

            <div className="relative">
              <BrandImage
                src={heroImg}
                alt="Remington IA — aprenda, produza e fature com Inteligencia Artificial"
                width={1280}
                height={896}
                aspect="aspect-[4/3]"
                intensity={65}
                loading="eager"
                watermark
              />

              {/* Bottom stat strip */}
              <div className="absolute bottom-0 inset-x-0 z-40 border-t border-white/10 bg-primary/85 backdrop-blur-sm px-5 py-4">
                <div className="flex items-center justify-between">
                  {[
                    { n: "57", label: "anos" },
                    { n: "3k+", label: "formados" },
                    { n: "96%", label: "empregados" },
                    { n: "100%", label: "pratica" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                      <div className="text-[10px] text-white/45 uppercase tracking-wider mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
}
