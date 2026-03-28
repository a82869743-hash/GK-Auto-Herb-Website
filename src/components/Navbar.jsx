import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/5"
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 w-full max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            alt="GK AUTO HERB Logo"
            className="h-16 md:h-24 w-auto drop-shadow-lg opacity-90 transition-transform duration-500 group-hover:scale-105 filter contrast-125"
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
                `relative text-xs font-bold uppercase tracking-widest transition-all duration-300 font-body py-2 hover:text-white ${isActive ? 'text-white' : 'text-zinc-400'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-container shadow-[0_0_10px_#e10600]"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 transition-all duration-300 group-hover:w-full"></div>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/contact"
            className="hidden md:flex group relative bg-transparent border border-white/20 text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:border-primary-container"
          >
            <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all">Book Session</span>
          </Link>
          
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-black/98 backdrop-blur-3xl border-t border-white/5"
      >
        <div className="px-6 py-10 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-bold uppercase tracking-widest ${isActive ? 'text-primary-container' : 'text-zinc-400'} hover:text-white transition-all`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-primary-container text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(225,6,0,0.3)] mt-4"
          >
            Book Session
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}
