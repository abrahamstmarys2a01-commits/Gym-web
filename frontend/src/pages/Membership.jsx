import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  CreditCard,
  Flame,
  Zap
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { membershipPlans, faqsData, gymInfo } from '../data/gymData';

export default function Membership({ onOpenJoinModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const comparisonFeatures = [
    { name: "Gym Floor Access", basic: "Limited", standard: "Full Access", premium: "VIP Priority", annual: "VIP Priority" },
    { name: "Olympic Free Weights & Racks", basic: true, standard: true, premium: true, annual: true },
    { name: "Cardio Theater & Woodway Treadmills", basic: true, standard: true, premium: true, annual: true },
    { name: "Workout Guidance & Floor Support", basic: "Basic", standard: "Full", premium: "Dedicated 1-on-1", annual: "Dedicated 1-on-1" },
    { name: "Custom Diet & Calorie Protocols", basic: false, standard: "Macro Guide", premium: "Tailored Weekly", annual: "Tailored Weekly" },
    { name: "Biometric InBody Composition Scans", basic: "Paid Add-on", standard: "Quarterly", premium: "Bi-Weekly", annual: "Monthly VIP" },
    { name: "Finnish Dry Sauna & Steam Suites", basic: false, standard: false, premium: true, annual: "Unlimited" },
    { name: "Locker & Rainfall Shower Facilities", basic: true, standard: true, premium: true, annual: "Dedicated VIP Locker" },
    { name: "Free Guest Passes", basic: false, standard: false, premium: "1 Pass / Mo", annual: "2 Passes / Mo" },
    { name: "Membership Pause / Freeze Policy", basic: "No", standard: "Up to 14 Days", premium: "Up to 30 Days", annual: "Up to 60 Days" }
  ];

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
              alt="Gym Membership"
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <CreditCard className="w-3.5 h-3.5" />
              Transparent Investment
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              MEMBERSHIP <span className="text-[#B6FF00]">PLANS</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              No hidden admission fees. Straightforward pricing designed to fit your timeline, with personalized coaching and nutrition options included.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Four Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        
        {/* Responsive grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {membershipPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#141a10] via-[#0d1016] to-[#0a0c10] border-2 border-[#B6FF00] shadow-[0_0_40px_rgba(182,255,0,0.3)] scale-100 lg:-translate-y-3'
                  : 'bg-[#0e1015] border border-zinc-800 hover:border-zinc-700 shadow-xl'
              }`}
            >
              {/* Highlight badge on Premium plan */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B6FF00] text-black font-heading font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  Most Popular Transformation
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B6FF00] font-heading">
                  {plan.badge}
                </span>

                <h3 className="text-3xl font-black uppercase text-white font-heading mt-1 mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-zinc-800">
                  <span className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {plan.period}
                  </span>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      {feat.included ? (
                        <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="w-1.5 h-0.5 bg-zinc-700"></span>
                        </div>
                      )}
                      <span className={feat.included ? 'text-zinc-200' : 'text-zinc-600'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Now CTA */}
              <button
                onClick={() => onOpenJoinModal && onOpenJoinModal(plan.name)}
                className={`w-full py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.highlight
                    ? 'bg-[#B6FF00] hover:bg-[#a6ec00] text-black shadow-[0_0_25px_rgba(182,255,0,0.45)] hover:shadow-[0_0_35px_rgba(182,255,0,0.7)]'
                    : 'bg-zinc-800 hover:bg-[#B6FF00] text-white hover:text-black'
                }`}
              >
                Join {plan.name}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B6FF00]" />
            Pay monthly, quarterly, or yearly via Card, UPI, or Cash
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#B6FF00]" />
            100% Satisfaction Guarantee on Equipment Cleanliness
          </span>
        </div>

      </div>

      {/* 3. Detailed Side-by-Side Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <SectionHeader
          badge="In-Depth Breakdown"
          title="PLAN FEATURE"
          highlight="COMPARISON"
          subtitle="Review every benefit side-by-side to choose the exact package matching your fitness goals."
        />

        <div className="bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-300 border-collapse">
              <thead>
                <tr className="bg-zinc-900/90 border-b border-zinc-800 text-xs font-heading uppercase tracking-wider text-white">
                  <th className="py-4 px-6 font-bold">Feature / Amenity</th>
                  <th className="py-4 px-4 font-bold text-center">Basic (₹999)</th>
                  <th className="py-4 px-4 font-bold text-center">Standard (₹2,499)</th>
                  <th className="py-4 px-4 font-bold text-center text-[#B6FF00] bg-[#B6FF00]/5">Premium (₹4,499)</th>
                  <th className="py-4 px-4 font-bold text-center">Annual (₹7,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-xs sm:text-sm">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-white">
                      {row.name}
                    </td>
                    
                    {/* Basic */}
                    <td className="py-3.5 px-4 text-center">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF00] mx-auto" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-zinc-400">{row.basic}</span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className="py-3.5 px-4 text-center">
                      {typeof row.standard === 'boolean' ? (
                        row.standard ? (
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF00] mx-auto" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-zinc-300 font-medium">{row.standard}</span>
                      )}
                    </td>

                    {/* Premium (Highlighted column) */}
                    <td className="py-3.5 px-4 text-center bg-[#B6FF00]/5 font-semibold text-[#B6FF00]">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF00] mx-auto" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span>{row.premium}</span>
                      )}
                    </td>

                    {/* Annual */}
                    <td className="py-3.5 px-4 text-center">
                      {typeof row.annual === 'boolean' ? (
                        row.annual ? (
                          <CheckCircle2 className="w-4 h-4 text-[#B6FF00] mx-auto" />
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )
                      ) : (
                        <span className="text-zinc-300 font-medium">{row.annual}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. Membership FAQs Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Got Questions?"
          title="FREQUENTLY ASKED"
          highlight="QUESTIONS"
          subtitle="Everything you need to know about joining, membership freeze rules, and facility amenities."
        />

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0e1015] border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold uppercase text-white font-heading">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-[#B6FF00] shrink-0 border border-zinc-800">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 sm:px-6 pb-6 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/80 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
