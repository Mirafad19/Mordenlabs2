import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface AnimatedNumberProps {
  value: string;
}

export function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse the numerical part and suffixes (e.g. "100+", "99.8%", "15k")
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numMatch[0]);
    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring((numMatch.index || 0) + numMatch[0].length);

    const start = 0;
    const duration = 1500; // 1.5s animation duration
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula for super smooth slow-down
      const easeProgress = progress * (2 - progress);
      const current = start + easeProgress * (targetNum - start);

      const isDecimal = numMatch[0].includes(".");
      const formattedNum = isDecimal ? current.toFixed(1) : Math.floor(current).toString();

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplayValue(value); // Set to exact final value
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
    </span>
  );
}
