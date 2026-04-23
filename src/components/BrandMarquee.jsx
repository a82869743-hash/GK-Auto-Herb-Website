import { motion } from 'framer-motion'

const brands = [
  { name: '3M', logo: '/assets/brands/logo_3m.png' },
  { name: 'Turtle Wax', logo: '/assets/brands/logo_turtle_wax.png' },
  { name: 'Vista Car Care', logo: '/assets/brands/logo_vista_car_care.png' },
  { name: 'Jopasu', logo: '/assets/brands/logo_jopasu.png' },
  { name: 'Auto Herb', logo: '/assets/brands/logo_auto_herb.png' },
  { name: 'Astonish', logo: '/assets/brands/logo_astonish.png' },
  { name: 'Garware', logo: '/assets/brands/logo_garware.png' },
]

export default function BrandMarquee() {
  // Quadruple for seamless infinite scroll
  const scrollBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <section className="relative py-16 md:py-20 bg-black border-t border-b border-white/5 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[100px] md:h-[200px] bg-primary-container/3 blur-[80px] md:blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 md:mb-14 relative z-10 px-6"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-10 h-px bg-primary-container"></span>
          <span className="text-zinc-500 font-headline font-bold tracking-[0.4em] uppercase text-[10px]">Trusted Partners</span>
          <span className="w-10 h-px bg-primary-container"></span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-headline font-black text-white uppercase tracking-tighter">
          Brands We <span className="text-transparent bg-clip-text text-gradient-subtle">Work With</span>
        </h2>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling row 1 */}
        <div className="flex animate-marquee mb-6">
          {scrollBrands.map((brand, i) => (
            <div
              key={`row1-${i}`}
              className="flex-shrink-0 mx-3 md:mx-5 group"
            >
              <div className="flex items-center gap-5 px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-white/[0.06] bg-zinc-950/60 backdrop-blur-sm hover:border-primary-container/30 hover:bg-zinc-900/50 transition-all duration-700 cursor-default">
                {/* Brand Logo */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-primary-container/20 group-hover:bg-white/[0.06] transition-all duration-500 flex-shrink-0 overflow-hidden p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                {/* Brand Name */}
                <h4 className="text-white font-headline font-black text-sm md:text-base uppercase tracking-wide whitespace-nowrap group-hover:text-primary-container transition-colors duration-500">
                  {brand.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling row 2 — reverse direction */}
        <div className="flex animate-marquee-reverse">
          {scrollBrands.map((brand, i) => (
            <div
              key={`row2-${i}`}
              className="flex-shrink-0 mx-3 md:mx-5 group"
            >
              <div className="flex items-center gap-5 px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-white/[0.06] bg-zinc-950/60 backdrop-blur-sm hover:border-primary-container/30 hover:bg-zinc-900/50 transition-all duration-700 cursor-default">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-primary-container/20 group-hover:bg-white/[0.06] transition-all duration-500 flex-shrink-0 overflow-hidden p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-white font-headline font-black text-sm md:text-base uppercase tracking-wide whitespace-nowrap group-hover:text-primary-container transition-colors duration-500">
                  {brand.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
