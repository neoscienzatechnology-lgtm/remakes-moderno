import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { leadSchema, submitLead, type LeadInput } from "@/lib/leads";

interface LeadFormProps {
  origem: string;
  cursoPadrao?: string;
  variant?: "light" | "dark";
  cta?: string;
  showEmail?: boolean;
  showMensagem?: boolean;
  className?: string;
}

export function LeadForm({
  origem,
  cursoPadrao,
  variant = "light",
  cta = "Quero mais informacoes",
  showEmail = false,
  showMensagem = false,
  className = "",
}: LeadFormProps) {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { curso_interesse: cursoPadrao ?? "" },
  });

  const onSubmit = async (data: LeadInput) => {
    const res = await submitLead(data, origem);
    if (res.ok) {
      setSuccess(true);
      reset({ curso_interesse: cursoPadrao ?? "" });
      toast.success("Recebemos seu contato! Em breve falaremos com voce.");
      setTimeout(() => setSuccess(false), 4500);
    } else {
      toast.error(res.error);
    }
  };

  const isDark = variant === "dark";
  const labelCls = isDark
    ? "text-xs font-semibold uppercase tracking-wider text-white/70"
    : "text-xs font-semibold uppercase tracking-wider text-muted-foreground";
  const inputCls = isDark
    ? "mt-1.5 w-full h-11 border border-white/15 bg-white/8 px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent transition backdrop-blur"
    : "mt-1.5 w-full h-11 border border-border bg-background px-4 text-sm outline-none focus:border-accent transition";
  const errorCls = "mt-1 text-xs text-red-400";

  if (success) {
    return (
      <div className={`flex flex-col items-center text-center gap-3 ${isDark ? "bg-white/8 border-white/15 text-white" : "bg-card border-border"} border p-8 ${className}`}>
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-display text-xl font-bold">Recebemos seu contato!</h3>
        <p className={`text-sm ${isDark ? "text-white/65" : "text-muted-foreground"}`}>
          Nossa equipe entra em contato pelo WhatsApp em poucos minutos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-3 ${className}`} noValidate>
      <label className="block">
        <span className={labelCls}>Nome completo</span>
        <input className={inputCls} placeholder="Seu nome" {...register("nome")} />
        {errors.nome && <p className={errorCls}>{errors.nome.message}</p>}
      </label>

      <label className="block">
        <span className={labelCls}>WhatsApp</span>
        <input
          className={inputCls}
          placeholder="(16) 9 9999-9999"
          inputMode="tel"
          {...register("whatsapp")}
        />
        {errors.whatsapp && <p className={errorCls}>{errors.whatsapp.message}</p>}
      </label>

      {showEmail && (
        <label className="block">
          <span className={labelCls}>E-mail (opcional)</span>
          <input className={inputCls} type="email" placeholder="voce@email.com" {...register("email")} />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </label>
      )}

      {!cursoPadrao && (
        <label className="block">
          <span className={labelCls}>Curso de interesse</span>
          <select className={inputCls} {...register("curso_interesse")} defaultValue="">
            <option value="">Selecione...</option>
            <option value="Jovem Profissional IA">Jovem Profissional IA (14-17 anos)</option>
            <option value="Aula Experimental">Aula experimental gratuita</option>
            <option value="Outro">Outro / quero saber mais</option>
          </select>
        </label>
      )}

      {cursoPadrao && <input type="hidden" {...register("curso_interesse")} value={cursoPadrao} />}

      {showMensagem && (
        <label className="block">
          <span className={labelCls}>Mensagem (opcional)</span>
          <textarea
            rows={3}
            className={`${inputCls.replace("h-11", "")} py-3 resize-none`}
            placeholder="Conte como podemos te ajudar..."
            {...register("mensagem")}
          />
        </label>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full h-12 font-semibold shadow-glow ${
          isDark
            ? "text-white hover:opacity-90"
            : "bg-gradient-primary text-primary-foreground hover:opacity-90"
        }`}
        style={isDark ? { background: "linear-gradient(135deg, #9B30FF, #4F7FFF)" } : undefined}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> {cta}
          </>
        )}
      </Button>
      <p className={`text-[11px] ${isDark ? "text-white/45" : "text-muted-foreground"} text-center`}>
        Ao enviar voce concorda em ser contatado pela Remington IA.
      </p>
    </form>
  );
}
