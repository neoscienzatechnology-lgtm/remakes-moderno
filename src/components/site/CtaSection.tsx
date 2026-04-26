import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";

const contactCards = [
  {
    Icon: () => (
      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    iconBg: "#25D366",
    label: "WhatsApp",
    value: "(16) 2102-0077",
    href: "https://api.whatsapp.com/send?phone=551621020077",
  },
  {
    Icon: Phone,
    iconBg: "#9B30FF",
    label: "Telefone",
    value: "(16) 2102-0077",
    href: "tel:+551621020077",
  },
  {
    Icon: MapPin,
    iconBg: "oklch(0.07 0.05 282)",
    label: "Unidade",
    value: "Ribeirão Preto · SP",
    href: "https://maps.google.com",
  },
];

export function CtaSection() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", curso: "Jovem Profissional IA" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Email: ${form.email}. Telefone: ${form.telefone}. Quero saber mais sobre: ${form.curso}.`;
    window.open(`https://api.whatsapp.com/send?phone=551621020077&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="section-y" style={{ background: "oklch(0.07 0.05 282)" }}>
      <div className="relative container mx-auto px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Background layers */}
        <div className="absolute inset-0 circuit-pattern-nodes opacity-[0.07] pointer-events-none" />
        <div className="absolute -top-40 left-1/3 h-80 w-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,48,255,0.15) 0%, transparent 70%)" }} />

        <div className="relative rounded-[32px] overflow-hidden p-[clamp(32px,6vw,64px)]"
          style={{
            background: "linear-gradient(160deg, oklch(0.10 0.06 280) 0%, oklch(0.07 0.05 282) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>

          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(155,48,255,0.3) 0%, transparent 70%)", filter: "blur(40px)" }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 circuit-pattern opacity-[0.06]" />

          <div className="relative">
            {/* Eyebrow + heading */}
            <div className="text-center mb-10">
              <span className="eyebrow mb-4 block justify-center">
                <span className="eyebrow-dot" />
                Próximo passo
              </span>
              <h2 className="section-title section-title-light mb-4">
                Pronto para começar <em>a sua próxima carreira?</em>
              </h2>
              <p className="section-lead max-w-[52ch] mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
                Preencha o formulário abaixo ou fale direto no WhatsApp — nosso time responde em menos
                de 1 hora em dias úteis.
              </p>
            </div>

            {/* Grid: form + contact */}
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12">

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <CtaField label="Nome" value={form.nome} onChange={v => setForm({ ...form, nome: v })} placeholder="Seu nome completo" />
                  <CtaField label="E-mail" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="voce@exemplo.com" />
                </div>
                <CtaField label="Telefone" type="tel" value={form.telefone} onChange={v => setForm({ ...form, telefone: v })} placeholder="(16) 9 9999-9999" />
                <label className="block">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">Curso de interesse</span>
                  <select
                    value={form.curso}
                    onChange={e => setForm({ ...form, curso: e.target.value })}
                    className="w-full h-12 px-4 text-sm text-white outline-none transition-colors"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px" }}
                  >
                    <option value="Jovem Profissional IA">Jovem Profissional IA</option>
                    <option value="Kids IA">Kids IA</option>
                    <option value="Auxiliar de Veterinário">Auxiliar de Veterinário</option>
                    <option value="Curso VIP">Curso VIP</option>
                  </select>
                </label>
                <div className="flex items-start gap-2.5 mt-1">
                  <input type="checkbox" required className="mt-1 flex-shrink-0" id="lgpd" />
                  <label htmlFor="lgpd" className="text-[12px] text-white/40 leading-relaxed cursor-pointer">
                    Li e concordo com a{" "}
                    <a href="/privacidade" className="underline hover:text-white/70 transition-colors">
                      Política de Privacidade
                    </a>
                    .
                  </label>
                </div>
                <button type="submit"
                  className="h-12 px-6 text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 mt-1"
                  style={{ background: "oklch(0.58 0.28 292)", borderRadius: "12px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.5)" }}>
                  <span>Quero minha vaga</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.form>

              {/* Contact cards */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col gap-3"
              >
                {contactCards.map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[16px] transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(155,48,255,0.3)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.iconBg }}>
                      <c.Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">{c.label}</div>
                      <div className="text-[13px] text-white/50">{c.value}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/25 flex-shrink-0" />
                  </a>
                ))}

                {/* Hours */}
                <div className="p-5 rounded-[16px] mt-2"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <h4 className="font-display font-semibold text-white text-sm mb-3">Atendimento</h4>
                  <p className="text-[13px] text-white/55">Segunda a Sexta · 08h às 22h</p>
                  <p className="text-[13px] text-white/55 mt-1">Sábado · 08h às 14h</p>
                </div>
              </motion.aside>
            </div>
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
      <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2">{label}</span>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 px-4 text-sm text-white placeholder:text-white/20 outline-none transition-colors"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px" }}
        onFocus={e => (e.currentTarget.style.borderColor = "rgba(155,48,255,0.5)")}
        onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
      />
    </label>
  );
}
