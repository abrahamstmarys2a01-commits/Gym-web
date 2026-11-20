import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Dumbbell, 
  Phone, 
  ChevronRight, 
  Flame,
  Clock
} from 'lucide-react';
import { gymInfo } from '../data/gymData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Membership', path: '/membership' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar({ onOpenJoinModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top micro info banner on desktop */}
      <div className="hidden lg:block bg-black/90 border-b border-zinc-800/80 text-xs text-zinc-400 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#B6FF00]" />
              Mon-Sat: 5:00 AM - 11:00 PM | Sun: 6:00 AM - 8:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Phone className="w-3.5 h-3.5 text-[#B6FF00]" />
              {gymInfo.phone}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#B6FF00] font-medium">
              <Flame className="w-3.5 h-3.5 animate-bounce" />
              Claim 1-Day Free VIP Pass Today!
            </span>
            <button
              onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
              className="text-zinc-200 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Get Free Pass
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090a]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#08090a]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Titan Forge Home"
            >
              <div className="w-10 h-10 rounded-xl bg-black border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] group-hover:border-[#B6FF00] group-hover:shadow-[0_0_15px_rgba(182,255,0,0.5)] transition-all duration-300">
                <Dumbbell className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">
                    TITAN
                  </span>
                  <span className="text-xl sm:text-2xl font-black tracking-wider text-[#B6FF00] font-heading drop-shadow-[0_0_10px_rgba(182,255,0,0.5)]">
                    FORGE
                  </span>
                </div>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-semibold -mt-1">
                  Gym & Fitness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#B6FF00] font-bold'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-indicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#B6FF00] shadow-[0_0_8px_#B6FF00]"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${gymInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hi Titan Forge, I would like to inquire about membership and trial sessions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-[#B6FF00]/50 hover:bg-[#B6FF00]/5 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#B6FF00]" />
                WhatsApp
              </a>

              <button
                onClick={() => onOpenJoinModal && onOpenJoinModal()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all duration-300 shadow-[0_0_20px_rgba(182,255,0,0.35)] hover:shadow-[0_0_30px_rgba(182,255,0,0.6)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Join Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenJoinModal && onOpenJoinModal()}
                className="px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider bg-[#B6FF00] text-black hover:bg-[#a6ec00] transition-all"
              >
                Join
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B6FF00] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6 text-[#B6FF00]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] sm:w-[360px] bg-[#0c0e12] border-l border-zinc-800 z-50 flex flex-col p-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-black border border-[#B6FF00]/50 flex items-center justify-center text-[#B6FF00]">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-lg font-black tracking-wider text-white font-heading">
                      TITAN <span className="text-[#B6FF00]">FORGE</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#B6FF00]" />
                </button>
              </div>

              {/* Navigation Links list */}
              <div className="py-6 flex flex-col gap-1.5 flex-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl font-heading text-lg uppercase tracking-wide transition-all ${
                          isActive
                            ? 'bg-[#B6FF00]/10 text-[#B6FF00] border border-[#B6FF00]/30 font-bold'
                            : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quick Contacts & CTA */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenJoinModal && onOpenJoinModal();
                  }}
                  className="w-full py-3.5 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-colors shadow-[0_0_20px_rgba(182,255,0,0.3)] text-center text-base"
                >
                  Join Titan Forge Now
                </button>

                <a
                  href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B6FF00]" />
                  Call: {gymInfo.phone}
                </a>

                <div className="text-center text-xs text-zinc-500 pt-2">
                  Open 365 Days • 5:00 AM - 11:00 PM
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
