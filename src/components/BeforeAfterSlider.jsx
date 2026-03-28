import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);
  const position = useMotionValue(50); // percentage 0-100
  
  const handlePointerMove = (e) => {
    if (!isResizing || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    if (x === undefined) return;
    
    // Calculate percentage
    let p = ((x - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
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
      className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl glass-border group select-none"
      ref={containerRef}
      onPointerDown={(e) => {
        setIsResizing(true);
        handlePointerMove(e);
      }}
    >
      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md text-zinc-300 text-xs font-bold uppercase tracking-widest rounded-md pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary-container/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-md pointer-events-none">
        After
      </div>

      {/* Before Image */}
      <div className="absolute inset-0 w-full h-full pb-0 bg-zinc-900 pointer-events-none">
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover saturate-[0.1] blur-[1.5px] contrast-[0.80] brightness-[0.85]" draggable="false" />
      </div>

      {/* After Image with Clip Path */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath: clipPathValue }}
      >
        <img src={afterImage} alt="After" className="w-full h-full object-cover" draggable="false" />
      </motion.div>

      {/* Slider Handle */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
        style={{ left: handleLeft, x: "-50%" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-white rounded-md shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-black/30 rounded-full"></div>
            <div className="w-0.5 h-6 bg-black/30 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
