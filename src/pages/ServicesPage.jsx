import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

// ═══════════════════════════════════════════════════
// All 19 Services — organized with category filters
// ═══════════════════════════════════════════════════

const services = [
  // ── Protection & Coating ──
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    subtitle: 'Nano Technology Shield',
    category: 'Protection & Coating',
    icon: 'shield',
    tag: 'Signature',
    badge: 'Most Popular',
    shortDesc: 'Nano-ceramic molecular bonding for extreme gloss, hydrophobic protection, and surface hardness up to 10H.',
    fullDesc: 'Our premium ceramic coating service uses advanced nano-ceramic technology that creates a permanent molecular bond with your vehicle\'s paint. This invisible layer provides unmatched protection against UV rays, chemical stains, bird droppings, and environmental contaminants while delivering a deep, mirror-like gloss that lasts for years.',
    duration: '1–2 Days',
    warranty: 'Up to 5 Years',
    process: ['Paint decontamination & clay bar', 'Multi-stage paint correction', 'IPA wipe-down & panel preparation', 'Ceramic coating application (2–3 layers)', 'Infrared curing & quality inspection'],
    benefits: ['9H / 10H Surface Hardness', 'Extreme Hydrophobic Effect', 'UV & Chemical Protection', 'Self-Cleaning Properties', 'Enhanced Gloss & Depth'],
    priceRange: '₹8,000 – ₹35,000',
    image: '/assets/service_ceramic_new.png',
  },
  {
    id: 'graphene-coating',
    title: 'Graphene Coating',
    subtitle: 'Next-Gen Protection',
    category: 'Protection & Coating',
    icon: 'diamond',
    tag: 'Premium',
    badge: 'Advanced',
    shortDesc: 'Graphene-infused coating offering superior durability, heat resistance, and anti-static properties beyond ceramic.',
    fullDesc: 'Graphene coating represents the next evolution in automotive protection. Utilizing graphene oxide layers, this coating offers 30% more durability than traditional ceramic, exceptional heat dissipation, and anti-static properties that repel dust and contaminants. The result is a longer-lasting, more resilient finish with reduced water spotting.',
    duration: '2–3 Days',
    warranty: 'Up to 7 Years',
    process: ['Full vehicle decontamination', 'Paint correction & polishing', 'Surface preparation & IPA wipe', 'Graphene coating application (2–4 layers)', 'Extended infrared curing', 'Final inspection & quality check'],
    benefits: ['Superior Heat Resistance', 'Anti-Static Dust Repellent', '30% More Durable than Ceramic', 'Reduced Water Spotting', 'Extreme Glossy Finish'],
    priceRange: '₹15,000 – ₹50,000',
    image: '/assets/service_graphene_new.png',
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    subtitle: 'Invisible Armor',
    category: 'Protection & Coating',
    icon: 'layers',
    tag: 'Protection',
    shortDesc: 'Self-healing polyurethane film providing ultimate resistance against road debris, stone chips, and scratches.',
    fullDesc: 'Our Paint Protection Film service uses premium-grade Garware TPU film that acts as an invisible armor for your vehicle. The self-healing technology allows minor scratches and swirl marks to disappear with heat exposure. The film is optically clear, maintaining your car\'s original finish while providing the highest level of physical protection available.',
    duration: '2–5 Days',
    warranty: 'Up to 8 Years',
    process: ['Vehicle measurement & digital templating', 'Surface decontamination & prep', 'Precision film cutting & fitting', 'Squeegee application & edge sealing', 'Heat gun finishing & quality review'],
    benefits: ['Self-Healing Technology', 'Stone Chip & Scratch Guard', 'Anti-Yellowing Formula', 'Optically Clear Finish', 'Preserves Resale Value'],
    priceRange: '₹25,000 – ₹2,50,000',
    image: '/assets/service_ppf_new.png',
  },
  {
    id: 'interior-coating',
    title: 'Car Interior Coating',
    subtitle: 'Interior Shield',
    category: 'Protection & Coating',
    icon: 'chair',
    tag: 'Interior',
    shortDesc: 'Protective ceramic coating for leather, fabric, plastic, and dashboard surfaces inside your vehicle.',
    fullDesc: 'Interior coating protects every surface inside your car — from leather seats and fabric upholstery to plastic trim and dashboard. Our nano-coating creates an invisible barrier that repels spills, prevents UV fading, resists stains, and makes cleaning effortless. Ideal for preserving a showroom-quality interior for years.',
    duration: '1 Day',
    warranty: 'Up to 2 Years',
    process: ['Deep interior vacuuming & steam clean', 'Leather / fabric conditioning', 'Surface prep & degreasing', 'Interior ceramic coating application', 'UV curing & buffing'],
    benefits: ['Spill & Stain Resistance', 'UV Fade Protection', 'Easy Cleaning', 'Anti-Bacterial Properties', 'Preserves Leather & Fabric'],
    priceRange: '₹5,000 – ₹15,000',
    image: '/assets/service_interior_new.png',
  },
  {
    id: 'windshield-coating',
    title: 'Windshield Coating',
    subtitle: 'Crystal Clear Vision',
    category: 'Protection & Coating',
    icon: 'visibility',
    tag: 'Glass',
    shortDesc: 'Hydrophobic glass coating that repels rain, improves visibility, and protects against chips and cracks.',
    fullDesc: 'Our windshield coating uses advanced hydrophobic nano-technology that causes water to bead and roll off the glass at speed, dramatically improving visibility during rain. The coating also provides a protective layer against minor chips, reduces glare, and makes cleaning easier by repelling dirt, bugs, and road grime.',
    duration: '2–3 Hours',
    warranty: '1 Year',
    process: ['Windshield deep cleaning & decontamination', 'Surface prep with glass polish', 'Hydrophobic coating application', 'Curing & buff to clarity', 'Rain test & quality check'],
    benefits: ['Rain Repellent (60+ km/h)', 'Improved Night Visibility', 'Anti-Glare Properties', 'Easy Bug & Dirt Removal', 'Minor Chip Resistance'],
    priceRange: '₹1,500 – ₹4,000',
    image: '/assets/service_windshield_new.png',
  },

  // ── Films & Tinting ──
  {
    id: 'sun-control-film',
    title: 'Sun Control Film',
    subtitle: 'Window Tint',
    category: 'Films & Tinting',
    icon: 'wb_sunny',
    tag: 'Comfort',
    shortDesc: 'Premium window tinting for heat rejection, UV protection, privacy, and interior preservation.',
    fullDesc: 'Our sun control film (window tint) uses advanced multi-layer nano-ceramic technology that blocks up to 99% UV rays and rejects up to 80% of solar heat — without compromising visibility. Available in multiple shade levels for your preferred look and privacy, these films protect your interior from fading and keep the cabin cool and comfortable.',
    duration: '3–5 Hours',
    warranty: 'Up to 5 Years',
    process: ['Window cleaning & decontamination', 'Precision film measurement & cutting', 'Wet application & positioning', 'Squeegee air bubble removal', 'Edge trim & final inspection'],
    benefits: ['Up to 99% UV Rejection', 'Up to 80% Heat Rejection', 'Glare Reduction', 'Interior Fade Protection', 'Enhanced Privacy & Security'],
    priceRange: '₹3,000 – ₹15,000',
    image: '/assets/service_sun_control_new.png',
  },

  // ── Cleaning & Detailing ──
  {
    id: 'car-washing',
    title: 'Car Washing Service',
    subtitle: 'Professional Clean',
    category: 'Cleaning & Detailing',
    icon: 'local_car_wash',
    tag: 'Detailing',
    shortDesc: 'From basic foam wash to premium deep-clean spa treatment with interior and exterior detailing.',
    fullDesc: 'Our car washing services range from a quick contactless foam wash to a comprehensive full-detail spa experience. Every wash uses pH-neutral shampoos, microfiber towels, and professional-grade equipment to ensure a scratch-free, spotless finish. Premium packages include interior cleaning, dashboard dressing, tyre shine, and engine bay rinse.',
    duration: '30 Min – 4 Hours',
    warranty: 'N/A',
    process: ['Pre-rinse & foam cannon application', 'Two-bucket wash method', 'Wheel & tyre cleaning', 'Rinse, dry & microfiber finish', 'Interior vacuum, wipe & dressing (Premium)'],
    benefits: ['Scratch-Free Wash Technique', 'pH-Neutral Products', 'Interior & Exterior Options', 'Tyre & Wheel Detailing', 'Engine Bay Cleaning (Premium)'],
    priceRange: '₹300 – ₹3,000',
    image: '/assets/service_car_wash_new.png',
  },

  // ── General Services ──
  {
    id: 'general-car-service',
    title: 'General Car Service',
    subtitle: 'Complete Checkup',
    category: 'General Services',
    icon: 'build',
    tag: 'Maintenance',
    shortDesc: 'Comprehensive car servicing including oil change, filter replacement, fluid top-ups, and multi-point inspection.',
    fullDesc: 'Our general car service covers everything your vehicle needs to run smoothly and reliably. This includes engine oil and filter change, air filter inspection, brake check, coolant and washer fluid top-up, tyre pressure check, battery health test, and a comprehensive multi-point inspection report. Suitable for all car brands and models.',
    duration: '3–5 Hours',
    warranty: '30 Days / 1,000 km',
    process: ['Vehicle reception & initial inspection', 'Engine oil & filter replacement', 'Air filter, cabin filter check', 'Brake, suspension & steering inspection', 'Fluid top-ups & tyre pressure adjustment', 'Road test & delivery'],
    benefits: ['Multi-Point Inspection', 'Genuine / OEM Parts', 'All Brands Supported', 'Pickup & Drop Available', 'Digital Service Record'],
    priceRange: '₹3,000 – ₹12,000',
    image: '/assets/service_general_new.png',
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contract',
    subtitle: 'Year-Round Care',
    category: 'General Services',
    icon: 'event_repeat',
    tag: 'AMC',
    badge: 'Best Value',
    shortDesc: 'All-inclusive annual care packages covering periodic services, washes, inspections, and priority support.',
    fullDesc: 'Our Annual Maintenance Contract (AMC) is the most cost-effective way to keep your vehicle in peak condition throughout the year. AMC packages include periodic servicing, scheduled car washes, interim inspections, priority booking, and discounted rates on additional services and accessories. Choose from Silver, Gold, or Platinum tiers based on your needs.',
    duration: '12 Months Coverage',
    warranty: 'Full Year Coverage',
    process: ['Vehicle assessment & AMC tier selection', 'Contract documentation & scheduling', 'Periodic service reminders', 'Priority booking for all visits', 'Annual review & renewal'],
    benefits: ['Cost Savings vs Individual Services', 'Priority Scheduling', 'Periodic Free Washes Included', 'Discounted Add-On Services', 'Dedicated Service Advisor'],
    priceRange: '₹12,000 – ₹60,000 / year',
    image: '/assets/service_amc_new.png',
  },

  // ── Repair & Restoration ──
  {
    id: 'car-repair',
    title: 'Car Repair Services',
    subtitle: 'Expert Repairs',
    category: 'Repair & Restoration',
    icon: 'handyman',
    tag: 'Repair',
    shortDesc: 'Comprehensive mechanical and electrical repairs for all car makes and models by certified technicians.',
    fullDesc: 'From engine diagnostics and suspension repairs to electrical system troubleshooting — our certified technicians handle it all. We use advanced diagnostic tools, genuine/OEM spare parts, and follow manufacturer service protocols to ensure your vehicle is repaired correctly the first time. All repairs come with a service warranty.',
    duration: 'Varies by Repair',
    warranty: '30–90 Days',
    process: ['Diagnostic scan & fault identification', 'Detailed estimate & approval', 'Parts procurement (OEM/genuine)', 'Repair & replacement', 'Quality check & road test'],
    benefits: ['Advanced Diagnostic Equipment', 'OEM / Genuine Parts', 'Certified Technicians', 'Transparent Pricing', 'Post-Repair Warranty'],
    priceRange: 'Based on Diagnosis',
    image: '/assets/service_repair_new.png',
  },
  {
    id: 'ac-service',
    title: 'Car AC Service',
    subtitle: 'Climate Control',
    category: 'Repair & Restoration',
    icon: 'ac_unit',
    tag: 'AC',
    shortDesc: 'Complete AC servicing — gas refill, compressor check, condenser cleaning, and cooling performance optimization.',
    fullDesc: 'Beat the heat with our comprehensive car AC service. We perform a full system diagnosis including refrigerant gas level check, compressor health test, condenser and evaporator cleaning, cabin filter replacement, and leak detection. Our service restores your AC to peak cooling performance, ensuring a comfortable driving experience in all weather.',
    duration: '2–4 Hours',
    warranty: '30 Days',
    process: ['AC performance & temperature check', 'Refrigerant gas pressure test', 'Compressor & condenser inspection', 'Evaporator & cabin filter cleaning', 'Gas recharge & leak test', 'Final cooling performance verification'],
    benefits: ['Complete System Diagnosis', 'Gas Top-Up / Refill', 'Odour Elimination', 'Improved Cooling Efficiency', 'Cabin Filter Replacement'],
    priceRange: '₹1,500 – ₹6,000',
    image: '/assets/service_ac_new.png',
  },
  {
    id: 'battery-service',
    title: 'Battery Service',
    subtitle: 'Power Assurance',
    category: 'Repair & Restoration',
    icon: 'battery_charging_full',
    tag: 'Battery',
    shortDesc: 'Battery health testing, terminal cleaning, jumpstart assistance, and replacement with warranty-backed batteries.',
    fullDesc: 'Don\'t get stranded — our battery service includes comprehensive health testing, voltage & load checks, terminal cleaning & anti-corrosion treatment, and professional replacement if needed. We stock and install batteries from leading brands with full manufacturer warranty. Emergency jumpstart assistance is also available.',
    duration: '30 Min – 1 Hour',
    warranty: 'As per Battery Brand',
    process: ['Battery voltage & load test', 'Terminal inspection & cleaning', 'Anti-corrosion coating', 'Alternator charging test', 'Replacement & installation (if needed)'],
    benefits: ['Free Health Diagnostic', 'Top Brand Batteries', 'Manufacturer Warranty', 'Emergency Jumpstart', 'Old Battery Disposal'],
    priceRange: '₹500 – ₹12,000',
    image: '/assets/service_battery_new.png',
  },
  {
    id: 'windshield-replacement',
    title: 'Windshield Replacement',
    subtitle: 'Clear & Safe',
    category: 'Repair & Restoration',
    icon: 'broken_image',
    tag: 'Glass',
    shortDesc: 'Professional windshield replacement using OEM-grade glass with proper adhesive curing and leak testing.',
    fullDesc: 'A cracked or chipped windshield compromises both aesthetics and safety. Our windshield replacement service uses OEM-grade laminated glass that meets safety standards. Professional installation ensures perfect fitment, proper adhesive curing time, and a thorough leak & rattle test. We handle both front and rear windshields for all car models.',
    duration: '2–4 Hours',
    warranty: '1 Year (Fitment)',
    process: ['Old windshield removal', 'Frame cleaning & rust treatment', 'Primer & adhesive application', 'New windshield positioning & fitting', 'Adhesive curing & leak test'],
    benefits: ['OEM-Grade Glass', 'Safety Standard Compliant', 'Leak-Free Guarantee', 'All Makes & Models', 'Insurance Claim Assistance'],
    priceRange: '₹3,000 – ₹25,000',
    image: '/assets/service_windshield_replacement_new.png',
  },
  {
    id: 'denting-painting',
    title: 'Denting & Painting',
    subtitle: 'Panel Perfection',
    category: 'Repair & Restoration',
    icon: 'format_paint',
    tag: 'Body Work',
    shortDesc: 'Expert dent repair, panel beating, scratch removal, and factory-match paint restoration.',
    fullDesc: 'Whether it\'s a minor door ding or major collision damage, our denting and painting experts restore your vehicle to factory standards. We use computerized paint-matching systems to ensure exact colour accuracy, professional spray booths for a flawless finish, and skilled panel beaters who preserve the original body structure.',
    duration: '1–5 Days',
    warranty: '6 Months',
    process: ['Damage assessment & cost estimation', 'Panel beating & dent pulling', 'Putty, primer & sanding', 'Computerized paint matching', 'Multi-coat spray application', 'Clear coat, buffing & polish'],
    benefits: ['Exact Colour Match Technology', 'Professional Spray Booth', 'OEM-Level Finish', 'Structural Integrity Preserved', 'Insurance Claim Support'],
    priceRange: '₹2,000 – ₹50,000+',
    image: '/assets/service_denting_new.png',
  },
  {
    id: 'breakdown-assistance',
    title: 'Breakdown Assistance',
    subtitle: '24/7 Rescue',
    category: 'Repair & Restoration',
    icon: 'sos',
    tag: 'Emergency',
    badge: '24/7',
    shortDesc: 'Round-the-clock roadside assistance including towing, jumpstart, flat tyre help, and emergency repairs.',
    fullDesc: 'Stranded on the road? Our 24/7 breakdown assistance service gets you back on track fast. We offer emergency towing, battery jumpstart, flat tyre replacement, fuel delivery, lockout assistance, and on-the-spot minor repairs. Our response team covers Vadodara city and surrounding areas with rapid response times.',
    duration: '30–60 Min Response',
    warranty: 'N/A',
    process: ['Emergency call & location sharing', 'Nearest technician dispatch', 'On-site diagnosis & assessment', 'Immediate repair or towing', 'Follow-up service at workshop'],
    benefits: ['24/7 Availability', 'Rapid Response Time', 'Towing & Roadside Repair', 'Fuel & Tyre Assistance', 'City & Highway Coverage'],
    priceRange: '₹500 – ₹5,000',
    image: '/assets/service_breakdown_new.png',
  },

  // ── Accessories & Add-ons ──
  {
    id: 'accessories',
    title: 'Car Accessories Installation',
    subtitle: 'Upgrade & Customize',
    category: 'Accessories & Add-ons',
    icon: 'tune',
    tag: 'Accessories',
    shortDesc: 'Professional installation of car accessories — seat covers, infotainment, dashcams, parking sensors & more.',
    fullDesc: 'Upgrade your driving experience with professional accessory installation. From premium seat covers, floor mats, and ambient lighting to advanced infotainment systems, dashcams, parking sensors, and reverse cameras — we source quality products and ensure clean, wire-tucked, professional installations that look and function like factory fitments.',
    duration: '1–6 Hours',
    warranty: 'Product Warranty Applicable',
    process: ['Accessory consultation & product selection', 'Fitment compatibility check', 'Professional installation', 'Wiring management & tidy-up', 'Testing & handover demo'],
    benefits: ['Factory-Level Finish', 'Wide Product Range', 'Professional Wiring', 'Compatibility Guarantee', 'Demo & Setup Included'],
    priceRange: 'Varies by Product',
    image: '/assets/service_accessories_new.png',
  },

  // ── Assistance & Advisory ──
  {
    id: 'car-buying-selling',
    title: 'Car Buying & Selling Assistance',
    subtitle: 'Trusted Advisory',
    category: 'Assistance & Advisory',
    icon: 'swap_horiz',
    tag: 'Advisory',
    shortDesc: 'Expert guidance on buying or selling used cars — inspection, valuation, documentation, and negotiation support.',
    fullDesc: 'Looking to buy or sell a car? Our expert advisory service takes the stress out of the process. For buyers, we offer comprehensive pre-purchase inspections, market valuation, and negotiation support. For sellers, we provide vehicle detailing for better resale value, accurate pricing guidance, and documentation assistance. We help you make confident, informed decisions.',
    duration: 'Consultation Based',
    warranty: 'N/A',
    process: ['Initial consultation & requirement analysis', 'Vehicle inspection (150+ point check)', 'Market valuation & pricing', 'Negotiation support', 'Documentation & transfer assistance'],
    benefits: ['150+ Point Inspection', 'Fair Market Valuation', 'Negotiation Support', 'Documentation Help', 'Post-Sale Service Packages'],
    priceRange: '₹1,000 – ₹5,000',
    image: '/assets/service_buying_selling_new.png',
  },
  {
    id: 'car-insurance',
    title: 'Car Insurance Assistance',
    subtitle: 'Coverage Simplified',
    category: 'Assistance & Advisory',
    icon: 'verified_user',
    tag: 'Insurance',
    shortDesc: 'End-to-end car insurance support — new policies, renewals, claim filing, and best premium comparison.',
    fullDesc: 'Navigating car insurance doesn\'t have to be complicated. Our insurance assistance covers everything from comparing policies across top insurers to finding the best premiums, handling renewals, and filing claims efficiently. We also provide add-on advisory (zero depreciation, engine protect, roadside assistance) and NCB transfer guidance to maximize your savings.',
    duration: 'Same Day Processing',
    warranty: 'As per Policy Terms',
    process: ['Requirement analysis & budget discussion', 'Multi-insurer premium comparison', 'Policy selection & documentation', 'Online or offline policy issuance', 'Claim filing support (if needed)'],
    benefits: ['Best Premium Comparison', 'All Major Insurers', 'Claim Filing Support', 'Add-On Advisory', 'Renewal Reminders'],
    priceRange: 'Service Fee: ₹500 – ₹2,000',
    image: '/assets/service_insurance_new.png',
  },
  {
    id: 'car-financing',
    title: 'Car Financing Assistance',
    subtitle: 'Drive Now, Pay Smart',
    category: 'Assistance & Advisory',
    icon: 'account_balance',
    tag: 'Finance',
    shortDesc: 'Hassle-free car loan assistance — best interest rates, EMI planning, documentation, and fast processing.',
    fullDesc: 'Get behind the wheel faster with our car financing assistance. We partner with leading banks and NBFCs to offer you the most competitive interest rates and flexible EMI options. Our team handles the entire loan process — from application and documentation to approval and disbursement — ensuring a smooth, transparent financing experience for new and used cars.',
    duration: '2–5 Business Days',
    warranty: 'N/A',
    process: ['Financial consultation & budget planning', 'Loan eligibility assessment', 'Multi-bank interest rate comparison', 'Documentation preparation', 'Application submission & follow-up', 'Disbursement & vehicle registration'],
    benefits: ['Competitive Interest Rates', 'Flexible EMI Options', 'All Major Banks & NBFCs', 'New & Used Car Loans', 'Minimal Documentation'],
    priceRange: 'Service Fee: ₹1,000 – ₹3,000',
    image: '/assets/service_financing_new.png',
  },
];

// Derive unique categories from services data
const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

// ═══════════════════════════════════════════════════
// Expandable Service Card Component
// ═══════════════════════════════════════════════════

function ServiceCard({ service, isOpen, onToggle }) {
  const cardRef = useRef(null);

  // We handle scroll inside onLayoutAnimationComplete to ensure Framer Motion 
  // has completely finished resizing and reflowing the grid before moving the camera.

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layout
      onLayoutAnimationComplete={() => {
        if (isOpen && cardRef.current) {
          const yOffset = -150; // Extra clearance for the sticky navbar
          const y = cardRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }}
      className={`group origin-top ${isOpen ? 'lg:col-span-2 z-10' : ''}`}
    >
      {/* ── Card ── */}
      <div
        onClick={onToggle}
        className={`relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-500
          ${isOpen
            ? 'border-primary-container/40 bg-zinc-900/80 shadow-[0_0_40px_-10px_rgba(225,6,0,0.15)] scale-[1.01]'
            : 'border-white/5 bg-zinc-950/50 hover:border-primary-container/30 hover:bg-zinc-900/60 hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(225,6,0,0.3)]'
          }`}
      >
        {/* Card Header (Always Visible) */}
        <div className="p-6 md:p-8 flex items-start gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-500
            ${isOpen
              ? 'bg-primary-container/20 border-primary-container/40'
              : 'bg-primary-container/10 border-primary-container/20 group-hover:bg-primary-container/15'
            }`}>
            <span className="material-symbols-outlined text-primary-container text-xl">{service.icon}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-primary-container text-[10px] font-black uppercase tracking-[0.2em]">{service.subtitle}</span>
              {service.badge && (
                <span className="bg-primary-container text-white px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 className={`font-headline font-black uppercase tracking-tight text-lg md:text-xl leading-tight transition-colors duration-300
              ${isOpen ? 'text-primary-container' : 'text-white group-hover:text-primary-container'}`}>
              {service.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mt-2 line-clamp-2">{service.shortDesc}</p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-white/5 text-zinc-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] text-primary-container">schedule</span>
                {service.duration}
              </span>
              <span className="bg-white/5 text-zinc-400 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px] text-primary-container">verified</span>
                {service.warranty}
              </span>
              <span className={`bg-black/40 text-zinc-500 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/5`}>
                {service.tag}
              </span>
            </div>
          </div>

          {/* Expand Arrow */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 border
            ${isOpen
              ? 'bg-primary-container/20 border-primary-container/40 rotate-180'
              : 'bg-white/5 border-white/10 group-hover:bg-white/10'
            }`}>
            <span className="material-symbols-outlined text-white text-lg">expand_more</span>
          </div>
        </div>

        {/* ── Expanded Content ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary-container/30 to-transparent mb-6"></div>

                {/* Optional Service Image (Cinematic Aspect Ratio) */}
                {service.image && (
                  <div className="relative mb-8 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2lg aspect-[16/9] md:aspect-[21/9] group/image bg-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 md:group-hover/image:scale-105 opacity-90" 
                    />
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-2 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_rgba(225,6,0,0.8)]"></span>
                      <span className="text-white/90 text-[10px] sm:text-xs font-black uppercase tracking-widest drop-shadow-md">Premium Service</span>
                    </div>
                  </div>
                )}

                {/* Full Description */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">{service.fullDesc}</p>

                {/* Grid: Benefits + Process (Glass Panels) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {/* Benefits Panel */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-300">
                    <h4 className="text-white font-headline font-black text-xs md:text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[16px] text-primary-container">star</span>
                      </div>
                      Key Benefits
                    </h4>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary-container text-sm mt-0.5 w-4 flex-shrink-0">check_circle</span>
                          <span className="text-zinc-300 text-sm leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Panel */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-300">
                    <h4 className="text-white font-headline font-black text-xs md:text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
                        <span className="material-symbols-outlined text-[14px] text-primary-container">build</span>
                      </div>
                      Our Process
                    </h4>
                    <div className="space-y-3">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-primary-container text-[10px] font-black mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 bg-primary-container/10 border border-primary-container/20 rounded-full">{i + 1}</span>
                          <span className="text-zinc-300 text-sm leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Price + CTA (Floating Bar) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-zinc-950 to-black border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-container/10 to-transparent pointer-events-none blur-xl"></div>
                  
                  <div className="w-full md:w-auto text-center md:text-left relative z-10">
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest block mb-1">Estimated Investment</span>
                    <div className="text-white font-headline font-black text-xl md:text-2xl">{service.priceRange}</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 relative z-10">
                    <Link
                      to="/packages"
                      className="bg-zinc-900 border border-white/10 text-white px-6 py-3.5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs text-center hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                    >
                      View Packages
                    </Link>
                    <a
                      href={`https://wa.me/919408424541?text=Hi%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-container text-white px-6 py-3.5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs text-center hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] flex items-center justify-center gap-2"
                    >
                      Enquire Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}


// ═══════════════════════════════════════════════════
// Main Services Page
// ═══════════════════════════════════════════════════

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openCard, setOpenCard] = useState(null);

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter(s => s.category === activeFilter);

  const toggleCard = (id) => {
    setOpenCard(prev => prev === id ? null : id);
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* ── Atmospheric Backgrounds ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none -mt-24 md:-mt-48 -mr-24 md:-mr-48"></div>
      <div className="absolute bottom-1/4 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none -ml-24 md:-ml-48"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-primary-container/5 blur-[100px] md:blur-[180px] rounded-full -z-10 pointer-events-none"></div>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-32 md:pt-40 pb-12 z-10 border-b border-white/5">
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-screen-2xl mx-auto px-6 md:px-10"
        >
          <motion.div variants={fadeInUp} className="mb-10 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 relative">
            <div className="max-w-4xl relative z-10">
              <span className="text-zinc-500 font-headline font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-primary-container"></span>
                Premium Auto Care Division
              </span>
              <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-red-500 to-orange-500 drop-shadow-[0_0_30px_rgba(225,6,0,0.5)]">Services</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-xl md:leading-relaxed mt-6 max-w-2xl border-l-2 border-primary-container/40 pl-6">
                From precision ceramic coatings to 24/7 breakdown assistance — we engineer protection and deliver perfection across every aspect of automotive care.
              </p>
            </div>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <div className="glass-card px-5 py-3 rounded-full border border-white/10 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_rgba(225,6,0,0.8)]"></span>
                <span className="text-zinc-300 text-xs font-bold uppercase tracking-widest">
                  {filteredServices.length} {filteredServices.length === 1 ? 'Premium Service' : 'Premium Services'} Available
                </span>
              </div>
              
              <Link to="/packages" className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 rounded-full">
                View Packages
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* ═══ Filter Bar ═══ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-10 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="flex flex-wrap gap-2"
        >
          <LayoutGroup>
            {categories.map((cat) => {
              const count = cat === 'All' ? services.length : services.filter(s => s.category === cat).length;
              const isActive = activeFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setOpenCard(null); }}
                  className={`relative px-5 py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-500 flex items-center gap-2 overflow-hidden border
                    ${isActive ? 'border-transparent' : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10 text-zinc-400 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
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
              );
            })}
          </LayoutGroup>
        </motion.div>
      </section>

      {/* ═══ Services Grid ═══ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isOpen={openCard === service.id}
                onToggle={() => toggleCard(service.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-zinc-700 text-6xl mb-4 block">search_off</span>
            <p className="text-zinc-500 text-lg">No services found in this category.</p>
          </div>
        )}
      </section>

      {/* ═══ Why Choose Us  ═══ */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">Why <span className="text-primary-container">GK Auto Herb</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">Beyond aesthetics — we engineer molecular-level protection using certified products and meticulous technique.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Certified Products Only', desc: 'We use Garware TPU, Kovalent, 3M, and other industry-leading brands — never cheap alternatives.', icon: 'workspace_premium', tag: 'Quality' },
              { title: '10+ Years of Expertise', desc: 'Over 1,500 vehicles served with trained specialists who understand every detail of automotive care.', icon: 'engineering', tag: 'Experience' },
              { title: 'Warranty-Backed Services', desc: 'Every major service comes with genuine manufacturer warranty — up to 8 years for PPF and 5 years for ceramic.', icon: 'verified', tag: 'Warranty' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 rounded-3xl glass-card hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-container/20 transition-colors duration-500"></div>
                <div className="text-primary-container font-black text-[10px] tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary-container"></span>
                  {item.tag}
                </div>
                <h3 className="text-xl font-black font-headline uppercase text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mt-auto">
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                  Trusted
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA Banner ═══ */}
      <section className="px-6 md:px-10 pb-32 pt-8 max-w-screen-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="relative bg-zinc-900 overflow-hidden rounded-3xl p-12 md:p-20 flex flex-col items-center text-center border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-black pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">Ready to <br/><span className="text-primary-container">Protect</span> Your Ride?</h2>
            <p className="text-zinc-400 mb-10 text-lg">Check our detailed pricing tables and annual care packages, or reach out for a custom quote.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/packages" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                View Packages & Pricing
              </Link>
              <a href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all flex items-center justify-center">
                Book Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
