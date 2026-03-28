import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  { img: '/assets/gallery-1.png', alt: 'Gallery Image 1', cat: 'Ceramic Coating', title: 'Flawless Finish', span: 'md:col-span-8 md:row-span-2' },
  { img: '/assets/gallery-2.png', alt: 'Gallery Image 2', cat: 'Glass Coating', title: 'Crystal Clear', span: 'md:col-span-4 md:row-span-3' },
  { img: '/assets/gallery-3.png', alt: 'Gallery Image 3', cat: 'Paint Correction', title: 'Mirror Reflection', span: 'md:col-span-4' },
  { img: '/assets/gallery-4.png', alt: 'Gallery Image 4', cat: 'Detailing', title: 'Pure Gloss', span: 'md:col-span-4' },
  { img: '/assets/gallery-5.png', alt: 'Gallery Image 5', cat: 'PPF Shield', title: 'Protected Paint', span: 'md:col-span-8' },
  { img: '/assets/gallery-6.png', alt: 'Gallery Image 6', cat: 'Interior Care', title: 'Deep Clean', span: 'md:col-span-4' },
]

const filters = ['All Work', 'Interior', 'Exterior', 'Before & After'];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] flex items-end px-6 md:px-12 pb-16 md:pb-20 overflow-hidden bg-zinc-950">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img alt="Beautiful detailing presentation hero" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="/assets/gallery-1.png" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 max-w-5xl w-full mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-primary-container"></span>
            <span className="text-zinc-400 font-headline font-bold uppercase tracking-[0.3em] text-xs">Craftsmanship in Focus</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.9] mb-6 animate-fade-in">
            Visual <br/><span className="text-transparent bg-clip-text text-gradient-subtle">Excellence</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-400 max-w-2xl text-lg font-light border-l-2 border-primary-container/30 pl-6">
            Explore our portfolio of high-performance protection and detailing. Every curve, every reflection, perfected by GK AUTO HERB.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 py-12 max-w-screen-2xl mx-auto border-y border-white/5 relative z-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          {filters.map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 ${activeFilter === filter ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-transparent text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]"
        >
          {galleryItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className={`${item.span} group relative overflow-hidden rounded-2xl border border-white/5 transition-all duration-700 hover:border-white/20 subtle-glow-hover cursor-pointer`}
            >
              {item.img ? (
                <img alt={item.alt} className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src={item.img} />
              ) : (
                <div className="w-full h-full bg-zinc-900/40 group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center">
                  <span className="text-zinc-600 font-headline uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs">Awaiting Image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.cat && <span className="text-primary-container font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-3 block">{item.cat}</span>}
                  <h3 className={`${item.cat ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-headline font-black uppercase text-white drop-shadow-md`}>{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto relative">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-zinc-900/50 backdrop-blur-xl relative overflow-hidden rounded-[2rem] border border-white/10 p-12 md:p-20 shadow-2xl"
        >
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter mb-6 leading-none text-white">Your Car Deserves <br />The <span className="text-transparent bg-clip-text text-gradient-subtle">GK Treatment</span></h2>
              <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed">Join our elite circle of clients who settle for nothing less than perfection. Limited detailing slots available monthly.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
              <Link to="/contact" className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full font-headline font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
                Get a Free Quote
              </Link>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-zinc-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                Response within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
