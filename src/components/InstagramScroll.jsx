import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const instagramPosts = [
  { img: "/assets/interior_leather_seats.png", type: "image" },
  { img: "/assets/exterior_foam_wash.png", type: "video" },
  { img: "/assets/interior_dashboard.png", type: "gallery" },
  { img: "/assets/exterior_ceramic_shine.png", type: "image" },
  { img: "/assets/interior_console.png", type: "gallery" },
  { img: "/assets/exterior_paint_reflection.png", type: "video" },
  { img: "/assets/interior_doorpanel.png", type: "image" },
  { img: "/assets/interior_wide_shot.png", type: "gallery" },
  // Duplicate for seamless infinite scroll
  { img: "/assets/interior_leather_seats.png", type: "image" },
  { img: "/assets/exterior_foam_wash.png", type: "video" },
  { img: "/assets/interior_dashboard.png", type: "gallery" },
  { img: "/assets/exterior_ceramic_shine.png", type: "image" },
  { img: "/assets/interior_console.png", type: "gallery" },
  { img: "/assets/exterior_paint_reflection.png", type: "video" },
  { img: "/assets/interior_doorpanel.png", type: "image" },
  { img: "/assets/interior_wide_shot.png", type: "gallery" },
];

// Fixed random values so they don't change on re-render
const fixedLikes = [3.2, 5.8, 2.1, 7.4, 4.6, 6.9, 1.8, 8.3, 3.2, 5.8, 2.1, 7.4, 4.6, 6.9, 1.8, 8.3];
const fixedComments = [87, 142, 56, 203, 91, 177, 43, 218, 87, 142, 56, 203, 91, 177, 43, 218];

export default function InstagramScroll() {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 md:py-32 border-y border-white/5 relative bg-black overflow-hidden z-20">
      
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary-container"></span>
            Social Proof
            <span className="w-8 h-px bg-primary-container"></span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-4">
            Real Work. Real <span className="text-primary-container">Results.</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed mb-8">
            Follow us on Instagram to see daily transformations, behind-the-scenes processes, and stunning results.
          </p>
          
          <a 
            href="https://www.instagram.com/autoherb_vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">@autoherb_vadodara</span>
          </a>
        </motion.div>
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
            duration: 50,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {instagramPosts.map((post, idx) => (
            <a 
              key={idx} 
              href="https://www.instagram.com/autoherb_vadodara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[280px] md:w-[350px] aspect-square flex-shrink-0 relative overflow-hidden rounded-2xl group/card cursor-pointer border border-white/5 hover:border-pink-500/30 transition-all duration-500"
            >
              <img 
                src={post.img} 
                alt="GK Auto Herb Detailing Work" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700" 
                loading="lazy" 
              />
              
              {/* Instagram Overlay with Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                {/* Instagram Icon */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                  <div className="w-full h-full bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Likes & Comments */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                    <span className="text-sm">{fixedLikes[idx]}k</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
                    <span className="text-sm">{fixedComments[idx]}</span>
                  </div>
                </div>
              </div>
              
              {/* Top Right Type Icon */}
              <div className="absolute top-4 right-4 text-white drop-shadow-lg">
                <span className="material-symbols-outlined">
                  {post.type === 'video' ? 'play_circle' : post.type === 'gallery' ? 'style' : ''}
                </span>
              </div>

              {/* Hover Glow Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/card:border-pink-500/20 transition-all duration-500 pointer-events-none group-hover/card:shadow-[inset_0_0_30px_rgba(236,72,153,0.1)]"></div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Follow CTA */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-12 md:mt-16 text-center"
      >
        <a
          href="https://www.instagram.com/autoherb_vadodara"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-black uppercase tracking-widest text-xs shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-500 hover:scale-105"
        >
          <Instagram className="w-5 h-5" />
          Follow Us on Instagram
        </a>
      </motion.div>
    </section>
  );
}
