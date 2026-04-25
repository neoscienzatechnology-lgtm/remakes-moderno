import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoR1 from "@/assets/remington-logo-r1.png";

const courses = [
  { to: "/jovem-profissional-ia", label: "Jovem Profissional IA" },
  { to: "/inovatech", label: "InovaTech" },
  { to: "/techkids", label: "TechKids" },
  { to: "/auxiliar-veterinario", label: "Auxiliar de Veterinario" },
  { to: "/vip", label: "Curso VIP" },
];

const navLinks = [
  { to: "/sobre", label: "Instituto" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
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

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_20px_rgba(155,48,255,0.08)]" : "bg-primary"
    }`}>
      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link to="/" aria-label="Remington IA" className="flex-shrink-0">
          <img src={logoR1} alt="Remington IA" className="h-10 lg:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(155,48,255,0.5)]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {/* Cursos dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCoursesOpen(v => !v)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/55 hover:text-white transition-colors"
            >
              Cursos <ChevronDown className={`h-3.5 w-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 border border-white/10 py-1 z-50"
                style={{ background: "rgba(7,7,18,0.97)", backdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(155,48,255,0.15)" }}>
                {courses.map(c => (
                  <Link key={c.to} to={c.to} onClick={() => setCoursesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/55 hover:text-white hover:bg-white/[0.04] transition-colors"
                    activeProps={{ className: "text-accent" }}>
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link key={l.to} to={l.to}
              className="px-4 py-2 text-sm font-medium text-white/55 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex h-10 rounded-none bg-accent text-white hover:bg-accent/85 font-semibold px-6 tracking-wide text-sm shadow-glow">
            <Link to="/contato">Começar agora</Link>
          </Button>
          <button onClick={() => setOpen(v => !v)} className="lg:hidden text-white p-1" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {/* Cursos accordion mobile */}
            <button onClick={() => setMobileCoursesOpen(v => !v)}
              className="flex items-center justify-between py-3 border-b border-white/10 text-base font-medium text-white/65 hover:text-white transition-colors w-full">
              Cursos <ChevronDown className={`h-4 w-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCoursesOpen && (
              <div className="pl-4 flex flex-col gap-0.5 border-b border-white/10 pb-2">
                {courses.map(c => (
                  <Link key={c.to} to={c.to} onClick={() => setOpen(false)}
                    className="py-2 text-sm text-white/55 hover:text-accent transition-colors">
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="py-3 border-b border-white/10 text-base font-medium text-white/65 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-5 w-full h-12 rounded-none bg-accent text-white font-semibold shadow-glow" onClick={() => setOpen(false)}>
              <Link to="/contato">Começar agora</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
