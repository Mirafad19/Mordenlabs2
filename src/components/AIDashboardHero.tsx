import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import {
  Sparkles,
  Server,
  Smartphone,
  Globe,
  Database,
  CheckCircle2,
  Cpu,
  TrendingUp,
} from "lucide-react";

export function AIDashboardHero() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<"console" | "network">("console");
  const [stats, setStats] = useState({ requests: 14820, ms: 124, successRate: 99.8 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth mouse-controlled 3D tilt effect (like Apple / Stripe / Vercel cards)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
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
  };

  // Loop simulation for the AI development and deployment lifecycle
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 4500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 40);

    // Subtle drift in telemetry numbers to make them look "alive"
    const statsInterval = setInterval(() => {
      setStats((prev) => ({
        requests: prev.requests + Math.floor(Math.random() * 3) + 1,
        ms: 120 + Math.floor(Math.random() * 10),
        successRate: Number((99.8 + (Math.random() * 0.15 - 0.05)).toFixed(2)),
      }));
    }, 3000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const steps = [
    { text: "Core engine synthesized", delay: "0s" },
    { text: "Database pipelines connected", delay: "1.2s" },
    { text: "SEO & performance optimized", delay: "2.4s" },
    { text: "Autonomous AI agents deployed", delay: "3.6s" },
    { text: "Cloud orchestration complete", delay: "4.8s" },
  ];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto [perspective:1000px] select-none"
    >
      {/* Decorative ambient background glows behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent-brand/20 via-amber-500/15 to-indigo-500/20 rounded-[2.5rem] blur-2xl opacity-70 animate-pulse pointer-events-none" />

      {/* Main 3D Interactive Console Board */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full bg-neutral-950 text-cream rounded-[2rem] border-2 border-ink shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[520px] transition-colors duration-500"
      >
        {/* Sleek retro grid lines inside the app card */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Header Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-ink/80 bg-neutral-900/60 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
            <span className="text-xs font-mono font-bold text-neutral-400 ml-2 tracking-wide">
              MORDEN_CONSOLE // v2.4.0
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* View Switch Tabs */}
            <div className="flex bg-neutral-900 p-0.5 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTab("console")}
                className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeTab === "console"
                    ? "bg-accent-brand text-cream"
                    : "text-neutral-400 hover:text-cream"
                }`}
              >
                Agent
              </button>
              <button
                onClick={() => setActiveTab("network")}
                className={`px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeTab === "network"
                    ? "bg-accent-brand text-cream"
                    : "text-neutral-400 hover:text-cream"
                }`}
              >
                Network
              </button>
            </div>

            {/* Pulsing online status indicator */}
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* Console Content Screen */}
        <div className="flex-1 p-6 flex flex-col justify-between overflow-hidden relative z-10">
          {activeTab === "console" ? (
            /* CONSOLE VIEW */
            <div className="flex flex-col gap-5 flex-1 justify-between">
              {/* Telemetry Sparkline and Counters */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800/60 relative overflow-hidden">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">
                    Req / Today
                  </span>
                  <span className="text-lg font-mono font-bold text-white block mt-1 tracking-tight">
                    {stats.requests.toLocaleString()}
                  </span>
                  <div className="absolute right-2 bottom-2 w-12 h-6 opacity-30">
                    <svg viewBox="0 0 40 20" className="w-full h-full text-accent-brand">
                      <path
                        d="M0,15 Q10,5 20,12 T40,4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800/60 relative overflow-hidden">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">
                    Latency
                  </span>
                  <span className="text-lg font-mono font-bold text-amber-500 block mt-1 tracking-tight">
                    {stats.ms}ms
                  </span>
                  <div className="absolute right-2 bottom-2 w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                </div>

                <div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800/60 relative overflow-hidden">
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">
                    Accuracy
                  </span>
                  <span className="text-lg font-mono font-bold text-emerald-400 block mt-1 tracking-tight">
                    {stats.successRate}%
                  </span>
                  <div className="absolute right-2 bottom-2 w-12 h-6 opacity-30">
                    <svg viewBox="0 0 40 20" className="w-full h-full text-emerald-400">
                      <path
                        d="M0,18 Q10,14 20,16 T40,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Progress Bar & Loader Card */}
              <div className="bg-neutral-900/30 rounded-2xl p-4 border border-neutral-800/40 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2.5">
                  <div className="flex items-center gap-2">
                    <Cpu
                      className="w-4 h-4 text-accent-brand animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Compiling AI Instance...
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-accent-brand">{progress}%</span>
                </div>

                {/* Micro Progress Bar */}
                <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-brand to-amber-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Mini blinking status text */}
                <p className="text-[10px] font-mono text-neutral-400 mt-2 flex items-center gap-1.5">
                  <span className="inline-block w-1 h-1 bg-accent-brand rounded-full animate-ping" />
                  {progress < 40 && "Loading static graph weights..."}
                  {progress >= 40 && progress < 80 && "Assembling neural client interfaces..."}
                  {progress >= 80 && "Connecting to production servers..."}
                </p>
              </div>

              {/* Step Checklist of Capabilities */}
              <div className="flex-1 flex flex-col justify-center gap-2">
                {steps.map((step, index) => {
                  const isChecked = index < currentStep;
                  const isCurrent = index === currentStep;

                  return (
                    <motion.div
                      key={step.text}
                      initial={{ opacity: 0.3, x: -10 }}
                      animate={{
                        opacity: isCurrent ? 1 : isChecked ? 0.8 : 0.25,
                        x: isCurrent ? 4 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className={`flex items-center gap-3 py-1 px-2.5 rounded-lg border transition-all duration-300 ${
                        isCurrent
                          ? "bg-accent-brand/5 border-accent-brand/20 text-cream"
                          : isChecked
                            ? "bg-neutral-900/20 border-transparent text-neutral-300"
                            : "border-transparent text-neutral-500"
                      }`}
                    >
                      <div className="shrink-0">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : isCurrent ? (
                          <div className="w-4 h-4 rounded-full border-2 border-accent-brand border-t-transparent animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-neutral-700" />
                        )}
                      </div>

                      <span className="text-xs font-mono font-medium leading-none">
                        {step.text}
                      </span>

                      {isCurrent && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="text-[9px] font-mono font-bold uppercase bg-accent-brand/20 text-accent-brand px-1.5 py-0.5 rounded ml-auto tracking-wider"
                        >
                          ACTIVE
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* PRODUCT/NETWORK DYNAMIC NODE GRAPH VIEW */
            <div className="flex-1 flex flex-col justify-between">
              {/* Description Banner */}
              <div className="bg-neutral-900/40 rounded-xl p-3 border border-neutral-800/60 flex items-center gap-3">
                <Sparkles className="w-4.5 h-4.5 text-accent-brand animate-pulse shrink-0" />
                <p className="text-[11px] text-neutral-300 leading-normal font-medium">
                  Autonomous distribution graph. AI processes are parsed and mapped to responsive
                  client interfaces and backend relational databases dynamically.
                </p>
              </div>

              {/* Node Layout Graph */}
              <div className="relative flex-1 flex items-center justify-center py-6">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240">
                  {/* Glowing Connection Paths */}
                  <g className="stroke-neutral-800" strokeWidth="2" fill="none">
                    <path d="M200,45 L100,120" />
                    <path d="M200,45 L200,120" />
                    <path d="M200,45 L300,120" />
                    <path d="M100,120 L200,195" />
                    <path d="M200,120 L200,195" />
                    <path d="M300,120 L200,195" />
                  </g>

                  {/* Animated traveling pulses on the lines */}
                  <motion.circle
                    r="4"
                    fill="#f97316"
                    className="shadow-[0_0_8px_#f97316]"
                    animate={{
                      cx: [200, 100],
                      cy: [45, 120],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                  <motion.circle
                    r="4"
                    fill="#a855f7"
                    animate={{
                      cx: [200, 200],
                      cy: [45, 120],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: "linear",
                      delay: 0.5,
                    }}
                  />
                  <motion.circle
                    r="4"
                    fill="#3b82f6"
                    animate={{
                      cx: [200, 300],
                      cy: [45, 120],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.6,
                      ease: "linear",
                      delay: 0.2,
                    }}
                  />
                  <motion.circle
                    r="4"
                    fill="#10b981"
                    animate={{
                      cx: [100, 200],
                      cy: [120, 195],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                      delay: 1.2,
                    }}
                  />
                  <motion.circle
                    r="4"
                    fill="#10b981"
                    animate={{
                      cx: [300, 200],
                      cy: [120, 195],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      ease: "linear",
                      delay: 0.8,
                    }}
                  />
                </svg>

                {/* Nodes superimposed as HTML layers for gorgeous responsive graphics */}
                <div className="absolute inset-0 flex flex-col items-center justify-between py-2">
                  {/* Top Parent Node */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent-brand/10 border-2 border-accent-brand flex items-center justify-center text-accent-brand shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                      <Cpu className="w-5 h-5 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white mt-1.5 uppercase bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      AI ENGINE
                    </span>
                  </div>

                  {/* Mid Row Nodes */}
                  <div className="w-full flex justify-between px-6 max-w-sm mt-3">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                        <Globe className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-neutral-300 mt-1 uppercase bg-neutral-900/80 border border-neutral-800 px-1.5 py-0.5 rounded">
                        WEBSITE
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-purple-500/10 border-2 border-purple-500 flex items-center justify-center text-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-neutral-300 mt-1 uppercase bg-neutral-900/80 border border-neutral-800 px-1.5 py-0.5 rounded">
                        MOBILE
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <Server className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-neutral-300 mt-1 uppercase bg-neutral-900/80 border border-neutral-800 px-1.5 py-0.5 rounded">
                        MICROSERVICE
                      </span>
                    </div>
                  </div>

                  {/* Bottom Database Node */}
                  <div className="flex flex-col items-center mt-3">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-neutral-300 mt-1 uppercase bg-neutral-900/80 border border-neutral-800 px-1.5 py-0.5 rounded">
                      FIRESTORE / DB
                    </span>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-neutral-900/20 p-2.5 rounded-xl border border-neutral-800/40 text-[10px] font-mono text-neutral-500 flex justify-between items-center">
                <span>CONNECTED STACKS: REST_API / WEBSOCKETS</span>
                <span className="text-emerald-400 font-bold">100% SECURE</span>
              </div>
            </div>
          )}

          {/* Floating Live Indicator Bar (bottom) */}
          <div className="mt-5 pt-4 border-t border-neutral-900/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-accent-brand" />
              <span>SYSTEM METRICS: OPTIMIZED</span>
            </div>
            <span>DEPLOYMENT_STATUS: ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* Super Premium Glass Floating Sub-Cards (layered in 3D space!) */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        whileHover={{ scale: 1.05, zIndex: 50 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute -top-10 -right-6 md:-right-10 bg-neutral-900/90 backdrop-blur-md border-2 border-ink p-4 rounded-2xl shadow-xl w-44 z-20 cursor-grab active:cursor-grabbing hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="h-2 w-2 rounded-full bg-accent-brand animate-ping" />
          <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
            Active Agents
          </span>
        </div>
        <div className="text-2xl font-bold tracking-tight text-white font-display">04</div>
        <div className="text-[10px] text-neutral-400 leading-tight mt-1">
          Processing conversational intents in background
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        whileHover={{ scale: 1.05, zIndex: 50 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="absolute -bottom-6 -left-6 md:-left-12 bg-neutral-900/90 backdrop-blur-md border-2 border-ink p-4 rounded-2xl shadow-xl w-48 z-20 cursor-grab active:cursor-grabbing hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
            Vitals Rating
          </span>
        </div>
        <div className="text-2xl font-bold tracking-tight text-emerald-400 font-display">
          99/100
        </div>
        <div className="text-[10px] text-neutral-400 leading-tight mt-1">
          Next-gen server compilation & cache delivery system
        </div>
      </motion.div>
    </div>
  );
}
