import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { gymInfo } from '../data/gymData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (msg) => {
    const textToSend = msg || customMsg || "Hi Titan Forge! I'd like to ask about membership plans and free trial availability.";
    const url = `https://wa.me/${gymInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick message popup card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 w-72 sm:w-80 bg-[#0f1115] border border-zinc-700/80 rounded-2xl p-4 shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B6FF00] animate-ping" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                  Titan Forge Desk
                </span>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-zinc-400 hover:text-white"
                aria-label="Close WhatsApp chat card"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed mb-3">
              Hey! Need immediate assistance with workout programs, personal trainer booking, or membership discounts?
            </p>

            <div className="flex flex-col gap-1.5 mb-3">
              <button
                onClick={() => sendWhatsApp('Hi, can I claim a 1-day free trial pass?')}
                className="text-left text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-zinc-800 transition-colors"
              >
                👉 "Claim 1-Day Free Trial Pass"
              </button>
              <button
                onClick={() => sendWhatsApp('Hi, I want to know about the Premium ₹4,499 membership.')}
                className="text-left text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-zinc-800 transition-colors"
              >
                👉 "Inquire about Premium Plan"
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Type your question..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp()}
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#B6FF00]"
              />
              <button
                onClick={() => sendWhatsApp()}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-black p-2 rounded-xl transition-all cursor-pointer"
                aria-label="Send to WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip(!showTooltip)}
        aria-label="Contact on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)] transition-all cursor-pointer relative group"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#B6FF00] rounded-full border-2 border-black" />
      </motion.button>
    </div>
  );
}
