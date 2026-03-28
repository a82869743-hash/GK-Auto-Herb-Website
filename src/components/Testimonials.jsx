import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "James L.",
    city: "Chicago, IL",
    text: "I was skeptical about ceramic coating at first, but the results are undeniable. My 911 looks wetter and deeper than the day it left Stuttgart. The team's attention to detail is borderline obsessive—exactly what you want.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Michael S.",
    city: "New York, NY",
    text: "The PPF installation is truly invisible. I've taken my GT3 RS to the track multiple times now without a single rock chip on the front end. GK AUTO HERB is the only shop I trust with my allocation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David R.",
    city: "Miami, FL",
    text: "Brought in my 488 Pista after a long rally. It looked rough. When I picked it up, they had performed a multi-stage correction that completely restored the paint. It's flawless under direct sunlight.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 max-w-screen-2xl mx-auto border-t border-white/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-primary-container"></span>
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">Client Verification</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter">The Standard</h2>
        </div>
        <div className="text-zinc-400 font-light max-w-xs text-left md:text-right text-base border-l-[3px] md:border-l-0 md:border-r-[3px] border-primary-container/30 pl-4 md:pl-0 md:pr-4">
          Uncompromising feedback from our most demanding clientele.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="glass-card p-10 rounded-[2rem] border border-white/5 relative group hover:border-white/10 transition-colors subtle-glow-hover flex flex-col justify-between"
          >
            <div className="absolute top-0 right-10 -mt-5 text-6xl text-primary-container/20 font-serif leading-none opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">"</div>
            
            <div className="mb-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined text-primary-container text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <p className="text-zinc-300 font-light text-base leading-relaxed">"{t.text}"</p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div>
                <p className="text-white font-headline font-bold uppercase tracking-wide text-sm">{t.name}</p>
                <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase">{t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
