import { useTranslation } from 'react-i18next';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import RevealWrapper from '../ui/RevealWrapper';
import logo from '../../assets/logo.webp';

const F = "'Roboto', sans-serif";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith('ar');

  return (
    <footer
      style={{ background: '#0D1F3C', fontFamily: F, position: 'relative', overflow: 'hidden' }}
      className="pt-24 pb-12 px-6 md:px-12 lg:px-16 xl:px-20 border-t border-[rgba(255,255,255,0.06)]"
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,170,220,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* ── Main Grid ── */}
        <RevealWrapper>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Branding Column */}
            <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <img src={logo} alt="CAEMI" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontFamily: F, fontSize: '18px', fontWeight: 900, letterSpacing: '0.1em', color: '#fff' }}>
                  CAEMI
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p
                  style={{
                    fontFamily: F, fontSize: '15.5px', fontWeight: 300, lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.52)', maxWidth: '400px',
                  }}
                >
                  CAEMI est une agence d'accompagnement spécialisée qui vous offre un suivi personnalisé et de qualité tout au long de votre procédure Campus France.
                </p>
                <p
                  style={{
                    fontFamily: "'Cairo', sans-serif", fontSize: '15px', fontWeight: 400, lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.4)', maxWidth: '400px', textAlign: 'right'
                  }}
                  dir="rtl"
                >
                  وكالة CAEMI هي وكالة مرافقة متخصصة تقدم لكم متابعة شخصية وعالية الجودة طوال مساركم في إجراءات كامبوس فرانس.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-4 lg:col-span-3">
              <div
                style={{
                  fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '24px'
                }}
              >
                {isAr ? 'روابط سريعة' : 'Navigation'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { href: '#accueil', label: isAr ? 'الرئيسية' : 'Accueil' },
                  { href: '#vision', label: isAr ? 'رؤيتنا' : 'Notre Vision' },
                  { href: '#services', label: isAr ? 'خدماتنا' : 'Nos Services' },
                  { href: '#equipe', label: isAr ? 'فريقنا' : 'Notre Équipe' },
                  { href: '#formulaire', label: isAr ? 'التسجيل' : 'Candidature' },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="group"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', width: 'fit-content' }}
                  >
                    <span className="text-white/50 group-hover:text-sky transition-colors duration-300" style={{ fontFamily: F, fontSize: '13px', fontWeight: 500 }}>
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4 lg:col-span-2">
              <div
                style={{
                  fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '24px'
                }}
              >
                {isAr ? 'تواصل معنا' : 'Contact'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="mailto:caemi0901@gmail.com"
                  className="group"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(46,170,220,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={14} className="text-[#2EAADC] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors duration-300" style={{ fontFamily: F, fontSize: '13px', fontWeight: 500 }}>
                    caemi0901@gmail.com
                  </span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="md:col-span-4 lg:col-span-2">
              <div
                style={{
                  fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '24px'
                }}
              >
                {isAr ? 'تابعنا' : 'Social'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="https://www.instagram.com/caemi_support/"
                  target="_blank" rel="noopener noreferrer"
                  className="group"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(46,170,220,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Instagram size={14} className="text-[#2EAADC] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors duration-300" style={{ fontFamily: F, fontSize: '13px', fontWeight: 500 }}>
                    @caemi_support
                  </span>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white transition-colors duration-300 ml-auto" />
                </a>
              </div>
            </div>

          </div>
        </RevealWrapper>

        {/* ── Bottom Bar ── */}
        <RevealWrapper delay={0.2}>
          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <span
              style={{
                fontFamily: F, fontSize: '10px', fontWeight: 500, letterSpacing: '0.05em',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              {t('footer.rights')}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ fontFamily: F, fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>
                Maroc ↔ France
              </span>
            </div>
          </div>
        </RevealWrapper>

      </div>
    </footer>
  );
}
