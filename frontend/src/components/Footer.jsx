import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon } from './SocialIcons';
import { gymInfo } from '../data/gymData';

export default function Footer({ onOpenJoinModal }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#050607] border-t border-zinc-800/80 text-zinc-400 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#B6FF00]/5 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2.5 mb-5 inline-flex">
                <div className="w-10 h-10 rounded-xl bg-black border border-[#B6FF00]/40 flex items-center justify-center text-[#B6FF00] shadow-[0_0_15px_rgba(182,255,0,0.3)]">
                  <Dumbbell className="w-5 h-5 -rotate-45" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-wider text-white font-heading">
                    TITAN
                  </span>
                  <span className="text-2xl font-black tracking-wider text-[#B6FF00] font-heading">
                    FORGE
                  </span>
                </div>
              </Link>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-4">
                {gymInfo.description}
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 mb-6">
                <a
                  href={gymInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={gymInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={gymInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={gymInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-zinc-500 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-800/80 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#B6FF00]" />
              <span>IFBB, ACSM & CrossFit Affiliated Facility</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading text-lg uppercase tracking-wider font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#B6FF00]"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Fitness Programs
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Expert Trainers
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B6FF00] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#B6FF00] transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading text-lg uppercase tracking-wider font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#B6FF00]"></span>
              Top Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>Weight Loss & Shred</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">12 Wk</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>Muscle Building & Hypertrophy</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">16 Wk</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>Strength & Powerlifting</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">Heavy</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>CrossFit & WOD Warfare</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">Daily</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>1-on-1 Personal Training</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">VIP</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-[#B6FF00] transition-colors flex items-center justify-between group">
                  <span>Yoga & Mobility Restoration</span>
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 group-hover:bg-[#B6FF00]/10 group-hover:text-[#B6FF00]">Recover</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading text-lg uppercase tracking-wider font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-[#B6FF00]"></span>
              Titan Contact
            </h4>
            
            <div className="space-y-3.5 text-sm mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B6FF00] shrink-0 mt-0.5" />
                <span className="text-zinc-300 leading-snug">{gymInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <a href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-zinc-300 hover:text-white transition-colors">
                  {gymInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B6FF00] shrink-0" />
                <a href={`mailto:${gymInfo.email}`} className="text-zinc-300 hover:text-white transition-colors">
                  {gymInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B6FF00] shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300">
                  <p>{gymInfo.hours.weekdays}</p>
                  <p>{gymInfo.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Get Weekly Training Tips
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#B6FF00] bg-[#B6FF00]/10 border border-[#B6FF00]/30 p-2.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-[#B6FF00] hover:bg-[#a6ec00] text-black px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} TITAN FORGE GYM. All Rights Reserved. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenJoinModal && onOpenJoinModal('Free Trial')}
              className="text-zinc-400 hover:text-[#B6FF00] transition-colors cursor-pointer"
            >
              1-Day Free Trial
            </button>
            <Link to="/membership" className="text-zinc-400 hover:text-[#B6FF00] transition-colors">
              Membership T&C
            </Link>
            <Link to="/contact" className="text-zinc-400 hover:text-[#B6FF00] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
