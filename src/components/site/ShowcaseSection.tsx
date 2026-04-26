import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Cpu, Wifi, Bot, Puzzle, Layers3 } from "lucide-react";

const inovatechFeatures = [
  "Programação Front-End & Back-End",
  "Analista de Dados Júnior",
  "IA, ChatGPT e automações avançadas",
  "Desenvolvedor em IoT & Python",
];

const kidsFeatures = [
  "Scratch, Minecraft & modelagem 3D",
  "Design digital & apps No-Code",
  "Introdução à IA & robótica",
  "Segurança na internet",
];

function CheckItem({ text, accent }: { text: string; accent: string }) {
  return (
    <li className="flex items-center gap-3 text-[15px] font-medium text-[#0B1420]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0"
        style={{ background: accent }}>
        <Check className="h-3 w-3 text-white" />
      </span>
      {text}
    </li>
  );
}

function LaptopMockup({ accent }: { accent: string }) {
  return (
    <div className="rounded-xl overflow-hidden"
      style={{
        background: "oklch(0.07 0.05 282)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
      }}>
      {/* bar */}
      <div className="flex items-center gap-2 px-4 py-3"
        style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
        <div className="ml-3 flex-1 h-6 rounded-full flex items-center px-3 text-[11px]"
          style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}>
          remington.com.br/jovem-profissional-ia
        </div>
      </div>
      {/* screen */}
      <div className="p-6 space-y-3">
        <div className="h-3 rounded-full w-1/3" style={{ background: `${accent}60` }} />
        <div className="h-2 rounded-full w-3/4" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="h-2 rounded-full w-2/3" style={{ background: "rgba(255,255,255,0.05)" }} />
        <div className="mt-5 grid grid-cols-2 gap-2">
          {[
            { Icon: Code, label: "Python & IA" },
            { Icon: Cpu, label: "Automações" },
            { Icon: Wifi, label: "IoT" },
            { Icon: Bot, label: "Agentes IA" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2 rounded-lg p-2.5 text-[11px] font-medium"
              style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}>
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-lg p-2 mt-1"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: accent }}>
            ⚡ AI · IoT · Código
          </span>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ accent }: { accent: string }) {
  return (
    <div className="mx-auto rounded-[28px] overflow-hidden"
      style={{
        width: "min(240px, 60vw)",
        background: "oklch(0.07 0.05 282)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
      }}>
      <div className="mx-auto mt-4 h-1.5 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
      <div className="p-5 mt-2 space-y-2.5">
        <div className="h-2.5 rounded-full w-2/3" style={{ background: `${accent}50` }} />
        <div className="h-2 rounded-full w-full" style={{ background: "rgba(255,255,255,0.08)" }} />
        <div className="h-2 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="grid grid-cols-2 gap-2 mt-4">
          {[
            { Icon: Puzzle, label: "Scratch" },
            { Icon: Layers3, label: "3D" },
            { Icon: Bot, label: "IA Kids" },
            { Icon: Code, label: "Robótica" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl py-3 text-[10px] font-medium"
              style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}20` }}>
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </div>
        <div className="rounded-xl p-2.5 flex items-center gap-2 mt-2"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <Bot className="h-4 w-4" style={{ color: accent }} />
          <span className="text-[10px] font-semibold" style={{ color: accent }}>Kids IA · 8–14 anos</span>
        </div>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <section className="section-y" style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      <div className="container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Section head */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-[clamp(60px,8vw,100px)]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow eyebrow-dark mb-5 block">
              <span className="eyebrow-dot" style={{ background: "oklch(0.58 0.28 292)" }} />
              Em destaque · Trilha Tech
            </span>
            <h2 className="section-title section-title-dark">
              A <em>tecnologia</em> que vai transformar duas gerações.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
            className="section-lead text-[#6B7380]">
            Nossos dois produtos-destaque cobrem a jornada completa — do primeiro contato na infância à formação
            profissional que abre vagas em IA, front-end, back-end e IoT.
          </motion.p>
        </div>

        {/* ── ROW 1: Jovem Profissional IA ── */}
        <div className="grid lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center mb-[clamp(80px,10vw,120px)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="font-mono text-xs uppercase tracking-[0.08em] block mb-5"
              style={{ color: "#9B30FF" }}>// Jovem Profissional IA</span>
            <h3 className="font-display font-semibold text-[#0B1420] mb-6"
              style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Para quem quer entrar no mercado tech em <em style={{ fontStyle: "normal", color: "#9B30FF" }}>12 meses</em>.
            </h3>
            <p className="text-[17px] text-[#6B7380] leading-[1.6] mb-6 max-w-[48ch]">
              Um programa multidisciplinar que combina IA, automações, criação de conteúdo e produtividade.
              Projetos reais, professores do mercado e certificações reconhecidas.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {inovatechFeatures.map(f => <CheckItem key={f} text={f} accent="#9B30FF" />)}
            </ul>
            <a href="/jovem-profissional-ia"
              className="inline-flex items-center gap-2 h-12 px-6 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#9B30FF", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.45)" }}>
              <span>Quero estudar Jovem Profissional IA</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <LaptopMockup accent="#9B30FF" />
          </motion.div>
        </div>

        {/* ── ROW 2: Kids IA (reversed) ── */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-[clamp(40px,6vw,80px)] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-1">
            <PhoneMockup accent="#6B7FFF" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-[0.08em] block mb-5"
              style={{ color: "#6B7FFF" }}>// Kids IA</span>
            <h3 className="font-display font-semibold text-[#0B1420] mb-6"
              style={{ fontSize: "clamp(28px,3.5vw,46px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              A <em style={{ fontStyle: "normal", color: "#6B7FFF" }}>primeira linha de código</em> de uma criança deveria mudar o mundo dela.
            </h3>
            <p className="text-[17px] text-[#6B7380] leading-[1.6] mb-6 max-w-[48ch]">
              Uma trilha completa que combina IA, robótica, design digital e programação —
              pensada para crianças de 8 a 14 anos que querem criar o futuro.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {kidsFeatures.map(f => <CheckItem key={f} text={f} accent="#6B7FFF" />)}
            </ul>
            <a href="/kids-ia"
              className="inline-flex items-center gap-2 h-12 px-6 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#6B7FFF", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(107,127,255,0.45)" }}>
              <span>Quero matricular meu filho</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
