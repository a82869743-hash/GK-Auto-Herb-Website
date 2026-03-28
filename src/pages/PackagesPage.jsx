import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const annualCareData = [
  { name: 'Bronze Package', payFor: '3 Car Foam Wash', comps: ['1 Car Foam Wash', '1 Body Wax Coat'] },
  { name: 'Silver Package', payFor: '5 Car Foam Wash', comps: ['2 Car Foam Wash', '2 Body Wax Coat', '1 Two Wheeler Wash', '1 Two Wheeler Wax Coat', '1 Body Hybrid Ceramic Wax Coat', 'Deep Cleaning'] },
  { name: 'Gold Package', payFor: '8 Car Foam Wash', comps: ['4 Car Foam Wash', '3 Body Wax Coat', '1 Two Wheeler Wash', '1 Two Wheeler Wax Coat', '1 Body Hybrid Ceramic Wax Coat', 'Deep Cleaning'] },
  { name: 'Diamond Package', payFor: '10 Car Foam Wash', comps: ['6 Car Foam Wash', '2 Body Wax Coat', '2 Two Wheeler Wash', '1 Two Wheeler Wax Coat', '1 Body Hybrid Ceramic Wax Coat', 'Deep Cleaning'] },
  { name: 'Platinum Package', payFor: '12 Car Foam Wash', comps: ['8 Car Foam Wash', '3 Body Wax Coat', '2 Two Wheeler Wash', '1 Two Wheeler Wax Coat', '1 Body Hybrid Ceramic Wax Coat', '1 Deep Cleaning'] },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 blur-[150px] rounded-full -z-10 pointer-events-none -mt-48 -mr-48"></div>
      
      {/* Hero */}
      <section className="relative pt-32 pb-8">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-screen-2xl mx-auto px-6 md:px-10 relative z-10"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-primary-container"></span>
            <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-xs">Engineered Protection</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white max-w-5xl animate-fade-in">
            Annual <br /><span className="text-transparent bg-clip-text text-gradient-subtle">Packages</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-primary-container/30 pl-6">
            Select the ultimate protection suite for your vehicle. From essential ceramic maintenance to full-track durability coatings. All rates are inclusive of GST.
          </motion.p>
        </motion.div>
      </section>

      {/* Dynamic Content */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-32 relative z-10 min-h-[600px] pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
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
                          <span className="material-symbols-outlined text-green-500 text-sm mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                          <span className="text-zinc-300 text-xs leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 mt-auto">
                    <Link to="/contact" className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center transition-all ${isTop ? 'bg-primary-container text-white hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                      Select Plan
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <p className="text-center text-[10px] text-zinc-500 mt-10 uppercase tracking-widest">T&C Apply. Valid for 1 year only. Prior booking required.</p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-10 pb-32">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none"></div>
          <div className="lg:col-span-7 p-12 md:p-20 flex flex-col justify-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-6 text-white min-h-[120px]">Need a Custom <br /><span className="text-primary-container">Configuration?</span></h2>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed max-w-xl">Our specialist team can build a completely bespoke maintenance and protection package tailored perfectly to your vehicle's specific needs and storage conditions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary-container text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all text-center shadow-lg">Consult Expert</Link>
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
