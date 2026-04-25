import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaSection } from "@/components/site/CtaSection";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle();
    if (error) throw error;
    if (!data) throw notFound();
    return { post: data };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} · Blog Remington` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Post · Blog Remington" }],
  }),
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <SiteShell>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Algo deu errado</h1>
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
        <h1 className="font-display text-3xl font-bold text-foreground">Post não encontrado</h1>
        <Link
          to="/blog"
          className="mt-6 inline-flex rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 font-semibold"
        >
          Voltar ao blog
        </Link>
      </div>
    </SiteShell>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const date = new Date(post.published_at).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <SiteShell>
      <article>
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${post.cover_gradient} text-white py-20 lg:py-28`}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative container mx-auto px-4 md:px-6 max-w-4xl">
            <Link
              to="/blog"
              className="text-sm text-white/80 hover:text-white inline-flex items-center gap-1.5 mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar ao blog
            </Link>
            <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
              {post.category}
            </span>
            <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            <p className="mt-5 text-white/85 text-lg max-w-3xl">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {date}
              </span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16 lg:py-20">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line: string, i: number) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={i} className="h-4" />;
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display text-2xl font-bold text-foreground mt-8 mb-3">
                    {trimmed.slice(3)}
                  </h2>
                );
              }
              if (/^\d+\.\s/.test(trimmed)) {
                return (
                  <p key={i} className="text-foreground leading-relaxed mb-2">
                    {renderInline(trimmed)}
                  </p>
                );
              }
              return (
                <p key={i} className="text-foreground leading-relaxed mb-4">
                  {renderInline(trimmed)}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      <CtaSection />
    </SiteShell>
  );
}

function renderInline(text: string) {
  // Bold via **
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}




