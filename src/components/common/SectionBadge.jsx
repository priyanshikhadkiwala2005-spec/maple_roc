export default function SectionBadge({ text, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D3B2E] text-xs font-semibold tracking-wider uppercase ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block"></span>
      {text}
    </div>
  );
}
