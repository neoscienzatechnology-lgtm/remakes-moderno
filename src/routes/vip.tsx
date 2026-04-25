import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Crown, BarChart2, Palette, Video,
  PenTool, Cpu, Wifi, Star, GraduationCap, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { CourseEnrollDialog } from "@/components/site/CourseEnrollDialog";

export const Route = createFileRoute("/vip")({
  head: () => ({
    meta: [
      { title: "Curso VIP · Profissionalizante Personalizado · Remington" },
      { name: "description", content: "Curso VIP da Remington: profissionalizante personalizado em design, programacao, marketing digital, AutoCAD, video e muito mais. Escolha sua area e comece agora." },
    ],
  }),
  component: VipPage,
});

type Area = { name: string; topics: string[]; Icon: LucideIcon };

const areas: Area[] = [
  { Icon: Crown, name: "Office Suite e Produtividade", topics: ["Word avancado", "Excel com formulas", "PowerPoint profissional", "Outlook e agenda", "Microsoft 365 completo"] },
  { Icon: BarChart2, name: "Excel Avancado e Power BI", topics: ["Tabelas dinamicas", "Funcoes avancadas", "Dashboards interativos", "Power BI do zero", "Relatorios gerenciais"] },
  { Icon: Wifi, name: "Marketing Digital", topics: ["Estrategia de conteudo", "Gestao de redes sociais", "Google Ads e Meta Ads", "SEO basico", "Metricas e resultados"] },
  { Icon: Palette, name: "Design Grafico", topics: ["CorelDRAW completo", "Adobe Photoshop", "Adobe Illustrator", "InDesign editorial", "Identidade visual"] },
  { Icon: Video, name: "Edicao de Video", topics: ["Adobe Premiere Pro", "After Effects", "Capcut profissional", "Color grading", "Exportacao para plataformas"] },
  { Icon: PenTool, name: "AutoCAD 2D e 3D", topics: ["Interface e ferramentas", "Plantas e projetos 2D", "Modelagem 3D basica", "Normas tecnicas", "Impressao de projetos"] },
  { Icon: Cpu, name: "Programacao de Jogos", topics: ["Unity basico", "3DS Max modelagem", "Logica de jogos", "Animacoes simples", "Publicacao de projetos"] },
  { Icon: GraduationCap, name: "Hardware e Redes", topics: ["Manutencao de PCs", "Montagem e configuracao", "Redes locais", "Cabeamento estruturado", "Suporte tecnico"] },
];

const differentials = [
  { Icon: Crown, title: "Completamente personalizado", desc: "Voce escolhe as areas de interesse e monta seu proprio percurso de aprendizado conforme sua necessidade e disponibilidade." },
  { Icon: Star, title: "Flexibilidade de horario", desc: "Grade flexivel que se adapta a sua rotina — ideal para quem trabalha, estuda ou tem compromissos fixos." },
  { Icon: BarChart2, title: "Resultado em curto prazo", desc: "Modulos focados e objetivos para que voce aplique o conhecimento rapidamente no trabalho ou freelance." },
  { Icon: Palette, title: "Ferramentas do mercado", desc: "Adobe, CorelDRAW, AutoCAD, Unity, Power BI — aprenda as ferramentas que as empresas realmente usam e cobram." },
  { Icon: GraduationCap, title: "Certificado Remington", desc: "57 anos de tradicao educacional. Certificado valorizado por empresas de design, engenharia e tecnologia." },
  { Icon: Wifi, title: "Professores especialistas", desc: "Cada modulo e ensinado por um especialista na area — designers, programadores, engenheiros e marketeiros." },
];

function VipPage() {
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
              <Crown className="h-3.5 w-3.5 text-cyan" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Remington · Profissionalizante</span>
            </div>
            <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">Curso VIP</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient mt-3">
                Profissionalizante Sob Medida
              </span>
            </h1>
            <p className="mt-7 text-white/55 text-base lg:text-lg leading-relaxed max-w-2xl">
              <span className="text-white/85 font-medium">Escolha sua area</span> e monte seu curriculo de aprendizado. Design, programacao, marketing digital, AutoCAD, video, Power BI e muito mais — no seu tempo, do seu jeito.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[{ n: "8+", l: "areas" }, { n: "Flexivel", l: "horario" }, { n: "Rapido", l: "resultado" }].map(s => (
                <div key={s.l} className="border border-white/10 px-5 py-3 text-center"
                  style={{ background: "rgba(107,127,255,0.07)" }}>
                  <div className="font-display text-2xl font-bold text-cyan">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CourseEnrollDialog courseName="Curso VIP" Icon={Crown} triggerLabel="Aula experimental gratuita" />
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
            O unico curso que<br /><span className="text-gradient">se adapta a voce.</span>
          </h2>
          <p className="mt-6 text-white/55 text-base lg:text-lg leading-relaxed">
            O Curso VIP nasceu para quem sabe o que quer aprender mas precisa de flexibilidade. Voce escolhe entre 8 areas profissionais — design, video, programacao, marketing, AutoCAD, Power BI e mais — e a Remington monta um percurso de aprendizado personalizado para os seus objetivos.
          </p>
          <p className="mt-4 text-white/55 text-base lg:text-lg leading-relaxed">
            Aulas presenciais com <span className="text-white/85 font-medium">2 horas semanais</span>, professores especialistas em cada area e certificado Remington ao final. Resultado rapido e pratico, sem enrolacao.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cyan" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Areas disponiveis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            8 areas. <span className="text-gradient">Voce escolhe.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {areas.map((a, i) => (
              <motion.div key={a.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-primary p-6 hover:bg-white/[0.03] transition-colors">
                <div className="flex h-10 w-10 items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg,rgba(107,127,255,0.2),rgba(155,48,255,0.15))", border: "1px solid rgba(107,127,255,0.3)" }}>
                  <a.Icon className="h-5 w-5 text-cyan" />
                </div>
                <h3 className="font-display text-sm font-bold text-white leading-snug mb-3">{a.name}</h3>
                <ul className="space-y-1.5">
                  {a.topics.map(t => (
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
            Por que o <span className="text-gradient">VIP</span>?
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
