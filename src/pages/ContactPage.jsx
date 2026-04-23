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
      <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0"></div>

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
                  <p className="text-white font-black uppercase tracking-wider text-sm mb-2">ASTONISH BRAND STORE — GK AUTO HERB</p>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">Tilak Nagar society, shree kunj greens, 4<br />Besides, opp. AP Mart super store<br />New Alkapuri, Laxmipura<br />Vadodara, Gujarat 390021</p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5"></div>
              
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
                <p className="text-white font-bold tracking-widest">094084 24541</p>
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
                <span className="text-zinc-400 font-light text-sm">Wed — Thu</span>
                <span className="text-white font-bold text-sm tracking-widest">09:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-zinc-400 font-light text-sm">Fri — Tue</span>
                <span className="text-white font-bold text-sm tracking-widest">09:00 - 20:00</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-transparent transition-all group bg-zinc-900/50 backdrop-blur-md" href="https://www.instagram.com/autoherb_vadodara" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-white transition-colors" style={{fontVariationSettings: "'FILL' 1"}}>camera</span>
            </a>
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#25D366] hover:border-transparent transition-all group bg-zinc-900/50 backdrop-blur-md" href="https://wa.me/919408424541" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-white transition-colors">chat</span>
            </a>
            <a className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:border-white transition-all group bg-zinc-900/50 backdrop-blur-md" href="tel:09408424541">
              <span className="material-symbols-outlined text-zinc-400 group-hover:text-black transition-colors">call</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Form Container (Replaced with Interactive Map) */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="lg:col-span-8 glass-card rounded-[2rem] p-2 md:p-4 relative overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-full min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-container/[0.03] rounded-full blur-[70px] md:blur-[100px] pointer-events-none"></div>
          
          <div className="bg-black/40 rounded-[1.5rem] overflow-hidden w-full h-full relative z-10 flex-grow">
            <iframe 
              src="https://maps.google.com/maps?q=ASTONISH%20BRAND%20STORE-%20GK%20AUTO%20HERB%2C%20Tilak%20Nagar%20society%2C%20shree%20kunj%20greens%2C%204%2C%20Besides%2C%20opp.%20AP%20Mart%20super%20store%2C%20New%20Alkapuri%2C%20Laxmipura%2C%20Vadodara%2C%20Gujarat%20390021&t=m&z=15&output=embed&iwloc=near"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Map Overlay Button */}
            <div className="absolute bottom-6 right-6 z-20">
              <a href="https://maps.google.com/maps?q=ASTONISH%20BRAND%20STORE-%20GK%20AUTO%20HERB%2C%20Tilak%20Nagar%20society%2C%20shree%20kunj%20greens%2C%204%2C%20Besides%2C%20opp.%20AP%20Mart%20super%20store%2C%20New%20Alkapuri%2C%20Laxmipura%2C%20Vadodara%2C%20Gujarat%20390021" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white px-6 py-3 rounded-full font-headline font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-white" style={{fontVariationSettings: "'FILL' 1"}}>directions</span>
                Get Directions
              </a>
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
            <a href="tel:09408424541" className="bg-primary-container text-white px-12 py-6 rounded-full font-headline font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_40px_rgba(225,6,0,0.3)] hover:bg-red-700 hover:scale-105 active:scale-95 transition-all whitespace-nowrap block">Book Consultation</a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
