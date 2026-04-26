import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const services = [
  { icon: 'shield', title: 'Ceramic Coating & 9H Protection', desc: 'Multi-layered nano-ceramic shields delivering extreme gloss, hydrophobic protection, and UV resistance for years.' },
  { icon: 'security', title: 'Paint Protection Film (PPF)', desc: 'Self-healing thermoplastic urethane films providing invisible armor against chips, scratches, and environmental damage.' },
  { icon: 'local_car_wash', title: 'Full Car Spa & Interior Treatments', desc: 'Deep steam cleaning, leather conditioning, and complete interior rejuvenation for a showroom-fresh cabin.' },
  { icon: 'build', title: 'Denting & Painting', desc: 'Precision body repair and factory-grade paint finish restoration using advanced color-matching technology.' },
  { icon: 'auto_fix_high', title: 'Surface Treatment & Parts Restoration', desc: 'Headlight restoration, chrome polishing, trim repair, and comprehensive surface reconditioning.' },
  { icon: 'dashboard_customize', title: 'Interior Customization & Exterior Mods', desc: 'Ambient lighting, custom wraps, body kits, and bespoke modifications tailored to your vision.' },
  { icon: 'star', title: 'Car Decor & Accessories', desc: 'Premium accessories, floor mats, seat covers, and aesthetic enhancements curated for every vehicle.' },
  { icon: 'engineering', title: 'Routine Maintenance Services', desc: 'Scheduled servicing, fluid checks, filter replacements, and proactive care to keep your vehicle performing at its peak.' },
];

const stats = [
  { value: '2017', label: 'Established', suffix: '' },
  { value: '7', label: 'Years of Excellence', suffix: '+' },
  { value: '5000', label: 'Vehicles Perfected', suffix: '+' },
  { value: '100', label: 'Client Satisfaction', suffix: '%' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="bg-black min-h-screen overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Cinematic Full-Screen Brand Introduction
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 z-10"></div>
          <img
            className="w-full h-full object-cover scale-110 opacity-30"
            alt="GK Auto Herb premium detailing studio"
            src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2000&auto=format&fit=crop"
          />
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/5 blur-[100px] md:blur-[200px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-container/3 blur-[80px] md:blur-[150px] rounded-full pointer-events-none z-0"></div>

        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-10 pt-32 pb-20 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — Text Content */}
            <div className="lg:col-span-7">
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-primary-container"></span>
                <span className="text-primary-container font-headline font-bold tracking-[0.4em] uppercase text-[10px]">Since 2017 • Vadodara</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.88] text-white mb-8">
                GK Auto<br />
                <span className="text-transparent bg-clip-text text-gradient-subtle">Herb.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-6 border-l-2 border-primary-container/40 pl-6">
                A premium auto detailing studio delivering world-class protection and finish for your vehicle.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base md:text-lg text-zinc-500 max-w-xl font-light leading-relaxed mb-12">
                Founded by <span className="text-white font-medium">Gaurav Kumar</span>, we specialize in advanced solutions like 9H ceramic coating and paint protection films. Driven by precision, powered by expertise — we redefine automotive care.
              </motion.p>

              {/* Stats Row */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 md:gap-14">
                {stats.map((stat, i) => (
                  <div key={i} className="relative">
                    <div className="text-3xl md:text-4xl font-headline font-black text-white mb-1">
                      {stat.value}<span className="text-primary-container">{stat.suffix}</span>
                    </div>
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">{stat.label}</div>
                    {i < stats.length - 1 && <div className="hidden md:block absolute -right-7 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10"></div>}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Logo / Visual */}
            <motion.div variants={scaleIn} className="lg:col-span-5 hidden lg:flex justify-center items-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border border-white/[0.03] animate-[spin_25s_linear_infinite_reverse]"></div>
                {/* Center Logo */}
                <div className="absolute inset-10 rounded-full overflow-hidden border border-white/10 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center">
                  <img src="/assets/logo_transparent.png" alt="GK Auto Herb Logo" className="w-3/4 h-3/4 object-contain drop-shadow-lg" />
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary-container/60 to-transparent animate-pulse"></div>
          </motion.div>
        </motion.div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          FOUNDER SECTION — Gaurav Kumar Spotlight
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative z-10 border-t border-white/5 overflow-hidden" style={{ background: 'linear-gradient(180deg, #000 0%, #080808 50%, #000 100%)' }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary-container/4 blur-[100px] md:blur-[180px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

            {/* Founder Image */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInLeft}
              className="lg:col-span-5"
            >
              <div className="relative group">
                {/* Image Frame */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 group-hover:border-primary-container/30 transition-all duration-700">
                  <img
                    src="/assets/founder_gaurav_kumar_branded.png"
                    alt="Gaurav Kumar — Founder of GK Auto Herb"
                    className="w-full h-[500px] md:h-[650px] object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  {/* Name Badge */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-px bg-primary-container"></div>
                      <span className="text-primary-container font-bold text-[10px] tracking-[0.3em] uppercase">Founder & Visionary</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tight">Gaurav Kumar</h3>
                  </div>
                </div>

                {/* Decorative Corner Accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary-container/40 rounded-tl-xl pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary-container/40 rounded-br-xl pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Founder Story & Quote */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-primary-container"></span>
                <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">The Man Behind the Brand</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
                A Vision for<br /><span className="text-zinc-600">Perfection.</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary-container mb-10"></motion.div>

              {/* Quote Block */}
              <motion.blockquote variants={fadeInUp} className="relative mb-10">
                <div className="absolute -top-4 -left-2 text-primary-container/20 text-8xl font-serif leading-none pointer-events-none select-none">"</div>
                <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed italic pl-8 border-l-[3px] border-primary-container/50">
                  At GK Auto Herb, we don't just detail cars — we elevate them. Every vehicle we work on reflects our commitment to perfection, protection, and premium craftsmanship.
                </p>
                <footer className="mt-6 pl-8 flex items-center gap-4">
                  <div className="w-10 h-px bg-zinc-700"></div>
                  <div>
                    <cite className="text-white font-headline font-bold text-sm not-italic tracking-wide uppercase">Gaurav Kumar</cite>
                    <p className="text-primary-container text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Founder, GK Auto Herb</p>
                  </div>
                </footer>
              </motion.blockquote>

              {/* Story Paragraphs */}
              <motion.div variants={fadeInUp} className="space-y-5 text-zinc-400 text-base md:text-lg font-light leading-relaxed">
                <p>
                  Built with a vision to deliver world-class car care solutions, GK Auto Herb was established in <span className="text-white font-medium">2017</span> on Gotri Road, Vadodara. What started as a passion project has grown into one of the most trusted names in the region — known for its unmatched expertise, precision, and unwavering commitment to quality.
                </p>
                <p>
                  Our approach combines cutting-edge techniques with high-grade products to ensure long-lasting protection and a flawless finish for every vehicle. Recognized for excellence, GK Auto Herb holds a strong reputation among customers, reflected in its <span className="text-white font-medium">high ratings and consistent positive reviews</span>.
                </p>
                <p>
                  Clients appreciate not only the quality of work but also the <span className="text-white font-medium">transparency and detailed guidance</span> provided throughout the service process.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          OUR EXPERTISE — Premium Services Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-zinc-950 relative z-10 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-primary-container/3 blur-[100px] md:blur-[200px] rounded-full pointer-events-none"></div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary-container"></span>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.4em] uppercase text-[10px]">What We Offer</span>
              <span className="w-10 h-px bg-primary-container"></span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6">
              Complete Car Care<br /><span className="text-zinc-600">Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
              As part of the Auto Herb brand, we offer a complete range of premium car care solutions — from protective coatings to aesthetic enhancements.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative glass-panel rounded-2xl p-7 border border-white/5 hover:border-primary-container/30 transition-all duration-700 hover:bg-zinc-900/40 subtle-glow-hover overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-container/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center mb-5 group-hover:border-primary-container/30 group-hover:bg-primary-container/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-white font-headline font-bold text-base uppercase tracking-tight mb-3 leading-tight">{svc.title}</h3>
                <p className="relative z-10 text-zinc-500 text-sm font-light leading-relaxed">{svc.desc}</p>

                {/* Number Watermark */}
                <span className="absolute -bottom-4 -right-2 text-zinc-900/60 font-headline font-black text-7xl pointer-events-none select-none group-hover:text-zinc-800/40 transition-colors duration-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-primary-container hover:bg-primary-container/90 text-white font-headline font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-container/20"
            >
              Explore All Services
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — Value Propositions
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-black relative z-10 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Sticky */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-primary-container"></span>
                <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">Why GK Auto Herb</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                Setting<br />Benchmarks<br /><span className="text-zinc-600">Since 2017.</span>
              </h2>
              <div className="w-16 h-1 bg-primary-container mb-8"></div>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Driven by passion and precision, GK Auto Herb continues to set benchmarks in automotive detailing — delivering not just services, but an elevated car care experience.
              </p>
            </motion.div>

            {/* Right — Value Cards */}
            <div className="lg:col-start-7 lg:col-span-6 space-y-8">
              {[
                {
                  num: '01',
                  title: 'World-Class Expertise',
                  desc: 'Specializing in advanced automotive protection including 9H Ceramic Coating and PPF application with techniques perfected over 7+ years of dedicated practice.',
                  icon: 'workspace_premium'
                },
                {
                  num: '02',
                  title: 'Premium Products',
                  desc: 'We use only high-grade, industry-leading products and cutting-edge techniques to ensure maximum protection and a flawless finish on every vehicle.',
                  icon: 'verified'
                },
                {
                  num: '03',
                  title: 'Transparent Process',
                  desc: 'From initial assessment to final delivery, we provide detailed guidance and complete transparency — so you know exactly what\'s happening with your vehicle.',
                  icon: 'visibility'
                },
                {
                  num: '04',
                  title: 'Trusted Reputation',
                  desc: 'Recognized for excellence with high ratings and consistently positive reviews. One of the most trusted auto detailing brands in the Vadodara region.',
                  icon: 'thumb_up'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInRight}
                  className="group relative pl-8 py-6 border-l border-white/10 hover:border-primary-container/50 transition-all duration-500 hover:bg-zinc-950/50 rounded-r-2xl pr-6"
                >
                  <span className="absolute -left-4 -top-2 text-zinc-900 group-hover:text-zinc-800 font-headline font-black text-7xl transition-colors duration-700 pointer-events-none -z-10 select-none">{item.num}</span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    <h3 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          LOCATION & HOURS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-zinc-950 relative z-10 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-px bg-primary-container"></span>
                <span className="text-zinc-500 font-headline font-bold tracking-[0.4em] uppercase text-[10px]">Visit Us</span>
                <span className="w-10 h-px bg-primary-container"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-4">
                Our <span className="text-zinc-600">Studio</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Address */}
              <div className="glass-panel rounded-2xl p-8 border border-white/5 text-center hover:border-primary-container/20 transition-all duration-500 group">
                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary-container/30 group-hover:bg-primary-container/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <h3 className="text-white font-headline font-bold uppercase tracking-wider text-sm mb-4">Location</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  ASTONISH BRAND STORE — GK AUTO HERB<br />
                  Tilak Nagar society, shree kunj greens, 4<br />
                  Besides, opp. AP Mart super store<br />
                  New Alkapuri, Laxmipura<br />
                  Vadodara, Gujarat 390021
                </p>
              </div>

              {/* Hours */}
              <div className="glass-panel rounded-2xl p-8 border border-white/5 text-center hover:border-primary-container/20 transition-all duration-500 group">
                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary-container/30 group-hover:bg-primary-container/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <h3 className="text-white font-headline font-bold uppercase tracking-wider text-sm mb-4">Working Hours</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Mon — Sun: <span className="text-white font-medium">9 AM – 8 PM</span>
                </p>
              </div>

              {/* Contact */}
              <div className="glass-panel rounded-2xl p-8 border border-white/5 text-center hover:border-primary-container/20 transition-all duration-500 group">
                <div className="w-16 h-16 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary-container/30 group-hover:bg-primary-container/10 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                </div>
                <h3 className="text-white font-headline font-bold uppercase tracking-wider text-sm mb-4">Get in Touch</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                  Ready to transform your vehicle?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary-container/10 border border-primary-container/30 text-primary-container font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary-container hover:text-white transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  Book Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-black to-primary-container/5 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/8 blur-[100px] md:blur-[200px] rounded-full pointer-events-none"></div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            Ready for an<br />Elevated Car Care<br /><span className="text-transparent bg-clip-text text-gradient-red-muted">Experience?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-zinc-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-10">
            Visit our studio in New Alkapuri, Vadodara, and discover why GK Auto Herb is the region's most trusted name in automotive detailing.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary-container hover:bg-white text-white hover:text-black font-headline font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Contact Us
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 border border-white/20 hover:border-white/60 text-white font-headline font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full transition-all duration-300"
            >
              Our Services
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
