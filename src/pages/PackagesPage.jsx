import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ── Service Pricing Tabs ── */
const tabs = [
  { id: 'wash', label: 'Wash & Detail' },
  { id: 'detailing', label: 'Interior & Exterior Detailing' },
  { id: 'ceramic', label: 'Ceramic Coatings' },
  { id: 'ppf', label: 'PPF Films' },
];

/* ── Interior & Exterior Detailing Package ── */
const detailingPricing = [
  { segment: 'Small Hatchback', price: '₹ 3,999', examples: 'Alto, Zen, Santro, i10, i20, Celerio etc.' },
  { segment: 'Medium Hatchback', price: '₹ 4,299', examples: 'Swift, Baleno, Indica, Altroz etc.' },
  { segment: 'Sedan / SUV', price: '₹ 4,999', examples: 'Creta, S-Cross, Swift Dzire, Innova etc.' },
  { segment: 'Large Car / Premium', price: '₹ 5,699', examples: 'Innova, Fortuner, Harrier, Ertiga etc.' },
];

const interiorDetailingServices = [
  'Vacuuming',
  'Cleaning and Conditioning Leather',
  'Cleaning Fabric Seats and Upholstery',
  'Carpet and Mat Cleaning',
  'Dashboard, Console, and Interior Panels',
  'Windows and Mirrors',
  'Odor Removal',
  'Detailing Small Areas',
];

const exteriorDetailingServices = [
  'Washing',
  'Claying',
  'Polishing',
  'Paint Correction',
  'Waxing / Sealing',
  'Coating',
  'Cleaning Wheels and Tires',
  'Cleaning Exterior Trim and Glass',
  'Detailing Small Areas',
];

const ppfData = [
  { segment: 'Two Wheeler', five: '₹ 10,500', eight: '₹ 17,500' },
  { segment: 'Small/Medium Hatchback', five: '₹ 75,000', eight: '₹ 95,000' },
  { segment: 'Compact Sedan / SUV', five: '₹ 83,000', eight: '₹ 1,10,000' },
  { segment: 'Large Car / Premium Sedan', five: '₹ 90,000', eight: '₹ 1,20,000' }
];

const ceramicData = [
  { segment: 'Two Wheeler', oneYr: '₹ 2,999', twoYr: '₹ 4,999', threeYr: '₹ 6,999', fiveYr: '₹ 7,999' },
  { segment: 'Small Hatchback', oneYr: '₹ 7,999', twoYr: '₹ 10,999', threeYr: '₹ 14,999', fiveYr: '₹ 18,999' },
  { segment: 'Medium Hatchback', oneYr: '₹ 8,999', twoYr: '₹ 11,999', threeYr: '₹ 16,999', fiveYr: '₹ 22,999' },
  { segment: 'Sedan / SUV', oneYr: '₹ 9,999', twoYr: '₹ 12,999', threeYr: '₹ 17,999', fiveYr: '₹ 24,999' },
  { segment: 'Large Car / Premium Sedan', oneYr: '₹ 10,999', twoYr: '₹ 14,999', threeYr: '₹ 20,999', fiveYr: '₹ 27,999' }
];

const washPricing = [
  { segment: 'Small Hatchback', foam: '₹ 300', basic: '₹ 400', premium: '₹ 550', extreme: '₹ 1400' },
  { segment: 'Medium Hatchback', foam: '₹ 300', basic: '₹ 450', premium: '₹ 600', extreme: '₹ 1700' },
  { segment: 'Sedan / SUV', foam: '₹ 350', basic: '₹ 500', premium: '₹ 650', extreme: '₹ 2000' },
  { segment: 'Premium Sedan', foam: '₹ 400', basic: '₹ 600', premium: '₹ 750', extreme: '₹ 2600' },
  { segment: 'Large Car', foam: '₹ 400', basic: '₹ 600', premium: '₹ 750', extreme: '₹ 2600' }
];

const washChecklist = [
  { id: 1, text: 'Exterior water pressure wash', tiers: [true, true, true, true] },
  { id: 2, text: 'Exterior body foam wash', tiers: [true, true, true, true] },
  { id: 3, text: 'Spot free rinse dry', tiers: [true, true, true, true] },
  { id: 4, text: 'Tyre polish', tiers: [true, true, true, true] },
  { id: 5, text: 'Glass cleaning outside only', tiers: [true, true, true, true] },
  { id: 6, text: 'Foot mat cleaning and/or washing', tiers: [false, true, true, true] },
  { id: 7, text: 'Dry vacuuming of seat, flooring and boot space', tiers: [false, true, true, true] },
  { id: 8, text: 'Wipe off all interior parts gently and glass cleaning inside also', tiers: [false, true, true, true] },
  { id: 9, text: 'Dashboard polish', tiers: [false, true, true, true] },
  { id: 10, text: 'Door pillars and borders wipe off', tiers: [false, true, true, true] },
  { id: 11, text: 'Engine water wash and wipe all parts', tiers: [false, true, true, true] },
  { id: 12, text: 'Foot paper mats', tiers: [false, true, true, true] },
  { id: 13, text: 'Underbody wash', tiers: [false, false, true, true] },
  { id: 14, text: 'Engine steam wash and dressing of all parts', tiers: [false, false, true, true] },
  { id: 15, text: 'Interior detailing of plastic and rubber parts', tiers: [false, false, true, true] },
  { id: 16, text: 'Treatment and polishing of plastic and rubber parts', tiers: [false, false, true, true] },
  { id: 17, text: 'Light wheel scrub', tiers: [false, false, true, true] },
  { id: 18, text: 'Spare wheel and boot space cleaning', tiers: [false, false, true, true] },
  { id: 19, text: 'Fragrance spray', tiers: [false, false, true, true] },
  { id: 20, text: 'Steam cleaning of all interior and exterior parts', tiers: [false, false, false, true] },
  { id: 21, text: 'All interior fabric parts detailing', tiers: [false, false, false, true] },
  { id: 22, text: 'Carpet and ceiling spot removing and detailing', tiers: [false, false, false, true] },
  { id: 23, text: 'All seats cleaning', tiers: [false, false, false, true] },
  { id: 24, text: 'AC duct cleaning and steam wash', tiers: [false, false, false, true] },
  { id: 25, text: 'Remove odour, bacteria and viruses from car', tiers: [false, false, false, true] }
];

const annualCareData = [
  { 
    name: 'Bronze Package', 
    payFor: '3 Car Foam Wash', 
    comps: [
      { text: '1 Car Foam Wash', included: true },
      { text: '1 Body Wax Coat', included: true },
      { text: 'Two Wheeler Wash', included: false },
      { text: 'Two Wheeler Wax Coat', included: false },
      { text: 'Body Hybrid Ceramic Wax Coat', included: false },
      { text: 'Deep Cleaning', included: false },
    ] 
  },
  { 
    name: 'Silver Package', 
    payFor: '5 Car Foam Wash', 
    comps: [
      { text: '2 Car Foam Wash', included: true },
      { text: '2 Body Wax Coat', included: true },
      { text: 'Two Wheeler Wash', included: false },
      { text: 'Two Wheeler Wax Coat', included: false },
      { text: 'Body Hybrid Ceramic Wax Coat', included: false },
      { text: 'Deep Cleaning', included: false },
    ] 
  },
  { 
    name: 'Gold Package', 
    payFor: '8 Car Foam Wash', 
    comps: [
      { text: '4 Car Foam Wash', included: true },
      { text: '3 Body Wax Coat', included: true },
      { text: '1 Two Wheeler Wash', included: true },
      { text: '1 Two Wheeler Wax Coat', included: true },
      { text: 'Body Hybrid Ceramic Wax Coat', included: false },
      { text: 'Deep Cleaning', included: false },
    ] 
  },
  { 
    name: 'Diamond Package', 
    payFor: '10 Car Foam Wash', 
    comps: [
      { text: '6 Car Foam Wash', included: true },
      { text: '2 Body Wax Coat', included: true },
      { text: '2 Two Wheeler Wash', included: true },
      { text: '1 Two Wheeler Wax Coat', included: true },
      { text: '1 Body Hybrid Ceramic Wax Coat', included: true },
      { text: 'Deep Cleaning', included: false },
    ] 
  },
  { 
    name: 'Platinum Package', 
    payFor: '12 Car Foam Wash', 
    comps: [
      { text: '8 Car Foam Wash', included: true },
      { text: '3 Body Wax Coat', included: true },
      { text: '2 Two Wheeler Wash', included: true },
      { text: '1 Two Wheeler Wax Coat', included: true },
      { text: '1 Body Hybrid Ceramic Wax Coat', included: true },
      { text: '1 Deep Cleaning', included: true },
    ] 
  },
];

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState('wash');

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary-container/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none -mt-24 md:-mt-48 -mr-24 md:-mr-48"></div>
      <div className="absolute bottom-1/4 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none -ml-24 md:-ml-48"></div>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <header className="px-6 md:px-10 pt-32 pb-8 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end"
        >
          <motion.div variants={fadeInUp} className="md:col-span-8">
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-container"></span>
              Engineered Protection
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white animate-fade-in">
              Pricing &<br /><span className="text-transparent bg-clip-text text-gradient-subtle">Packages</span>
            </h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:col-span-4 pb-2">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed border-l-2 border-primary-container/30 pl-6">
              Select the ultimate protection suite for your vehicle. From essential ceramic maintenance to full-track durability coatings. All rates are inclusive of GST.
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* ═══════════════════════════════════════════════════════
          SERVICE PRICING TABS
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 mb-12 relative z-20">
        <div className="flex flex-wrap gap-2 md:gap-4 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full font-headline font-bold uppercase tracking-widest text-xs transition-colors duration-300 ${activeTab === tab.id ? 'text-white bg-white/10' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="activeTabBadge" className="absolute inset-0 border border-primary-container/50 rounded-full shadow-[0_0_15px_rgba(225,6,0,0.3)] pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DYNAMIC TAB CONTENT (PPF / CERAMIC / WASH)
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-20 relative z-10 min-h-[600px]">
        <AnimatePresence mode="wait">
          
          {/* PPF View */}
          {activeTab === 'ppf' && (
            <motion.div key="ppf" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/80">
                <div className="bg-primary-container/20 border-b border-primary-container/30 px-6 md:px-8 py-6">
                  <h2 className="text-xl md:text-2xl font-headline font-black uppercase text-white tracking-widest">PPF Paint Protection Film</h2>
                  <p className="text-primary-container text-xs font-bold uppercase tracking-[0.2em] mt-2">Garware TPU Premium</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-white/5 bg-black/40">
                        <th className="py-5 px-6 md:px-8 text-zinc-500 font-headline font-bold uppercase tracking-widest text-xs">Car Segment</th>
                        <th className="py-5 px-6 md:px-8 text-white font-headline font-black uppercase tracking-widest text-xs border-l border-white/5">5 Years Warranty</th>
                        <th className="py-5 px-6 md:px-8 text-white font-headline font-black uppercase tracking-widest text-xs border-l border-white/5">8 Years Warranty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ppfData.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 md:px-8 text-zinc-300 font-bold text-sm uppercase">{row.segment}</td>
                          <td className="py-5 px-6 md:px-8 font-black text-white text-lg border-l border-white/5 font-mono">{row.five}</td>
                          <td className="py-5 px-6 md:px-8 font-black text-white text-lg border-l border-white/5 font-mono">{row.eight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 md:px-8 py-5 bg-black/30 border-t border-white/5">
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="text-primary-container material-symbols-outlined text-sm">stars</span>
                    Complementary: Every 6 month wash and maintenance wax
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Ceramic View */}
          {activeTab === 'ceramic' && (
            <motion.div key="ceramic" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/80 mb-8">
                <div className="bg-primary-container/20 border-b border-primary-container/30 px-6 md:px-8 py-6">
                  <h2 className="text-xl md:text-2xl font-headline font-black uppercase text-white tracking-widest">Nano Ceramic Coating Package</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="border-b border-white/5 bg-black/40">
                        <th className="py-5 px-6 text-zinc-500 font-headline font-bold uppercase tracking-widest text-[10px]">Car Segment</th>
                        <th className="py-5 px-6 border-l border-white/5">
                          <div className="text-white font-headline font-black uppercase tracking-widest text-[10px] mb-1">Nano 9H</div>
                          <div className="text-zinc-500 text-[10px] font-bold uppercase">1 Yrs Warranty</div>
                        </th>
                        <th className="py-5 px-6 border-l border-white/5">
                          <div className="text-white font-headline font-black uppercase tracking-widest text-[10px] mb-1">Nano 9H+</div>
                          <div className="text-zinc-500 text-[10px] font-bold uppercase">2 Yrs Warranty</div>
                        </th>
                        <th className="py-5 px-6 border-l border-white/5">
                          <div className="text-white font-headline font-black uppercase tracking-widest text-[10px] mb-1">Nano 10H Graphene</div>
                          <div className="text-zinc-500 text-[10px] font-bold uppercase">3 Yrs Warranty</div>
                        </th>
                        <th className="py-5 px-6 border-l border-white/5 bg-primary-container/10">
                          <div className="text-white font-headline font-black uppercase tracking-widest text-[10px] mb-1">Graphene 10H</div>
                          <div className="text-primary-container text-[10px] font-bold uppercase relative">5 Yrs Warranty</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ceramicData.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 text-zinc-300 font-bold text-xs uppercase">{row.segment}</td>
                          <td className="py-5 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.oneYr}</td>
                          <td className="py-5 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.twoYr}</td>
                          <td className="py-5 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.threeYr}</td>
                          <td className="py-5 px-6 font-black text-white text-base border-l border-white/5 font-mono bg-primary-container/5">{row.fiveYr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ceramic Add-ons & Complementary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 glass-card rounded-2xl border border-white/10 p-6 bg-zinc-900/40">
                  <h3 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs mb-6">Underbody & Engine Info</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-white/10 pl-4">
                      <div className="text-white font-bold text-sm">Underbody Anti Rust</div>
                      <div className="text-zinc-400 text-xs">2 & 3 year warranty: ₹ 2999/-</div>
                      <div className="text-zinc-400 text-xs">5 year warranty: ₹ 3999/-</div>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4">
                      <div className="text-white font-bold text-sm">Engine Rodent Treatment</div>
                      <div className="text-zinc-400 text-xs">₹ 1999/- for all</div>
                    </div>
                    <div className="border-l-2 border-primary-container/30 pl-4 mt-6">
                      <div className="text-white font-bold text-xs uppercase">Two Wheeler Additions</div>
                      <div className="text-primary-container text-[10px] font-bold uppercase mt-1">Paint Double Coat | Plastic Trim Coat | Wheel Coat</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-8 glass-card rounded-2xl border border-white/10 p-6 bg-zinc-900/40">
                  <h3 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs mb-6">Complementary Services Included</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                      <div className="font-black text-white text-xs uppercase mb-2">Nano 9H</div>
                      <div className="text-zinc-400 text-xs">2 Washes</div>
                      <div className="text-zinc-500 text-[10px] mt-2 border-t border-white/10 pt-2">Paint Double Coat<br/>Glass Single Coat<br/>Alloys Single Coat<br/>Plastic Coat</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                      <div className="font-black text-white text-xs uppercase mb-2">Nano 9H+</div>
                      <div className="text-zinc-400 text-xs">4 Washes<br/>1 Maint. Coat</div>
                      <div className="text-zinc-500 text-[10px] mt-2 border-t border-white/10 pt-2">Paint Double Coat<br/>Glass Single Coat<br/>Alloys Single Coat<br/>Plastic Coat</div>
                    </div>
                    <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                      <div className="font-black text-white text-xs uppercase mb-2">10H Graphene</div>
                      <div className="text-zinc-400 text-xs">6 Washes<br/>2 Maint. Coats</div>
                      <div className="text-zinc-500 text-[10px] mt-2 border-t border-white/10 pt-2">Paint Triple Coat<br/>Glass Single Coat<br/>Alloys Single Coat<br/>Plastic Coat</div>
                    </div>
                    <div className="bg-primary-container/10 rounded-xl p-4 border border-primary-container/20">
                      <div className="font-black text-white text-xs uppercase mb-2">Graphene 10H</div>
                      <div className="text-primary-container text-xs">8 Washes<br/>4 Maint. Coats</div>
                      <div className="text-zinc-300 text-[10px] mt-2 border-t border-primary-container/20 pt-2">Paint Triple Coat<br/>Glass Single Coat<br/>Alloys Single Coat<br/>Plastic Coat</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-500">* Maintenance Coat Product is Complementary with minimal service charges of ₹ 1,299/-</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Wash View */}
          {activeTab === 'wash' && (
            <motion.div key="wash" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {/* Wash Pricing */}
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/80 mb-8">
                <div className="bg-primary-container/20 border-b border-primary-container/30 px-6 md:px-8 py-6">
                  <h2 className="text-xl md:text-2xl font-headline font-black uppercase text-white tracking-widest">Car Wash Packages</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/5 bg-black/40">
                        <th className="py-4 px-6 text-zinc-500 font-headline font-bold uppercase tracking-widest text-[10px]">Car Segment</th>
                        <th className="py-4 px-6 border-l border-white/5 text-white font-headline font-black uppercase tracking-widest text-[10px]">Foam Wash <span className="block text-zinc-500 font-normal mt-1">(Exterior Only)</span></th>
                        <th className="py-4 px-6 border-l border-white/5 text-white font-headline font-black uppercase tracking-widest text-[10px]">Basic <span className="block text-zinc-500 font-normal mt-1">(Regular Wash)</span></th>
                        <th className="py-4 px-6 border-l border-white/5 text-white font-headline font-black uppercase tracking-widest text-[10px]">Premium Clean <span className="block text-zinc-500 font-normal mt-1">(Platinum Wash)</span></th>
                        <th className="py-4 px-6 border-l border-white/5 text-white font-headline font-black uppercase tracking-widest text-[10px] bg-primary-container/10">Extreme Clean <span className="block text-primary-container font-normal mt-1">(Full Spa)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {washPricing.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-6 text-zinc-300 font-bold text-xs uppercase">{row.segment}</td>
                          <td className="py-4 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.foam}</td>
                          <td className="py-4 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.basic}</td>
                          <td className="py-4 px-6 font-black text-white text-base border-l border-white/5 font-mono">{row.premium}</td>
                          <td className="py-4 px-6 font-black text-white text-base border-l border-white/5 font-mono bg-primary-container/5">{row.extreme}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Checklist */}
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/80">
                <div className="px-6 md:px-8 py-6 border-b border-white/5 bg-black/60">
                  <h3 className="text-lg md:text-xl font-headline font-black uppercase text-white tracking-widest">Washing Details Comparison</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-black/40">
                        <th className="py-4 px-6 text-zinc-500 font-headline font-bold uppercase tracking-widest text-xs w-[40%]">Service Included</th>
                        <th className="py-4 px-4 text-center border-l border-white/5 text-zinc-400 font-headline font-bold text-[10px] uppercase">Foam Wash</th>
                        <th className="py-4 px-4 text-center border-l border-white/5 text-zinc-400 font-headline font-bold text-[10px] uppercase">Basic (In & Out)</th>
                        <th className="py-4 px-4 text-center border-l border-white/5 text-zinc-400 font-headline font-bold text-[10px] uppercase">Premium Clean</th>
                        <th className="py-4 px-4 text-center border-l border-white/5 text-primary-container font-headline font-black text-[10px] uppercase bg-primary-container/5">Extreme Clean</th>
                      </tr>
                    </thead>
                    <tbody>
                      {washChecklist.map((item, idx) => (
                        <tr key={item.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${idx % 2 === 0 ? 'bg-black/20' : ''}`}>
                          <td className="py-3 px-6 text-zinc-300 text-xs">
                            <span className="text-zinc-600 w-6 inline-block">{item.id}.</span> {item.text}
                          </td>
                          {item.tiers.map((checked, i) => (
                             <td key={i} className={`py-3 px-4 text-center border-l border-white/5 ${i === 3 ? 'bg-primary-container/5' : ''}`}>
                               {checked ? (
                                 <span className="material-symbols-outlined text-sm text-green-500" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                               ) : (
                                 <span className="material-symbols-outlined text-sm text-zinc-800">minimize</span>
                               )}
                             </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Interior & Exterior Detailing View */}
          {activeTab === 'detailing' && (
            <motion.div key="detailing" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {/* Pricing Table */}
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-zinc-950/80 mb-8">
                <div className="bg-primary-container/20 border-b border-primary-container/30 px-6 md:px-8 py-6">
                  <h2 className="text-xl md:text-2xl font-headline font-black uppercase text-white tracking-widest">Car Interior & Exterior Detailing</h2>
                  <p className="text-primary-container text-xs font-bold uppercase tracking-[0.2em] mt-2">Complete Interior + Exterior Package</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-white/5 bg-black/40">
                        <th className="py-5 px-6 md:px-8 text-zinc-500 font-headline font-bold uppercase tracking-widest text-xs">Car Segment</th>
                        <th className="py-5 px-6 md:px-8 text-white font-headline font-black uppercase tracking-widest text-xs border-l border-white/5">Package Price</th>
                        <th className="py-5 px-6 md:px-8 text-zinc-500 font-headline font-bold uppercase tracking-widest text-xs border-l border-white/5">Example Models</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailingPricing.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 md:px-8 text-zinc-300 font-bold text-sm uppercase">{row.segment}</td>
                          <td className="py-5 px-6 md:px-8 font-black text-white text-xl border-l border-white/5 font-headline">{row.price}</td>
                          <td className="py-5 px-6 md:px-8 text-zinc-500 text-xs border-l border-white/5">{row.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 md:px-8 py-4 bg-black/30 border-t border-white/5">
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="text-primary-container material-symbols-outlined text-sm">info</span>
                    All rates are inclusive of GST
                  </p>
                </div>
              </div>

              {/* Interior & Exterior Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Interior Detailing */}
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/40">
                  <div className="px-6 py-5 border-b border-white/5 bg-black/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-white text-lg" style={{fontVariationSettings: "'FILL' 1"}}>directions_car</span>
                      </div>
                      <div>
                        <h3 className="text-white font-headline font-black uppercase tracking-widest text-sm">Interior Detailing</h3>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Complete interior reconditioning</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                      Car interior detailing involves a thorough cleaning and reconditioning of the inside of your vehicle. It includes several steps to ensure every part of the interior is cleaned and restored to like-new condition.
                    </p>
                    <ul className="space-y-3">
                      {interiorDetailingServices.map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <span className="material-symbols-outlined text-green-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                          <span className="text-zinc-300 text-sm">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Exterior Detailing */}
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden bg-zinc-900/40">
                  <div className="px-6 py-5 border-b border-white/5 bg-black/40">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-white text-lg" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                      </div>
                      <div>
                        <h3 className="text-white font-headline font-black uppercase tracking-widest text-sm">Exterior Detailing</h3>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Complete exterior restoration</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                      Car exterior detailing is a comprehensive process that focuses on cleaning, restoring, and protecting the exterior surfaces of your vehicle. Here's a breakdown of the steps involved.
                    </p>
                    <ul className="space-y-3">
                      {exteriorDetailingServices.map((service, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <span className="material-symbols-outlined text-green-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                          <span className="text-zinc-300 text-sm">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Car Segment Reference */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 bg-zinc-900/40 mt-6">
                <h3 className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">info</span>
                  Car Segment Reference Guide
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {detailingPricing.map((row, i) => (
                    <div key={i} className="border border-white/5 rounded-xl p-4 bg-black/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-bold text-xs uppercase">{row.segment}</span>
                        <span className="text-primary-container font-black text-sm font-headline">{row.price}</span>
                      </div>
                      <p className="text-zinc-500 text-[10px] leading-relaxed">{row.examples}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ANNUAL CAR CARE PACKAGES
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="bg-primary-container/10 border border-primary-container/30 rounded-2xl p-6 md:p-10 mb-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-container/5 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-headline font-black uppercase text-white tracking-widest relative z-10 mb-2">Annual Car Care</h2>
            <div className="text-primary-container font-black uppercase tracking-[0.3em] text-lg md:text-2xl relative z-10">Almost 45% Discount</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {annualCareData.map((pkg, idx) => {
              const isTop = pkg.name === 'Diamond Package' || pkg.name === 'Platinum Package';
              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className={`glass-card rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 subtle-glow-hover hover:-translate-y-2 ${isTop ? 'border-primary-container/40 bg-zinc-950/90 shadow-[0_0_30px_rgba(225,6,0,0.1)]' : 'border-white/10 bg-zinc-900/40'}`}
                >
                  <div className={`py-6 px-4 text-center border-b ${isTop ? 'bg-primary-container/20 border-primary-container/30' : 'bg-black/50 border-white/5'}`}>
                    <h3 className={`font-headline font-black uppercase tracking-widest text-lg ${isTop ? 'text-white' : 'text-zinc-200'}`}>{pkg.name.split(' ')[0]}</h3>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${isTop ? 'text-primary-container' : 'text-zinc-500'}`}>Package</p>
                  </div>
                  
                  <div className="py-4 px-2 text-center border-b border-white/5 bg-zinc-800/20">
                    <div className="text-xs text-zinc-400 mb-1">Pay For</div>
                    <div className="text-white font-bold text-sm uppercase">{pkg.payFor}</div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center font-bold uppercase tracking-widest text-[10px] text-zinc-500 mb-4 border-b border-white/5 pb-2">Complementary</div>
                    <ul className="space-y-3 flex-grow">
                      {pkg.comps.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {item.included ? (
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                          ) : (
                            <span className="material-symbols-outlined text-red-500 text-sm mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>close</span>
                          )}
                          <span className={`text-xs leading-relaxed ${item.included ? 'text-zinc-300' : 'text-zinc-500'}`}>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 mt-auto">
                    <a href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center transition-all ${isTop ? 'bg-primary-container text-white hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                      Book Now
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <p className="text-center text-[10px] text-zinc-500 mt-10 uppercase tracking-widest">T&C Apply. Valid for 1 year only. Prior booking required.</p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
          <div className="lg:col-span-7 p-12 md:p-20 flex flex-col justify-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-6 text-white min-h-[120px]">Need a Custom <br /><span className="text-primary-container">Configuration?</span></h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed max-w-xl">Our specialist team can build a completely bespoke maintenance and protection package tailored perfectly to your vehicle's specific needs and storage conditions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://gkautobook.cloud/login" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all text-center shadow-lg">Book Now</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
            <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" alt="Luxury car being detailed under bright cinematic studio lights" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
