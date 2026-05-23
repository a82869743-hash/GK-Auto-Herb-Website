import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, Shield, BadgeCheck, Star, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const certifications = [
  {
    image: '/assets/certifications/cert_garware_ppf.jpg',
    title: 'Garware PPF Training',
    issuer: 'Garware Hi-Tech Films',
    description: 'Certified for installation of Garware Paint Protection Film. Training completed at Garware Hi-Tech Films Training Center.',
    date: 'September 2024',
    recipient: 'Mr. Gaurav Kathuria',
    icon: Shield,
    badge: 'PPF Specialist'
  },
  {
    image: '/assets/certifications/cert_coade_detailing.jpg',
    title: 'Master Certification in Auto Detailing',
    issuer: 'The Coade',
    description: 'Successfully completed The Coade Master Certification in Auto Detailing & Entrepreneurship — covering professional detailing methods, procedures, marketing techniques, and management skills.',
    date: 'August 2022',
    recipient: 'Gaurav Kathuria',
    icon: Award,
    badge: 'Master Detailer'
  },
  {
    image: '/assets/certifications/cert_autoherb_franchise.jpg',
    title: 'Franchise Authorization',
    issuer: 'Auto Herb Car Detailing Services',
    description: 'Authorized franchise of AUTOHERB Pune for the Vadodara region. IAF & JAS-ANZ accredited.',
    date: 'May 2017',
    recipient: 'G.K Auto Herb',
    icon: BadgeCheck,
    badge: 'Authorized Franchise'
  },
  {
    image: '/assets/certifications/cert_iso_9001.jpg',
    title: 'ISO 9001:2008 Certification',
    issuer: 'DRS Management System Pvt. Ltd.',
    description: 'Quality Management System successfully assessed and conforms with ISO 9001:2008 standard for Auto Detailing Services and Trading of Automobile Accessories.',
    date: 'January 2016',
    recipient: 'Auto Herb',
    icon: Shield,
    badge: 'ISO Certified'
  },
  {
    image: '/assets/certifications/cert_kovalent_coating.jpg',
    title: 'Accredited Installer',
    issuer: 'Kovalent Ceramic Coatings',
    description: 'Part of Kovalent Coatings authorized network of applicators, demonstrating stringent quality standards. Approved applicator status for preparation and application of all Kovalent products.',
    date: 'October 2025',
    recipient: 'GK Auto Herb',
    icon: Star,
    badge: 'Accredited Applicator'
  }
];

export default function CertificationsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (image) => {
    setActiveImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/8 via-black to-black pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10 mb-8">
              <Award className="w-4 h-4 text-primary-container" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">Verified Excellence</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-black font-headline leading-[0.9] tracking-tighter uppercase mb-6 text-white">
              Our <span className="text-primary-container">Certifications</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-400 font-body max-w-2xl mx-auto leading-relaxed font-light">
              Every certification represents our commitment to excellence. Trained, tested, and trusted by the industry's leading brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Quick Row */}
      <section className="py-8 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {['ISO 9001 Certified', 'Garware PPF Trained', 'Kovalent Accredited', 'Master Detailer', 'Authorized Franchise'].map((badge, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-2 text-zinc-400">
                <BadgeCheck className="w-4 h-4 text-primary-container" />
                <span className="text-xs font-bold uppercase tracking-widest">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -ml-24 md:-ml-48 -mb-24 md:-mb-48"></div>
        
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, i) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative glass-card rounded-3xl border border-white/5 hover:border-primary-container/30 transition-all duration-700 overflow-hidden flex flex-col"
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-primary-container/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-sm">
                    {cert.badge}
                  </div>

                  {/* Image */}
                  <div 
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-zinc-950/80 flex items-center justify-center p-6 border-b border-white/5"
                    onClick={() => openLightbox(cert.image)}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none"></div>
                    
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-110 drop-shadow-2xl"
                      style={{
                        maskImage: 'radial-gradient(rectangle, black 60%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)',
                        filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                      }}
                      loading="lazy"
                    />
                    
                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-xl">
                        <span className="material-symbols-outlined text-white text-2xl">zoom_in</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
                        <IconComponent className="w-5 h-5 text-primary-container" />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{cert.issuer}</p>
                        <p className="text-zinc-600 text-[10px] tracking-wider">{cert.date}</p>
                      </div>
                    </div>

                    <h3 className="text-white font-headline font-black text-lg uppercase tracking-tight mb-3 group-hover:text-primary-container transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-4">
                      {cert.description}
                    </p>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                        Awarded to: <span className="text-white">{cert.recipient}</span>
                      </span>
                      <button 
                        onClick={() => openLightbox(cert.image)}
                        className="text-primary-container text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
                      >
                        View
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/3 to-transparent pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-6">
              Trust the <span className="text-primary-container">Experts</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed mb-10">
              Our certifications aren't just pieces of paper — they represent real training, real skill, and real trust from the world's leading automotive brands.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer"
                className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary-container rounded-full red-glow transition-all duration-500 group-hover:bg-red-600"></div>
                <span className="relative text-white z-10">Book Now →</span>
              </a>
              <a href="tel:09408424541" className="group relative px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black w-full sm:w-auto text-center text-white">
                <span className="relative z-10">Call Us Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={activeImage}
              alt="Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
