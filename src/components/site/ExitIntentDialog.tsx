import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LeadForm } from "./LeadForm";
import { Sparkles } from "lucide-react";

const STORAGE_KEY = "remington_ia_exit_dismissed_v1";

export function ExitIntentDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "1") return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const fallback = setTimeout(trigger, 45000);
    window.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(fallback);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? setOpen(true) : dismiss())}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-0">
        <div
          className="text-white p-7 relative"
          style={{ background: "linear-gradient(135deg, #4F1FA0 0%, #9B30FF 50%, #4F7FFF 100%)" }}
        >
          <div className="absolute inset-0 circuit-pattern opacity-15" />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/15 backdrop-blur-md mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <DialogTitle className="font-display text-2xl font-bold">
              Antes de ir, leve nosso guia gratuito
            </DialogTitle>
            <DialogDescription className="text-white/80 mt-2">
              <span className="font-semibold text-white">Guia de Carreiras em IA 2025</span> — as
              profissoes em alta, salarios e como comecar do zero com Inteligencia Artificial.
            </DialogDescription>
          </div>
        </div>
        <div className="p-6 bg-card">
          <LeadForm origem="exit-intent-guia" cta="Quero o guia gratuito" showEmail />
        </div>
      </DialogContent>
    </Dialog>
  );
}
