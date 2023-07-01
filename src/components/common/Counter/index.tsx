import React, { useEffect, useRef } from "react";

import { animate } from "framer-motion";

export interface CountProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export const Counter: React.FC<CountProps> = ({ from, to, duration = 1, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const controls = animate(from, to, {
      duration,
      onUpdate: (value) => {
        ref.current!.textContent = value.toFixed(0) + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix]);

  return <span ref={ref} />;
};
