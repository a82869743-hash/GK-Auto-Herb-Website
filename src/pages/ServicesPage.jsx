import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const tabs = [
  { id: 'ppf', label: 'PPF Films' },
  { id: 'ceramic', label: 'Ceramic Coatings' },
  { id: 'wash', label: 'Wash & Detail' },
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

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('ppf');

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/10 blur-[150px] rounded-full -z-10 pointer-events-none -mt-48 -mr-48"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -z-10 pointer-events-none -ml-48"></div>

      {/* Hero */}
      <header className="px-6 md:px-10 pt-32 pb-8 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end"
        >
          <motion.div variants={fadeInUp} className="md:col-span-8">
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-container"></span>
              Precision Detailing
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white animate-fade-in">
              The <span className="text-transparent bg-clip-text text-gradient-subtle">Elite</span><br />Standard.
            </h1>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:col-span-4 pb-2">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed border-l-2 border-primary-container/30 pl-6">
              Protecting your masterpiece with aerospace-grade coatings and obsessive attention to detail. Every curve deserves absolute perfection.
            </p>
          </motion.div>
        </motion.div>
      </header>

      {/* Tabs */}
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

      {/* Dynamic Content */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-32 relative z-10 min-h-[600px]">
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

        </AnimatePresence>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-10 pb-32 max-w-screen-2xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="relative bg-zinc-900 overflow-hidden rounded-3xl p-12 md:p-20 flex flex-col items-center text-center border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-black pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">Experience <br/> True <span className="text-primary-container">Perfection</span></h2>
            <p className="text-zinc-400 mb-10 text-lg">Join our exclusive circle of car enthusiasts who trust GK AUTO HERB with their most prized assets.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Request a Quote
              </Link>
              <Link to="/packages" className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
                View Packages
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
