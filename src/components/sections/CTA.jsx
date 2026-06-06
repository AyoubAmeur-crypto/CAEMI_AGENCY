import { useTranslation } from 'react-i18next';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import RevealWrapper from '../ui/RevealWrapper';
import logo from '../../assets/logo.webp';

const F = "'Roboto', sans-serif";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      style={{ background: '#F5F0E8', fontFamily: F, position: 'relative', overflow: 'hidden' }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Logo watermark — centered */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            width: 'clamp(320px, 45vw, 580px)',
            height: 'auto',
            objectFit: 'contain',
            opacity: 0.04,
          }}
        />
      </div>

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <RevealWrapper>

          {/* ── 2-col header ── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginBottom: '52px' }}
          >
            {/* Title side */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '18px', height: '2px', background: '#2EAADC', borderRadius: '1px' }} />
                <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.35)' }}>
                  {t('cta.tag') || 'Contact'}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: F,
                  fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.11,
                  letterSpacing: '-0.022em',
                  color: '#0D1F3C',
                  margin: 0,
                }}
              >
                {t('cta.title_1')}
                <br />
                <span style={{ color: '#2EAADC' }}>{t('cta.title_2')}</span>
              </h2>
            </div>

            {/* Desc side */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
                <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
                <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.07)' }} />
              </div>
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: 0 }}>
                {t('cta.desc')}
              </p>
            </div>
          </div>

          {/* ── Contact card ── */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(13,31,60,0.07)',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 1px 8px rgba(13,31,60,0.04)',
            }}
          >
            {/* Card label bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '13px 28px',
                borderBottom: '1px solid rgba(13,31,60,0.07)',
                background: 'rgba(13,31,60,0.02)',
              }}
            >
              <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.28)' }}>
                Nous contacter
              </span>
              <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.22)' }}>
                CAEMI · Maroc → France
              </span>
            </div>

            {/* Contact rows */}
            <div style={{ padding: '0 28px' }}>

              {/* Email row */}
              <a
                href="mailto:caemi0901@gmail.com"
                className="group"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(13,31,60,0.06)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {/* Icon chip */}
                <div className="transition-colors duration-300 group-hover:bg-[#2EAADC] group-hover:border-[#2EAADC]" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(46,170,220,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} className="text-[#2EAADC] group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.6} />
                </div>
                {/* Type label */}
                <span className="transition-colors duration-300 group-hover:text-[#0D1F3C]" style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.3)', minWidth: '64px' }}>
                  Email
                </span>
                {/* Value */}
                <span className="transition-colors duration-300 group-hover:text-[#2EAADC]" style={{ fontFamily: F, fontSize: '14px', fontWeight: 500, color: 'rgba(13,31,60,0.7)', flex: 1 }}>
                  caemi0901@gmail.com
                </span>
                <ArrowUpRight size={13} strokeWidth={2} className="text-[rgba(13,31,60,0.2)] group-hover:text-[#2EAADC] transition-colors duration-300 flex-shrink-0" />
              </a>

              {/* Instagram row */}
              <a
                href="https://www.instagram.com/caemi_support/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 0',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <div className="transition-colors duration-300 group-hover:bg-[#2EAADC] group-hover:border-[#2EAADC]" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(46,170,220,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Instagram size={14} className="text-[#2EAADC] group-hover:text-blue-500 transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <span className="transition-colors duration-300 group-hover:text-[#0D1F3C]" style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.3)', minWidth: '64px' }}>
                  Instagram
                </span>
                <span className="transition-colors duration-300 group-hover:text-[#2EAADC]" style={{ fontFamily: F, fontSize: '14px', fontWeight: 500, color: 'rgba(13,31,60,0.7)', flex: 1 }}>
                  @caemi_support
                </span>
                <ArrowUpRight size={13} strokeWidth={2} className="text-[rgba(13,31,60,0.2)] group-hover:text-[#2EAADC] transition-colors duration-300 flex-shrink-0" />
              </a>

            </div>

            {/* Bottom strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '14px 28px',
                borderTop: '1px solid rgba(13,31,60,0.06)',
                background: 'rgba(13,31,60,0.015)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontFamily: F, fontSize: '8px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.38)' }}>
                  Disponible · Réponse sous 24h
                </span>
              </div>
              <span style={{ fontFamily: F, fontSize: '8px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.28)' }}>
                Agence officielle Campus France
              </span>
            </div>
          </div>

        </RevealWrapper>
      </div>
    </section>
  );
}