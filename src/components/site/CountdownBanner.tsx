import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "remington_ia_banner_closed_v1";

function getEndDate() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return end;
}

export function CountdownBanner() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const end = getEndDate().getTime();
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [visible]);

  if (!visible) return null;

  const close = () => {
    setVisible(false);
    if (typeof window !== "undefined") sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <div
      className="relative text-white text-sm"
      style={{ background: "linear-gradient(90deg, #4F1FA0 0%, #7B2FBE 35%, #9B30FF 55%, #4F7FFF 80%, #3B62D4 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <Sparkles className="h-4 w-4 flex-shrink-0 opacity-80" />
        <span className="font-semibold">Turmas abertas</span>
        <span className="hidden sm:inline opacity-75">— novas turmas Remington IA comecam em breve.</span>
        <div className="flex items-center gap-1 font-mono font-bold tabular-nums">
          <Pill v={time.d} l="d" />
          <Pill v={time.h} l="h" />
          <Pill v={time.m} l="m" />
          <Pill v={time.s} l="s" />
        </div>
        <Link
          to="/contato"
          className="hidden sm:inline-block ml-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 px-3 py-1 font-semibold transition-colors"
        >
          Garantir vaga
        </Link>
      </div>
      <button
        onClick={close}
        aria-label="Fechar"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/15 transition"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function Pill({ v, l }: { v: number; l: string }) {
  return (
    <span className="rounded-md bg-black/20 px-1.5 py-0.5 text-xs">
      {String(v).padStart(2, "0")}
      <span className="opacity-60 ml-0.5">{l}</span>
    </span>
  );
}
