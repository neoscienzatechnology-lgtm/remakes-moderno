import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppFab() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/551632360000?text=Olá! Quero saber mais sobre os cursos da Remington."
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group"
      aria-label="Falar no WhatsApp"
    >
      <span
        className={`hidden sm:inline-block whitespace-nowrap rounded-full bg-card text-foreground text-sm font-medium px-4 py-2 shadow-elegant border border-border transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        Fale no WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-elegant animate-pulse-ring">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}

export { X };
