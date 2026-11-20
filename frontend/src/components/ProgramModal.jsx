import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Clock, 
  Activity, 
  UserCheck, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Flame
} from 'lucide-react';

export default function ProgramModal({ program, isOpen, onClose, onEnroll }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#0e1015] border border-zinc-800 rounded-3xl text-left shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Banner Image with gradient */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-[#0e1015]/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-zinc-700/80 text-white hover:text-[#B6FF00] hover:border-[#B6FF00] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges on banner */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B6FF00] text-black text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                <Flame className="w-3.5 h-3.5" />
                {program.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase tracking-wide">
                {program.title}
              </h3>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Meta badges grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-[#B6FF00] text-xs mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration</span>
                </div>
                <div className="text-xs font-bold text-white truncate">{program.duration}</div>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-[#B6FF00] text-xs mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Intensity</span>
                </div>
                <div className="text-xs font-bold text-white truncate">{program.intensity.split(' ')[0]}</div>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-[#B6FF00] text-xs mb-1">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Coach</span>
                </div>
                <div className="text-xs font-bold text-white truncate">{program.trainer.split('(')[0]}</div>
              </div>

              <div className="bg-zinc-900/80 border border-zinc-800 p-2.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-[#B6FF00] text-xs mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule</span>
                </div>
                <div className="text-xs font-bold text-white truncate">{program.schedule.split('•')[0]}</div>
              </div>
            </div>

            {/* In-depth Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-heading">
                Program Overview
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Highlights Checklist */}
            {program.highlights && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 font-heading">
                  What You Receive in this Program
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B6FF00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule details */}
            <div className="bg-zinc-900/90 border border-zinc-800/80 p-3.5 rounded-2xl flex items-center justify-between text-xs">
              <div>
                <span className="text-zinc-400 block">Class Timing & Sessions:</span>
                <span className="text-white font-semibold">{program.schedule}</span>
              </div>
              <div className="text-right">
                <span className="text-zinc-400 block">Audience:</span>
                <span className="text-[#B6FF00] font-semibold">{program.suitableFor}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-zinc-800">
              <button
                onClick={() => {
                  onClose();
                  onEnroll && onEnroll(program);
                }}
                className="flex-1 py-3.5 px-6 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_20px_rgba(182,255,0,0.35)] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Enroll in {program.title}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="py-3.5 px-6 rounded-xl font-heading font-bold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors text-sm cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
