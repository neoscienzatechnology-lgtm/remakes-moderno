import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Matrícula",
    items: [
      {
        q: "Como faço minha matrícula?",
        a: "Você pode preencher o formulário no site, falar conosco pelo WhatsApp ou ir presencialmente até a unidade em Ribeirão Preto. Nossa equipe explica tudo, esclarece dúvidas e formaliza a inscrição no mesmo dia.",
      },
      {
        q: "Existe taxa de matrícula?",
        a: "Algumas turmas têm taxa de inscrição simbólica. Sempre comunicamos com transparência antes do fechamento e oferecemos opções de bolsas e descontos.",
      },
      {
        q: "Tem turmas para quem trabalha durante o dia?",
        a: "Sim. Oferecemos turmas em horários variados — manhã, tarde, noite e finais de semana — para que você possa estudar sem comprometer sua rotina.",
      },
    ],
  },
  {
    title: "Cursos",
    items: [
      {
        q: "Qual a duração média dos cursos?",
        a: "Varia entre 3 e 18 meses, dependendo da trilha escolhida. Cursos como InovaTech têm formato modular — você pode começar pelo básico e seguir até trilhas avançadas como IA e Dados.",
      },
      {
        q: "Os cursos são presenciais ou online?",
        a: "Maior parte é presencial em Ribeirão Preto, com laboratórios equipados. Algumas trilhas e mentorias do Vip são híbridas.",
      },
      {
        q: "Preciso ter conhecimento prévio em tecnologia?",
        a: "Não. Nossos cursos são desenhados para receber pessoas do nível absoluto zero. Quem já tem base, avança em trilhas mais aceleradas.",
      },
    ],
  },
  {
    title: "Pagamento e Bolsas",
    items: [
      {
        q: "Existem bolsas de estudo?",
        a: "Sim. Temos bolsas parciais e integrais para alunos com critério socioeconômico, mérito acadêmico e parcerias com empresas locais.",
      },
      {
        q: "Quais formas de pagamento posso usar?",
        a: "Boleto, cartão de crédito (parcelado em até 12x), PIX e financiamentos próprios. Algumas trilhas permitem pagamento via crédito educativo.",
      },
      {
        q: "Posso parcelar o curso?",
        a: "Sim. Todos os cursos podem ser parcelados em mensalidades acessíveis. Os planos são apresentados durante a matrícula.",
      },
    ],
  },
  {
    title: "Certificação e Empregabilidade",
    items: [
      {
        q: "O certificado é reconhecido pelo MEC?",
        a: "Nossos cursos profissionalizantes são certificações livres válidas para o mercado de trabalho. A Remington é referência regional há 57 anos e os certificados são amplamente reconhecidos por empresas parceiras.",
      },
      {
        q: "Como funciona o programa PQE?",
        a: "O PQE (Prepara, Qualifica e Encaminha) é o nosso programa de empregabilidade. Preparamos você (currículo, entrevista, soft skills), qualificamos tecnicamente e encaminhamos diretamente para vagas em empresas parceiras. 95% dos alunos no PQE são contratados em até 6 meses.",
      },
      {
        q: "Tem garantia de emprego?",
        a: "Não garantimos emprego, mas garantimos preparação real e indicação ativa para empresas. Nosso histórico mostra que isso faz toda a diferença.",
      },
    ],
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes (FAQ) · Remington" },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre cursos, matrícula, pagamento, bolsas, certificação e empregabilidade na Remington.",
      },
      { property: "og:title", content: "FAQ · Remington" },
      { property: "og:description", content: "Respostas rápidas para as principais dúvidas." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-20 right-10 h-80 w-80 rounded-full bg-cyan/30 blur-3xl animate-blob" />
        <div className="relative container mx-auto px-4 md:px-6">
          <Link to="/" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1 mb-6">
            ← Voltar
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-[1.05]">
            Perguntas frequentes
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            As respostas mais buscadas por quem está pensando em estudar na Remington.
          </p>
        </div>
      </section>

      <section className="relative bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{group.title}</h2>
              <Accordion type="single" collapsible className="border border-white/10 bg-white/5 divide-y divide-white/10">
                {group.items.map((item, i) => (
                  <AccordionItem key={i} value={`${gi}-${i}`} className="px-5 border-b-0">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}




