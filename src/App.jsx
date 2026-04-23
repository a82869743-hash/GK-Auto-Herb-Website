import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BrandMarquee from './components/BrandMarquee'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import PackagesPage from './pages/PackagesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import CertificationsPage from './pages/CertificationsPage'

const pageTransition = {
  initial: { opacity: 0, y: 8, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, filter: 'blur(4px)', transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        {...pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.6, smoothWheel: true }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-surface text-on-surface font-body min-h-screen selection:bg-primary/30 selection:text-white noise-overlay">
          <Navbar />
          <AnimatedRoutes />
          <BrandMarquee />
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
