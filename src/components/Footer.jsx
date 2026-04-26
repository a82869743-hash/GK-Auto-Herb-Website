import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      {/* Atmospheric glow orbs */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -mt-24 md:-mt-48 -mr-24 md:-mr-48 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-white/[0.02] rounded-full blur-[60px] md:blur-[100px] pointer-events-none -mb-24 md:-mb-48 -ml-24 md:-ml-48 animate-float-delayed"></div>

      {/* Gradient divider line at top */}
      <div className="divider-gradient"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto relative z-10"
      >
        {/* Brand */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-4 mb-4 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              alt="GK AUTO HERB Logo"
              className="h-20 md:h-28 w-auto drop-shadow-lg opacity-100 filter contrast-125"
              src="/assets/logo_transparent.png"
            />
          </Link>
          <p className="text-zinc-500 text-sm tracking-wide leading-relaxed font-body mb-10">
            Defining the future of high-performance car protection through engineering and art.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://www.instagram.com/autoherb_vadodara", hoverBg: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
              { href: "https://wa.me/919408424541", hoverBg: "hover:bg-[#25D366]", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg> },
              { href: "tel:09408424541", hoverBg: "hover:bg-white hover:text-black", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`w-12 h-12 rounded-full glass-card border border-white/5 flex items-center justify-center text-zinc-500 ${social.hoverBg} hover:text-white hover:border-transparent transition-all duration-500 hover:shadow-lg`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={fadeInUp} className="col-span-1 md:ml-12">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Navigation
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <div className="flex flex-col space-y-4">
            {['Home', 'Services', 'Packages', 'Products', 'Gallery', 'Certifications', 'Contact'].map((item) => (
              <Link key={item} className="text-zinc-500 hover:text-white transition-all duration-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group hover:translate-x-1" to={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                <span className="w-0 h-px bg-primary-container transition-all duration-400 group-hover:w-4"></span>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeInUp} className="col-span-1">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Our Menu
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <div className="flex flex-col space-y-4">
            {['Paint Correction', 'Ceramic Coating', 'Interior Care', 'PPF Wrap'].map((item) => (
              <Link key={item} className="text-zinc-500 hover:text-white transition-all duration-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2 group hover:translate-x-1" to="/services">
                <span className="w-0 h-px bg-primary-container transition-all duration-400 group-hover:w-4"></span>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Address & Hours */}
        <motion.div variants={fadeInUp} className="col-span-1">
          <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 relative inline-block">
            Visit Us
            <span className="absolute -bottom-3 left-0 w-8 h-px bg-primary-container"></span>
          </h4>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4">
            ASTONISH BRAND STORE — GK AUTO HERB, Tilak Nagar society, shree kunj greens, 4, Besides, opp. AP Mart super store, New Alkapuri, Laxmipura, Vadodara, Gujarat 390021
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed mb-2">
            <span className="text-white font-bold">094084 24541</span>
          </p>
          <div className="text-zinc-500 text-xs leading-relaxed space-y-1">
            <p>Mon — Sun: <span className="text-zinc-300">9 AM – 8 PM</span></p>
          </div>
          <motion.a 
            href="https://maps.google.com/maps?q=ASTONISH%20BRAND%20STORE-%20GK%20AUTO%20HERB%2C%20Tilak%20Nagar%20society%2C%20shree%20kunj%20greens%2C%204%2C%20Besides%2C%20opp.%20AP%20Mart%20super%20store%2C%20New%20Alkapuri%2C%20Laxmipura%2C%20Vadodara%2C%20Gujarat%20390021" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-1 text-primary-container text-xs font-bold uppercase tracking-widest mt-4 hover:text-white transition-colors duration-400"
          >
            <span className="material-symbols-outlined text-sm">directions</span>
            Get Directions
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="divider-gradient"></div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-center md:text-left">
        <p className="text-zinc-600 text-xs font-bold font-headline tracking-[0.2em] uppercase">© 2026 GK AUTO HERB. High-Performance Studio.</p>
        <div className="flex gap-6 text-xs text-zinc-600 font-bold uppercase tracking-widest">
          <Link to="#" className="hover:text-white transition-colors duration-400">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors duration-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
