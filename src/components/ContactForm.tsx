'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#5BAF47]/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-[#5BAF47]" />
        </div>
        <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">Message Sent!</h3>
        <p className="text-gray-500 max-w-xs">
          Thank you for your inquiry. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[#5BAF47] font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Company</label>
          <input
            type="text"
            placeholder="Your company"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Email Address *</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Service Required</label>
        <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors text-gray-600">
          <option value="">Select a service...</option>
          <option>Electrical Panels</option>
          <option>Sheet Metal Fabrication</option>
          <option>Turnkey Electrical Project</option>
          <option>Material Handling Equipment</option>
          <option>O&amp;M Services</option>
          <option>Coal Handling Plant</option>
          <option>Dust Control System</option>
          <option>Conveyor Belt Services</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Describe your project requirements..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BAF47]/30 focus:border-[#5BAF47] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#5BAF47] text-white font-bold py-4 rounded-xl hover:bg-[#4a9438] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
