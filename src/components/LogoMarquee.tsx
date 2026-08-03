import { motion } from "motion/react";
import { Building2, ShieldCheck, Sparkles, Globe2, Stethoscope, Sparkle } from "lucide-react";

export function LogoMarquee() {
  const LOGOS = [
    { name: "TidyScot", sub: "Commercial Web & AI", location: "UK", icon: Sparkles },
    { name: "PSSDC", sub: "Lagos State Government", location: "Nigeria", icon: Building2 },
    { name: "Citicare Health", sub: "Healthcare CRM", location: "Nigeria", icon: Stethoscope },
  ];

  return (
    <div className="border-b-2 border-ink bg-card py-8 overflow-hidden relative select-none">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-4 flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" />
          Trusted by institutions & growing businesses across
        </span>
        <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono font-bold text-muted-foreground">
          <span>UK</span> • <span>NIGERIA</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex items-center gap-6 whitespace-nowrap py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-3 brutal-border bg-background px-4 py-2.5 rounded-xl hover:border-accent-brand transition-all cursor-default group shrink-0"
              >
                <div className="h-8 w-8 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 group-hover:bg-accent-brand group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-accent-brand transition-colors">
                    {logo.name}
                  </div>
                  <div className="text-[9px] font-mono text-muted-foreground">
                    {logo.sub} • {logo.location}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
