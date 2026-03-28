import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Cleaning', 'Interior', 'Exterior', 'Accessories']

const products = [
  {
    name: 'Car Shampoo',
    desc: 'Premium pH-balanced formula for a scratch-free wash.',
    price: '₹499',
    category: 'Cleaning',
    tag: 'Best Seller',
    img: '/assets/products/car_shampoo.png',
  },
  {
    name: 'Microfiber Cloth Set',
    desc: 'Ultra-soft, lint-free cloths for flawless finishing.',
    price: '₹349',
    category: 'Accessories',
    tag: null,
    img: '/assets/products/microfiber_cloth.png',
  },
  {
    name: 'Tire Dressing Gel',
    desc: 'Long-lasting deep-black shine for your tires.',
    price: '₹399',
    category: 'Exterior',
    tag: null,
    img: '/assets/products/tire_dressing.png',
  },
  {
    name: 'Interior Cleaner Spray',
    desc: 'Gentle yet powerful formula for dashboards & seats.',
    price: '₹449',
    category: 'Interior',
    tag: null,
    img: '/assets/products/interior_cleaner.png',
  },
  {
    name: 'Glass Cleaner',
    desc: 'Streak-free clarity for windshields & windows.',
    price: '₹299',
    category: 'Cleaning',
    tag: null,
    img: '/assets/products/glass_cleaner.png',
  },
  {
    name: 'Car Perfume',
    desc: 'Luxury long-lasting fragrance for your cabin.',
    price: '₹599',
    category: 'Interior',
    tag: 'Premium',
    img: '/assets/products/car_perfume.png',
  },
  {
    name: 'Wax Polish',
    desc: 'Deep-gloss carnauba wax for showroom shine.',
    price: '₹699',
    category: 'Exterior',
    tag: null,
    img: 'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ceramic Coating Kit',
    desc: '9H hardness consumer-grade ceramic protection.',
    price: '₹2,499',
    category: 'Exterior',
    tag: 'Premium',
    img: '/assets/products/ceramic_coating_kit.png',
  },
  {
    name: 'Pressure Washer',
    desc: 'Compact 1600 PSI washer for effortless cleaning.',
    price: '₹8,999',
    category: 'Accessories',
    tag: null,
    img: '/assets/products/pressure_washer.png',
  },
  {
    name: 'Foam Cannon',
    desc: 'Thick snow-foam coverage for a contact-free pre-wash.',
    price: '₹3,499',
    category: 'Accessories',
    tag: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Car Vacuum Cleaner',
    desc: 'Powerful portable vacuum for deep interior cleaning.',
    price: '₹4,999',
    category: 'Accessories',
    tag: null,
    img: '/assets/products/car_vacuum_cleaner.png',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } },
}

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter)

  const scrollToProducts = () => {
    document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric Background Glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-container/10 blur-[150px] rounded-full -z-10 pointer-events-none -mt-48 -mr-48"></div>
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -z-10 pointer-events-none -ml-48"></div>
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary-container/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <header className="relative px-6 md:px-10 pt-32 pb-20 max-w-screen-2xl mx-auto z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
          <motion.div variants={fadeInUp} className="md:col-span-8">
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-container"></span>
              Curated Collection
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white animate-fade-in">
              Premium <br />
              <span className="text-transparent bg-clip-text text-gradient-subtle">Car Care</span>{' '}
              <span className="text-primary-container">Products</span>
            </h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:col-span-4 pb-2">
            <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-primary-container/30 pl-6 mb-8">
              Only the best for your car. Hand-picked professional-grade products trusted by detailing
              experts worldwide.
            </p>
            <button
              onClick={scrollToProducts}
              className="group relative bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:border-primary-container"
            >
              <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                  arrow_downward
                </span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* ═══════════════════ CATEGORY FILTERS ═══════════════════ */}
      <section className="px-6 md:px-10 pb-12 max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-400 border ${
                activeFilter === cat
                  ? 'bg-primary-container text-white border-primary-container shadow-[0_0_20px_rgba(225,6,0,0.3)]'
                  : 'glass-card text-zinc-400 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════ PRODUCTS GRID ═══════════════════ */}
      <section id="products-grid" className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                variants={cardVariant}
                layout
                className="group relative glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 product-card-glow flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    src={product.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>

                  {/* Tag Badge */}
                  {product.tag && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                        product.tag === 'Best Seller'
                          ? 'bg-primary-container text-white'
                          : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
                      }`}
                    >
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">{product.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xl font-headline font-black text-white">{product.price}</span>
                    <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative bg-zinc-900 overflow-hidden rounded-3xl p-12 md:p-20 flex flex-col items-center text-center border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-black pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary-container"></span>
              Expert Guidance
              <span className="w-8 h-px bg-primary-container"></span>
            </span>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Need <span className="text-primary-container">Expert</span>
              <br />
              Advice?
            </h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              Not sure which products are right for your vehicle? Our detailing specialists will
              recommend the perfect care routine tailored to your car's paint type, finish, and
              driving conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
