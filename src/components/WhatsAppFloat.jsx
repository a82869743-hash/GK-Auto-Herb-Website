import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showCallButton, setShowCallButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay initial appearance for premium entrance
    const showTimer = setTimeout(() => setIsVisible(true), 1500);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => { clearTimeout(showTimer); clearTimeout(tooltipTimer); clearTimeout(hideTooltipTimer); };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3"
        >
          {/* Call Button */}
          <AnimatePresence>
            {showCallButton && (
              <motion.a
                key="call-button"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href="tel:09408424541"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Phone className="w-6 h-6 text-black" />
              </motion.a>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, x: 20, scale: 0.9, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0)' }}
                exit={{ opacity: 0, x: 20, scale: 0.9, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-20 right-0 bg-white text-black px-4 py-2.5 rounded-xl text-xs font-bold shadow-[0_8px_30px_rgba(0,0,0,0.3)] whitespace-nowrap"
              >
                Chat with us! 💬
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <div className="relative">
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse"></div>
            <motion.a
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center whatsapp-float group"
              href="https://wa.me/919408424541?text=Hi%2C%20I%27m%20interested%20in%20your%20car%20detailing%20services"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowCallButton(true)}
              onMouseLeave={() => setTimeout(() => setShowCallButton(false), 3000)}
            >
              <svg className="w-9 h-9 fill-white group-hover:drop-shadow-lg transition-all duration-300" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
