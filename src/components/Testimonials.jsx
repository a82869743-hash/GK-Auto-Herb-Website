import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Varun Dhage",
    rating: 5,
    text: "Absolutely incredible experience with G.K Auto Herb. My S-Cross detailing was done perfectly and the finish exceeded expectations.",
    vehicle: "Maruti S-Cross"
  },
  {
    name: "Pradeep Sampath",
    rating: 5,
    text: "One of the best car spas in Vadodara. Ceramic coating on my Seltos made it look brand new. Excellent finish and reasonable pricing.",
    vehicle: "Kia Seltos"
  },
  {
    name: "Anuj Singh",
    rating: 5,
    text: "Great experience. Very professional staff, well-maintained place, and strong attention to detail. Highly satisfied with the service.",
    vehicle: "Premium Detailing"
  },
  {
    name: "Chirag Makwana",
    rating: 5,
    text: "Got ceramic coating on my XUV700. The gloss and finish are outstanding. The team was professional and explained everything clearly.",
    vehicle: "Mahindra XUV700"
  },
  {
    name: "Dev Patel",
    rating: 5,
    text: "Outstanding work on my Verna. Polishing and detailing were done perfectly. Special thanks to Gaurav bhai for the service.",
    vehicle: "Hyundai Verna"
  },
  {
    name: "Nexus Engineers",
    rating: 5,
    text: "Top-notch detailing and car wash services. I am a loyal customer because of consistent quality and workmanship.",
    vehicle: "Regular Client"
  },
  {
    name: "Dhaval Patel",
    rating: 4,
    text: "Good headlight polishing and detailing service. Reasonable pricing and good overall quality.",
    vehicle: "Headlight Restoration"
  },
  {
    name: "Manjeet Gangwar",
    rating: 5,
    text: "Nano ceramic coating on my XUV700 was done perfectly. Great work and very professional service.",
    vehicle: "Mahindra XUV700"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.testimonial-card')?.offsetWidth || 400;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -cardWidth - 32 : cardWidth + 32, behavior: 'smooth' });
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  };

  return (
    <section className="py-20 md:py-32 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-container/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary-container"></span>
              <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">Client Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white uppercase tracking-tighter">
              What Our <span className="text-primary-container">Clients</span> Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest mr-2 hidden md:block">Scroll</span>
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollLeft ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-white/5 text-zinc-700 cursor-not-allowed'}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollRight ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-white/5 text-zinc-700 cursor-not-allowed'}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Right Fade */}
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 -mb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="testimonial-card snap-start flex-shrink-0 w-[320px] md:w-[400px] glass-card p-8 md:p-10 rounded-[2rem] border border-white/5 relative group hover:border-primary-container/20 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(225,6,0,0.1)] flex flex-col justify-between"
              >
                {/* Quote Mark */}
                <div className="absolute top-0 right-8 -mt-4 text-5xl text-primary-container/15 font-serif leading-none pointer-events-none select-none">"</div>

                <div className="mb-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${j < t.rating ? 'text-primary-container fill-primary-container' : 'text-zinc-700'}`}
                      />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-zinc-300 font-light text-[15px] leading-relaxed">"{t.text}"</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-container/20 to-zinc-800 flex items-center justify-center border border-white/10 flex-shrink-0">
                    <span className="text-white font-headline font-bold text-xs">{getInitials(t.name)}</span>
                  </div>
                  <div>
                    <p className="text-white font-headline font-bold uppercase tracking-wide text-sm">{t.name}</p>
                    <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase">{t.vehicle}</p>
                  </div>
                </div>

                {/* Google Review Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-40 group-hover:opacity-70 transition-opacity">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 border-t border-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary-container fill-primary-container" />
              ))}
            </div>
            <span className="text-white font-headline font-black text-lg">4.9</span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Google Rating</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-headline font-black text-lg">100+</span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Happy Clients</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white font-headline font-black text-lg">100%</span>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Would Recommend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
