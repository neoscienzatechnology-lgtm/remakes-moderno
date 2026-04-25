import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Stethoscope, Heart, Shield, AlertCircle,
  Microscope, Users, GraduationCap, Star, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { CourseEnrollDialog } from "@/components/site/CourseEnrollDialog";

export const Route = createFileRoute("/auxiliar-veterinario")({
  head: () => ({
    meta: [
      { title: "Auxiliar de Veterinario · 10 meses · Remington" },
      { name: "description", content: "Curso de Auxiliar de Veterinario em 10 meses. 13 modulos com teoria e 16h de pratica clinica supervisionada. Atue em clinicas, petshops e hospitais veterinarios." },
    ],
  }),
  component: AuxiliarVeterinarioPage,
});

type Module = { name: string; topics: string[]; Icon: LucideIcon };

const modules: Module[] = [
  { Icon: Heart, name: "Racas e Origens", topics: ["Principais racas de caes", "Principais racas de gatos", "Caracteristicas fisicas", "Temperamento e comportamento", "Cuidados especificos por raca"] },
  { Icon: Microscope, name: "Anatomia Animal", topics: ["Sistema esqueletico", "Sistema nervoso", "Sistema circulatorio", "Sistema respiratorio", "Orgaos e funcoes"] },
  { Icon: Shield, name: "Imunizacao e Parasitas", topics: ["Calendario vacinal", "Vacinas obrigatorias e opcionais", "Controle de pulgas e carrapatos", "Vermifugacao", "Prevencao de doencas"] },
  { Icon: Heart, name: "Gestacao e Neonatologia", topics: ["Ciclo reprodutivo", "Acompanhamento gestacional", "Parto natural e cesarea", "Cuidados com filhotes", "Desmame e desenvolvimento"] },
  { Icon: AlertCircle, name: "Doencas Infecciosas", topics: ["Cinomose e parvovirose", "Leptospirose", "Raiva e zoonoses", "Diagnostico e sintomas", "Protocolos de isolamento"] },
  { Icon: Microscope, name: "Zoonoses", topics: ["Doencas transmissiveis", "Toxoplasmose", "Leishmaniose", "Prevencao e controle", "Notificacao obrigatoria"] },
  { Icon: Stethoscope, name: "Oftalmologia e Farmacologia", topics: ["Cuidados oculares", "Medicamentos de uso veterinario", "Dosagem e administracao", "Contraindicacoes", "Registros e prescricoes"] },
  { Icon: AlertCircle, name: "Primeiros Socorros", topics: ["Atendimento de emergencia", "Ressuscitacao basica", "Controle de hemorragias", "Fraturas e luxacoes", "Transporte seguro"] },
  { Icon: Shield, name: "Esterilizacao e Biosseguranca", topics: ["Tecnicas de esterilizacao", "Desinfeccao de ambientes", "EPIs e normas de seguranca", "Descarte de residuos", "Controle de infeccao"] },
  { Icon: Stethoscope, name: "Centro Cirurgico", topics: ["Instrumentos cirurgicos", "Tecnicas de sutura", "Preparo pre-operatorio", "Recuperacao pos-cirurgica", "Assepsia cirurgica"] },
  { Icon: Users, name: "Atendimento e Comunicacao", topics: ["Recepcao de pacientes", "Comunicacao com tutores", "Trabalho em equipe", "Etica profissional", "Registros clinicos"] },
  { Icon: GraduationCap, name: "Pratica Clinica Supervisionada", topics: ["16h de pratica real", "Clinica parceira", "Atendimentos supervisionados", "Procedimentos reais", "Portfolio clinico"] },
];

const differentials = [
  { Icon: Stethoscope, title: "Pratica clinica real", desc: "16 horas de pratica supervisionada em clinica veterinaria parceira — voce atende animais reais desde o primeiro dia de estagio." },
  { Icon: Shield, title: "13 modulos especializados", desc: "Grade curricular ampla cobrindo do basico ao avancado: anatomia, cirurgia, farmacologia, emergencias e biosseguranca." },
  { Icon: Heart, title: "Mercado em expansao", desc: "O mercado pet cresce 15% ao ano no Brasil. Clinicas, petshops e hospitais veterinarios estao sempre contratando auxiliares qualificados." },
  { Icon: Users, title: "Acompanhamento pedagogico", desc: "Professores especializados na area veterinaria com experiencia clinica real para orientar seu aprendizado." },
  { Icon: GraduationCap, title: "Certificado Remington", desc: "57 anos de tradicao educacional. Certificado reconhecido por clinicas e hospitais veterinarios da regiao." },
  { Icon: Star, title: "Programa de empregabilidade", desc: "Banco de vagas e indicacoes para clinicas e petshops parceiros para facilitar sua entrada no mercado." },
];

function AuxiliarVeterinarioPage() {
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
              <Stethoscope className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Remington · Saude Animal</span>
            </div>
            <h1 className="font-display font-bold text-white leading-[1.02] tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl">Auxiliar de Veterinario</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient mt-3">
                Teoria, Pratica Clinica e Mercado
              </span>
            </h1>
            <p className="mt-7 text-white/55 text-base lg:text-lg leading-relaxed max-w-2xl">
              Formacao completa em <span className="text-white/85 font-medium">10 meses</span> para atuar em clinicas veterinarias, petshops, hospitais veterinarios e centros cirurgicos. Teoria aprofundada e 16h de pratica clinica supervisionada.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[{ n: "80h", l: "carga horaria" }, { n: "10", l: "meses" }, { n: "16h", l: "pratica real" }].map(s => (
                <div key={s.l} className="border border-white/10 px-5 py-3 text-center"
                  style={{ background: "rgba(155,48,255,0.07)" }}>
                  <div className="font-display text-2xl font-bold text-accent">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CourseEnrollDialog courseName="Auxiliar de Veterinario" Icon={Stethoscope} triggerLabel="Aula experimental gratuita" />
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
            O mercado pet cresce.<br /><span className="text-gradient">Sua carreira tambem.</span>
          </h2>
          <p className="mt-6 text-white/55 text-base lg:text-lg leading-relaxed">
            O Brasil e um dos maiores mercados pet do mundo e o setor cresce 15% ao ano. Clinicas, petshops e hospitais veterinarios estao sempre em busca de auxiliares bem preparados. O curso da Remington forma profissionais com <span className="text-white/85 font-medium">base teorica solida e pratica clinica real</span>.
          </p>
          <p className="mt-4 text-white/55 text-base lg:text-lg leading-relaxed">
            Em apenas 10 meses, voce aprende anatomia animal, farmacologia, tecnicas cirurgicas, biosseguranca e muito mais — com 16 horas de estagio supervisionado em clinica parceira.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {["Clinicas Veterinarias", "Petshops", "Hospitais Veterinarios"].map(l => (
              <div key={l} className="border border-white/10 px-4 py-3 flex items-center gap-2"
                style={{ background: "rgba(155,48,255,0.06)" }}>
                <Heart className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/65 font-medium">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Grade curricular</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            12 modulos + <span className="text-gradient">Pratica Clinica</span>.
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

      {/* DIFERENCIAIS */}
      <section className="py-20 lg:py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Diferenciais</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            Por que a <span className="text-gradient">Remington</span>?
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
