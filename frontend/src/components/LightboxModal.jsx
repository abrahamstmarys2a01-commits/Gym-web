import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowLeft') onPrev && onPrev();
      if (e.key === 'ArrowRight') onNext && onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-lg">
      {/* Top Bar with counter & close */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-[#B6FF00]">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-xs text-[#B6FF00] uppercase font-bold tracking-wider">
            {currentImage.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#B6FF00] transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#B6FF00] border border-zinc-700/80 hover:border-[#B6FF00] text-white hover:text-black transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#B6FF00] border border-zinc-700/80 hover:border-[#B6FF00] text-white hover:text-black transition-all cursor-pointer backdrop-blur-sm"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main image container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.id || currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-full flex flex-col items-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.8)] max-h-[70vh]">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Title & Description Caption */}
            <div className="mt-4 text-center max-w-xl px-4">
              <h4 className="text-lg sm:text-xl font-bold font-heading uppercase text-white tracking-wide">
                {currentImage.title}
              </h4>
              {currentImage.desc && (
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {currentImage.desc}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
