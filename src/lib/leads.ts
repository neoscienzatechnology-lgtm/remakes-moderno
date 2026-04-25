import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const leadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(120, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .min(8, "WhatsApp inválido")
    .max(25, "WhatsApp inválido")
    .regex(/^[\d\s()+-]+$/, "Apenas números, espaços e () + -"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(255)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  curso_interesse: z.string().trim().max(120).optional(),
  mensagem: z.string().trim().max(2000).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export async function submitLead(
  data: LeadInput,
  origem: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos" };
  }
  const { error } = await supabase.from("leads").insert({
    nome: parsed.data.nome,
    whatsapp: parsed.data.whatsapp,
    email: parsed.data.email ?? null,
    curso_interesse: parsed.data.curso_interesse ?? null,
    mensagem: parsed.data.mensagem ?? null,
    origem,
  });
  if (error) {
    console.error("Erro ao salvar lead:", error);
    return { ok: false, error: "Não foi possível enviar agora. Tente novamente." };
  }
  return { ok: true };
}
