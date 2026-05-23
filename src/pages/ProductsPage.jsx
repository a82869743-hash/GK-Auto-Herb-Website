import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

// ═══════════════════════════════════════════════════
// Product Data — organized by category with detailed info
// ═══════════════════════════════════════════════════

const products = [
  // ── Seat Covers (Core) ──
  {
    name: 'Custom Fit Seat Covers',
    desc: 'Precision-tailored covers designed to fit your exact car model for a factory-fitted look and feel.',
    category: 'Seat Covers',
    icon: 'airline_seat_recline_extra',
    tag: 'Best Seller',
    img: '/assets/products/custom_fit_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['Exact model-specific fit', 'Airbag-compatible side stitching', 'Multiple color & material options', 'Rear seat split compatibility'],
      materials: 'Premium PU Leather / Nappa Leather / Art Leather',
      warranty: '1 Year',
      fitment: 'Professional installation in 2–3 hours',
      care: 'Wipe clean with damp cloth. Avoid harsh chemicals.',
    },
  },
  {
    name: 'Leather Seat Covers',
    desc: 'Genuine leather covers with premium stitching for a luxurious, OEM-grade cabin upgrade.',
    category: 'Seat Covers',
    icon: 'weekend',
    tag: 'Premium',
    img: '/assets/products/leather_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['100% genuine leather', 'Hand-finished double stitching', 'Breathable perforated panels', 'UV & scratch-resistant surface'],
      materials: 'Genuine Cowhide Leather / Nappa Grain',
      warranty: '2 Years',
      fitment: 'Custom-measured and fitted at the studio',
      care: 'Condition with leather cream every 3 months. Avoid direct sunlight exposure.',
    },
  },
  {
    name: 'PU Leather Seat Covers',
    desc: 'High-quality polyurethane leather — durable, easy to clean, and available in multiple colors.',
    category: 'Seat Covers',
    icon: 'chair',
    tag: null,
    img: '/assets/products/pu_leather_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['Water-resistant surface', 'Easy to clean & maintain', '15+ color options', 'Soft-touch feel with premium padding'],
      materials: 'High-Grade PU Leather with foam backing',
      warranty: '1 Year',
      fitment: 'Universal & custom fit options available',
      care: 'Wipe with wet cloth. Safe for daily use and pet owners.',
    },
  },
  {
    name: 'Diamond Quilted Seat Covers',
    desc: 'Elegant diamond-stitch pattern with premium padding for a luxurious, sporty interior aesthetic.',
    category: 'Seat Covers',
    icon: 'diamond',
    tag: 'Trending',
    img: '/assets/products/diamond_quilted_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['Precision diamond quilting pattern', 'Extra-thick foam padding', 'Sporty Bentley-inspired design', 'Available in single & dual-tone'],
      materials: 'Premium PU Leather with high-density foam quilting',
      warranty: '1 Year',
      fitment: 'Model-specific custom fit',
      care: 'Clean with mild soap solution. Avoid steam cleaning.',
    },
  },
  {
    name: 'Dual Tone Seat Covers',
    desc: 'Two-tone color combinations that add personality and contrast to your cabin design.',
    category: 'Seat Covers',
    icon: 'palette',
    tag: null,
    img: '/assets/products/dual_tone_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['Custom two-color combinations', 'Matching headrest & armrest options', 'Piping and contrast stitching', '50+ color pairing options'],
      materials: 'PU Leather / Art Leather with contrast panels',
      warranty: '1 Year',
      fitment: 'Tailored to your car model and color preference',
      care: 'Regular wipe-down recommended. Avoid bleach-based cleaners.',
    },
  },
  {
    name: 'Bucket Fit Seat Covers',
    desc: 'Contoured bucket-style covers that hug every curve of your seat for maximum support and style.',
    category: 'Seat Covers',
    icon: 'event_seat',
    tag: null,
    img: '/assets/products/bucket_fit_seat_cover.jpg',
    hasImage: true,
    details: {
      features: ['3D contour engineering', 'Full-wrap side bolster coverage', 'Snug, stretch-fit design', 'Enhanced lumbar support padding'],
      materials: 'Premium PU Leather with memory foam inserts',
      warranty: '1 Year',
      fitment: 'Bucket-specific measurement for each seat',
      care: 'Wipe with damp microfiber cloth.',
    },
  },

  // ── Interior Customization (Premium) ──
  {
    name: 'Dashboard Wrapping',
    desc: 'Premium vinyl or leather wrapping for your dashboard — carbon fiber, wood grain, or matte finishes.',
    category: 'Interior Customization',
    icon: 'dashboard_customize',
    tag: 'Premium',
    img: '/assets/products/dashboard_wrapping.jpg',
    hasImage: true,
    details: {
      features: ['Carbon fiber, wood grain & matte options', 'Heat-resistant material', 'Bubble-free application', 'Revives old & cracked dashboards'],
      materials: '3M / Avery premium vinyl wraps or genuine leather',
      warranty: '1 Year on material',
      fitment: 'Complete dashboard removal and wrap — 4 to 6 hours',
      care: 'Clean with vinyl cleaner. Apply UV protectant quarterly.',
    },
  },
  {
    name: 'Door Panel Upholstery',
    desc: 'Custom upholstery for door panels with matching color and material to elevate your interior.',
    category: 'Interior Customization',
    icon: 'door_sliding',
    tag: null,
    img: '/assets/products/door_panel_upholstery.jpg',
    hasImage: true,
    details: {
      features: ['Matching seat cover material & color', 'Diamond quilting/plain options', 'Full panel or accent wrapping', 'OEM-grade fitment'],
      materials: 'PU Leather / Nappa Leather with foam backing',
      warranty: '1 Year',
      fitment: 'Professional removal, wrap, and refit — 3 to 5 hours',
      care: 'Clean with leather-safe wipes. Avoid pulling or tugging.',
    },
  },
  {
    name: 'Steering Cover Stitching',
    desc: 'Hand-stitched leather steering covers for improved grip, comfort, and a bespoke driving feel.',
    category: 'Interior Customization',
    icon: 'sports_esports',
    tag: null,
    img: '/assets/products/steering_cover_stitching.jpg',
    hasImage: true,
    details: {
      features: ['Hand-stitched by skilled craftsmen', 'Improved grip & comfort', 'Custom thread color options', 'Does not add bulk to the wheel'],
      materials: 'Genuine Leather / Alcantara / Perforated Nappa',
      warranty: '6 Months',
      fitment: 'On-site stitching — completed in about 1 hour',
      care: 'Wipe with damp cloth. Apply leather conditioner monthly.',
    },
  },
  {
    name: 'Roof Lining Replacement',
    desc: 'Complete headliner replacement with premium fabric — fix sagging roofs and upgrade aesthetics.',
    category: 'Interior Customization',
    icon: 'roofing',
    tag: null,
    img: '/assets/products/roof_lining_replacement.jpg',
    hasImage: true,
    details: {
      features: ['Fixes sagging & peeling headliners', 'Suede, Alcantara & fabric options', 'Sound-dampening underlay', 'Sunroof-compatible installations'],
      materials: 'Premium Suede / Alcantara / OEM-grade fabric',
      warranty: '1 Year',
      fitment: 'Full roof liner removal & replacement — 5 to 8 hours',
      care: 'Vacuum gently. Avoid moisture and wet cleaning.',
    },
  },

  // ── Interior Accessories (High Demand) ──
  {
    name: '7D Floor Mats',
    desc: 'Multi-layered 7D floor mats with complete coverage, waterproof base, and premium carpet finish.',
    category: 'Interior Accessories',
    icon: 'grid_view',
    tag: 'Best Seller',
    img: '/assets/products/7d_floor_mats.jpg',
    hasImage: true,
    details: {
      features: ['7-layer construction', 'Complete floor + side coverage', 'Waterproof XPE base', 'Removable carpet top layer'],
      materials: 'XPE foam base + PU Leather + Carpet top',
      warranty: '1 Year',
      fitment: 'Laser-cut for each car model',
      care: 'Remove and wash carpet layer. Wipe base with cloth.',
    },
  },
  {
    name: 'Ambient Lighting Kits',
    desc: 'RGB ambient LED strips with app control — transform your cabin into a premium lounge experience.',
    category: 'Interior Accessories',
    icon: 'light_mode',
    tag: 'Trending',
    img: '/assets/products/ambient_lighting_kit.jpg',
    hasImage: true,
    details: {
      features: ['64-color RGB spectrum', 'App & remote control', 'Music-sync mode', 'Dashboard, door & footwell zones'],
      materials: 'Fiber optic strips / LED neon flex with wiring harness',
      warranty: '6 Months',
      fitment: 'Wire-tucked hidden installation — 3 to 4 hours',
      care: 'No maintenance required. Avoid water exposure on controllers.',
    },
  },
  {
    name: 'Car Curtains / Sunshades',
    desc: 'Magnetic car curtains and sun shades for privacy, UV protection, and cooler interiors.',
    category: 'Interior Accessories',
    icon: 'blinds',
    tag: null,
    img: '/assets/products/car_curtains_sunshades.jpg',
    hasImage: true,
    details: {
      features: ['Magnetic easy-attach system', 'UV-blocking fabric', 'Full privacy when parked', 'Does not obstruct window operation'],
      materials: 'Premium mesh fabric with magnetic rail system',
      warranty: '6 Months',
      fitment: 'Clip-on or magnetic — no drilling required',
      care: 'Hand wash or wipe with damp cloth. Air dry only.',
    },
  },
  {
    name: 'Neck Cushions',
    desc: 'Memory foam neck pillows with premium leather finish — ergonomic support for long drives.',
    category: 'Interior Accessories',
    icon: 'self_improvement',
    tag: null,
    img: '/assets/products/neck_cushions.jpg',
    hasImage: true,
    details: {
      features: ['Memory foam core', 'Premium leather exterior', 'Adjustable headrest strap', 'Ergonomic cervical support'],
      materials: 'Slow-rebound memory foam with PU leather cover',
      warranty: '6 Months',
      fitment: 'Universal — fits all headrest types',
      care: 'Remove cover and wash separately. Spot-clean foam.',
    },
  },

  // ── Protection Products (Upsell) ──
  {
    name: 'Seat Protectors',
    desc: 'Transparent or padded seat protectors to guard against spills, scratches, and child seat marks.',
    category: 'Protection Products',
    icon: 'shield',
    tag: null,
    img: '/assets/products/seat_protectors.jpg',
    hasImage: true,
    details: {
      features: ['Multi-pocket organizer back', 'Waterproof backing layer', 'Kick-mat protection', 'Anti-slip grip base'],
      materials: 'Quilted PU leather with waterproof PVC lining',
      warranty: '6 Months',
      fitment: 'Straps over headrest — fits all seats',
      care: 'Wipe with damp cloth. Machine washable covers.',
    },
  },
  {
    name: 'Dashboard Mats',
    desc: 'Anti-slip dashboard mats that protect from UV damage, reduce glare, and keep items in place.',
    category: 'Protection Products',
    icon: 'space_dashboard',
    tag: null,
    img: '/assets/products/dashboard_mats.jpg',
    hasImage: true,
    details: {
      features: ['Anti-glare surface', 'UV damage protection', 'Custom fit per model', 'Non-slip suede/velvet finish'],
      materials: 'Premium velvet / suede with anti-slip base',
      warranty: '6 Months',
      fitment: 'Laser-cut for your dashboard shape',
      care: 'Vacuum regularly. Hand wash when needed.',
    },
  },
  {
    name: 'Door Edge Guards',
    desc: 'Slim, transparent edge protectors that prevent door dings and paint chips on edges and corners.',
    category: 'Protection Products',
    icon: 'security',
    tag: null,
    img: '/assets/products/door_edge_guards.jpg',
    hasImage: true,
    details: {
      features: ['Nearly invisible protection', 'Self-adhesive 3M backing', 'Shock-absorbing rubber core', 'Available in black, chrome & transparent'],
      materials: 'TPU rubber with 3M adhesive backing',
      warranty: '1 Year',
      fitment: 'Peel-and-stick application — 15 minutes per door',
      care: 'No maintenance. Replace if peeling after 2+ years.',
    },
  },

  // ── Utility Products (Profit Add-ons) ──
  {
    name: 'Car Organizers',
    desc: 'Multi-pocket organizers for seats, consoles, and visors — keep your cabin clutter-free.',
    category: 'Utility Products',
    icon: 'inventory_2',
    tag: null,
    img: '/assets/products/car_organizers.jpg',
    hasImage: true,
    details: {
      features: ['Seat gap filler design', 'Cup, phone & wallet compartments', 'Quilted leather exterior', 'Non-slip base'],
      materials: 'PU Leather with reinforced stitching',
      warranty: '3 Months',
      fitment: 'Universal — slides between seat and console',
      care: 'Wipe exterior with damp cloth. Empty and clean regularly.',
    },
  },
  {
    name: 'Boot Organizers',
    desc: 'Collapsible, heavy-duty boot/trunk organizers with compartments for groceries, tools, and gear.',
    category: 'Utility Products',
    icon: 'luggage',
    tag: null,
    img: '/assets/products/boot_organizers.jpg',
    hasImage: true,
    details: {
      features: ['Collapsible when not in use', 'Multiple compartments with dividers', 'Anti-slip base prevents sliding', 'Reinforced handles for carrying'],
      materials: 'Heavy-duty Oxford fabric with PU leather accents',
      warranty: '3 Months',
      fitment: 'Universal — fits all boot/trunk sizes',
      care: 'Wipe clean or hand wash. Air dry completely.',
    },
  },
  {
    name: 'Mobile Holders',
    desc: 'Premium magnetic and gravity-lock phone mounts for dashboard, vent, or windshield placement.',
    category: 'Utility Products',
    icon: 'smartphone',
    tag: null,
    img: '/assets/products/mobile_holders.jpg',
    hasImage: true,
    details: {
      features: ['Gravity-lock auto-grip mechanism', '360° rotation', 'One-hand operation', 'Compatible with all phone sizes'],
      materials: 'ABS plastic with soft-touch grip pads',
      warranty: '3 Months',
      fitment: 'Clip-on AC vent / suction cup dashboard mount',
      care: 'Wipe pads with alcohol wipe if grip reduces.',
    },
  },
]

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

// Category metadata for visual richness
const categoryMeta = {
  'Seat Covers': { icon: 'airline_seat_recline_extra', color: 'from-red-500/20 to-orange-500/10', label: 'Core Collection' },
  'Interior Customization': { icon: 'dashboard_customize', color: 'from-purple-500/20 to-blue-500/10', label: 'Premium Upgrades' },
  'Interior Accessories': { icon: 'light_mode', color: 'from-amber-500/20 to-yellow-500/10', label: 'High Demand' },
  'Protection Products': { icon: 'shield', color: 'from-emerald-500/20 to-green-500/10', label: 'Upsell Items' },
  'Utility Products': { icon: 'inventory_2', color: 'from-sky-500/20 to-cyan-500/10', label: 'Add-ons' },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)', transition: { duration: 0.25 } },
}

// ═══════════════════════════════════════════
// Expandable Product Card Component
// ═══════════════════════════════════════════
function ProductCard({ product, isExpanded, onToggle }) {
  const detailRef = useRef(null)

  useEffect(() => {
    if (isExpanded && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    }
  }, [isExpanded])

  return (
    <motion.div
      variants={cardVariant}
      className={`group relative glass-card rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col ${
        isExpanded 
          ? 'border-primary-container/40 shadow-[0_8px_50px_-12px_rgba(225,6,0,0.2)] col-span-1 sm:col-span-2 lg:col-span-2' 
          : 'border-white/5 hover:border-primary-container/30 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(225,6,0,0.15)]'
      }`}
    >
      <div className={`flex ${isExpanded ? 'flex-col md:flex-row' : 'flex-col'}`}>
        {/* Product Image */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black ${
          isExpanded ? 'h-64 md:h-auto md:w-1/2 md:min-h-[380px]' : 'h-56'
        }`}>
          {product.hasImage ? (
            <img
              src={product.img}
              alt={product.name}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100 ${
                isExpanded ? 'scale-100' : 'group-hover:scale-110'
              }`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-2xl scale-150"></div>
                <div className="relative w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary-container/30 transition-all duration-700">
                  <span className="material-symbols-outlined text-4xl text-zinc-600 group-hover:text-primary-container transition-colors duration-500" style={{fontVariationSettings: "'FILL' 1"}}>{product.icon}</span>
                </div>
              </div>
            </div>
          )}

          {!product.hasImage && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40"></div>}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

          {/* Tag Badge */}
          {product.tag && (
            <div
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg z-10 ${
                product.tag === 'Best Seller'
                  ? 'bg-primary-container text-white'
                  : product.tag === 'Premium'
                  ? 'bg-white/10 backdrop-blur-md text-white border border-white/20'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md'
              }`}
            >
              {product.tag}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className={`p-6 flex-1 flex flex-col justify-between ${isExpanded ? 'md:w-1/2' : ''}`} ref={detailRef}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-container text-sm" style={{fontVariationSettings: "'FILL' 1"}}>{product.icon}</span>
              <span className="text-primary-container text-[10px] font-black uppercase tracking-[0.15em]">{product.category}</span>
            </div>
            <h3 className="font-headline text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-primary-container transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{product.desc}</p>
          </div>

          {/* Expanded Details */}
          <AnimatePresence>
            {isExpanded && product.details && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-5 pt-5 border-t border-white/10 space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary-container text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {product.details.features.map((f, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.06 }}
                          className="text-zinc-300 text-xs flex items-start gap-2"
                        >
                          <span className="text-primary-container mt-0.5 text-[8px]">◆</span>
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Material', value: product.details.materials, icon: 'layers' },
                      { label: 'Warranty', value: product.details.warranty, icon: 'verified' },
                      { label: 'Fitment', value: product.details.fitment, icon: 'build' },
                      { label: 'Care', value: product.details.care, icon: 'cleaning_services' },
                    ].map((spec, i) => (
                      <motion.div
                        key={spec.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="bg-white/[0.02] rounded-xl p-3 border border-white/5"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <span className="material-symbols-outlined text-zinc-600 text-xs">{spec.icon}</span>
                          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{spec.label}</span>
                        </div>
                        <p className="text-zinc-300 text-[11px] leading-relaxed">{spec.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA in expanded */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 pt-2"
                  >
                    <a
                      href={`https://wa.me/919408424541?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}%20for%20my%20car.%20Can%20you%20share%20pricing%20and%20availability%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#20BD5A] transition-colors duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                      Get Quote
                    </a>
                    <a
                      href="tel:09408424541"
                      className="flex items-center justify-center gap-2 bg-white/5 text-white py-3 px-5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 border border-white/10"
                    >
                      <span className="material-symbols-outlined text-sm">call</span>
                      Call
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
            <a
              href={`https://wa.me/919408424541?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-[#25D366] transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              Enquire
            </a>
            <button
              onClick={onToggle}
              className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                isExpanded ? 'text-primary-container' : 'text-zinc-600 hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                {isExpanded ? 'expand_less' : 'expand_more'}
              </span>
              {isExpanded ? 'Close' : 'Details'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedCard, setExpandedCard] = useState(null)

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter)

  const scrollToProducts = () => {
    document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleToggle = (name) => {
    setExpandedCard(expandedCard === name ? null : name)
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric Background Glows */}
      <div className="absolute top-0 right-0 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-primary-container/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none -mt-24 md:-mt-48 -mr-24 md:-mr-48"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none -ml-24 md:-ml-48"></div>
      <div className="absolute top-1/2 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-container/5 blur-[60px] md:blur-[100px] rounded-full -z-10 pointer-events-none"></div>

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
              Interior & Accessories
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white animate-fade-in">
              Premium <br />
              <span className="text-transparent bg-clip-text text-gradient-subtle">Car Interior</span>{' '}
              <span className="text-primary-container">Products</span>
            </h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:col-span-4 pb-2">
            <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-primary-container/30 pl-6 mb-8">
              Elevate your cabin with premium seat covers, custom interiors, and handpicked accessories — crafted for comfort, style, and protection.
            </p>
            <button
              onClick={scrollToProducts}
              className="group relative bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:border-primary-container"
            >
              <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Explore Collection
                <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                  arrow_downward
                </span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* ═══════════════════ CATEGORY STATS BAR ═══════════════════ */}
      <section className="px-6 md:px-10 pb-6 max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
        >
          {Object.entries(categoryMeta).map(([cat, meta]) => {
            const count = products.filter(p => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); scrollToProducts(); }}
                className={`group glass-card rounded-2xl p-4 border transition-all duration-500 text-left hover:-translate-y-1 ${
                  activeFilter === cat
                    ? 'border-primary-container/40 bg-primary-container/5 shadow-[0_0_30px_-10px_rgba(225,6,0,0.2)]'
                    : 'border-white/5 hover:border-white/15'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center mb-3 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-white text-lg" style={{fontVariationSettings: "'FILL' 1"}}>{meta.icon}</span>
                </div>
                <p className="text-white font-headline font-bold text-xs uppercase tracking-tight leading-tight mb-1">{cat}</p>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider">{meta.label}</span>
                  <span className="text-primary-container text-xs font-black">{count}</span>
                </div>
              </button>
            )
          })}
        </motion.div>
      </section>

      {/* ═══════════════════ FILTER PILLS ═══════════════════ */}
      <section className="px-6 md:px-10 pb-12 max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap gap-2"
        >
          <LayoutGroup>
            {categories.map((cat) => {
              const count = cat === 'All' ? products.length : products.filter(p => p.category === cat).length
              const isActive = activeFilter === cat

              return (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setExpandedCard(null); }}
                  className={`relative px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-500 flex items-center gap-2 overflow-hidden border
                    ${isActive ? 'border-transparent' : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10 text-zinc-400 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProductPill"
                      className="absolute inset-0 bg-primary-container rounded-full shadow-[0_0_20px_rgba(225,6,0,0.4)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${isActive ? 'text-white drop-shadow-md' : ''}`}>{cat}</span>
                  <span className={`relative z-10 text-[9px] px-2 py-0.5 rounded-full font-bold transition-colors
                    ${isActive ? 'bg-black/30 text-white shadow-inner' : 'bg-white/10 text-zinc-300'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </LayoutGroup>
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
              <ProductCard
                key={product.name}
                product={product}
                isExpanded={expandedCard === product.name}
                onToggle={() => handleToggle(product.name)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-zinc-700 text-6xl mb-4 block">search_off</span>
            <p className="text-zinc-500 text-lg">No products found in this category.</p>
          </div>
        )}
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
              Custom Orders Welcome
              <span className="w-8 h-px bg-primary-container"></span>
            </span>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Can't Find What <br/>You <span className="text-primary-container">Need?</span>
            </h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              We source and customize products for any car model. From bespoke seat covers to full interior makeovers — tell us your vision and we'll make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/919408424541?text=Hi%2C%20I%27m%20looking%20for%20a%20custom%20car%20interior%20product"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-primary-container text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(225,6,0,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  WhatsApp Us
                </span>
              </a>
              <a
                href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer"
                className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
