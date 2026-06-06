import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';

const F = "'Roboto', sans-serif";

export default function CampusFrance() {
  const { t } = useTranslation();

  const roles = [
    { num: '01', text: t('campus.role_1') },
    { num: '02', text: t('campus.role_2') },
    { num: '03', text: t('campus.role_3') },
    { num: '04', text: t('campus.role_4') },
  ];

  return (
    <section
      id="campus"
      style={{ background: '#0D1F3C', fontFamily: F, position: 'relative', overflow: 'hidden' }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%', right: '-10%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,170,220,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Top two-column: text left | roles right ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(40px, 7vw, 100px)', alignItems: 'start', marginBottom: '48px' }}
        >

          {/* ════ LEFT ════ */}
          <RevealWrapper>
            <SectionTag className="text-sky">{t('campus.tag')}</SectionTag>

            <div
              style={{
                fontFamily: F,
                fontSize: 'clamp(5rem, 10vw, 9rem)',
                fontWeight: 900,
                color: 'rgba(46,170,220,0.08)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginTop: '-8px',
                marginBottom: '-16px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              04
            </div>

            <h2
              style={{
                fontFamily: F,
                fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.11,
                letterSpacing: '-0.022em',
                color: '#fff',
                margin: '0 0 20px',
              }}
            >
              {t('campus.title')}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
            </div>

            <p
              style={{
                fontFamily: F,
                fontSize: '0.9rem',
                fontWeight: 300,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.48)',
                margin: 0,
                maxWidth: '440px',
              }}
            >
              {t('campus.desc')}
            </p>
          </RevealWrapper>

          {/* ════ RIGHT — roles ════ */}
          <RevealWrapper>
            <div style={{ paddingTop: '8px' }}>
              <div
                style={{
                  fontFamily: F,
                  fontSize: '8.5px',
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.20)',
                  marginBottom: '28px',
                }}
              >
                Rôles &amp; missions
              </div>

              {roles.map(({ num, text }, idx) => (
                <RevealWrapper key={idx} delay={idx * 0.1}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '22px',
                      alignItems: 'center',
                      padding: '12px 18px',
                      marginBottom: idx < roles.length - 1 ? '12px' : '32px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255,255,255,0.04)',
                      background: 'rgba(255,255,255,0.015)',
                      transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background   = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor  = 'rgba(46,170,220,0.20)';
                      e.currentTarget.style.transform    = 'translateX(6px)';
                      e.currentTarget.style.boxShadow    = '0 10px 36px rgba(0,0,0,0.18)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background  = 'rgba(255,255,255,0.015)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.transform   = 'translateX(0)';
                      e.currentTarget.style.boxShadow   = 'none';
                    }}
                  >
                    <span
                      style={{
                        fontFamily: F,
                        fontSize: '2.4rem',
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        color: 'rgba(46,170,220,0.18)',
                        flexShrink: 0,
                      }}
                    >
                      {num}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ width: '20px', height: '2px', background: '#2EAADC', marginBottom: '9px', borderRadius: '1px' }} />
                      <p
                        style={{
                          fontFamily: F,
                          fontSize: '14px',
                          fontWeight: 500,
                          lineHeight: 1.7,
                          color: 'rgba(255,255,255,0.72)',
                          margin: 0,
                        }}
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}

              {/* CTA strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ fontFamily: F, fontSize: '8px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
                  Agence officielle · Campus France
                </span>
                <a
                  href="#services"
                  onClick={e => { e.preventDefault(); const el = document.getElementById('services'); if (el) window.lenis ? window.lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2EAADC', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.65'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
                >
                  Nos services
                  <ArrowRight size={10} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* ── Full-width Paris image ── */}
        <RevealWrapper>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '6px',
              width: '100%',
              height: 'clamp(220px, 28vw, 380px)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=88&auto=format&fit=crop&crop=center"
              alt="Paris"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 60%',
                filter: 'saturate(0.75) brightness(0.78)',
                display: 'block',
              }}
            />

            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,31,60,0.65) 0%, rgba(13,31,60,0.15) 50%, rgba(13,31,60,0.55) 100%)' }} />
            {/* Top blend into section */}
            {/* <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,31,60,0.40) 0%, transparent 35%, transparent 65%, rgba(13,31,60,0.30) 100%)' }} /> */}

            {/* Left label */}
            <div style={{ position: 'absolute', left: '28px', top: '50%', transform: 'translateY(-50%)' }}>
              <div style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2EAADC', marginBottom: '6px' }}>
                Destination
              </div>
              <div style={{ fontFamily: F, fontSize: 'clamp(1.2rem, 2.2vw, 1.9rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                France · Campus
              </div>
            </div>

            {/* Right label */}
            <div style={{ position: 'absolute', right: '28px', top: '50%', transform: 'translateY(-50%)', textAlign: 'right' }}>
              <div style={{ fontFamily: F, fontSize: '8px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '4px' }}>
                Partenaire officiel
              </div>
              <div style={{ fontFamily: F, fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.45)' }}>
                Campus France Maroc
              </div>
            </div>

            {/* Center divider line */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '1px', height: '40%', background: 'rgba(255,255,255,0.08)' }} />
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}