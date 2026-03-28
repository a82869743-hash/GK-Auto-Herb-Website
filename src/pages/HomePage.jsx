import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import InstagramScroll from '../components/InstagramScroll';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img
            alt="Luxury Dark Car Cinematic"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2670&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
          {/* Subtle Particles / Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80"></div>
        </motion.div>

        <motion.div 
          className="max-w-screen-2xl mx-auto px-6 md:px-10 w-full relative z-10 text-center flex flex-col items-center justify-center mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#e10600]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Premium Detail Studio</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-headline leading-[0.9] tracking-tighter uppercase mb-8 text-white">
            GK AUTO <span className="text-transparent bg-clip-text text-gradient-subtle">HERB</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 font-body max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Automotive perfection through aerospace-grade protection. Elevating your vehicle to its highest state of aesthetic purity.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto overflow-hidden">
              <div className="absolute inset-0 bg-primary-container rounded-full red-glow transition-all duration-500 group-hover:bg-red-600"></div>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative text-white z-10">Book Your Slot Now →</span>
            </Link>
            <Link to="/services" className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black w-full sm:w-auto">
              <span className="relative z-10">Protect Your Car Today</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <span className="material-symbols-outlined text-4xl text-white">expand_more</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatsCounter value={1500} label="Vehicles Protected" suffix="+" />
            <StatsCounter value={10} label="Years Experience" suffix="+" />
            <StatsCounter value={4} label="Certifications" />
            <StatsCounter value={100} label="Client Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-surface" id="services">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">Core <span className="text-primary-container">Services</span></h2>
              <div className="h-1 lg:w-32 w-16 bg-primary-container"></div>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pb-1 border-b border-primary-container/30 hover:border-primary-container">View All Services</Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30">
                <img alt="Paint Correction" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_polishing.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black font-headline uppercase text-white mb-2 tracking-tight transition-colors group-hover:text-primary-container">Correction</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Surgical paint correction restoring deeper gloss and removing defects at a microscopic level.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2 text-primary-container">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.2 }}
              className="group flex flex-col pt-0 md:pt-12"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30">
                <img alt="Ceramic Coating" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_ceramic.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Signature</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black font-headline uppercase text-white mb-2 tracking-tight transition-colors group-hover:text-primary-container">Ceramic</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Nano-ceramic molecular bonding for extreme gloss, hydrophobic protection, and hardness.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2 text-primary-container">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.4 }}
              className="group flex flex-col pt-0 md:pt-24"
            >
               <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30">
                <img alt="PPF Wrap" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_ppf_application.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black font-headline uppercase text-white mb-2 tracking-tight transition-colors group-hover:text-primary-container">PPF Film</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Self-healing polyurethane barriers for ultimate resistance against road debris.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-2 text-primary-container">arrow_forward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">The <span className="text-primary-container">Transformation</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">Slide to reveal the difference. We restore neglected clear coats into deep, mirror-like finishes.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <BeforeAfterSlider 
              beforeImage="/assets/service_polishing.png"
              afterImage="/assets/service_polishing.png"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Elements */}
      <Testimonials />
      <InstagramScroll />

      {/* Engineering Precision Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">Technical <span className="text-zinc-500">Analysis</span></h2>
            <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">Beyond aesthetics, we specialize in the molecular fortification of automotive surfaces through rigorous technical applications.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Advanced Molecular Bonding", desc: "Our coatings undergo a covalent bonding process, fusing with the paint's clear coat.", icon: "settings_input_component", tag: "Structure" },
              { title: "Thermodynamic Resistance", desc: "Utilizing aerospace-grade thermal inhibitors, our treatments protect from UV degradation.", icon: "thermostat", tag: "Thermal" },
              { title: "Optical Clarity Enhancement", desc: "By leveling microscopic surface irregularities, we maximize light refraction.", icon: "visibility", tag: "Optics" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 rounded-3xl glass-card hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-container/20 transition-colors duration-500"></div>
                <div className="text-primary-container font-black text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary-container"></span>
                  {item.tag}
                </div>
                <h3 className="text-xl font-black font-headline uppercase text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mt-auto">
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  Engineered
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect & Locate Section */}
      <section className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase text-white tracking-tighter mb-4">
              Connect & <span className="text-transparent bg-clip-text text-gradient-subtle">Locate</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Visit our state-of-the-art studio or reach out directly for priority booking and consultation.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Map Container - 8 cols */}
            <div className="md:col-span-8 glass-card rounded-3xl overflow-hidden border border-white/10 h-[400px] md:h-[540px] relative group p-2">
              <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2882250107297!2d-79.3831843!3d43.653226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cbab11bd7d%3A0xeebdffc08ee2fc71!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1709400000000!5m2!1sen!2sca" 
                className="w-full h-full rounded-2xl filter contrast-[1.2] grayscale-[0.8] invert-[0.9] hue-rotate-[180deg] group-hover:grayscale-[0.5] hover:invert-[0.85] transition-all duration-700" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                <span className="text-white font-headline font-bold uppercase tracking-widest text-xs">GK AUTO HERB STUDIO</span>
              </div>
            </div>

            {/* Buttons - 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 min-h-[400px] md:h-[540px]">
              {/* WhatsApp Button */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card rounded-3xl p-8 border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between text-center items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mt-2 group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)]">
                  <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-headline font-black uppercase text-2xl mb-1">WhatsApp</h4>
                  <p className="text-zinc-400 text-sm mb-6">Priority quotes & booking</p>
                </div>
                <div className="w-full py-4 rounded-full bg-[#25D366] text-black font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all">Message Us</div>
              </a>

              {/* Instagram Button */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between text-center items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] mt-2 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                  <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-headline font-black uppercase text-2xl mb-1">Instagram</h4>
                  <p className="text-zinc-400 text-sm mb-6">See our daily creations</p>
                </div>
                <div className="w-full py-4 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all">Follow Us</div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
