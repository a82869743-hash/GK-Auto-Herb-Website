import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen overflow-hidden relative">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Hero Title */}
      <section className="relative pt-32 pb-16 px-6 md:px-10 max-w-screen-2xl mx-auto z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-primary-container"></span>
              <span className="text-zinc-500 font-headline font-bold uppercase tracking-[0.3em] text-xs">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.9] text-white animate-fade-in">
              Contact<br /><span className="text-transparent bg-clip-text text-gradient-subtle">The Atelier</span>
            </h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:text-right">
            <p className="text-zinc-400 font-light text-base md:text-xl max-w-sm ml-auto border-l-2 md:border-l-0 md:border-r-[3px] border-primary-container/30 pl-4 md:pl-0 md:pr-6">
              Precision-engineered support for your high-performance vehicle protection needs.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-10 py-16 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
        
        {/* Contact Info Sidebar */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="lg:col-span-4 space-y-6"
        >
          <motion.div variants={fadeInUp} className="glass-panel p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="font-headline font-bold uppercase tracking-widest text-zinc-500 text-xs mb-8">HQ Location</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                <div>
                  <p className="text-white font-black uppercase tracking-wider text-sm mb-2">GK AUTO HERB FACILITY</p>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">122 Performance Drive, Suite 500<br />Automotive District, MI 48126</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5"></div>
              
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                <p className="text-white font-bold tracking-widest">+1 (800) GK-HERB-01</p>
              </div>
              
              <div className="h-px w-full bg-white/5"></div>
              
              <div className="flex items-center gap-4 group/email cursor-pointer">
                <span className="material-symbols-outlined text-primary-container text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
                <p className="text-white font-bold tracking-wider group-hover/email:text-primary-container transition-colors">concierge@gkautoherb.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-10 border border-white/5 rounded-3xl bg-zinc-900/50 backdrop-blur-md">
            <h3 className="font-headline font-bold uppercase tracking-widest text-zinc-500 mb-8 text-xs">Operating Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-zinc-400 font-light text-sm">Mon — Fri</span>
                <span className="text-white font-bold text-sm tracking-widest">08:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-zinc-400 font-light text-sm">Saturday</span>
                <span className="text-white font-bold text-sm tracking-widest">09:00 - 16:00</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-400 font-light text-sm">Sunday</span>
                <span className="text-zinc-500 font-bold text-sm tracking-widest uppercase text-[10px]">By Appointment Only</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:border-white transition-all group bg-zinc-900/50 backdrop-blur-md" href="#">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors">social_leaderboard</span>
            </a>
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:border-white transition-all group bg-zinc-900/50 backdrop-blur-md" href="#">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors" style={{fontVariationSettings: "'FILL' 1"}}>camera</span>
            </a>
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:border-white transition-all group bg-zinc-900/50 backdrop-blur-md" href="#">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors">brand_family</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="lg:col-span-8 glass-card rounded-[2rem] p-10 md:p-14 relative overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-container/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-3xl font-headline font-black uppercase text-white mb-10 relative z-10 tracking-tight">Send an Inquiry</h2>

          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3 group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-focus-within:text-primary-container transition-colors ml-2">Full Name</label>
              <input className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary-container transition-colors py-3 px-2 text-white outline-none font-medium placeholder:text-zinc-700 text-lg" placeholder="John Doe" type="text" />
            </div>
            
            <div className="space-y-3 group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-focus-within:text-primary-container transition-colors ml-2">Phone Number</label>
              <input className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary-container transition-colors py-3 px-2 text-white outline-none font-medium placeholder:text-zinc-700 text-lg" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
            
            <div className="md:col-span-2 space-y-3 group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-focus-within:text-primary-container transition-colors ml-2">Email Address</label>
              <input className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary-container transition-colors py-3 px-2 text-white outline-none font-medium placeholder:text-zinc-700 text-lg" placeholder="john@example.com" type="email" />
            </div>
            
            <div className="md:col-span-2 space-y-3 group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-focus-within:text-primary-container transition-colors ml-2">Precision Detailing Needs</label>
              <textarea className="w-full bg-transparent border-b-2 border-white/10 focus:border-primary-container transition-colors py-3 px-2 text-white outline-none font-light placeholder:text-zinc-700 text-lg resize-none min-h-[120px]" placeholder="Specific requirements, vehicle make/model, desired timeline..."></textarea>
            </div>
            
            <div className="md:col-span-2 pt-6">
              <button className="w-full bg-white text-black font-headline font-black uppercase tracking-[0.2em] text-sm py-5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-zinc-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden group" type="submit">
                <span className="relative z-10 transition-transform group-hover:-translate-x-2 duration-300">Submit Request</span>
                <span className="material-symbols-outlined text-primary-container font-black relative z-10 transition-transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-300 absolute right-[35%]">arrow_forward</span>
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[450px] rounded-[2rem] overflow-hidden relative border border-white/10 shadow-2xl glass-panel"
        >
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="w-full h-full bg-[#111] relative">
              <div className="absolute inset-0 opacity-20 grayscale invert pointer-events-none mix-blend-lighten" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKwn-mqVzzMu4_wUzfu4whEVsvcEPUQ8G6WxiVoJTOihneC7HwLI_GyX9aBLLWj_clvKoBnMXpNRA7mrCt118_BMBmbeJSoHQcgMPN2kFOOrrpg1-VtqrvRTuIjrcCKIghI9N_aS9fI6nl8IaGY80sPgEsyRE6J3FWqgpBMCfC8LgluxWsJCx50R4MKPN1OiycfHXutsHChFWROYPKb4hdGgZsQb-YNRK-l33ugwqLzAitgfYL9CF44XqsqQPQ1AXvyfxC49O8RA3C')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
              
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 animate-ping duration-1000 w-12 h-12 bg-primary-container rounded-full opacity-40"></div>
                  <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-black shadow-[0_0_30px_rgba(225,6,0,0.3)]">
                    <span className="material-symbols-outlined text-black text-xl" style={{fontVariationSettings: "'FILL' 1"}}>directions_car</span>
                  </div>
                </div>
                <div className="mt-6 bg-black/80 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10 text-center shadow-xl group-hover:bg-zinc-900 transition-colors">
                  <p className="text-white font-black text-xs font-headline uppercase tracking-widest drop-shadow-md">GK AUTO HERB HQ</p>
                  <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase mt-1">Get Directions</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Footer Extension */}
      <section className="bg-black py-24 overflow-hidden relative border-t border-white/5 z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvmlAOCtDOY5Z7SnpbUg0YbhGyNw0vS90GQmNfqtVsplMYv4Gtv885J5ACT8-uoPK3lyxrjBo6EmVpt95LEnm3ejHrPIhoOBdtT0LlQp3_stHrMDvgv13qNDtN9BwSGe1v-sJuWPKGT-2vS3jy9UXng1_Ww6Rgegtf313Bq3YGmebE0L_1Qh5yC5OgoGIDWHMJjZ0IguDtQi4taC6VjG21leRTp8Um9sDx8fypHOx2yvfwL681VzwjDeHAIbgNZVKQfaUStYpcZUXR')", backgroundSize: 'cover'}}></div>
        <div className="relative z-10 px-6 md:px-10 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">Elevate Your <br/><span className="text-zinc-600">Standard</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 font-light text-base md:text-lg max-w-xl">Join the elite circle of owners who trust GK AUTO HERB for museum-grade detailing and ceramic protection.</motion.p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <Link to="/contact" className="bg-primary-container text-white px-12 py-6 rounded-full font-headline font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_40px_rgba(225,6,0,0.3)] hover:bg-red-700 hover:scale-105 active:scale-95 transition-all whitespace-nowrap block">Book Consultation</Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
