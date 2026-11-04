import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    fullName: '',
    enterprise: '',
    email: '',
    phone: '',
    discipline: '',
    scale: '',
    specifications: '',
    ndaRequired: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-1">
          Direct Engagement Dossier
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1F3D2B] font-normal tracking-tight mb-2">
          Submit Project Brief or Request Consultation
        </h2>
        <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-6 sm:mb-8">
          Direct review by principal spatial directors and senior estimators within 24 working hours.
        </p>

        {submitted ? (
          <div className="py-12 px-6 text-center rounded-2xl bg-[#F7FAF8] border border-[#DCE8E0]">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#2F6146] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F3D2B] font-normal mb-2">
              Consultation Brief Received
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6">
              Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your project specifications have been transmitted directly to Dharmendra Surelia and the senior estimation directorate. We will reach out within 24 working hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  enterprise: '',
                  email: '',
                  phone: '',
                  discipline: '',
                  scale: '',
                  specifications: '',
                  ndaRequired: false,
                });
              }}
              className="px-6 py-2 rounded-full bg-[#1F3D2B] text-white text-xs font-medium hover:bg-[#142A1D] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {/* Row 1: Name & Enterprise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Full Name / Representation *
                </label>
                <input
                  type="text"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Dharmendra Patel"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Enterprise / Architectural Practice *
                </label>
                <input
                  type="text"
                  required
                  name="enterprise"
                  value={formData.enterprise}
                  onChange={handleChange}
                  placeholder="e.g. Adani Logistics / Architect Associates"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="corporate@enterprise.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Direct Phone / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98250 XXXXX"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Project Mandate & Scale Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Project Mandate / Sector *
                </label>
                <select
                  required
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                >
                  <option value="">Select execution discipline...</option>
                  <option value="turnkey">Turnkey Corporate Interior Fitout</option>
                  <option value="joinery">Bespoke Joinery & Workstations</option>
                  <option value="mep">Integrated MEP & Civil Contracting</option>
                  <option value="healthcare">Healthcare & Clinical Facility</option>
                  <option value="institutional">Institutional Campus & Auditorium</option>
                  <option value="consulting">Architectural Detailing & PMC</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Estimated Area / Scope Scale *
                </label>
                <select
                  required
                  name="scale"
                  value={formData.scale}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors"
                >
                  <option value="">Select carpet area threshold...</option>
                  <option value="under5k">Under 5,000 Sq.Ft.</option>
                  <option value="5k-15k">5,000 – 15,000 Sq.Ft.</option>
                  <option value="15k-50k">15,000 – 50,000 Sq.Ft.</option>
                  <option value="50k-plus">50,000+ Sq.Ft. Enterprise Fitout</option>
                  <option value="campus">Campus Masterplan Mandate</option>
                </select>
              </div>
            </div>

            {/* Row 4: Spatial Specifications Textarea */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-stone-800">
                  Spatial Specifications & Site Readlines
                </label>
                <span className="text-[10px] text-stone-400">
                  500 characters max
                </span>
              </div>
              <textarea
                rows={4}
                maxLength={500}
                name="specifications"
                value={formData.specifications}
                onChange={handleChange}
                placeholder="Specify current site condition (bare shell, warm shell, retrofit), expected handover quarter, civil or workstation constraints, or tender/reference numbers..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#F8FAF9] border border-stone-200 text-xs sm:text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#2F6146] focus:bg-white transition-colors resize-none"
              ></textarea>
            </div>

            {/* Row 5: NDA Checkbox */}
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAF9] border border-stone-200/80">
              <input
                type="checkbox"
                id="ndaCheckbox"
                name="ndaRequired"
                checked={formData.ndaRequired}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded text-[#2F6146] focus:ring-[#2F6146]"
              />
              <label htmlFor="ndaCheckbox" className="text-xs text-stone-700 leading-snug cursor-pointer">
                Require Mutual Non-Disclosure Agreement (NDA) before sharing proprietary layouts or architectural CAD drawings.
              </label>
            </div>

            {/* Row 6: Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#1F3D2B] hover:bg-[#142A1D] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Transmit Consultation Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Privacy Guarantee Note */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6146] shrink-0" />
              <span>100% Client Privacy Guarantee. Project drawings and BOQ estimates protected by executive protocol.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

