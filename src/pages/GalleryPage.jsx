import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'

const galleryItems = [
  // Exterior Detailing
  { img: '/assets/gallery-1.png', alt: 'Ceramic coating on black sedan', cat: 'Exterior', type: 'Ceramic Coating', title: 'Flawless Finish' },
  { img: '/assets/gallery-2.png', alt: 'Glass coating application', cat: 'Exterior', type: 'Glass Coating', title: 'Crystal Clear' },
  { img: '/assets/gallery-3.png', alt: 'Paint correction process', cat: 'Exterior', type: 'Paint Correction', title: 'Mirror Reflection' },
  { img: '/assets/gallery-4.png', alt: 'PPF application on hood', cat: 'Exterior', type: 'PPF Shield', title: 'Invisible Armor' },
  { img: '/assets/gallery-5.png', alt: 'Full body PPF wrap', cat: 'Exterior', type: 'PPF Shield', title: 'Protected Paint' },
  { img: '/assets/gallery-6.png', alt: 'Full car detailing result', cat: 'Exterior', type: 'Full Detail', title: 'Showroom Ready' },
  // Interior Detailing
  { img: '/assets/interior-1.png', alt: 'Mercedes quilted leather seat detailing', cat: 'Interior', type: 'Leather Care', title: 'Mercedes Elegance' },
  { img: '/assets/interior-2.png', alt: 'BMW M Sport quilted leather interior', cat: 'Interior', type: 'Leather Care', title: 'BMW M Precision' },
  { img: '/assets/interior-3.png', alt: 'Bentley quilted leather seats with ambient lighting', cat: 'Interior', type: 'Full Interior', title: 'Bentley Luxury' },
  { img: '/assets/interior-4.png', alt: 'Lexus premium leather seat detailing', cat: 'Interior', type: 'Leather Care', title: 'Lexus Refinement' },
  { img: '/assets/interior-5.jpg', alt: 'Premium orange leather interior seats', cat: 'Interior', type: 'Custom Leather', title: 'Tangerine Dream' },
  { img: '/assets/interior-6.png', alt: 'Luxury orange quilted leather car interior', cat: 'Interior', type: 'Custom Leather', title: 'Burnt Sienna Class' },
]

const filters = ['All Work', 'Exterior', 'Interior', 'Before/After'];

// Layout patterns for different views — gives each image a deliberate size in the 12-col grid
const allWorkSpans = [
  'col-span-1 md:col-span-8 md:row-span-2',   // gallery-1 — hero wide
  'col-span-1 md:col-span-4 md:row-span-2',   // gallery-2 — tall right
  'col-span-1 md:col-span-4',                  // gallery-3
  'col-span-1 md:col-span-4',                  // gallery-4
  'col-span-1 md:col-span-4',                  // gallery-5
  'col-span-1 md:col-span-6 md:row-span-2',   // gallery-6 — medium tall
  'col-span-1 md:col-span-6 md:row-span-2',   // interior-1 — medium tall
  'col-span-1 md:col-span-8 md:row-span-2',   // interior-2 — hero wide
  'col-span-1 md:col-span-4 md:row-span-2',   // interior-3 — tall
  'col-span-1 md:col-span-4',                  // interior-4
  'col-span-1 md:col-span-4',                  // interior-5
  'col-span-1 md:col-span-4',                  // interior-6
];

const exteriorSpans = [
  'col-span-1 md:col-span-8 md:row-span-2',
  'col-span-1 md:col-span-4 md:row-span-2',
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-6 md:row-span-2',
];

const interiorSpans = [
  'col-span-1 md:col-span-4 md:row-span-2',
  'col-span-1 md:col-span-8 md:row-span-2',
  'col-span-1 md:col-span-6',
  'col-span-1 md:col-span-6',
  'col-span-1 md:col-span-8 md:row-span-2',
  'col-span-1 md:col-span-4 md:row-span-2',
];

function getSpan(filter, idx) {
  if (filter === 'Interior') return interiorSpans[idx] || 'col-span-1 md:col-span-4';
  if (filter === 'Exterior') return exteriorSpans[idx] || 'col-span-1 md:col-span-4';
  return allWorkSpans[idx] || 'col-span-1 md:col-span-4';
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All Work');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [sliderValue, setSliderValue] = useState(50);

  const filteredItems = activeFilter === 'All Work'
    ? galleryItems
    : galleryItems.filter(item => item.cat === activeFilter);

  const getCounts = (filter) => {
    if (filter === 'All Work') return galleryItems.length;
    if (filter === 'Before/After') return '✦';
    return galleryItems.filter(i => i.cat === filter).length;
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[500px] md:h-[600px] flex items-end px-6 md:px-12 pb-16 md:pb-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img alt="Beautiful detailing presentation hero" className="w-full h-full object-cover opacity-50" src="/assets/gallery-1.png" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        </div>

        <motion.div
          initial="hidden" animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-5xl w-full mx-auto"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-primary-container"></span>
            <span className="text-zinc-400 font-headline font-bold uppercase tracking-[0.3em] text-xs">Craftsmanship in Focus</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Visual <br/><span className="text-transparent bg-clip-text text-gradient-subtle">Excellence</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-400 max-w-2xl text-lg font-light border-l-2 border-primary-container/30 pl-6">
            Explore our portfolio of high-performance protection and detailing — exterior perfection meets interior immaculacy.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 py-10 max-w-screen-2xl mx-auto border-y border-white/5 relative z-40">
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-3 ${activeFilter === filter ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'bg-transparent text-zinc-400 border border-white/10 hover:border-white/30 hover:text-white'}`}
            >
              {filter}
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeFilter === filter ? 'bg-black/10 text-black/60' : 'bg-white/5 text-zinc-500'}`}>
                {getCounts(filter)}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-20 pt-10 max-w-screen-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {activeFilter === 'Before/After' ? (
            <motion.div
              key="before-after"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center gap-10"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-4 text-white">The <span className="text-transparent bg-clip-text text-gradient-subtle">Transformation</span></h2>
                <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base font-light">Slide to see the dramatic difference our professional paint correction and ceramic coating makes. Scratches and swirls vanish, replaced by a perfect mirror finish.</p>
              </div>

              <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl select-none">
                {/* After Image (Background) */}
                <img src="/assets/after.png" alt="After polishing" className="absolute inset-0 w-full h-full object-cover" draggable="false" />

                {/* Before Image (Clipped) */}
                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
                  <img src="/assets/before.png" alt="Before polishing" className="absolute inset-0 w-full h-full object-cover" draggable="false" />
                </div>

                {/* Invisible Range Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0"
                  style={{ WebkitAppearance: 'none' }}
                />

                {/* Labels */}
                <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-red-600/80 border border-red-500/40">
                  <span className="font-headline font-bold uppercase tracking-widest text-xs text-white">Before</span>
                </div>
                <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full bg-emerald-600/80 border border-emerald-500/40">
                  <span className="font-headline font-bold uppercase tracking-widest text-xs text-white">After</span>
                </div>

                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 w-[3px] bg-white/90 pointer-events-none z-10 transition-none" style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_25px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-black text-xl">swap_horiz</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[300px]"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={`${activeFilter}-${idx}`}
                  className={`${getSpan(activeFilter, idx)} group relative overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 cursor-pointer transition-[border-color] duration-300`}
                  onClick={() => setLightboxImg(item)}
                  style={{ willChange: 'auto' }}
                >
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.img}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-headline font-black uppercase tracking-widest border ${item.cat === 'Interior' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-primary-container/20 text-primary-container border-primary-container/30'}`}>
                      {item.cat}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 md:p-8 flex flex-col justify-end">
                    <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                      <span className="text-zinc-400 font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-1 block">{item.type}</span>
                      <h3 className="text-xl md:text-2xl font-headline font-black uppercase text-white mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="material-symbols-outlined text-sm text-primary-container">zoom_in</span>
                        <span className="font-bold uppercase tracking-widest text-[10px]">Click to Enlarge</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-zinc-900/50 relative overflow-hidden rounded-[2rem] border border-white/10 p-12 md:p-20 shadow-2xl"
        >
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter mb-6 leading-none text-white">Your Car Deserves <br /><span className="text-transparent bg-clip-text text-gradient-subtle">The GK Treatment</span></h2>
              <p className="text-zinc-400 text-base md:text-lg lg:text-xl font-light leading-relaxed">Join our elite circle of clients who settle for nothing less than perfection. Limited detailing slots available monthly.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
              <Link to="/contact" className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-full font-headline font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-pointer"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.img}
                alt={lightboxImg.alt}
                className="w-full h-full object-contain bg-zinc-950"
              />
              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-headline font-black uppercase tracking-widest border ${lightboxImg.cat === 'Interior' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-primary-container/20 text-primary-container border-primary-container/30'}`}>
                      {lightboxImg.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-headline font-black uppercase text-white mt-3">{lightboxImg.title}</h3>
                  </div>
                  <button
                    onClick={() => setLightboxImg(null)}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-white">close</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
