import React, { useEffect, useRef, useState } from "react";

import { animate } from "framer-motion";

export interface CountProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export const Counter: React.FC<CountProps> = ({ from, to, duration = 1, suffix = "" }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    if (!isInView) ref.current.textContent = from.toString() + suffix;

    const controls = animate(from, to, {
      duration,
      onUpdate: (value) => {
        ref.current!.textContent = value.toFixed(0) + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, isInView]);

  return <span ref={ref} />;
};
