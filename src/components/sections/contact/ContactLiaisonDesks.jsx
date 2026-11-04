import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactLiaisonDesks() {
  const mapSearchUrl =
    'https://www.google.com/maps/search/?api=1&query=Alpha+Arcades+MIPCO+Chowkdi+GIDC+Bharuch+Gujarat+392015';

  return (
    <div className="space-y-5 sm:space-y-6">
      
      {/* Section Header */}
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2F6146] block mb-1">
          Liaison Desks & Field Stations
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1F3D2B] font-normal tracking-tight mb-2">
          Executive Desks & Field Stations
        </h2>
        <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed">
          Access certified project managers, commercial estimators, and technical directors across active field stations.
        </p>
      </div>

      {/* Card 1: Principal Secretariat & Studio */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0 mt-0.5">
          <MapPin className="w-5 h-5 text-[#2F6146]" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-[15px] font-semibold text-stone-900 mb-1">
            Principal Secretariat & Studio
          </h3>
          <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed mb-3">
            B-311, Alpha Arcades, MIPCO Chowkdi, G.I.D.C.,<br />
            Bharuch – 392015, Gujarat, India
          </p>
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6146] hover:text-[#1F3D2B] transition-colors"
          >
            <span>View Highway Route</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Card 2: Direct Communication Helplines */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0 mt-0.5">
          <Phone className="w-5 h-5 text-[#2F6146]" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-[15px] font-semibold text-stone-900 mb-1">
            Direct Communication Helplines
          </h3>
          <p className="text-[11px] text-stone-400 font-medium mb-2">
            Central Corporate Exchange & Spatial Directorate
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+917359551555"
              className="text-base sm:text-lg font-bold text-[#1F3D2B] hover:text-[#2F6146] tracking-wide transition-colors"
            >
              +91 73595 51555
            </a>
            <a
              href="https://wa.me/917359551555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold transition-colors border border-emerald-200/60"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Card 3: Corporate Electronic Mail */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#2F6146] flex items-center justify-center shrink-0 mt-0.5">
          <Mail className="w-5 h-5 text-[#2F6146]" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-[15px] font-semibold text-stone-900 mb-2">
            Corporate Electronic Mail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-0.5">
                Consultation & General
              </span>
              <a
                href="mailto:contact@mapleroc.com"
                className="text-stone-700 hover:text-[#2F6146] font-medium"
              >
                contact@mapleroc.com
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mb-0.5">
                Contracts & Tenders
              </span>
              <a
                href="mailto:procurement@mapleroc.com"
                className="text-stone-700 hover:text-[#2F6146] font-medium"
              >
                procurement@mapleroc.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4: Operating Hours */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-xs">
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#2F6146]" />
            <h3 className="text-xs sm:text-[13px] font-semibold text-stone-900">
              Operating Hours
            </h3>
          </div>
          <span className="text-[11px] text-stone-400 font-medium">
            IST (UTC+05:30)
          </span>
        </div>

        <div className="space-y-2 text-xs mb-4">
          <div className="flex items-center justify-between text-stone-600">
            <span>Monday – Saturday:</span>
            <strong className="text-stone-900 font-semibold">09:00 AM – 07:00 PM</strong>
          </div>
          <div className="flex items-center justify-between text-stone-600">
            <span>Sunday Consultation:</span>
            <span className="text-stone-700 italic">By Prior Site Appointment</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#F8FAF9] border border-stone-200/70 text-[11px] text-stone-600 leading-relaxed">
          <strong className="text-[#2F6146] font-semibold block mb-0.5">
            Institutional & Govt Procurement Desk:
          </strong>
          Dedicated support for CPWD, Rites, and PSU tenders with 4-hour document turnaround protocol.
        </div>
      </div>

      {/* Card 5: Real Google Maps Integration Box */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <h4 className="text-xs sm:text-[13px] font-bold text-stone-900">
              Bharuch Corridor Hub
            </h4>
          </div>
          <span className="text-[11px] text-stone-400 font-mono">
            21.7051° N, 72.9959° E
          </span>
        </div>

        {/* Real Interactive Google Maps Iframe */}
        <div className="relative rounded-xl overflow-hidden aspect-16/10 border border-stone-200 bg-stone-100">
          <iframe
            title="MapleRoc Registered Office Location"
            src="https://maps.google.com/maps?q=Alpha+Arcades,+MIPCO+Chowkdi,+GIDC,+Bharuch,+Gujarat+392015&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Pill on Map */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/80 shadow-md flex items-center justify-between gap-2 pointer-events-auto">
            <div className="flex items-center gap-2 text-stone-800 text-[11px] font-medium truncate">
              <MapPin className="w-3.5 h-3.5 text-[#2F6146] shrink-0" />
              <span className="truncate">NH-48 / GIDC MIPCO Connectivity</span>
            </div>
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2F6146] hover:text-[#1F3D2B] shrink-0 whitespace-nowrap"
            >
              <span>Open Map</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

