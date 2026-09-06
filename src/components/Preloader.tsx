import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mordenLogo } from "@/lib/images-base64";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Smooth progress counter simulation
    const startTime = Date.now();
    const duration = 1100; // 1.1s total loading sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setPercent(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 250);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="morden-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] text-white select-none pointer-events-auto"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,86,31,0.12),transparent_70%)] pointer-events-none" />

          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Logo Display */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <img
                src={mordenLogo}
                alt="Morden Labs"
                className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_4px_20px_rgba(224,86,31,0.25)]"
              />
            </motion.div>

            {/* Custom High-Tech Precision Spinner */}
            <div className="relative flex items-center justify-center h-24 w-24 mb-8">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-neutral-800/80" />

              {/* Fast Outer Spinning Accent Arc */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-brand border-r-accent-brand/40 shadow-[0_0_15px_rgba(224,86,31,0.4)]"
              />

              {/* Inner Counter-Rotating Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-white border-l-white/30"
              />

              {/* Core Pulsing Center */}
              <motion.div
                animate={{
                  scale: [0.85, 1.15, 0.85],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="h-4 w-4 rounded-full bg-accent-brand shadow-[0_0_16px_#E0561F]"
              />
            </div>

            {/* Progress Percentage & Status */}
            <div className="w-48 flex flex-col items-center gap-2">
              <div className="flex items-center justify-between w-full font-mono text-xs font-bold text-neutral-400">
                <span className="tracking-widest uppercase text-[10px]">INITIALIZING</span>
                <span className="text-accent-brand font-mono">{percent}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-1 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-brand to-orange-400 rounded-full shadow-[0_0_8px_rgba(224,86,31,0.6)]"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <div className="mt-3 flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>MORDEN LABS STUDIO</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
