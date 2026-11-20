import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Dumbbell,
  Users,
  Building,
  Flame,
  Zap
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { gymInfo, facilitiesData, whyChooseUs, gymStats } from '../data/gymData';

export default function About({ onOpenJoinModal }) {
  const storyMilestones = [
    {
      year: "2016",
      title: "The Genesis",
      desc: "Founded as a hardcore 3,000 sq ft underground strength pit with just 4 squat racks, Eleiko iron plates, and a relentless focus on raw athletic grit."
    },
    {
      year: "2019",
      title: "First Major Expansion",
      desc: "Expanded to 8,000 sq ft, introduced metabolic conditioning, and signed national-level coaches to pioneer scientific body recomposition."
    },
    {
      year: "2022",
      title: "CrossFit & Recovery Wing",
      desc: "Added dedicated indoor sprint turf, Woodway cardio suites, and dry cedarwood Finnish saunas for complete athletic longevity."
    },
    {
      year: "Present",
      title: "Titan Arena Flagship",
      desc: "15,000 sq ft state-of-the-art flagship center serving 15,000+ active athletes with custom nutrition and Olympic barbell zones."
    }
  ];

  const equipmentBrands = [
    { name: "Eleiko", type: "Barbells & Plates", desc: "IWF and IPF certified Swedish calibrated precision equipment" },
    { name: "Hammer Strength", type: "Plate-Loaded Machines", desc: "Biomechanically accurate converging and diverging range of motion" },
    { name: "Woodway", type: "Curved Non-Motorized Treadmills", desc: "Low-impact running surfaces engineered to burn 30% more calories" },
    { name: "Concept2", type: "Rowers & SkiErgs", desc: "Gold standard indoor cardiovascular conditioning telemetry" },
    { name: "InBody 770", type: "Biometric Scanners", desc: "Clinical grade multi-frequency body water and segmental muscle analysis" },
    { name: "Rogue Fitness", type: "Monster Racks & Rig Systems", desc: "Industrial strength 3x3 11-gauge steel power stations" }
  ];

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1800&auto=format&fit=crop"
              alt="Titan Forge Facility"
              className="w-full h-full object-cover opacity-25 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <Building className="w-3.5 h-3.5" />
              About Titan Forge
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              FORGING <span className="text-[#B6FF00]">STRENGTH</span>, RESILIENCE & INTEGRITY
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              We engineered Titan Forge to eliminate distractions, provide elite equipment, and foster an environment where serious trainees unleash their highest physical capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Introduction & Mission/Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#B6FF00]/40 transition-colors"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] mb-6 shadow-[0_0_20px_rgba(182,255,0,0.2)]">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                Our Purpose
              </span>
              <h2 className="text-3xl font-black uppercase text-white font-heading mt-1 mb-4">
                OUR MISSION
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                To empower everyday individuals and elite athletes alike through science-backed resistance training, customized nutrition accountability, and world-standard facilities that inspire relentless consistency and physical self-mastery.
              </p>
            </div>

            <div className="space-y-2.5 pt-6 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Zero fluff, evidence-based training methods only</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Uncompromising safety and biomechanical precision</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>An inclusive, supportive, high-energy community</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#B6FF00]/40 transition-colors"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] mb-6 shadow-[0_0_20px_rgba(182,255,0,0.2)]">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                The Future
              </span>
              <h2 className="text-3xl font-black uppercase text-white font-heading mt-1 mb-4">
                OUR VISION
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                To establish the benchmark for fitness excellence across India—a training haven where modern biomechanics meet old-school grit, redefining how gym communities support lasting mental and physical transformation.
              </p>
            </div>

            <div className="space-y-2.5 pt-6 border-t border-zinc-800 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Continual investment in competition-grade hardware</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Ongoing international certifications for all training staff</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <span>Holistic wellness integrating physical recovery & nutrition</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. Our Story Timeline */}
      <div className="bg-[#0a0c10] border-y border-zinc-800/80 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="The Evolution"
            title="OUR"
            highlight="STORY"
            subtitle="How a dedicated strength basement became the benchmark training arena for over 15,000 athletes."
          />

          <div className="relative border-l-2 border-[#B6FF00]/30 ml-4 sm:ml-32 space-y-12 sm:space-y-16">
            {storyMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Year tag on desktop positioned on the left of timeline line */}
                <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right font-heading font-black text-2xl text-[#B6FF00]">
                  {item.year}
                </div>

                {/* Glowing Node on line */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090a] border-2 border-[#B6FF00] shadow-[0_0_10px_#B6FF00]" />

                <div className="bg-[#0f1115] border border-zinc-800/90 rounded-2xl p-6 hover:border-[#B6FF00]/40 transition-colors">
                  <h3 className="text-xl font-bold uppercase text-white font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Gym Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <SectionHeader
          badge="World Class Amenities"
          title="GYM"
          highlight="FACILITIES"
          subtitle="Explore the carefully zoned spaces purpose-built for heavy lifting, athletic speed, metabolic sweat, and restorative recovery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilitiesData.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase text-white font-heading mb-2.5">
                    {fac.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Premium Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. Modern Equipment Section */}
      <div className="bg-[#0a0c10] border-y border-zinc-800/80 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Engineering The Best"
            title="MODERN"
            highlight="EQUIPMENT"
            subtitle="We exclusively partner with the gold standards of competitive athletics to ensure biomechanical safety and maximal muscle recruitment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentBrands.map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-[#0f1115] border border-zinc-800 rounded-2xl p-6 hover:border-[#B6FF00]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-white font-heading uppercase tracking-wide">
                    {brand.name}
                  </span>
                  <span className="text-[11px] font-bold text-[#B6FF00] bg-[#B6FF00]/10 px-2.5 py-0.5 rounded-full border border-[#B6FF00]/30 font-heading">
                    {brand.type}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {brand.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Why Choose Us Recap & CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#11141a] via-[#0f1218] to-[#141a10] border border-zinc-800 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white font-heading leading-tight mb-4">
              EXPERIENCE THE <span className="text-[#B6FF00]">TITAN</span> DIFFERENCE
            </h2>
            <p className="text-zinc-300 text-base mb-8 leading-relaxed">
              Take the first step. Schedule a personalized walkthrough with a coach and receive an in-depth biometric body scan completely on the house.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_20px_rgba(182,255,0,0.35)] cursor-pointer"
              >
                Claim Free 1-Day Pass
              </button>
              <Link
                to="/membership"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
              >
                View Memberships
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
