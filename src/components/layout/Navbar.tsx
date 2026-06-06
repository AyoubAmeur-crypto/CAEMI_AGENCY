import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useActiveSection from '../../hooks/useActiveSection';
import Flag from 'react-world-flags';

const FONT = "'Roboto', sans-serif";

const FlagComponent = (Flag as any).default || Flag;

const languages = [
  { code: 'fr', label: 'Français', short: <FlagComponent code='fr' className='w-4 h-4' /> },
  { code: 'ar', label: 'العربية', short: <FlagComponent code='mar' className='w-4 h-4' /> },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const isAr = i18n.language === 'ar';
  const sections = ['about', 'services', 'vision', 'team', 'formulaire'];
  const activeSection = useActiveSection(sections);
  const currentLang = languages.find(l => l.code === (isAr ? 'ar' : 'fr'));

  const switchLanguage = (lang : string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    setLangOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.lenis ? window.lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const inDesktop = desktopLangRef.current?.contains(target);
      const inMobile  = mobileLangRef.current?.contains(target);
      if (!inDesktop && !inMobile) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { id: 'about',      label: t('nav.about')    },
    { id: 'services',   label: t('nav.services')  },
    { id: 'vision',     label: t('nav.vision')    },
    { id: 'team',       label: t('nav.team')      },
    { id: 'formulaire', label: t('nav.register')  },
  ];

  /* ─── lang dropdown shared ───────────────────────────────── */
  const LangDropdown = () => (
    <AnimatePresence>
      {langOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit   ={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.14, ease: 'easeOut' }}
          className="absolute top-[calc(100%+10px)] right-0 bg-white rounded-xl
                     shadow-[0_12px_48px_rgba(0,0,0,0.13)] border border-gray-100
                     overflow-hidden z-50"
          style={{ minWidth: '148px' }}
        >
          {languages.map(lang => {
            const active = isAr ? lang.code === 'ar' : lang.code === 'fr';
            return (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150"
                style={{
                  fontFamily: FONT,
                  fontSize: '11px',
                  fontWeight: 500,
                  color: active ? '#2EAADC' : 'rgba(13,31,60,0.65)',
                  background: active ? 'rgba(46,170,220,0.06)' : 'transparent',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = '#f8f9fa'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span
                  className="rounded-sm px-1.5 py-[2px]"
                  style={{
                    fontFamily: FONT,
                    fontSize: '8.5px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    background: active ? 'rgba(46,170,220,0.12)' : '#f0f0f0',
                    color: active ? '#2EAADC' : 'rgba(13,31,60,0.35)',
                  }}
                >
                  {lang.short}
                </span>
                <span>{lang.label}</span>
                {active && (
                  <span className="ml-auto text-[#2EAADC]" style={{ fontSize: '11px' }}>✓</span>
                )}
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D1F3C] border-b border-white/[0.06]"
      style={{ fontFamily: FONT }}
    >
      {/* Top accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#2EAADC]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-[62px]">

        {/* ── Logo ── */}
        <a href="#" aria-label="CAEMI" className="flex items-center opacity-95 hover:opacity-80 transition-opacity duration-300">
          <img src="/logo.webp" alt="CAEMI" className="h-[46px] w-auto object-contain" />
        </a>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={e => handleLinkClick(e, link.id)}
              className="relative group pb-[3px] transition-colors duration-250"
              style={{
                fontFamily: FONT,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: activeSection === link.id ? '#fff' : 'rgba(255,255,255,0.45)',
              }}
              onMouseEnter={e => { if (activeSection !== link.id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.82)'; }}
              onMouseLeave={e => { if (activeSection !== link.id) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'; }}
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 right-0 h-px bg-[#2EAADC] origin-left transition-transform duration-300"
                style={{ transform: activeSection === link.id ? 'scaleX(1)' : 'scaleX(0)' }}
              />
              <span
                className="absolute bottom-0 left-0 right-0 h-px bg-[#2EAADC]/50 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ transform: activeSection === link.id ? 'scaleX(0)' : undefined }}
              />
            </a>
          ))}
        </div>

        {/* ── Desktop Right ── */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Divider */}
          <div className="w-px h-4 bg-white/10" />

          {/* Language dropdown */}
          <div ref={desktopLangRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{
                fontFamily: FONT,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: langOpen ? '#fff' : 'rgba(255,255,255,0.45)',
              }}
            >
              <Globe size={12} strokeWidth={1.6} />
              <span>{currentLang?.code}</span>
              <motion.span
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                <ChevronDown size={10} strokeWidth={2.2} />
              </motion.span>
            </button>
            <LangDropdown />
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10" />

          {/* Register CTA */}
          <a
            href="#formulaire"
            onClick={e => handleLinkClick(e, 'formulaire')}
            className="group inline-flex items-center gap-1.5 bg-[#2EAADC] text-white
                       px-5 py-2 rounded-sm transition-all duration-300
                       hover:bg-[#2596c4] shadow-[0_2px_14px_rgba(46,170,220,0.25)]"
            style={{ fontFamily: FONT, fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            {t('nav.register')}
            <ArrowRight size={9} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* ── Mobile Right ── */}
        <div className="flex lg:hidden items-center gap-3">

          {/* Mobile lang dropdown */}
          <div ref={mobileLangRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1 transition-colors"
              style={{
                fontFamily: FONT,
                fontSize: '9.5px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              <Globe size={12} strokeWidth={1.6} />
              <span>{currentLang?.code}</span>
              <ChevronDown size={9} strokeWidth={2} />
            </button>
            <LangDropdown />
          </div>

          <div className="w-px h-4 bg-white/10" />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="text-white/50 hover:text-white/85 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X     size={18} strokeWidth={1.6} />
              : <Menu  size={18} strokeWidth={1.6} />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit  ={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-[#06111F] border-t border-white/[0.05] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={e => handleLinkClick(e, link.id)}
                  className="py-3 flex items-center justify-between transition-colors duration-200"
                  style={{
                    fontFamily: FONT,
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: activeSection === link.id ? '#fff' : 'rgba(255,255,255,0.38)',
                    borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="w-1 h-1 rounded-full bg-[#2EAADC]" />
                  )}
                </a>
              ))}
              <a
                href="#formulaire"
                onClick={e => handleLinkClick(e, 'formulaire')}
                className="mt-5 inline-flex items-center justify-center gap-2 bg-[#2EAADC] text-white
                           px-5 py-3 rounded-sm w-full"
                style={{ fontFamily: FONT, fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                {t('nav.register')}
                <ArrowRight size={10} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}