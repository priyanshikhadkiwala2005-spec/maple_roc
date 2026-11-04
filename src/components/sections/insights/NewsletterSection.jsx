import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7FAF8] rounded-2xl sm:rounded-3xl border border-[#DCE8E0] p-8 sm:p-12 text-center shadow-xs">
          
          {/* Top Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center mx-auto mb-5 shadow-xs">
            <Mail className="w-6 h-6 text-[#2F6146]" />
          </div>

          {/* Heading */}
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1F3D2B] font-normal tracking-tight mb-3">
            Receive MapleRoc&apos;s Quarterly Spatial Engineering Dossier
          </h3>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-8">
            Join 1,200+ facility directors, corporate real estate heads, and principal architects who receive our quarterly research compendium directly in their inbox. No spam, purely peer-reviewed spatial insights.
          </p>

          {/* Form */}
          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-100 text-[#1F3D2B] text-xs sm:text-sm font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Thank you! You are subscribed to our quarterly research dossier.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your corporate email address..."
                className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#2F6146] shadow-xs"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs cursor-pointer whitespace-nowrap"
              >
                Subscribe to Dossier
              </button>
            </form>
          )}

          <p className="text-[11px] text-stone-400">
            Strict confidentiality guaranteed. We never share your corporate contact information.
          </p>

        </div>
      </div>
    </section>
  );
}

