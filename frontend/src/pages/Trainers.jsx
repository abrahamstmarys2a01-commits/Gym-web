import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  Flame 
} from 'lucide-react';
import { InstagramIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from '../components/SocialIcons';
import SectionHeader from '../components/SectionHeader';
import { trainersData, gymInfo } from '../data/gymData';

export default function Trainers({ onOpenJoinModal }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const categories = ['All', 'Hypertrophy', 'Strength', 'Fat Loss', 'CrossFit', 'Mobility'];

  const filteredTrainers = trainersData.filter((trainer) => {
    if (selectedSpecialty === 'All') return true;
    return trainer.specialties.some((s) =>
      s.toLowerCase().includes(selectedSpecialty.toLowerCase())
    ) || trainer.role.toLowerCase().includes(selectedSpecialty.toLowerCase());
  });

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1800&auto=format&fit=crop"
              alt="Trainers team"
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <Users className="w-3.5 h-3.5" />
              World Class Faculty
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              EXPERT <span className="text-[#B6FF00]">TRAINERS</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Meet our team of IFBB Pros, national powerlifting champions, and CSCS biomechanics specialists committed to mentoring you every step of your fitness journey.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSpecialty(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedSpecialty === cat
                  ? 'bg-[#B6FF00] text-black shadow-[0_0_15px_rgba(182,255,0,0.3)]'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Trainers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden hover:border-[#B6FF00]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Photo & badges */}
                <div className="relative h-88 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-[#0e1015]/30 to-transparent" />

                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/85 border border-[#B6FF00]/40 text-[#B6FF00] text-xs font-bold uppercase tracking-wider font-heading backdrop-blur-md">
                    {trainer.experience}
                  </div>

                  {/* Social Links on Image */}
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
                    <a
                      href={trainer.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/80 border border-zinc-700 flex items-center justify-center text-white hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Trainer Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase text-white font-heading">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-[#B6FF00] tracking-wider mb-3">
                    {trainer.role}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {trainer.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenJoinModal && onOpenJoinModal('PREMIUM')}
                  className="w-full py-3 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900 hover:bg-[#B6FF00] text-white hover:text-black font-heading font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Schedule Session with {trainer.name.split(' ')[0]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Coaching Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1115] border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mb-3">
            RIGOROUS COACHING ACCREDITATION
          </h3>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            Every coach at Titan Forge undergoes mandatory biannual biomechanics and CPR certifications. We never assign junior interns to manage your health and progressive overload.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-zinc-300 uppercase tracking-wider font-heading">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">CSCS Certified</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">IFBB Pro Card</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">CrossFit Level 2</span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">500-HR RYT Yoga</span>
          </div>
        </div>
      </div>

    </div>
  );
}
