import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { BrandImage } from "./BrandImage";
import studentsImg from "@/assets/hero-students.jpg";

export function CtaSection() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleWhatsApp = () => {
    const msg = `Ola! Meu nome e ${form.nome || "[nome]"}. Email: ${form.email || "--"}. Telefone: ${form.telefone || "--"}. Quero conhecer os cursos da Remington IA.`;
    window.open(`https://wa.me/551632360000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-[0.07]" />
      <div
        className="absolute -top-40 left-1/3 h-80 w-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,48,255,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative">
        <div
          className="h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(155,48,255,0.4), rgba(79,127,255,0.4), transparent)" }}
        />

        <div className="container mx-auto px-4 md:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

            {/* Left — promo image + copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Promo image */}
              <div className="relative border border-white/10 overflow-hidden mb-8 flex-shrink-0"
                style={{ boxShadow: "0 0 40px rgba(155,48,255,0.1)" }}
              >
                {/* Neon corners */}
                <div className="absolute top-0 left-0 h-8 w-8 border-t border-l z-10" style={{ borderColor: "rgba(155,48,255,0.6)" }} />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r z-10" style={{ borderColor: "rgba(79,127,255,0.6)" }} />

                <BrandImage
                  src={studentsImg}
                  alt="Alunos Remington IA"
                  aspect="aspect-[16/7]"
                  intensity={55}
                />

                {/* Overlay badge */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div
                    className="text-center px-6 py-4"
                    style={{ background: "rgba(5,5,16,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(155,48,255,0.3)" }}
                  >
                    <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                      Aula{" "}
                      <span className="text-gradient">experimental</span>
                    </div>
                    <div className="mt-1 text-white/55 text-sm tracking-wide">gratuita e sem compromisso</div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent flex-shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Comece agora</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-[2.75rem] font-bold text-white leading-[1.05]">
                Pronto para a{" "}
                <span className="text-gradient">proxima</span>{" "}
                jornada?
              </h2>

              <p className="mt-6 text-white/45 text-base lg:text-lg leading-relaxed max-w-lg">
                Deixe seu contato e converse com nosso time pelo WhatsApp. Vamos te ajudar a escolher
                o curso ideal e tirar todas as duvidas sobre matricula, bolsas e horarios.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Atendimento personalizado",
                  "Resposta em minutos",
                  "Sem compromisso",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-white/55">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative border border-white/12 p-7 sm:p-9 self-start lg:self-stretch flex flex-col justify-center"
              style={{ boxShadow: "0 0 40px rgba(155,48,255,0.08), inset 0 0 40px rgba(155,48,255,0.03)" }}
            >
              {/* Neon corners */}
              <div className="absolute top-0 left-0 h-8 w-8 border-t border-l" style={{ borderColor: "rgba(155,48,255,0.6)" }} />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r" style={{ borderColor: "rgba(79,127,255,0.6)" }} />

              <h3 className="font-display text-xl font-bold text-white mb-6">Fale com a Remington IA</h3>
              <div className="space-y-4">
                <CtaField
                  label="Seu nome"
                  value={form.nome}
                  onChange={(v) => setForm({ ...form, nome: v })}
                  placeholder="Como podemos te chamar?"
                />
                <CtaField
                  label="E-mail"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="seu@email.com"
                />
                <CtaField
                  label="Telefone"
                  value={form.telefone}
                  onChange={(v) => setForm({ ...form, telefone: v })}
                  placeholder="(16) 90000-0000"
                />
                <button
                  onClick={handleWhatsApp}
                  className="w-full h-12 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
                  style={{ background: "linear-gradient(135deg, #9B30FF, #4F7FFF)" }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Iniciar conversa no WhatsApp
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </button>
                <p className="text-[11px] text-white/25 text-center pt-1">
                  Ao enviar, voce concorda em ser contatado pela equipe Remington IA.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaField({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full h-11 bg-white/5 border border-white/12 px-4 text-sm text-white placeholder:text-white/20 outline-none transition-colors"
        onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,48,255,0.5)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
      />
    </label>
  );
}
