import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Clock, Users, Cpu, Code2, Globe, Database,
  Zap, Wifi, Lightbulb, GraduationCap, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { CourseEnrollDialog } from "@/components/site/CourseEnrollDialog";

export const Route = createFileRoute("/inovatech")({
  head: () => ({
    meta: [
      { title: "InovaTech · Programacao, IA e IoT · Remington" },
      { name: "description", content: "Curso profissionalizante de 24 meses em programacao, Inteligencia Artificial e IoT. Do Front-End ao Python, do No-Code ao empreendedorismo." },
    ],
  }),
  component: InovaTechPage,
});

type Module = { name: string; topics: string[]; Icon: LucideIcon };

const modules: Module[] = [
  { Icon: Zap, name: "IA e Tecnologias Emergentes", topics: ["ChatGPT avancado", "Google Gemini", "Microsoft Copilot", "Prompts profissionais", "Automatizacao com IA"] },
  { Icon: Lightbulb, name: "Arte Digital e Video com IA", topics: ["Geracao de imagens", "Edicao com IA", "Criacao de videos", "Motion graphics", "Identidade visual"] },
  { Icon: Globe, name: "Sistemas Operacionais", topics: ["Windows 11 avancado", "Android produtivo", "Google Drive & Cloud", "Seguranca digital", "Manutencao basica"] },
  { Icon: Code2, name: "Front-End Development", topics: ["HTML5 semantico", "CSS3 & Flexbox", "JavaScript ES6+", "Responsividade", "Deploy de sites"] },
  { Icon: Database, name: "Python e Analise de Dados", topics: ["Python do zero", "Bibliotecas pandas/numpy", "Visualizacao de dados", "Automacao de planilhas", "Scripts praticos"] },
  { Icon: Wifi, name: "IoT e Automacao", topics: ["Tinkercad & simulacao", "Sensores e atuadores", "Arduino basico", "Projetos conectados", "Prototipagem rapida"] },
  { Icon: Cpu, name: "Desenvolvimento No-Code", topics: ["MIT App Inventor", "Apps Android sem codigo", "Fluxos automatizados", "Integracao de APIs", "Publicacao na loja"] },
  { Icon: GraduationCap, name: "Empreendedorismo e Inovacao", topics: ["Modelo de negocios", "Pitch profissional", "Marketing digital", "Precificacao de servicos", "Projeto final integrador"] },
];

const differentials = [
  { Icon: Cpu, title: "Stack completa do mercado", desc: "IA, Front-End, Python e IoT no mesmo curso — o unico profissionalizante com essa amplitude na regiao." },
  { Icon: Code2, title: "Projetos reais a cada modulo", desc: "Sites publicados, scripts funcionais, apps na loja e automacoes que voce mostra no portfolio." },
  { Icon: Globe, title: "Carreira multiplas saidas", desc: "Front-End Dev, Back-End Jr., Analista de Dados, Programador Python ou Desenvolvedor IoT." },
  { Icon: GraduationCap, title: "Certificado reconhecido", desc: "Certificacao Remington com 57 anos de reputacao no mercado de tecnologia educacional." },
  { Icon: Zap, title: "Acompanhamento pedagogico", desc: "Professores especializados, suporte individual e programa de empregabilidade ao final do curso." },
  { Icon: Lightbulb, title: "Garantia de ensino", desc: "Se voce nao aprender, a Remington garante reposicao das aulas ate voce dominar o conteudo." },
];

const careers = ["Front-End Developer", "Back-End Developer Jr.", "Analista de Dados Jr.", "Programador Python", "Desenvolvedor IoT", "Empreendedor Digital"];

function InovaTechPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative bg-primary overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 circuit-pattern opacity-[0.12]" />
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,48,255,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,127,255,0.14) 0%, transparent 65%)" }} />

        <div className="relative container mx-auto px-4 md:px-6 py-20 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-accent/30 px-4 py-1.5 mb-8"
              style={{ background: "linear-gradient(135deg,rgba(155,48,255,0.1),rgba(79,127,255,0.1))" }}>
              <Cpu className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Remington · Curso Profissionalizante</span>
            </div>
            <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">InovaTech</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient mt-3">
                Programacao, IA e Internet das Coisas
              </span>
            </h1>
            <p className="mt-7 text-white/55 text-base lg:text-lg leading-relaxed max-w-2xl">
              Forme-se profissional <span className="text-white/85 font-medium">multidisciplinar e inovador</span>, capaz de aplicar programacao, Inteligencia Artificial e IoT para resolver desafios reais do mercado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[{ n: "176h", l: "carga horaria" }, { n: "24", l: "meses" }, { n: "8", l: "modulos" }].map(s => (
                <div key={s.l} className="border border-white/10 px-5 py-3 text-center"
                  style={{ background: "rgba(155,48,255,0.07)" }}>
                  <div className="font-display text-2xl font-bold text-accent">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CourseEnrollDialog courseName="InovaTech" Icon={Cpu} triggerLabel="Aula experimental gratuita" />
              <Link to="/contato"
                className="inline-flex items-center gap-2 h-12 px-6 border border-white/20 text-white/75 font-semibold text-sm hover:border-accent/50 hover:text-white transition-colors">
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
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Sobre o curso</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A tecnologia do futuro,<br /><span className="text-gradient">ensinada hoje.</span>
          </h2>
          <p className="mt-6 text-white/55 text-base lg:text-lg leading-relaxed">
            O InovaTech e um dos cursos mais completos da Remington. Em 24 meses, voce domina todo o ecossistema de tecnologia moderno: da criacao de sites com HTML/CSS/JS ao desenvolvimento Python com analise de dados, passando por projetos de IoT com Arduino e automacoes com IA.
          </p>
          <p className="mt-4 text-white/55 text-base lg:text-lg leading-relaxed">
            Cada modulo entrega um projeto concreto — sites publicados, scripts funcionais, apps na Play Store — construindo um <span className="text-white/85 font-medium">portfolio profissional real</span> ao longo do curso.
          </p>
        </div>
      </section>

      {/* GRADE CURRICULAR */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Grade curricular</span>
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
                  style={{ background: "linear-gradient(135deg,rgba(155,48,255,0.2),rgba(79,127,255,0.15))", border: "1px solid rgba(155,48,255,0.3)" }}>
                  <m.Icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent/70 mb-1">Modulo {String(i+1).padStart(2,"0")}</div>
                <h3 className="font-display text-sm font-bold text-white leading-snug mb-3">{m.name}</h3>
                <ul className="space-y-1.5">
                  {m.topics.map(t => (
                    <li key={t} className="flex items-start gap-2 text-xs text-white/45">
                      <Check className="h-3 w-3 text-accent flex-shrink-0 mt-0.5" />{t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SAIDAS PROFISSIONAIS */}
      <section className="py-16 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Saidas profissionais</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {careers.map(c => (
              <span key={c} className="inline-flex items-center gap-2 border border-accent/25 px-4 py-2 text-sm font-medium text-white/70"
                style={{ background: "rgba(155,48,255,0.07)" }}>
                <Check className="h-3.5 w-3.5 text-accent" />{c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Diferenciais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            Por que o <span className="text-gradient">InovaTech</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
            {differentials.map((d, i) => (
              <motion.div key={d.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-primary p-7 hover:bg-white/[0.03] transition-colors">
                <div className="flex h-12 w-12 items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg,rgba(155,48,255,0.2),rgba(79,127,255,0.15))", border: "1px solid rgba(155,48,255,0.3)" }}>
                  <d.Icon className="h-5 w-5 text-accent" />
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
