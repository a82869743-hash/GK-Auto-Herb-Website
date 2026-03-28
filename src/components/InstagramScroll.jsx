import { motion } from 'framer-motion';
import { useRef } from 'react';

const instagramPosts = [
  { img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop", type: "gallery" },
  { img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop", type: "video" },
  { img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop", type: "image" },
  { img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", type: "gallery" },
  { img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop", type: "video" },
  { img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop", type: "image" },
  // Duplicate for seamless infinite scroll
  { img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop", type: "gallery" },
  { img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop", type: "video" },
  { img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop", type: "image" },
  { img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", type: "gallery" }
];

export default function InstagramScroll() {
  const scrollRef = useRef(null);

  // We are creating a manual infinite scroll effect using Framer Motion
  // The trick is to translate -50% to show half the duplicated content,
  // then loop back to 0. Since we duplicated the items, it will look seamless.

  return (
    <section className="py-16 md:py-24 border-y border-white/5 relative bg-black overflow-hidden z-20">
      
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 mb-10 md:mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter text-center md:text-left">See Our Work In Action</h2>
        </div>
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-container transition-colors">
            <span className="material-symbols-outlined text-zinc-400 group-hover:text-primary-container transition-colors text-sm" style={{fontVariationSettings: "'FILL' 1"}}>camera</span>
          </div>
          <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">@GKAUTOHERB</span>
        </a>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          ref={scrollRef}
          className="flex gap-4 w-max px-4"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {instagramPosts.map((post, idx) => (
            <div key={idx} className="w-[280px] md:w-[350px] aspect-square flex-shrink-0 relative overflow-hidden rounded-2xl group/card cursor-pointer border border-white/5">
              <img src={post.img} alt="Detailing Work" className="w-full h-full object-cover grayscale-[0.3] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700" loading="lazy" />
              
              {/* Instagram Icons Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                  <span className="text-sm">{(Math.random() * (9.9 - 1.1) + 1.1).toFixed(1)}k</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
                  <span className="text-sm">{Math.floor(Math.random() * 200) + 10}</span>
                </div>
              </div>
              
              {/* Top Right Type Icon */}
              <div className="absolute top-4 right-4 text-white drop-shadow-lg">
                <span className="material-symbols-outlined">
                  {post.type === 'video' ? 'play_circle' : post.type === 'gallery' ? 'style' : ''}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
