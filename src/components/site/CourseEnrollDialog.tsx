import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "./LeadForm";
import { Sparkles, type LucideIcon } from "lucide-react";

interface Props {
  courseName: string;
  Icon?: LucideIcon;
  triggerClassName?: string;
  triggerLabel?: string;
}

export function CourseEnrollDialog({
  courseName,
  Icon = Sparkles,
  triggerClassName = "",
  triggerLabel = "Quero me matricular",
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={`h-12 rounded-full bg-white text-primary hover:bg-cyan font-semibold px-6 shadow-glow ${triggerClassName}`}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0">
        <div className="bg-gradient-primary text-white p-7 relative">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-md mb-3">
              <Icon className="h-6 w-6" />
            </div>
            <DialogTitle className="font-display text-2xl font-bold">
              Matricule-se em {courseName}
            </DialogTitle>
            <DialogDescription className="text-white/85 mt-2">
              Deixe seus dados que nossa equipe entra em contato em poucos minutos pelo WhatsApp.
            </DialogDescription>
          </div>
        </div>
        <div className="p-6">
          <LeadForm
            origem={`matricula-${courseName.toLowerCase().replace(/\s+/g, "-")}`}
            cursoPadrao={courseName}
            cta="Falar com um consultor"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
