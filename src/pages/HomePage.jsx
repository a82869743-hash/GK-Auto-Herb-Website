import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, Shield, Film, ChevronRight, Phone } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import InstagramScroll from '../components/InstagramScroll';
import FAQSection from '../components/FAQSection';
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

  // Sticky Book Now button
  const [showStickyBar, setShowStickyBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70"></div>
          {/* Enhanced Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/90"></div>
        </motion.div>

        <motion.div 
          className="max-w-screen-2xl mx-auto px-6 md:px-10 w-full relative z-10 text-center flex flex-col items-center justify-center mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#e10600]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Premium Detail Studio — Vadodara</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline leading-[0.9] tracking-tighter uppercase mb-6 text-white">
            Premium Car Detailing<br />
            <span className="text-transparent bg-clip-text text-gradient-subtle">That Restores Perfection</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-base md:text-xl text-zinc-400 font-body max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            Interior • Exterior • Ceramic Protection
          </motion.p>

          <motion.p variants={fadeInUp} className="text-sm md:text-base text-zinc-500 font-body max-w-xl mx-auto mb-12 leading-relaxed">
            Elevating your vehicle to its highest state of aesthetic purity with certified products and trained specialists.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto overflow-hidden">
              <div className="absolute inset-0 bg-primary-container rounded-full red-glow transition-all duration-500 group-hover:bg-red-600"></div>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative text-white z-10">Book Now →</span>
            </a>
            <Link to="/gallery" className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black w-full sm:w-auto">
              <span className="relative z-10">View Gallery</span>
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
      <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black relative border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatsCounter value={1500} label="Vehicles Protected" suffix="+" />
            <StatsCounter value={10} label="Years Experience" suffix="+" />
            <StatsCounter value={5} label="Certifications" />
            <StatsCounter value={100} label="Client Satisfaction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-surface to-black" id="services">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-container"></span>
                What We Do Best
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline uppercase tracking-tighter text-white mb-4">Core <span className="text-primary-container">Services</span></h2>
              <div className="h-1 lg:w-32 w-16 bg-primary-container"></div>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pb-1 border-b border-primary-container/30 hover:border-primary-container flex items-center gap-2">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Service 1 - Wash & Detail */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="group flex flex-col"
            >
              <Link to="/services" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="Wash & Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_car_wash_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <Sparkles className="w-5 h-5 text-primary-container" />
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">Wash & Detail</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Surgical interior and exterior cleaning restoring deeper gloss and removing defects.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Service 2 - Ceramic Coating */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.2 }}
              className="group flex flex-col pt-0 md:pt-12"
            >
              <Link to="/services" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="Ceramic Coating" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_ceramic_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Signature</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <Shield className="w-5 h-5 text-primary-container" />
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">Ceramic</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Nano-ceramic molecular bonding for extreme gloss, hydrophobic protection, and hardness.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Service 3 - PPF */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.4 }}
              className="group flex flex-col pt-0 md:pt-24"
            >
               <Link to="/services" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="PPF Wrap" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_ppf_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <Film className="w-5 h-5 text-primary-container" />
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">PPF Film</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Self-healing polyurethane barriers for ultimate resistance against road debris.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    Explore <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden" id="packages">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-container"></span>
                Premium Bundles
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline uppercase tracking-tighter text-white mb-4">Complete <span className="text-primary-container">Care</span></h2>
              <div className="h-1 lg:w-32 w-16 bg-primary-container"></div>
            </div>
            <Link to="/packages" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pb-1 border-b border-primary-container/30 hover:border-primary-container flex items-center gap-2">
              View All Packages <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Package 1 - AMC */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="group flex flex-col"
            >
              <Link to="/packages" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="Annual Maintenance Package" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2]" src="/assets/service_amc_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-zinc-800 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/10">Value</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-xl" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">Annual Care</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Protect your investment year-round with scheduled deep cleaning and wax coats.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    View Plan <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Package 2 - Graphene */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.2 }}
              className="group flex flex-col pt-0 md:pt-12"
            >
              <Link to="/packages" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="Graphene Coating Package" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_graphene_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Ultimate</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-xl" style={{fontVariationSettings: "'FILL' 1"}}>diamond</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">Graphene 10H</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">The pinnacle of paint preservation. 5-year warranty, triple-layer nano structure.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    View Plan <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Package 3 - Full Spa */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} transition={{ delay: 0.4 }}
              className="group flex flex-col pt-0 md:pt-24"
            >
               <Link to="/packages" className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-primary-container/30 group-hover:shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] block">
                <img alt="Interior Detail Package" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="/assets/service_interior_new.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-colors">
                      <span className="material-symbols-outlined text-primary-container text-xl" style={{fontVariationSettings: "'FILL' 1"}}>water_drop</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline uppercase text-white tracking-tight transition-colors group-hover:text-primary-container">Full Detailing</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">Complete spa treatment including AC duct sanitation, steam wash, and odour removal.</p>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                    View Plan <ChevronRight className="w-4 h-4 text-primary-container transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary-container/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          >
            <div>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-container"></span>
                Real Results
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-headline uppercase tracking-tighter text-white mb-4">The <span className="text-primary-container">Transformation</span></h2>
              <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">Slide to reveal the difference. Real work, real results — every detail matters.</p>
            </div>
            <Link to="/gallery" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pb-1 border-b border-primary-container/30 hover:border-primary-container">
              View Full Gallery
            </Link>
          </motion.div>

          {/* Main Slider */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
            <div className="glass-card p-2 rounded-3xl border border-white/10 shadow-[0_30px_60px_-20px_rgba(225,6,0,0.1)]">
              <BeforeAfterSlider 
                beforeImage="/assets/hero_before_scratch.png"
                afterImage="/assets/hero_after_gloss.png"
              />
            </div>
          </motion.div>

          {/* Comparison Stats */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Swirl Marks Removed', value: '100%', icon: 'auto_fix_high' },
                { label: 'Gloss Enhancement', value: '95%', icon: 'light_mode' },
                { label: 'Paint Depth Restored', value: '40μm', icon: 'layers' },
                { label: 'Protection Duration', value: '5 Yrs', icon: 'shield' },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-5 border border-white/5 text-center hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_20px_-5px_rgba(225,6,0,0.1)]">
                  <span className="material-symbols-outlined text-primary-container text-lg mb-2 block">{stat.icon}</span>
                  <div className="text-white font-headline font-black text-2xl mb-1">{stat.value}</div>
                  <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Elements */}
      <Testimonials />
      <InstagramScroll />

      {/* ═══════════════════════════════════════════════════════════════
          CERTIFICATIONS SHOWCASE — Trust & Credentials
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-y border-white/5" id="certifications">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[250px] md:h-[500px] bg-primary-container/4 blur-[100px] md:blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary-container"></span>
                Verified Excellence
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline uppercase tracking-tighter text-white mb-4">Our <span className="text-primary-container">Certifications</span></h2>
              <div className="h-1 lg:w-32 w-16 bg-primary-container"></div>
            </div>
            <Link to="/certifications" className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pb-1 border-b border-primary-container/30 hover:border-primary-container flex items-center gap-2">
              View All Certifications <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mb-14 leading-relaxed"
          >
            Every certification represents our commitment to excellence. Trained, tested, and trusted by the industry's leading automotive brands.
          </motion.p>

          {/* Certificates Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              {
                image: '/assets/certifications/cert_garware_ppf.jpg',
                title: 'Garware PPF Training',
                issuer: 'Garware Hi-Tech Films',
                badge: 'PPF Specialist',
                date: 'Sep 2024'
              },
              {
                image: '/assets/certifications/cert_coade_detailing.jpg',
                title: 'Master Auto Detailing',
                issuer: 'Auto Herb Academy',
                badge: 'Master Detailer',
                date: 'Aug 2022'
              },
              {
                image: '/assets/certifications/cert_autoherb_franchise.jpg',
                title: 'Franchise Authorization',
                issuer: 'Auto Herb Pune',
                badge: 'Authorized',
                date: 'May 2017'
              },
              {
                image: '/assets/certifications/cert_iso_9001.jpg',
                title: 'ISO 9001:2008',
                issuer: 'DRS Management',
                badge: 'ISO Certified',
                date: 'Jan 2016'
              },
              {
                image: '/assets/certifications/cert_kovalent_coating.jpg',
                title: 'Accredited Installer',
                issuer: 'Kovalent Coatings',
                badge: 'Accredited',
                date: 'Oct 2025'
              }
            ].map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <Link to="/certifications" className="block">
                  <div className="relative glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary-container/30 transition-all duration-700 hover:shadow-[0_0_30px_-10px_rgba(225,6,0,0.12)]">
                    {/* Badge */}
                    <div className="absolute top-3 right-3 z-10 bg-primary-container/90 text-white px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg backdrop-blur-sm">
                      {cert.badge}
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950/80 flex items-center justify-center p-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 border-t border-white/5">
                      <h3 className="text-white font-headline font-bold text-xs uppercase tracking-tight mb-1 group-hover:text-primary-container transition-colors line-clamp-1">{cert.title}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{cert.issuer}</p>
                        <p className="text-zinc-600 text-[10px] tracking-wider">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-14 flex flex-wrap justify-center gap-8 md:gap-14"
          >
            {[
              { icon: 'verified', label: 'ISO 9001 Certified' },
              { icon: 'shield', label: 'Garware PPF Trained' },
              { icon: 'star', label: 'Kovalent Accredited' },
              { icon: 'workspace_premium', label: 'Master Detailer' },
              { icon: 'badge', label: 'Authorized Franchise' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors duration-300 cursor-default">
                <span className="material-symbols-outlined text-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-surface to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -mr-24 md:-mr-48 -mt-24 md:-mt-48"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Car Image Side */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
                <img 
                  alt="Premium car freshly detailed at GK Auto Herb studio" 
                  className="w-full h-full object-cover" 
                  src="/assets/exterior_ceramic_shine.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5 border border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-white font-headline font-black text-2xl">1500+</div>
                      <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Cars Done</div>
                    </div>
                    <div className="border-x border-white/10">
                      <div className="text-white font-headline font-black text-2xl">10+</div>
                      <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-white font-headline font-black text-2xl">100%</div>
                      <div className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative red glow behind image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container/15 rounded-full blur-[80px] pointer-events-none"></div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary-container"></span>
                  Why GK Auto Herb
                </span>
                <h2 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">
                  What Sets Us <span className="text-primary-container">Apart</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                  We don't just apply coatings — we engineer protection with certified products, trained specialists, and obsessive attention to detail.
                </p>
              </motion.div>

              <div className="space-y-5">
                {[
                  { 
                    icon: 'workspace_premium', 
                    title: 'Certified Premium Products', 
                    desc: 'We use only Garware TPU PPF, Kovalent Coatings, and 3M-certified materials — no cheap alternatives, ever.',
                    highlight: 'Garware · Kovalent · 3M'
                  },
                  { 
                    icon: 'engineering', 
                    title: 'Trained & Experienced Specialists', 
                    desc: '10+ years of hands-on experience with over 1,500 vehicles. Our team is certified and trained in advanced detailing techniques.',
                    highlight: '10+ Years · 1,500+ Cars'
                  },
                  { 
                    icon: 'verified', 
                    title: 'Warranty-Backed Protection', 
                    desc: 'Every service comes with a genuine manufacturer warranty — up to 8 years for PPF and 5 years for ceramic coatings.',
                    highlight: 'Up to 8 Year Warranty'
                  },
                  { 
                    icon: 'local_car_wash', 
                    title: 'Complementary Aftercare', 
                    desc: 'We include free maintenance washes, wax coats, and periodic inspections with every major coating package.',
                    highlight: 'Free Maintenance Included'
                  },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="group flex gap-5 p-5 rounded-2xl border border-white/5 hover:border-white/10 bg-zinc-950/40 hover:bg-zinc-900/40 transition-all duration-500 hover:shadow-[0_0_20px_-5px_rgba(225,6,0,0.08)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container/20 transition-colors duration-500 border border-primary-container/20">
                      <span className="material-symbols-outlined text-primary-container text-xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-headline font-black text-sm uppercase tracking-wide mb-1">{item.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-2">{item.desc}</p>
                      <span className="text-primary-container text-[10px] font-black uppercase tracking-[0.2em]">{item.highlight}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Strong CTA Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/8 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Limited Slots Available</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-7xl font-headline font-black uppercase text-white tracking-tighter mb-6 leading-[0.9]">
              Get Your Car<br />
              <span className="text-primary-container">Detailed Today</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed mb-10">
              Experience the difference that professional-grade detailing makes. Book your session now and drive perfection.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer"
                className="group relative px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-primary-container rounded-full red-glow transition-all duration-500 group-hover:bg-red-600"></div>
                <span className="relative text-white z-10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>calendar_month</span>
                  Book Now
                </span>
              </a>
              <a href="tel:09408424541" className="group relative px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black w-full sm:w-auto text-center text-white">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call: 094084 24541
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Connect & Locate Section */}
      <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase text-white tracking-tighter mb-4">
              Connect & <span className="text-transparent bg-clip-text text-gradient-subtle">Locate</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Visit our state-of-the-art studio in Vadodara or reach out directly for priority booking and consultation.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Map Container - 8 cols */}
            <div className="md:col-span-8 glass-card rounded-3xl overflow-hidden border border-white/10 h-[400px] md:h-[540px] relative group p-2">
              <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-10"></div>
              <iframe 
                src="https://maps.google.com/maps?q=ASTONISH%20BRAND%20STORE-%20GK%20AUTO%20HERB%2C%20Tilak%20Nagar%20society%2C%20shree%20kunj%20greens%2C%204%2C%20Besides%2C%20opp.%20AP%20Mart%20super%20store%2C%20New%20Alkapuri%2C%20Laxmipura%2C%20Vadodara%2C%20Gujarat%20390021&t=m&z=15&output=embed&iwloc=near" 
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
              <a
                href="https://www.google.com/maps/dir//ASTONISH+BRAND+STORE-+GK+AUTO+HERB,+Tilak+Nagar+society,+shree+kunj+greens,+4,+Besides,+opp.+AP+Mart+super+store,+New+Alkapuri,+Laxmipura,+Vadodara,+Gujarat+390021"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-primary-container text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:shadow-[0_0_30px_rgba(225,6,0,0.5)] hover:scale-105 transition-all duration-500 z-10"
              >
                <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>directions</span>
                Get Directions
              </a>
            </div>

            {/* Buttons - 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 min-h-[400px] md:h-[540px]">
              {/* WhatsApp Button */}
              <a href="https://wa.me/919408424541?text=Hi%2C%20I%27m%20interested%20in%20your%20car%20detailing%20services" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card rounded-3xl p-8 border border-white/10 hover:border-[#25D366]/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between text-center items-center">
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
              <a href="https://www.instagram.com/autoherb_vadodara" target="_blank" rel="noopener noreferrer" className="flex-1 glass-card rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between text-center items-center">
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

      {/* Sticky Book Now Bar (Mobile) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showStickyBar ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-[90] md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center gap-3"
      >
        <a 
          href="tel:09408424541"
          className="flex-1 py-3.5 rounded-full bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <a 
          href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer"
          className="flex-1 py-3.5 rounded-full bg-primary-container text-white font-black text-xs uppercase tracking-widest text-center red-glow"
        >
          Book Now
        </a>
      </motion.div>
    </>
  );
}
