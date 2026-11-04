import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  href = '#',
  showArrow = true,
  className = '',
  onClick,
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-150 cursor-pointer';

  const variants = {
    primary:
      'bg-[#0D3B2E] text-white hover:bg-[#08281E] shadow-sm',
    secondary:
      'bg-transparent text-[#0D3B2E] hover:text-emerald-700 font-semibold underline-offset-4 hover:underline',
    outline:
      'bg-white text-[#0D3B2E] border border-stone-300 hover:border-emerald-600 hover:text-emerald-800 shadow-xs',
    light:
      'bg-emerald-50 text-[#0D3B2E] hover:bg-emerald-100 border border-emerald-200',
    white:
      'bg-white text-[#0D3B2E] hover:bg-emerald-50 shadow-sm font-bold',
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 ml-0.5" />}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 ml-0.5" />}
    </button>
  );
}
