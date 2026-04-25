import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Bot, Gamepad2, Cpu, Layers, Wifi,
  Smartphone, Star, GraduationCap, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { CourseEnrollDialog } from "@/components/site/CourseEnrollDialog";

export const Route = createFileRoute("/techkids")({
  head: () => ({
    meta: [
      { title: "TechKids · Tecnologia, Automacao e IA para Criancas · Remington" },
      { name: "description", content: "Curso de tecnologia, automacao e IA para criancas e adolescentes. Scratch, robotica, impressao 3D, Arduino e desenvolvimento de apps em 24 meses." },
    ],
  }),
  component: TechKidsPage,
});

type Module = { name: string; topics: string[]; Icon: LucideIcon };

const modules: Module[] = [
  { Icon: Bot, name: "IA e Tecnologias Emergentes", topics: ["ChatGPT para criancas", "Gemini & Copilot", "Prompts criativos", "Imagens com IA", "Videos e animacoes"] },
  { Icon: Star, name: "Arte Digital e Video com IA", topics: ["Design grafico basico", "Edicao de fotos", "Criacao de personagens", "Animacoes simples", "Apresentacoes visuais"] },
  { Icon: GraduationCap, name: "Sistemas Operacionais", topics: ["Windows para jovens", "Organizacao digital", "Cloud e Google Drive", "Seguranca online", "Netiqueta digital"] },
  { Icon: Layers, name: "Microsoft Office com IA", topics: ["Word com IA", "Excel basico", "PowerPoint criativo", "Apresentacoes profissionais", "Documentos colaborativos"] },
  { Icon: Gamepad2, name: "Programacao Scratch e Minecraft", topics: ["Logica de programacao", "Scratch do zero", "Jogos no Minecraft", "Pensamento computacional", "Desafios e fases"] },
  { Icon: Cpu, name: "Robotica e Eletronica", topics: ["Circuitos eletronicos", "Arduino iniciante", "Sensores e LEDs", "Projetos fisicos", "Montagem pratica"] },
  { Icon: Wifi, name: "Modelagem 3D e Impressao", topics: ["Tinkercad 3D", "Modelagem basica", "Impressao 3D real", "Prototipagem", "Projetos criativos"] },
  { Icon: Smartphone, name: "Desenvolvimento de Aplicativos", topics: ["MIT App Inventor", "Apps Android", "Interface de usuario", "Logica de apps", "Publicacao do app"] },
];

const differentials = [
  { Icon: Bot, title: "Aprendizado ludico e pratico", desc: "Metodologia gamificada que prende a atencao de criancas e adolescentes com projetos divertidos e desafios reais." },
  { Icon: Gamepad2, title: "Projetos que impressionam", desc: "Cada modulo entrega algo concreto: um jogo no Scratch, um robo funcionando, um app na Play Store." },
  { Icon: Cpu, title: "Robotica com Arduino real", desc: "Kits fisicos de eletronica e robotica para aprender na pratica, nao so na teoria." },
  { Icon: Layers, title: "Preparacao para o futuro", desc: "Desenvolve raciocinio logico, criatividade e habilidades do seculo XXI desde cedo." },
  { Icon: GraduationCap, title: "Certificado Remington", desc: "57 anos de tradicao educacional garantindo um certificado valorizado pelo mercado." },
  { Icon: Star, title: "Professores especializados", desc: "Equipe treinada para ensinar tecnologia de forma acessivel e engajante para jovens." },
];

function TechKidsPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-primary overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 circuit-pattern opacity-[0.12]" />
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(107,127,255,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,48,255,0.14) 0%, transparent 65%)" }} />

        <div className="relative container mx-auto px-4 md:px-6 py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-cyan/30 px-4 py-1.5 mb-8"
              style={{ background: "linear-gradient(135deg,rgba(107,127,255,0.1),rgba(155,48,255,0.1))" }}>
              <Bot className="h-3.5 w-3.5 text-cyan" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Remington · Infantojuvenil</span>
            </div>
            <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">TechKids</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient mt-3">
                Tecnologia, Automacao e IA para Jovens
              </span>
            </h1>
            <p className="mt-7 text-white/55 text-base lg:text-lg leading-relaxed max-w-2xl">
              Uma abordagem <span className="text-white/85 font-medium">pratica e interativa</span> para criancas e adolescentes aprenderem tecnologia com IA, robotica, programacao Scratch, modelagem 3D e desenvolvimento de apps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[{ n: "176h", l: "carga horaria" }, { n: "24", l: "meses" }, { n: "8", l: "modulos" }].map(s => (
                <div key={s.l} className="border border-white/10 px-5 py-3 text-center"
                  style={{ background: "rgba(107,127,255,0.07)" }}>
                  <div className="font-display text-2xl font-bold text-cyan">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CourseEnrollDialog courseName="TechKids" Icon={Bot} triggerLabel="Aula experimental gratuita" />
              <Link to="/contato"
                className="inline-flex items-center gap-2 h-12 px-6 border border-white/20 text-white/75 font-semibold text-sm hover:border-cyan/50 hover:text-white transition-colors">
                Falar com a equipe <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 lg:py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Sobre o curso</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Prepare seu filho para<br /><span className="text-gradient">o mundo digital.</span>
          </h2>
          <p className="mt-6 text-white/55 text-base lg:text-lg leading-relaxed">
            O TechKids vai alem da informatica basica. Em 24 meses, criancas e adolescentes aprendem IA, robotica com Arduino real, programacao Scratch, modelagem 3D com impressao real e desenvolvimento de apps para Android — tudo de forma ludica e pratica.
          </p>
          <p className="mt-4 text-white/55 text-base lg:text-lg leading-relaxed">
            O metodo estimula <span className="text-white/85 font-medium">raciocinio logico, criatividade e trabalho em equipe</span>, preparando jovens com as habilidades mais valorizadas do seculo XXI.
          </p>
        </div>
      </section>

      {/* GRADE CURRICULAR */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Grade curricular</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            8 modulos. <span className="text-gradient">24 meses.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {modules.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-primary p-6 hover:bg-white/[0.03] transition-colors">
                <div className="flex h-10 w-10 items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg,rgba(107,127,255,0.2),rgba(155,48,255,0.15))", border: "1px solid rgba(107,127,255,0.3)" }}>
                  <m.Icon className="h-5 w-5 text-cyan" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan/70 mb-1">Modulo {String(i+1).padStart(2,"0")}</div>
                <h3 className="font-display text-sm font-bold text-white leading-snug mb-3">{m.name}</h3>
                <ul className="space-y-1.5">
                  {m.topics.map(t => (
                    <li key={t} className="flex items-start gap-2 text-xs text-white/45">
                      <Check className="h-3 w-3 text-cyan flex-shrink-0 mt-0.5" />{t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Diferenciais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            Por que o <span className="text-gradient">TechKids</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {differentials.map((d, i) => (
              <motion.div key={d.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-primary p-7 hover:bg-white/[0.03] transition-colors">
                <div className="flex h-12 w-12 items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg,rgba(107,127,255,0.2),rgba(155,48,255,0.15))", border: "1px solid rgba(107,127,255,0.3)" }}>
                  <d.Icon className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="font-display text-base font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
