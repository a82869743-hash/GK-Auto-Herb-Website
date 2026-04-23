import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [isResizing, setIsResizing] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);
  const position = useMotionValue(50);
  
  const handlePointerMove = (e) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    if (x === undefined) return;
    
    let p = ((x - rect.left) / rect.width) * 100;
    p = Math.max(2, Math.min(98, p));
    position.set(p);
  };
  
  const handlePointerUp = () => setIsResizing(false);
  
  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isResizing]);

  const clipPathValue = useTransform(position, (p) => `inset(0 ${100 - p}% 0 0)`);
  const handleLeft = useTransform(position, (p) => `${p}%`);

  return (
    <div 
      className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 group select-none cursor-ew-resize shadow-2xl hover:shadow-[0_0_60px_-15px_rgba(225,6,0,0.15)] transition-shadow duration-700"
      ref={containerRef}
      onPointerDown={(e) => {
        setIsResizing(true);
        setHasInteracted(true);
        handlePointerMove(e);
      }}
    >
      {/* Before Label - Red Badge */}
      <div className="absolute top-5 left-5 z-20 flex items-center gap-2 pointer-events-none">
        <span className="px-4 py-1.5 bg-red-600/90 backdrop-blur-xl text-white text-[10px] font-headline font-black uppercase tracking-[0.3em] rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
          {beforeLabel}
        </span>
      </div>

      {/* After Label - Green Badge */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-2 pointer-events-none">
        <span className="px-4 py-1.5 bg-emerald-500/90 backdrop-blur-xl text-white text-[10px] font-headline font-black uppercase tracking-[0.3em] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/30">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (base layer) */}
      <div className="absolute inset-0 w-full h-full bg-zinc-900 pointer-events-none">
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover saturate-[0.15] brightness-[0.8] contrast-[0.85]" draggable="false" />
        {/* Subtle grid overlay on before side */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.3) 50px)'}}></div>
      </div>

      {/* After Image with Clip Path */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: clipPathValue }}
      >
        <img src={afterImage} alt="After" className="w-full h-full object-cover" draggable="false" />
        {/* Subtle shine on after side */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Slider Handle Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[2px] z-30 pointer-events-none"
        style={{ left: handleLeft, x: "-50%", background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.8), rgba(255,255,255,1), rgba(255,255,255,0.8), transparent)' }}
      >
        {/* Handle Grip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-black text-sm">chevron_left</span>
            <span className="material-symbols-outlined text-black text-sm">chevron_right</span>
          </div>
        </div>

        {/* Top Glow Dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] -mt-1.5"></div>
        
        {/* Bottom Glow Dot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] -mb-1.5"></div>
      </motion.div>

      {/* Drag Hint — shows only before user interacts */}
      {!hasInteracted && (
        <motion.div 
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.span 
            className="material-symbols-outlined text-white text-sm"
            animate={{ x: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            swipe
          </motion.span>
          <span className="text-white text-[10px] font-headline font-bold uppercase tracking-[0.2em]">Drag to Compare</span>
        </motion.div>
      )}
    </div>
  );
}
