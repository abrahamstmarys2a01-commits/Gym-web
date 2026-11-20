import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Users, 
  Award, 
  Zap, 
  ChevronRight, 
  Calendar,
  Sparkles,
  Clock
} from 'lucide-react';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '../components/SocialIcons';
import SectionHeader from '../components/SectionHeader';
import { 
  gymInfo, 
  gymStats, 
  programsData, 
  trainersData, 
  membershipPlans, 
  whyChooseUs, 
  testimonialsData, 
  galleryData 
} from '../data/gymData';

export default function Home({ onOpenJoinModal, onSelectProgram, onSelectGalleryImage }) {
  // Take preview subsets for home page (curated equipment & action highlights)
  const previewPrograms = programsData.slice(0, 4);
  const previewTrainers = trainersData.slice(0, 3);
  const previewGallery = galleryData.filter((item) =>
    [1, 3, 13, 14, 15, 10].includes(item.id)
  );

  return (
    <div className="relative overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                         */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-width gym background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Titan Forge Gym Floor"
            className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          />
          {/* Multi-layered dark gradients for supreme contrast & neon atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/80 to-[#08090a]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08090a]/70 to-[#08090a]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B6FF00]/10 blur-[140px] pointer-events-none rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-[#B6FF00]/40 text-[#B6FF00] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(182,255,0,0.25)]"
          >
            <Flame className="w-4 h-4 text-[#B6FF00]" />
            <span>ELITE ATHLETIC FACILITY • CHENNAI & METRO</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white font-heading tracking-tight leading-[0.95] max-w-5xl"
          >
            BUILD YOUR <span className="text-[#B6FF00] drop-shadow-[0_0_35px_rgba(182,255,0,0.6)]">BODY</span>.<br />
            TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">LIFE</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-2xl text-zinc-300 font-medium max-w-2xl leading-relaxed"
          >
            Push Your Limits. Achieve Your Fitness Goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl font-normal"
          >
            15,000 sq ft world-standard strength arena, IFBB certified personal coaches, calibrated Olympic barbells, and customized nutrition science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenJoinModal && onOpenJoinModal('PREMIUM')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all duration-300 shadow-[0_0_30px_rgba(182,255,0,0.45)] hover:shadow-[0_0_45px_rgba(182,255,0,0.7)] flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Dumbbell className="w-5 h-5" />
              Join Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#B6FF00]/50 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              Explore Programs
            </Link>
          </motion.div>

          {/* Trust badges below hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B6FF00]" />
              No Hidden Joining Fees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B6FF00]" />
              Complimentary 1-Day VIP Pass
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B6FF00]" />
              Open 365 Days A Year
            </span>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest font-heading">
          <span>Scroll to Explore</span>
          <div className="w-5 h-9 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-[#B6FF00]"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. GYM STATISTICS SECTION                                */}
      {/* ======================================================== */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 bg-[#0f1115]/95 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
          {gymStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-3 relative group"
            >
              <div className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight group-hover:text-[#B6FF00] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-200 mt-1 uppercase font-heading tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5 hidden sm:block">
                {stat.desc}
              </div>
              {idx < gymStats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-zinc-800" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ABOUT INTRODUCTION SECTION                           */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Images Mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop"
                alt="Trainer coaching member"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0c0e12]/95 border border-[#B6FF00]/40 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-[240px] sm:max-w-[280px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#B6FF00]/10 border border-[#B6FF00] flex items-center justify-center text-[#B6FF00]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black font-heading text-white">#1 RATED</div>
                  <div className="text-[11px] text-[#B6FF00] font-bold uppercase">Fitness Destination</div>
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-snug">
                Recognized for elite coaching standards and clean luxury facilities.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Welcome to Titan Forge
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-heading leading-tight mb-6">
              MORE THAN A GYM. <br />
              A <span className="text-[#B6FF00]">SANCTUARY</span> FOR HIGH PERFORMERS.
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
              Founded on the belief that peak physical condition transforms every dimension of your life, Titan Forge provides an uncompromising environment built for results. No gimmicks, no waiting for racks—just scientific training methodologies and elite gear.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Certified Specialists</h4>
                  <p className="text-xs text-zinc-400">Coached by national athletes and sports science graduates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Olympic Grade Equipment</h4>
                  <p className="text-xs text-zinc-400">Eleiko barbells and Hammer Strength plate-loaded machinery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Customized Nutrition</h4>
                  <p className="text-xs text-zinc-400">Personalized macro plans matching your metabolic rate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-heading">Sauna & Recovery</h4>
                  <p className="text-xs text-zinc-400">Accelerate muscular recovery with cedarwood heat suites.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(182,255,0,0.3)]"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/trainers"
                className="px-6 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors text-sm"
              >
                Meet The Coaches
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. POPULAR FITNESS PROGRAMS                              */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeader
              badge="Targeted Systems"
              title="POPULAR FITNESS"
              highlight="PROGRAMS"
              subtitle="Precision regimens designed by world-class coaches to accelerate your strength, fat loss, and muscle mass goals."
              align="left"
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-[#B6FF00] text-sm font-heading font-bold uppercase text-white hover:text-[#B6FF00] transition-all"
              >
                View All 8 Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewPrograms.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(182,255,0,0.15)]"
              >
                <div>
                  {/* Image container with zoom effect */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 border border-[#B6FF00]/40 text-[#B6FF00] text-[11px] font-bold uppercase tracking-wider font-heading backdrop-blur-sm">
                      {program.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-black uppercase text-white font-heading group-hover:text-[#B6FF00] transition-colors leading-tight mb-2.5">
                      {program.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {program.shortDesc}
                    </p>

                    <div className="space-y-1.5 border-t border-zinc-800/80 pt-3 text-xs text-zinc-400">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Duration:</span>
                        <span className="text-zinc-300 font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Coach:</span>
                        <span className="text-zinc-300 font-semibold truncate max-w-[130px]">{program.trainer.split('(')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onSelectProgram && onSelectProgram(program)}
                    className="w-full py-2.5 px-4 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900/80 hover:bg-[#B6FF00] text-zinc-200 hover:text-black font-heading font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. WHY CHOOSE US                                         */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="The Titan Standard"
          title="WHY CHOOSE"
          highlight="TITAN FORGE"
          subtitle="We strip away the excuses and supply everything you need to forge an indestructible physique."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0f1115] border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-[#B6FF00]/50 transition-all duration-300 relative group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] mb-5 group-hover:scale-110 group-hover:bg-[#B6FF00] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold uppercase text-white font-heading mb-2.5">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FEATURED TRAINERS                                     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <SectionHeader
              badge="Elite Master Mentors"
              title="FEATURED"
              highlight="TRAINERS"
              subtitle="Train under certified IFBB pros, Olympic weightlifters, and CSCS certified physiological coaches."
              align="left"
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Link
                to="/trainers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-[#B6FF00] text-sm font-heading font-bold uppercase text-white hover:text-[#B6FF00] transition-all"
              >
                View All Trainers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewTrainers.map((trainer, idx) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/50 transition-all duration-300 shadow-xl"
              >
                {/* Trainer Photo */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-[#0e1015]/30 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-[#B6FF00]/40 text-[#B6FF00] text-xs font-bold uppercase tracking-wider font-heading backdrop-blur-md">
                    {trainer.experience}
                  </div>

                  {/* Social icons overlay */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <a
                      href={trainer.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={trainer.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase text-white font-heading">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-[#B6FF00] tracking-wider mb-3">
                    {trainer.role}
                  </p>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {trainer.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenJoinModal && onOpenJoinModal('PREMIUM')}
                    className="w-full py-2.5 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900 hover:bg-[#B6FF00] text-white hover:text-black font-heading font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Book Session with {trainer.name.split(' ')[0]}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. MEMBERSHIP PRICING PREVIEW                           */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          badge="Clear Transparent Pricing"
          title="MEMBERSHIP"
          highlight="TIERS"
          subtitle="Choose the commitment level that fits your goals. Upgrade or freeze anytime with zero penalties."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#141912] to-[#0c0e12] border-2 border-[#B6FF00] shadow-[0_0_35px_rgba(182,255,0,0.25)] scale-100 lg:-translate-y-2'
                  : 'bg-[#0f1115] border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B6FF00] text-black font-heading font-black text-xs uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-heading">
                  {plan.badge}
                </span>

                <h3 className="text-2xl font-black uppercase text-white font-heading mt-1 mb-3">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black font-heading text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {plan.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 border-t border-zinc-800/80 pt-5 mb-6">
                  {plan.features.slice(0, 5).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs">
                      {feat.included ? (
                        <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-0.5 bg-zinc-600"></span>
                        </div>
                      )}
                      <span className={feat.included ? 'text-zinc-200' : 'text-zinc-600'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenJoinModal && onOpenJoinModal(plan.name)}
                className={`w-full py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.highlight
                    ? 'bg-[#B6FF00] hover:bg-[#a6ec00] text-black shadow-[0_0_20px_rgba(182,255,0,0.4)]'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                Join Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/membership"
            className="inline-flex items-center gap-2 text-sm text-[#B6FF00] hover:underline font-semibold"
          >
            Compare All Membership Benefits & FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. TESTIMONIALS SECTION                                  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0c10] border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Verified Transformations"
            title="WHAT OUR"
            highlight="MEMBERS SAY"
            subtitle="Real progress from dedicated individuals who chose to invest in their physical potential."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#B6FF00]/40 transition-colors shadow-lg"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#B6FF00] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B6FF00]" />
                    ))}
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{review.quote}"
                  </p>

                  <div className="inline-block px-3 py-1 rounded-lg bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold mb-6 font-heading">
                    🎯 Result: {review.transformation}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#B6FF00]/50"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm font-heading uppercase">
                      {review.name}
                    </h4>
                    <p className="text-zinc-500 text-xs">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. GALLERY PREVIEW SECTION                               */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            badge="The Titan Experience"
            title="FACILITY & ACTION"
            highlight="GALLERY"
            subtitle="Take a visual tour inside our cutting-edge training floors, equipment racks, and athletic zones."
            align="left"
            className="mb-0"
          />
          <div className="mt-6 md:mt-0">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 hover:border-[#B6FF00] text-sm font-heading font-bold uppercase text-white hover:text-[#B6FF00] transition-all"
            >
              Open Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Gallery mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {previewGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => onSelectGalleryImage && onSelectGalleryImage(idx)}
              className="group relative h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6" />
              
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] font-bold text-[#B6FF00] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white text-sm sm:text-base font-bold font-heading uppercase leading-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FINAL CTA SECTION                                    */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black border-t border-zinc-800/80">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B6FF00]/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4" />
            Limited Time Opportunity
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-6">
            READY TO TRANSFORM? <br />
            CLAIM YOUR <span className="text-[#B6FF00] drop-shadow-[0_0_25px_rgba(182,255,0,0.5)]">1-DAY FREE TRIAL</span> PASS
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience our calibrated Olympic weights, private steam rooms, and coach assessment with zero commitment. Stop waiting for Monday—start today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-black uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all duration-300 shadow-[0_0_30px_rgba(182,255,0,0.5)] hover:shadow-[0_0_45px_rgba(182,255,0,0.8)] flex items-center justify-center gap-2 text-base cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5" />
              Claim Free 1-Day Pass
            </button>

            <a
              href={`https://wa.me/${gymInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hi Titan Forge, I would like to schedule a tour and try the gym today.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors flex items-center justify-center gap-2 text-base"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 text-xs text-zinc-500">
            Open Monday - Saturday: 5:00 AM - 11:00 PM | Sunday: 6:00 AM - 8:00 PM
          </div>
        </div>
      </section>

    </div>
  );
}
