import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function StatsCounter({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, value, count]);

  return (
    <div className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl border border-white/5" ref={ref}>
      <div className="flex items-baseline mb-2">
        <motion.span className="text-4xl md:text-5xl font-black font-headline text-white">{rounded}</motion.span>
        <span className="text-primary text-2xl font-black ml-1">{suffix}</span>
      </div>
      <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs text-center">{label}</span>
      <div className="w-8 h-1 bg-primary-container mt-4 rounded-full"></div>
    </div>
  );
}
