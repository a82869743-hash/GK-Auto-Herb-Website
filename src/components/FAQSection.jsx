import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "What makes GK Auto Herb different from a regular detailing studio?",
    answer: "At GK Auto Herb, we don’t offer “car cleaning”—we deliver automotive surface restoration and protection at a luxury standard. Every service is executed using imported products, precision tools, and trained specialists, ensuring your vehicle receives treatment comparable to premium global detailing studios."
  },
  {
    question: "Is detailing really necessary for high-end vehicles?",
    answer: "Absolutely. Premium vehicles require higher levels of care and protection due to sensitive paint finishes and advanced materials. Our detailing services are designed to preserve originality, enhance gloss, and maintain long-term value."
  },
  {
    question: "Which is better: Ceramic Coating, Graphene Coating, or PPF?",
    answer: "Each serves a different purpose:\n\n• Ceramic Coating → Enhances gloss + basic protection\n• Graphene Coating → Advanced durability + heat resistance\n• PPF (Paint Protection Film) → Maximum physical protection\n\nFor luxury vehicles, we often recommend a combination approach for complete protection."
  },
  {
    question: "How long do your coatings last?",
    answer: "Our premium coatings are engineered for longevity:\n\n• Ceramic: up to 3–5 years\n• Graphene: up to 5+ years\n\nDurability depends on usage and maintenance, and we guide you through both."
  },
  {
    question: "Will detailing remove scratches completely?",
    answer: "We specialize in paint correction techniques that remove up to 90–95% of visible imperfections. For deeper damage, we provide honest consultation and the best possible restoration approach."
  },
  {
    question: "How long will my car stay at your studio?",
    answer: "• Detailing & correction: 6–10 hours\n• Coatings: 1–2 days\n• PPF installations: 2–3 days\n\nWe prioritize quality over speed, ensuring flawless results."
  },
  {
    question: "Are your products safe for luxury cars?",
    answer: "Yes. We use only international-grade, paint-safe, and surface-tested products specifically designed for premium vehicles like BMW, Mercedes, Audi, and more."
  },
  {
    question: "Do you provide warranty on your services?",
    answer: "Yes. Our coating packages include structured warranty support, along with recommended maintenance plans to ensure long-term performance."
  },
  {
    question: "Can I opt for doorstep services?",
    answer: "We offer select doorstep services for convenience. However, for high-end treatments like coatings and PPF, we recommend our controlled studio environment for best results."
  },
  {
    question: "What is included in your interior detailing service?",
    answer: "Our interior detailing is a complete cabin rejuvenation process, including:\n\n• Deep extraction cleaning\n• Leather conditioning\n• Surface sanitization\n• Odor neutralization\n\nThe goal is to restore a luxury, factory-fresh feel."
  },
  {
    question: "How do I maintain my car after detailing?",
    answer: "We provide a post-service care guide and offer Annual Maintenance Plans (AMC) to ensure your car retains its finish and protection year-round."
  },
  {
    question: "Is your service worth the investment?",
    answer: "For our clients, it’s not an expense—it’s asset protection. Our services:\n\n• Preserve resale value\n• Protect original paint\n• Maintain showroom aesthetics"
  },
  {
    question: "Do I need an appointment before visiting?",
    answer: "Yes. We operate on a pre-booking basis to ensure dedicated time and attention for every vehicle."
  },
  {
    question: "What kind of clients do you typically serve?",
    answer: "We cater to car enthusiasts, luxury vehicle owners, and individuals who value precision, aesthetics, and long-term care."
  },
  {
    question: "How can I book a service with GK Auto Herb?",
    answer: "You can schedule your appointment via:\n\n• Website booking\n• Direct call\n• WhatsApp consultation\n\nOur team will guide you through the best package for your vehicle."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary-container/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-zinc-500 font-headline font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary-container"></span>
             Knowledge Base
            <span className="w-8 h-px bg-primary-container"></span>
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black font-headline uppercase tracking-tighter text-white mb-4">
            Frequently Asked <span className="text-primary-container">Questions</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Everything you need to know about our premium detailing services, protective coatings, and why GK Auto Herb is the ultimate choice for your luxury vehicle.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.05 }}
              className={`glass-card border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary-container/30 bg-zinc-900/60 shadow-[0_0_30px_-5px_rgba(225,6,0,0.1)]' : 'border-white/5 bg-zinc-950/40 hover:border-white/10 hover:bg-zinc-900/40'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-6 md:px-8 flex justify-between items-center gap-4 focus:outline-none"
              >
                <h3 className={`font-headline font-bold text-sm md:text-base uppercase tracking-wide transition-colors ${openIndex === index ? 'text-white' : 'text-primary-container'}`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary-container text-white' : 'bg-white/5 text-zinc-400'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light whitespace-pre-line border-t border-white/5 pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
