import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logoR1 from "@/assets/remington-logo-r1.png";

const courses = [
  { to: "/jovem-profissional-ia", label: "Jovem Profissional IA", dot: "#9B30FF" },
  { to: "/kids-ia", label: "Kids IA", dot: "#6B7FFF" },
  { to: "/auxiliar-veterinario", label: "Auxiliar de Veterinário", dot: "#4F7FFF" },
  { to: "/vip", label: "Curso VIP", dot: "#9B30FF" },
];

const navLinks = [
  { label: "Sobre", href: "#institucional" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Empregabilidade", href: "#programa" },
  { label: "Blog", href: "#blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const scrolled_header = scrolled
    ? "bg-white/92 backdrop-blur-[18px] shadow-[0_1px_0_rgba(11,20,32,0.08)]"
    : "bg-transparent";

  const navLinkClass = scrolled
    ? "text-[#0B1420] hover:bg-[#F0F2F5]"
    : "text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled_header}`}
      style={{ padding: scrolled ? "14px 0" : "20px 0" }}
    >
      <div className="container mx-auto flex items-center gap-10 px-[clamp(20px,4vw,40px)]"
        style={{ maxWidth: "1280px" }}>

        {/* Logo */}
        <a href="#top" aria-label="Remington IA" className="flex-shrink-0 hover:-translate-y-px transition-transform">
          <img
            src={logoR1}
            alt="Remington IA"
            className="h-9 w-auto object-contain transition-all"
            style={{ filter: scrolled ? "none" : "brightness(0) invert(1)", height: "36px" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-center gap-2">
          {/* Cursos dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCoursesOpen(v => !v)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${navLinkClass}`}
            >
              Cursos
              <ChevronDown className={`h-[10px] w-[10px] opacity-60 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>

            {coursesOpen && (
              <div
                className="absolute top-[calc(100%+8px)] left-0 min-w-[280px] rounded-[20px] py-2.5 z-50"
                style={{
                  background: "#fff",
                  boxShadow: "0 24px 60px -20px rgba(0,39,68,0.25)",
                  border: "1px solid rgba(11,20,32,0.06)",
                }}
              >
                {courses.map(c => (
                  <a key={c.to} href={c.to} onClick={() => setCoursesOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-xl mx-1 text-sm font-medium text-[#0B1420] hover:bg-[#F0F2F5] transition-colors">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${navLinkClass}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3 ml-auto">
          <a href="#contato"
            className={`hidden sm:inline-flex text-sm font-medium transition-colors ${scrolled ? "text-[#0B1420]" : "text-white/70 hover:text-white"}`}>
            Entrar
          </a>
          <a href="#contato"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-5 text-sm font-semibold text-white transition-all"
            style={{ background: "#9B30FF", borderRadius: "999px", boxShadow: "0 12px 40px -10px rgba(155,48,255,0.45)" }}>
            <span>Matricule-se</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button onClick={() => setOpen(v => !v)} className="lg:hidden p-1" aria-label="Menu"
            style={{ color: scrolled ? "#0B1420" : "#fff" }}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/[0.06]">
          <div className="container mx-auto px-[clamp(20px,4vw,40px)] py-6 flex flex-col gap-1"
            style={{ maxWidth: "1280px" }}>
            <button onClick={() => setMobileCoursesOpen(v => !v)}
              className="flex items-center justify-between py-3 border-b border-black/[0.06] text-sm font-medium text-[#0B1420] w-full">
              Cursos
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCoursesOpen && (
              <div className="pl-4 flex flex-col gap-0.5 border-b border-black/[0.06] pb-2">
                {courses.map(c => (
                  <a key={c.to} href={c.to} onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 py-2 text-sm text-[#0B1420]/70 hover:text-[#9B30FF] transition-colors">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                    {c.label}
                  </a>
                ))}
              </div>
            )}
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="py-3 border-b border-black/[0.06] text-sm font-medium text-[#0B1420]">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 h-12 text-sm font-semibold text-white"
              style={{ background: "#9B30FF", borderRadius: "999px" }}>
              Matricule-se agora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
