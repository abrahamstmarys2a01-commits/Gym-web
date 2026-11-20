import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Dumbbell, 
  Phone, 
  Calendar, 
  User, 
  Mail, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { membershipPlans, gymInfo } from '../data/gymData';

export default function JoinModal({ isOpen, onClose, defaultPlan = 'PREMIUM' }) {
  const [selectedPlan, setSelectedPlan] = useState('PREMIUM');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Muscle Building',
    slot: 'Morning (6 AM - 9 AM)'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (defaultPlan) {
      setSelectedPlan(defaultPlan);
    }
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [defaultPlan, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
      const generatedId = 'TF-' + Math.floor(100000 + Math.random() * 900000);
      setBookingId(generatedId);
      setIsSubmitted(true);
    }
  };

  if (!isOpen) return null;

  const currentPlanObj = membershipPlans.find(
    (p) => p.name.toUpperCase() === selectedPlan.toUpperCase()
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#0d0f14] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-left shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Neon top rim highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B6FF00] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#B6FF00]/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Modal Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B6FF00]/10 border border-[#B6FF00]/30 text-[#B6FF00] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Titan Membership Enrollment
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase tracking-wide">
                  Join <span className="text-[#B6FF00]">Titan Forge</span> Today
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Choose your membership tier or select a complimentary 1-day free trial.
                </p>
              </div>

              {/* Plan Selection Radios / Cards */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Select Your Tier:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {membershipPlans.map((plan) => {
                    const isSelected = selectedPlan.toUpperCase() === plan.name.toUpperCase();
                    return (
                      <button
                        type="button"
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-[#B6FF00]/10 border-[#B6FF00] shadow-[0_0_15px_rgba(182,255,0,0.25)]'
                            : 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {plan.popular && (
                          <span className="absolute -top-2 right-2 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-[#B6FF00] text-black">
                            Hot
                          </span>
                        )}
                        <span className="block text-xs font-bold uppercase font-heading text-white">
                          {plan.name}
                        </span>
                        <div className="text-sm font-extrabold text-[#B6FF00] mt-0.5">
                          {plan.price}
                        </div>
                        <span className="block text-[10px] text-zinc-400">
                          {plan.period}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Plan Summary Pill */}
              {currentPlanObj && (
                <div className="mb-6 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-zinc-400">Selected Plan:</span>{' '}
                    <strong className="text-white font-bold">{currentPlanObj.name} ({currentPlanObj.duration})</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-400">Total Investment:</span>{' '}
                    <strong className="text-[#B6FF00] text-sm font-extrabold">{currentPlanObj.price}</strong>
                  </div>
                </div>
              )}

              {/* Enrollment Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohan Sharma"
                        className={`w-full bg-zinc-900/90 border ${
                          errors.name ? 'border-red-500' : 'border-zinc-800'
                        } rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                      />
                    </div>
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone Number (10 Digits) *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-zinc-900/90 border ${
                          errors.phone ? 'border-red-500' : 'border-zinc-800'
                        } rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Email Address (Small Letters Only) *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={handleEmailChange}
                        placeholder="rohan@example.com"
                        className={`w-full bg-zinc-900/90 border ${
                          errors.email ? 'border-red-500' : 'border-zinc-800'
                        } rounded-xl pl-9 pr-3 py-2.5 text-sm text-white lowercase placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Primary Fitness Goal
                    </label>
                    <div className="relative">
                      <Dumbbell className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6FF00]"
                      >
                        <option value="Fat Loss & Shred">Fat Loss & Shred</option>
                        <option value="Muscle Building">Muscle Building</option>
                        <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                        <option value="CrossFit Conditioning">CrossFit Conditioning</option>
                        <option value="General Health & Mobility">General Health & Mobility</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Slot */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Preferred Workout Timing
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#B6FF00]"
                    >
                      <option value="Early Morning (5:00 AM - 7:00 AM)">Early Morning (5:00 AM - 7:00 AM)</option>
                      <option value="Morning Prime (7:00 AM - 10:00 AM)">Morning Prime (7:00 AM - 10:00 AM)</option>
                      <option value="Afternoon Quiet (12:00 PM - 4:00 PM)">Afternoon Quiet (12:00 PM - 4:00 PM)</option>
                      <option value="Evening Prime (5:00 PM - 8:00 PM)">Evening Prime (5:00 PM - 8:00 PM)</option>
                      <option value="Night Power (8:00 PM - 11:00 PM)">Night Power (8:00 PM - 11:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#B6FF00] hover:bg-[#a6ec00] transition-all shadow-[0_0_25px_rgba(182,255,0,0.35)] hover:shadow-[0_0_35px_rgba(182,255,0,0.6)] flex items-center justify-center gap-2 cursor-pointer text-base"
                  >
                    Confirm & Complete Registration
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-zinc-500 text-center mt-2 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B6FF00]" />
                    No prepayment required online. Pay on arrival or via UPI/Cards at the desk.
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* Submission Success State */
            <div className="py-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="w-16 h-16 rounded-full bg-[#B6FF00]/20 border border-[#B6FF00] text-[#B6FF00] flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase tracking-wide mb-2">
                Welcome to <span className="text-[#B6FF00]">Titan Forge</span>!
              </h3>
              
              <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                Congratulations <strong className="text-white">{formData.name}</strong>! Your registration for the <strong className="text-[#B6FF00]">{selectedPlan} Plan</strong> is confirmed.
              </p>

              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 max-w-md mx-auto mb-6 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Registration Ref:</span>
                  <span className="text-white font-mono font-bold">{bookingId}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Plan Selected:</span>
                  <span className="text-[#B6FF00] font-bold">{selectedPlan}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-400">Preferred Slot:</span>
                  <span className="text-white">{formData.slot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Center Address:</span>
                  <span className="text-white text-right max-w-[200px]">{gymInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href={`https://wa.me/${gymInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                    `Hi Titan Forge Desk, I registered online with ID ${bookingId} for the ${selectedPlan} plan. My name is ${formData.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl font-heading font-bold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white transition-all text-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
