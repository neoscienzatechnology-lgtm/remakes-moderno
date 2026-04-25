import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = { gradient: string; label: string; icon: string };

const items: GalleryItem[] = [
  { gradient: "from-accent via-primary-glow to-cyan", label: "Laboratório de informática", icon: "💻" },
  { gradient: "from-cyan via-accent to-primary", label: "Sala de robótica", icon: "🤖" },
  { gradient: "from-orange via-accent to-cyan", label: "Espaço de convivência", icon: "☕" },
  { gradient: "from-primary-glow via-cyan to-accent", label: "Sala de aula moderna", icon: "🎓" },
  { gradient: "from-accent via-orange to-primary-glow", label: "Auditório", icon: "🎤" },
  { gradient: "from-cyan via-primary-glow to-orange", label: "Lab. veterinário", icon: "🩺" },
];

export function SchoolGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Nossa estrutura
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Espaços feitos para aprender
          </h2>
          <p className="mt-4 text-muted-foreground">
            Laboratórios equipados, salas modernas e ambientes pensados para a melhor experiência de
            aprendizado.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.button
              key={item.label}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setOpen(i)}
              className={`group relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${item.gradient} shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-5xl mb-3">{item.icon}</span>
                <span className="font-display text-base font-semibold">{item.label}</span>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl border-0 p-0 bg-transparent shadow-none">
          {open !== null && (
            <div
              className={`aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${items[open].gradient}`}
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <span className="text-9xl mb-6">{items[open].icon}</span>
                <span className="font-display text-2xl font-semibold">{items[open].label}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


