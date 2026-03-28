import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen overflow-hidden">
      {/* Hero Section: Brand Story */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
          <img className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" alt="Close up of a luxury sports car headlight reflecting lights" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop" />
        </motion.div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 w-full"
        >
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-primary-container"></span>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">Engineered Legacy</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.9] text-white mb-8 animate-fade-in">
              The Kinetic <br /><span className="text-transparent bg-clip-text text-gradient-subtle">Atelier.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-primary-container/30 pl-6">
              Born from a obsession with automotive perfection, GK AUTO HERB translates high-performance engineering into world-class surface protection. We don't just detail; we preserve the soul of the machine.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 md:gap-16">
              <div>
                <div className="text-4xl font-headline font-black text-white mb-2">15<span className="text-primary-container">+</span></div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Years Excellence</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-4xl font-headline font-black text-white mb-2">5k<span className="text-primary-container">+</span></div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Vehicles Perfected</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-4xl font-headline font-black text-white mb-2">100<span className="text-primary-container">%</span></div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Precision Focus</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-black relative z-10 border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                Precision is <br />Our <span className="text-zinc-600">Protocol.</span>
              </h2>
              <div className="w-16 h-1 bg-primary-container mb-8"></div>
            </motion.div>
            
            <div className="lg:col-start-7 lg:col-span-6 space-y-24">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className="group relative pl-8 border-l border-white/10 hover:border-primary-container/50 transition-colors duration-500"
              >
                <span className="absolute -left-3 -top-5 text-zinc-900 group-hover:text-zinc-800 font-headline font-black text-8xl transition-colors duration-700 pointer-events-none -z-10">01</span>
                <h3 className="text-3xl md:text-4xl font-headline font-black text-white mt-4 mb-6 uppercase tracking-tight">The Mission</h3>
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  To elevate the standard of automotive preservation through the integration of aerospace-grade materials and artisan techniques. We aim to provide every client with a finish that unequivocally exceeds factory showroom standards.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className="group relative pl-8 border-l border-white/10 hover:border-primary-container/50 transition-colors duration-500"
              >
                <span className="absolute -left-3 -top-5 text-zinc-900 group-hover:text-zinc-800 font-headline font-black text-8xl transition-colors duration-700 pointer-events-none -z-10">02</span>
                <h3 className="text-3xl md:text-4xl font-headline font-black text-white mt-4 mb-6 uppercase tracking-tight">The Vision</h3>
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  Establishing GK AUTO HERB as the global benchmark for high-performance aesthetic maintenance. We are building a future where bleeding-edge technology and uncompromising craftsmanship converge to immortalize the beauty of flight and speed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-zinc-950 relative z-10 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-primary-container"></span>
                <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">The Crew</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mix-blend-difference">Master Technicians</h2>
            </div>
            <div className="text-zinc-500 font-light max-w-sm text-left md:text-right italic text-lg md:text-xl border-l-[3px] md:border-l-0 md:border-r-[3px] border-primary-container/30 pl-4 md:pl-0 md:pr-4">
              "The machine is only as good as the hands that touch it."
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Team Member 1 */}
            <motion.div variants={fadeInUp} className="glass-panel group relative overflow-hidden rounded-3xl p-8 border border-white/5 transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/60 subtle-glow-hover">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <div className="overflow-hidden rounded-2xl mb-8 border border-white/5">
                <img className="w-full h-80 object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" alt="Professional technician in premium black uniform" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=500&auto=format&fit=crop" />
              </div>
              <div className="relative z-20">
                <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight">Marcus Vane</h4>
                <p className="text-primary-container font-bold text-[10px] tracking-[0.2em] uppercase mb-4 mt-2">Lead Detailer &amp; Founder</p>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">Expert in multi-stage paint correction and ceramic bonding protocols with 15 years of performance heritage.</p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={fadeInUp} className="glass-panel group relative overflow-hidden rounded-3xl p-8 border border-white/5 transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/60 subtle-glow-hover">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <div className="overflow-hidden rounded-2xl mb-8 border border-white/5">
                <img className="w-full h-80 object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" alt="Senior car protection specialist working in studio" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" />
              </div>
              <div className="relative z-20">
                <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight">Elena Thorne</h4>
                <p className="text-primary-container font-bold text-[10px] tracking-[0.2em] uppercase mb-4 mt-2">PPF Specialist</p>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">Certified master in Paint Protection Film application, specializing in seamless custom bulk installations.</p>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={fadeInUp} className="glass-panel group relative overflow-hidden rounded-3xl p-8 border border-white/5 transition-all duration-700 hover:border-white/20 hover:bg-zinc-900/60 subtle-glow-hover">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <div className="overflow-hidden rounded-2xl mb-8 border border-white/5">
                <img className="w-full h-80 object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" alt="Technical director inspecting car finish" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" />
              </div>
              <div className="relative z-20">
                <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight">Julian Ricci</h4>
                <p className="text-primary-container font-bold text-[10px] tracking-[0.2em] uppercase mb-4 mt-2">Quality Inspector</p>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">Oversees our 120-point quality check, ensuring every delivery meets the GK performance standard unequivocally.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-24 md:py-32 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6">The Studio <br/><span className="text-zinc-600">Environment</span></h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl border-l-[3px] border-primary-container/30 pl-6">A temperature-controlled, dust-free sanctuary where high-performance vehicles undergo transformation under precision surgical lighting.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[400px_300px] gap-6"
          >
            <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-2 relative aspect-[4/5] md:aspect-auto overflow-hidden rounded-3xl group border border-white/5 cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="High-end modern auto detailing studio" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <span className="text-white font-headline font-black uppercase tracking-widest text-lg md:text-xl border-l-[3px] border-primary-container pl-4 drop-shadow-lg">Main Detailing Bay</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-2 md:row-span-1 relative aspect-video md:aspect-auto overflow-hidden rounded-3xl group border border-white/5 cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Clean minimal studio area for film application" src="/assets/service_ppf_application.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-headline font-black uppercase tracking-widest text-base border-l-[3px] border-primary-container pl-4 drop-shadow-lg">PPF Clean Room</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-1 md:row-span-1 relative aspect-square md:aspect-auto overflow-hidden rounded-3xl group border border-white/5 cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Professional industrial detailing equipment" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-headline font-black uppercase tracking-widest text-sm border-l-[3px] border-primary-container pl-3 drop-shadow-lg">Lab Station</span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-1 md:row-span-1 relative aspect-square md:aspect-auto overflow-hidden rounded-3xl group border border-white/5 cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Detailing Inside Studio" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-headline font-black uppercase tracking-widest text-sm border-l-[3px] border-primary-container pl-3 drop-shadow-lg">Detailing Studio</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-zinc-950 border-y border-white/10 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-zinc-500 font-headline font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Endorsed by Excellence</span>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest text-xs md:text-sm">GTECHNIQ Accredited</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>shield</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest text-xs md:text-sm">XPEL Certified</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest text-xs md:text-sm">IDA Member</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 group cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-primary-container group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="text-white font-headline font-bold uppercase tracking-widest text-xs md:text-sm">5-Star Rated</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
