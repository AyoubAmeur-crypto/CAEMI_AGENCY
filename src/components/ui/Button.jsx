export default function Button({ children, onClick, type = 'button', href, target, className = '', variant = 'primary' }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95';
  
  const variants = {
    primary: 'bg-sky text-white px-8 py-3.5 text-sm md:text-base shadow-[0_4px_20px_rgba(46,170,220,0.3)] hover:shadow-[0_8px_30px_rgba(46,170,220,0.5)] hover:-translate-y-0.5',
    secondary: 'bg-transparent text-white px-8 py-3.5 text-sm md:text-base border border-white/20 hover:border-sky hover:text-sky',
    dark: 'bg-navy text-white px-8 py-3.5 text-sm md:text-base shadow-[0_4px_20px_rgba(13,31,60,0.2)] hover:shadow-[0_8px_30px_rgba(13,31,60,0.4)] hover:-translate-y-0.5',
    navCta: 'bg-sky text-white px-5 py-2 text-sm hover:bg-[#1a8bbf] shadow-[0_4px_10px_rgba(46,170,220,0.2)]'
  };

  const selectedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
      const handleSmoothScroll = (e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element);
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      
      return (
        <a href={href} onClick={handleSmoothScroll} className={selectedClasses}>
          {children}
        </a>
      );
    }
    
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={selectedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={selectedClasses}>
      {children}
    </button>
  );
}
