import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog")({
  loader: async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug, title, excerpt, category, cover_gradient, author, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false });
    if (error) throw error;
    return { posts: data ?? [] };
  },
  head: () => ({
    meta: [
      { title: "Blog · Remington" },
      { name: "description", content: "Conteúdo sobre carreira, tecnologia, educação e empregabilidade." },
      { property: "og:title", content: "Blog Remington" },
      { property: "og:description", content: "Conteúdo que abre caminhos para sua próxima jornada." },
    ],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <SiteShell>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Não conseguimos carregar os posts</h1>
          <p className="mt-3 text-muted-foreground">{error.message}</p>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mt-6 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold"
          >
            Tentar novamente
          </button>
        </div>
      </SiteShell>
    );
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Página não encontrada</h1>
      </div>
    </SiteShell>
  ),
  component: BlogPage,
});

function BlogPage() {
  const { posts } = Route.useLoaderData();
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-hero animate-gradient text-white py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 md:px-6">
          <Link to="/" className="text-sm text-white/70 hover:text-accent inline-flex items-center gap-1 mb-6">
            ← Voltar
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Blog Remington
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">
            Conteúdo que abre caminhos
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            Artigos, guias e histórias sobre tecnologia, carreira, educação e o mundo do trabalho.
          </p>
        </div>
      </section>

      <section className="relative bg-primary py-20">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-dashed border-border">
              <p className="text-muted-foreground">Em breve, os primeiros artigos.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p: typeof posts[number], i: number) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group overflow-hidden border border-white/10 bg-white/[0.04] hover:border-accent/35 hover:-translate-y-1 transition-all duration-300"
                >
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.cover_gradient} overflow-hidden`}>
                      <div className="absolute inset-0 grid-pattern opacity-30" />
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-800">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(p.published_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        Leia mais{" "}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}





