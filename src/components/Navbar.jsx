import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
        scrolled 
          ? 'glass-panel border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            alt="GK AUTO HERB Logo"
            className="h-16 md:h-24 w-auto drop-shadow-lg opacity-90 filter contrast-125"
            src="/assets/logo_transparent.png"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-xs font-bold uppercase tracking-widest transition-all duration-500 font-body py-2 hover:text-white ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-container rounded-full"
                      style={{ boxShadow: '0 0 12px 2px rgba(225, 6, 0, 0.4)' }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-zinc-600 transition-all duration-500 -translate-x-1/2 group-hover:w-full"></div>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="https://gkautobook.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex group relative bg-transparent border border-white/20 text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-all duration-600 hover:border-primary-container hover:shadow-[0_0_25px_-5px_rgba(225,6,0,0.3)]"
          >
            <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            <span className="relative z-10 transition-all duration-300">Book Now</span>
          </a>
          
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-300 hover:text-white transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.span 
              className="material-symbols-outlined text-3xl"
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {mobileOpen ? 'close' : 'menu'}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-black/98 backdrop-blur-3xl border-t border-white/5"
          >
            <div className="px-6 py-10 flex flex-col space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-primary-container/10 border-l-2 border-primary-container' 
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <a
                  href="https://gkautobook.cloud/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary-container text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(225,6,0,0.3)] mt-4 block hover:shadow-[0_0_35px_rgba(225,6,0,0.5)] transition-shadow duration-500"
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
