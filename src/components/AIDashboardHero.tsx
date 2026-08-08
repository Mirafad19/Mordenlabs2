import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Sparkles, Smartphone, Globe2, Zap, Building2, Check } from "lucide-react";

export function AIDashboardHero() {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth mouse-controlled 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Auto-cycle active system connection when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const modules = [
    {
      id: "ai",
      title: "AI SYSTEMS",
      label: "INTELLIGENCE",
      icon: Sparkles,
      position: "top",
    },
    {
      id: "web",
      title: "WEB PLATFORM",
      label: "EXPERIENCE",
      icon: Globe2,
      position: "right",
    },
    {
      id: "automation",
      title: "AUTOMATION",
      label: "WORKFLOWS",
      icon: Zap,
      position: "bottom",
    },
    {
      id: "mobile",
      title: "MOBILE APP",
      label: "ACCESS",
      icon: Smartphone,
      position: "left",
    },
  ];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto [perspective:1000px] select-none"
    >
      {/* Main Software Architecture Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        className="relative w-full bg-[#111111] text-cream rounded-[24px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col min-h-[500px] sm:min-h-[530px] transition-colors duration-500"
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Card Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50" />
            <span className="text-[11px] font-mono font-medium text-neutral-400 ml-2 tracking-wider">
              MORDEN LABS / DIGITAL SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>

        {/* Main Architecture Diagram Container */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between relative z-10 overflow-hidden">
          {/* Diagram Canvas */}
          <div className="relative flex-1 min-h-[350px] w-full flex items-center justify-center my-2">
            {/* SVG Connection Paths */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 320"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Base Structural Architecture Lines connecting central node (200, 160) to outer nodes */}
              <g stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5">
                {/* Center (200, 160) to Top AI (200, 52) */}
                <line x1="200" y1="160" x2="200" y2="52" strokeDasharray="3 3" />
                {/* Center (200, 160) to Right Web (325, 160) */}
                <line x1="200" y1="160" x2="325" y2="160" strokeDasharray="3 3" />
                {/* Center (200, 160) to Bottom Automation (200, 268) */}
                <line x1="200" y1="160" x2="200" y2="268" strokeDasharray="3 3" />
                {/* Center (200, 160) to Left Mobile (75, 160) */}
                <line x1="200" y1="160" x2="75" y2="160" strokeDasharray="3 3" />
              </g>

              {/* Active Pathway Line (Highlighted without blur glow) */}
              {activeModule === 0 && (
                <line x1="200" y1="160" x2="200" y2="52" stroke="#E0561F" strokeWidth="2" />
              )}
              {activeModule === 1 && (
                <line x1="200" y1="160" x2="325" y2="160" stroke="#E0561F" strokeWidth="2" />
              )}
              {activeModule === 2 && (
                <line x1="200" y1="160" x2="200" y2="268" stroke="#E0561F" strokeWidth="2" />
              )}
              {activeModule === 3 && (
                <line x1="200" y1="160" x2="75" y2="160" stroke="#E0561F" strokeWidth="2" />
              )}

              {/* Subtle indicator dot along active pathway */}
              {activeModule === 0 && (
                <motion.circle
                  r="3"
                  fill="#E0561F"
                  animate={{ cx: [200, 200], cy: [160, 52] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              )}
              {activeModule === 1 && (
                <motion.circle
                  r="3"
                  fill="#E0561F"
                  animate={{ cx: [200, 325], cy: [160, 160] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              )}
              {activeModule === 2 && (
                <motion.circle
                  r="3"
                  fill="#E0561F"
                  animate={{ cx: [200, 200], cy: [160, 268] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              )}
              {activeModule === 3 && (
                <motion.circle
                  r="3"
                  fill="#E0561F"
                  animate={{ cx: [200, 75], cy: [160, 160] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              )}
            </svg>

            {/* Architectural Modules */}

            {/* TOP NODE: AI SYSTEMS */}
            <div
              onMouseEnter={() => setActiveModule(0)}
              className={`absolute top-0 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                activeModule === 0
                  ? "bg-[#1C1C1C] border-accent-brand text-white"
                  : "bg-[#141414] border-white/10 hover:border-white/25 text-neutral-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                  activeModule === 0 ? "bg-accent-brand text-cream" : "bg-white/5 text-neutral-400"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono font-medium tracking-wider text-neutral-400 uppercase block leading-tight">
                  INTELLIGENCE
                </span>
                <span className="text-xs font-semibold font-sans tracking-tight block">AI SYSTEMS</span>
              </div>
            </div>

            {/* RIGHT NODE: WEB PLATFORM */}
            <div
              onMouseEnter={() => setActiveModule(1)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                activeModule === 1
                  ? "bg-[#1C1C1C] border-accent-brand text-white"
                  : "bg-[#141414] border-white/10 hover:border-white/25 text-neutral-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                  activeModule === 1 ? "bg-accent-brand text-cream" : "bg-white/5 text-neutral-400"
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono font-medium tracking-wider text-neutral-400 uppercase block leading-tight">
                  EXPERIENCE
                </span>
                <span className="text-xs font-semibold font-sans tracking-tight block">
                  WEB PLATFORM
                </span>
              </div>
            </div>

            {/* BOTTOM NODE: AUTOMATION */}
            <div
              onMouseEnter={() => setActiveModule(2)}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                activeModule === 2
                  ? "bg-[#1C1C1C] border-accent-brand text-white"
                  : "bg-[#141414] border-white/10 hover:border-white/25 text-neutral-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                  activeModule === 2 ? "bg-accent-brand text-cream" : "bg-white/5 text-neutral-400"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono font-medium tracking-wider text-neutral-400 uppercase block leading-tight">
                  WORKFLOWS
                </span>
                <span className="text-xs font-semibold font-sans tracking-tight block">AUTOMATION</span>
              </div>
            </div>

            {/* LEFT NODE: MOBILE APP */}
            <div
              onMouseEnter={() => setActiveModule(3)}
              className={`absolute left-0 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-lg border transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                activeModule === 3
                  ? "bg-[#1C1C1C] border-accent-brand text-white"
                  : "bg-[#141414] border-white/10 hover:border-white/25 text-neutral-300"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                  activeModule === 3 ? "bg-accent-brand text-cream" : "bg-white/5 text-neutral-400"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="text-[9px] font-mono font-medium tracking-wider text-neutral-400 uppercase block leading-tight">
                  ACCESS
                </span>
                <span className="text-xs font-semibold font-sans tracking-tight block">MOBILE APP</span>
              </div>
            </div>

            {/* CENTRAL FOCAL NODE: BUSINESS / INTEGRATED ECOSYSTEM */}
            <div className="relative z-20 px-5 py-3.5 rounded-xl bg-[#161616] border border-accent-brand/80 text-center flex flex-col items-center justify-center shadow-lg">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-3.5 h-3.5 text-accent-brand" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-brand uppercase">
                  DIGITAL SYSTEM
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-sans text-white tracking-tight">
                BUSINESS
              </h3>
              <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-[9px] font-mono font-semibold text-neutral-200 tracking-wider">
                  4 CORE SYSTEMS INTEGRATED
                </span>
              </div>
            </div>
          </div>

          {/* Integrated Footer Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-brand" />
              <span className="text-[11px] font-medium text-neutral-300 tracking-wider">
                SYSTEMS CONNECTED
              </span>
            </div>
            <span className="text-[11px] font-bold text-accent-brand tracking-widest">04 / 04</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
