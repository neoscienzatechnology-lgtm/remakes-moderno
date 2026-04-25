import remingtonLogo from "@/assets/remington-logo.png";

type BrandImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspect?: string;
  watermark?: boolean;
  intensity?: number;
  loading?: "lazy" | "eager";
};

export function BrandImage({
  src,
  alt,
  width,
  height,
  className = "",
  aspect = "aspect-[4/3]",
  watermark = true,
  intensity = 70,
  loading = "lazy",
}: BrandImageProps) {
  return (
    <div className={`relative overflow-hidden isolate ${aspect} ${className}`}>
      {/* Desaturated photo */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(1) contrast(1.05) brightness(0.85)" }}
      />

      {/* Duotone color layer: dark purple -> blue neon */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(135deg,
            oklch(0.08 0.12 290) 0%,
            oklch(0.20 0.18 280) 40%,
            oklch(0.45 0.22 268) 100%)`,
          mixBlendMode: "color",
          opacity: intensity / 100,
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,16,0.65) 100%)",
        }}
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 z-20 bg-gradient-to-t from-primary/70 to-transparent pointer-events-none" />

      {/* Circuit tech pattern */}
      <div className="absolute inset-0 z-20 circuit-pattern opacity-[0.10] pointer-events-none" />

      {/* Neon corner accent — top-left */}
      <div className="absolute top-0 left-0 z-30 pointer-events-none">
        <div className="w-10 h-[2px]" style={{ background: "linear-gradient(90deg, #9B30FF, transparent)" }} />
        <div className="w-[2px] h-10" style={{ background: "linear-gradient(180deg, #9B30FF, transparent)" }} />
      </div>

      {/* Watermark logo — bottom right */}
      {watermark && (
        <div className="absolute bottom-3 right-4 z-30 pointer-events-none">
          <img
            src={remingtonLogo}
            alt=""
            aria-hidden
            className="h-5 w-auto opacity-25"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      )}
    </div>
  );
}
