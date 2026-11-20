import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dumbbell, 
  Clock, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Flame,
  Search,
  Filter
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { programsData, gymInfo } from '../data/gymData';

export default function Programs({ onOpenJoinModal, onSelectProgram }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Fat Loss',
    'Hypertrophy',
    'Strength',
    'Cardio',
    'Elite Coaching',
    'Athletics',
    'CrossFit',
    'Mind & Mobility'
  ];

  const filteredPrograms = programsData.filter((program) => {
    const matchesCategory =
      activeCategory === 'All' || program.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1800&auto=format&fit=crop"
              alt="Fitness Programs"
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <Flame className="w-3.5 h-3.5" />
              Specialized Fitness Disciplines
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              PERFORMANCE <span className="text-[#B6FF00]">PROGRAMS</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Every body is unique. Choose from 8 comprehensive programs engineered to target fat loss, maximum muscular density, athletic power, or restorative longevity.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0e1015] border border-zinc-800 p-4 rounded-2xl">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#B6FF00] text-black shadow-[0_0_15px_rgba(182,255,0,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]"
            />
          </div>

        </div>
      </div>

      {/* 3. Program Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredPrograms.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(182,255,0,0.15)]"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/85 border border-[#B6FF00]/40 text-[#B6FF00] text-[11px] font-bold uppercase tracking-wider font-heading backdrop-blur-sm">
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

                    {/* Metadata tags */}
                    <div className="space-y-2 border-t border-zinc-800/80 pt-3.5 text-xs text-zinc-400 mb-2">
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Duration:</span>
                        <span className="text-zinc-300 font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Intensity:</span>
                        <span className="text-[#B6FF00] font-semibold">{program.intensity.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-500">Coach:</span>
                        <span className="text-zinc-300 font-semibold truncate max-w-[130px]">{program.trainer.split('(')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 sm:p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectProgram && onSelectProgram(program)}
                    className="w-full py-2.5 px-4 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900 hover:bg-[#B6FF00] text-zinc-200 hover:text-black font-heading font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenJoinModal && onOpenJoinModal('PREMIUM')}
                    className="w-full py-2 px-4 rounded-xl text-zinc-400 hover:text-[#B6FF00] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#0e1015] border border-zinc-800 rounded-3xl p-8">
            <Dumbbell className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold uppercase text-white font-heading">No Programs Found</h3>
            <p className="text-zinc-400 text-sm mt-1">Try resetting your filter or searching for another term.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#B6FF00] text-black text-xs font-bold uppercase font-heading rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#11141a] to-[#161c12] border border-zinc-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase text-[#B6FF00] tracking-wider font-heading mb-1 block">
              Not Sure Which Program Fits You?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading leading-tight mb-2">
              GET A FREE COACH ASSESSMENT
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Sit down with a senior trainer for a 20-minute movement screening, body composition scan, and personalized program recommendation with zero pressure.
            </p>
          </div>

          <button
            onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
            className="shrink-0 px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_20px_rgba(182,255,0,0.35)] cursor-pointer text-sm"
          >
            Book Free Assessment
          </button>
        </div>
      </div>

    </div>
  );
}
