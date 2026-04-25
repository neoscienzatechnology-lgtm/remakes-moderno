import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import contactConnect from "@/assets/contact-connect.jpg";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  email: z.email("E-mail inválido"),
  telefone: z.string().min(8, "Informe um telefone válido"),
  mensagem: z.string().min(10, "Mensagem muito curta — conte um pouco mais"),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · Remington" },
      { name: "description", content: "Fale com a Remington pelo WhatsApp, telefone ou e-mail. Atendimento em Ribeirão Preto." },
      { property: "og:title", content: "Contato · Remington" },
      { property: "og:description", content: "Estamos prontos para te receber." },
      { property: "og:image", content: contactConnect },
      { name: "twitter:image", content: contactConnect },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState<FormData>({ nome: "", email: "", telefone: "", mensagem: "" });
  const [errors, setErrors] = useState<Errors>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const msg = `Olá! Sou ${form.nome}.\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\n${form.mensagem}`;
    window.open(`https://wa.me/551632360000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${contactConnect})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="relative container mx-auto px-4 md:px-6">
          <Link to="/" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1 mb-6">← Voltar</Link>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contato</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-[1.05]">
            Vamos conversar?
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            Tire suas dúvidas, peça informações sobre matrícula, bolsas ou parcerias. Nossa equipe
            responde em poucos minutos.
          </p>
        </div>
      </section>

      <section className="relative bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <ContactCard Icon={MapPin} title="Endereço" body="Av. Independência, 1234 — Ribeirão Preto · SP" />
              <ContactCard Icon={Phone} title="Telefone" body="(16) 3236-0000" />
              <ContactCard Icon={Mail} title="E-mail" body="contato@remington.com.br" />
              <ContactCard Icon={MessageCircle} title="WhatsApp" body="Atendimento em poucos minutos" link="https://wa.me/551632360000" />
            </div>

            <form onSubmit={submit} noValidate className="lg:col-span-7 border border-white/12 bg-white/5 p-6 sm:p-8 space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">Envie uma mensagem</h2>
              <Field label="Nome completo" value={form.nome} error={errors.nome} onChange={(v) => setForm({ ...form, nome: v })} />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-mail" type="email" value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Telefone" value={form.telefone} error={errors.telefone} onChange={(v) => setForm({ ...form, telefone: v })} />
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mensagem</span>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  rows={5}
                  className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-accent transition resize-none ${errors.mensagem ? "border-red-400" : "border-border"}`}
                  placeholder="Conte como podemos te ajudar..."
                />
                {errors.mensagem && <p className="mt-1 text-xs text-red-500">{errors.mensagem}</p>}
              </label>
              <Button type="submit" className="w-full h-12 rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 font-semibold shadow-glow">
                <Send className="mr-2 h-4 w-4" /> Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative bg-primary pb-20 lg:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Onde estamos</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Venha nos visitar em Ribeirão Preto
            </h2>
          </div>
          <div className="overflow-hidden border border-white/10 aspect-[16/9]">
            <iframe
              title="Mapa Remington — Ribeirão Preto"
              src="https://www.google.com/maps?q=Av.+Independ%C3%AAncia,+Ribeir%C3%A3o+Preto,+SP&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function ContactCard({ Icon, title, body, link }: { Icon: typeof MapPin; title: string; body: string; link?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 hover:border-accent/40 transition-all">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{body}</div>
      </div>
    </div>
  );
  return link ? <a href={link} target="_blank" rel="noreferrer">{Inner}</a> : Inner;
}

function Field({ label, value, onChange, error, type = "text" }: { label: string; value: string; onChange: (v: string) => void; error?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1.5 w-full h-11 border bg-white/5 border-white/12 px-4 text-foreground text-sm outline-none focus:border-accent transition ${error ? "border-red-400" : "border-border"}`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </label>
  );
}




