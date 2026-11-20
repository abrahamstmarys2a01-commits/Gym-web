import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Building
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { gymInfo } from '../data/gymData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Membership Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or question';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleEmailChange = (e) => {
    const lowerEmail = e.target.value.toLowerCase();
    setFormData((prev) => ({ ...prev, email: lowerEmail }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'Membership Inquiry',
          message: ''
        });
      }, 700);
    }
  };

  return (
    <div className="py-12 sm:py-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 p-8 sm:p-14 lg:p-16 bg-[#0a0c10] shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1800&auto=format&fit=crop"
              alt="Titan Forge Entrance"
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090a] via-[#08090a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
              <MessageSquare className="w-3.5 h-3.5" />
              Connect With Us
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white font-heading tracking-tight leading-tight mb-4">
              CONTACT <span className="text-[#B6FF00]">TITAN FORGE</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Have questions about our training programs, coach schedules, or want to reserve a 1-day free trial? Our team is available 7 days a week.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Contact Grid: Info Cards + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-7 hover:border-[#B6FF00]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] shrink-0 mt-1 shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                    Location & Landmark
                  </span>
                  <h3 className="text-lg font-bold uppercase text-white font-heading mt-0.5 mb-1.5">
                    Titan Forge Flagship Arena
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-2">
                    {gymInfo.address}
                  </p>
                  <p className="text-xs text-zinc-500">
                    Landmark: {gymInfo.landmark}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Direct Phone & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-7 hover:border-[#B6FF00]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] shrink-0 mt-1 shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                    Direct Phone Lines
                  </span>
                  <h3 className="text-lg font-bold uppercase text-white font-heading mt-0.5 mb-1.5">
                    Call or Message
                  </h3>
                  
                  <div className="space-y-1 mb-4 text-sm">
                    <div>
                      <span className="text-zinc-500 text-xs">Primary Desk: </span>
                      <a href={`tel:${gymInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-zinc-200 hover:text-[#B6FF00] font-semibold">
                        {gymInfo.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-xs">Alternate: </span>
                      <a href={`tel:${gymInfo.altPhone.replace(/[^0-9+]/g, '')}`} className="text-zinc-200 hover:text-[#B6FF00] font-semibold">
                        {gymInfo.altPhone}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${gymInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hi Titan Forge! I would like to inquire about membership and scheduling a visit.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-bold uppercase tracking-wider text-xs transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Instant WhatsApp Chat
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-7 hover:border-[#B6FF00]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] shrink-0 mt-1 shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                    Electronic Mail
                  </span>
                  <h3 className="text-lg font-bold uppercase text-white font-heading mt-0.5 mb-1.5">
                    Email Desk
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <a href={`mailto:${gymInfo.email}`} className="text-zinc-200 hover:text-[#B6FF00]">
                        {gymInfo.email}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${gymInfo.inquiryEmail}`} className="text-zinc-200 hover:text-[#B6FF00]">
                        {gymInfo.inquiryEmail}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-7 hover:border-[#B6FF00]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00]/30 flex items-center justify-center text-[#B6FF00] shrink-0 mt-1 shadow-[0_0_15px_rgba(182,255,0,0.2)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                    Operating Schedule
                  </span>
                  <h3 className="text-lg font-bold uppercase text-white font-heading mt-0.5 mb-2">
                    Open 365 Days
                  </h3>
                  <div className="space-y-1.5 text-xs text-zinc-300">
                    <p className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Mon - Sat:</span>
                      <strong className="text-white font-semibold">5:00 AM - 11:00 PM</strong>
                    </p>
                    <p className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Sunday:</span>
                      <strong className="text-white font-semibold">6:00 AM - 8:00 PM</strong>
                    </p>
                    <p className="flex items-center justify-between gap-4">
                      <span className="text-zinc-400">Holidays:</span>
                      <strong className="text-[#B6FF00] font-semibold">Special Morning Sessions</strong>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Enquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0e1015] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                Direct Message Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mt-1">
                SEND US AN <span className="text-[#B6FF00]">ENQUIRY</span>
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
                Fill out the form below. Our head fitness consultant will respond via phone or email within 2 working hours.
              </p>
            </div>

            {/* Success state notification */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-2xl bg-[#B6FF00]/10 border border-[#B6FF00] text-zinc-100 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B6FF00] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-heading">
                      Message Successfully Sent!
                    </h4>
                    <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
                      Thank you! Your inquiry has reached our desk. A coordinator will reach out to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 font-heading">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className={`w-full bg-zinc-900/90 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-800'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 font-heading">
                    Phone Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="10-digit mobile number"
                    className={`w-full bg-zinc-900/90 border ${
                      errors.phone ? 'border-red-500' : 'border-zinc-800'
                    } rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 font-heading">
                    Email Address (Small Letters Only) *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="vikram@example.com"
                    className={`w-full bg-zinc-900/90 border ${
                      errors.email ? 'border-red-500' : 'border-zinc-800'
                    } rounded-xl px-4 py-3 text-sm text-white lowercase placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                {/* Program/Subject */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 font-heading">
                    Subject / Program
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B6FF00]"
                  >
                    <option value="Membership Inquiry">Membership Inquiry (Basic/Premium/Annual)</option>
                    <option value="1-Day Free Trial Pass">1-Day Free Trial Pass Request</option>
                    <option value="Personal Training Inquiry">1-on-1 Personal Training Inquiry</option>
                    <option value="Weight Loss Program">Weight Loss & Shred Program</option>
                    <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                    <option value="CrossFit & WOD">CrossFit & Functional Training</option>
                    <option value="Corporate Wellness">Corporate Wellness & Group Pass</option>
                  </select>
                </div>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1 font-heading">
                  Your Message or Question *
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your fitness background, any injuries, or what questions you have about Titan Forge..."
                  className={`w-full bg-zinc-900/90 border ${
                    errors.message ? 'border-red-500' : 'border-zinc-800'
                  } rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_20px_rgba(182,255,0,0.35)] flex items-center justify-center gap-2 cursor-pointer text-base disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>

      {/* 3. Google Maps Styled Interactive Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e1015] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
          
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B6FF00] font-heading">
                Interactive Map Coordinates
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading mt-0.5">
                FIND TITAN FORGE ON THE MAP
              </h3>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-zinc-700 hover:border-[#B6FF00] bg-zinc-900 text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-[#B6FF00] transition-colors flex items-center gap-1.5"
            >
              Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Styled Map Graphic / Container */}
          <div className="relative h-80 sm:h-96 w-full bg-[#12151b] overflow-hidden flex items-center justify-center">
            {/* Background grid lines mimicking street map */}
            <div className="absolute inset-0 opacity-15 bg-grid-pattern" />

            {/* Stylized road vectors */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#B6FF00" strokeWidth="4" />
              <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#ffffff" strokeWidth="3" />
              <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#ffffff" strokeWidth="2" />
              <circle cx="50%" cy="50%" r="90" fill="none" stroke="#B6FF00" strokeWidth="1" strokeDasharray="6 6" />
            </svg>

            {/* Glowing Map Pin & Card */}
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-16 h-16 rounded-full bg-[#B6FF00]/20 border-2 border-[#B6FF00] flex items-center justify-center text-black shadow-[0_0_30px_#B6FF00] animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-[#B6FF00] flex items-center justify-center text-black">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              <div className="bg-black/90 border border-zinc-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-xs text-center">
                <h4 className="text-white font-bold font-heading uppercase text-sm">
                  Titan Forge Flagship Arena
                </h4>
                <p className="text-zinc-400 text-xs mt-1">
                  Fitness Boulevard, Metro Arena
                </p>
                <div className="mt-2 text-[11px] text-[#B6FF00] font-semibold">
                  Free Basement Valet & Member Parking Available
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 text-[10px] text-zinc-500 bg-black/60 px-2.5 py-1 rounded-md border border-zinc-800">
              GPS Coordinates: 13.0827° N, 80.2707° E
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
