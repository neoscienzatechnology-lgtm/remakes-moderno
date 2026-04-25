import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade e Termos de Uso · Remington" },
      {
        name: "description",
        content:
          "Leia a Política de Privacidade e os Termos de Uso da Remington Escola de Tecnologia.",
      },
      { property: "og:title", content: "Política de Privacidade · Remington" },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 md:px-6">
          <Link to="/" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1 mb-6">
            ← Voltar
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Legal</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold max-w-3xl leading-[1.05]">
            Política de Privacidade e Termos de Uso
          </h1>
          <p className="mt-4 text-white/80 text-sm">Atualizado em abril de 2025</p>
        </div>
      </section>

      <section className="relative bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-12 prose prose-lg">

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Política de Privacidade</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">1.1 Dados coletados</h3>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos dados fornecidos diretamente por você ao preencher formulários em nosso site,
              como nome completo, e-mail e telefone. Esses dados são utilizados exclusivamente para
              retornar seu contato e enviar informações sobre cursos e matrículas.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">1.2 Uso das informações</h3>
            <p className="text-muted-foreground leading-relaxed">
              Os dados são usados para: (a) responder às suas dúvidas; (b) enviar informações sobre
              cursos, bolsas e eventos; (c) melhorar nossos serviços. Não vendemos, alugamos ou
              compartilhamos seus dados com terceiros sem seu consentimento, exceto quando exigido por lei.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">1.3 Armazenamento e segurança</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados são armazenados em servidores seguros. Adotamos medidas técnicas e
              organizacionais adequadas para proteger suas informações contra acesso não autorizado,
              perda ou destruição.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">1.4 Seus direitos (LGPD)</h3>
            <p className="text-muted-foreground leading-relaxed">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem
              direito a: acessar seus dados, corrigir informações incorretas, solicitar a exclusão dos
              seus dados, revogar o consentimento a qualquer momento. Para exercer esses direitos,
              entre em contato pelo e-mail{" "}
              <a href="mailto:contato@remington.com.br" className="text-accent hover:underline">
                contato@remington.com.br
              </a>.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">1.5 Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar a experiência de navegação e analisar o tráfego do
              site. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode
              afetar algumas funcionalidades do site.
            </p>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Termos de Uso</h2>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">2.1 Aceitação dos termos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar ou usar o site da Remington, você concorda com estes Termos de Uso. Caso não
              concorde com qualquer parte, solicitamos que não utilize o site.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">2.2 Uso permitido</h3>
            <p className="text-muted-foreground leading-relaxed">
              O conteúdo disponível neste site — textos, imagens, logos e materiais — é de propriedade
              da Remington ou licenciado por ela. É proibida a reprodução, distribuição ou uso comercial
              sem autorização prévia por escrito.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">2.3 Responsabilidades</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Remington não se responsabiliza por danos decorrentes do uso indevido do site, links
              externos ou interrupções temporárias de acesso. Fazemos nosso melhor para manter o site
              disponível e atualizado, mas não garantimos disponibilidade contínua.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">2.4 Alterações</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de alterar estes termos a qualquer momento. As mudanças entram em
              vigor assim que publicadas nesta página. Recomendamos revisitar periodicamente.
            </p>

            <h3 className="font-display text-lg font-semibold text-foreground mt-6 mb-2">2.5 Foro e legislação</h3>
            <p className="text-muted-foreground leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de
              Ribeirão Preto — SP para dirimir quaisquer controvérsias.
            </p>
          </div>

          <hr className="border-border" />

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dúvidas sobre privacidade ou termos? Fale conosco:
            </p>
            <ul className="mt-3 space-y-1 text-muted-foreground text-sm">
              <li>
                E-mail:{" "}
                <a href="mailto:contato@remington.com.br" className="text-accent hover:underline">
                  contato@remington.com.br
                </a>
              </li>
              <li>Telefone: (16) 3236-0000</li>
              <li>Endereço: Av. Independência, 1234 — Ribeirão Preto · SP</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}



