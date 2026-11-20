import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Images, 
  Flame, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Dumbbell
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { galleryData, transformationsData } from '../data/gymData';

export default function Gallery({ onSelectGalleryImage, onOpenJoinModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Interior',
    'Workouts',
    'Equipment',
    'Training Sessions',
    'Transformations'
  ];

  const filteredGallery = galleryData.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Transformations') return false; // Handled separately in dedicated transformation section
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
              alt="Titan Forge Arena"
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <Images className="w-3.5 h-3.5" />
              Visual Tour & Achievements
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              TITAN <span className="text-[#B6FF00]">GALLERY</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Step into the energy of our 15,000 sq ft fitness arena. View our calibrated competition stations, intense squad training sessions, and inspiring real-life member transformations.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? galleryData.length
                : cat === 'Transformations'
                ? transformationsData.length
                : galleryData.filter((i) => i.category.toLowerCase() === cat.toLowerCase()).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat
                    ? 'bg-[#B6FF00] text-black shadow-[0_0_15px_rgba(182,255,0,0.3)]'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === cat ? 'bg-black text-[#B6FF00]' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Gallery Grid (When not filtering exclusively for Transformations) */}
      {activeCategory !== 'Transformations' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                onClick={() => onSelectGalleryImage && onSelectGalleryImage(galleryData.indexOf(item))}
                className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-xl hover:border-[#B6FF00]/50 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-zinc-700/80 text-white group-hover:text-black group-hover:bg-[#B6FF00] group-hover:border-[#B6FF00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] font-bold text-[#B6FF00] uppercase tracking-wider mb-1 font-heading">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold font-heading uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Transformation Showcase Section */}
      {(activeCategory === 'All' || activeCategory === 'Transformations') && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
          <SectionHeader
            badge="Inspiring Milestones"
            title="REAL LIFE MEMBER"
            highlight="TRANSFORMATIONS"
            subtitle="Proof that science-based consistency beats guesswork every time. Here is what dedication looks like."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationsData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/40 transition-colors shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Photo with duration badge */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
                    
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#B6FF00] text-black text-xs font-black uppercase font-heading">
                      {item.duration}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase text-white font-heading">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold uppercase text-[#B6FF00] tracking-wider mb-4">
                      {item.program}
                    </p>

                    {/* Before vs After Stats Box */}
                    <div className="grid grid-cols-2 gap-2 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3 mb-4 text-xs">
                      <div>
                        <span className="text-zinc-500 block uppercase font-heading">Before:</span>
                        <span className="text-zinc-300 font-semibold">{item.before}</span>
                      </div>
                      <div className="border-l border-zinc-800 pl-2">
                        <span className="text-[#B6FF00] block uppercase font-heading">After:</span>
                        <span className="text-white font-bold">{item.after}</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-xs italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenJoinModal && onOpenJoinModal('PREMIUM')}
                    className="w-full py-2.5 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900 hover:bg-[#B6FF00] text-white hover:text-black font-heading font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Start Your Transformation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Bottom Gallery Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1115] border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
          <Sparkles className="w-10 h-10 text-[#B6FF00] mx-auto mb-3" />
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mb-2">
            WANT TO EXPERIENCE IT IN PERSON?
          </h3>
          <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
            Pictures can only show so much. Visit us today for a guided tour of the arena floor, sample a recovery shake, and meet our head trainers.
          </p>
          <button
            onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
            className="px-8 py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_20px_rgba(182,255,0,0.35)] cursor-pointer text-sm"
          >
            Claim 1-Day Free Trial Pass
          </button>
        </div>
      </div>

    </div>
  );
}
