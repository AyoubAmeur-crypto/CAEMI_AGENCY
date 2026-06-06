import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';

const F = "'Roboto', sans-serif";

function Rule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
      <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
    </div>
  );
}

function MemberCard({ name, sub, badge, delay }) {
  return (
    <RevealWrapper delay={delay}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '22px',
          padding: '16px 0',
          cursor: 'default',
        }}
      >
        {/* Person Icon */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <User size={24} className="text-[#2EAADC]" strokeWidth={1.5} />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: F, fontSize: '16.5px', fontWeight: 600,
              color: 'rgba(255,255,255,0.85)', marginBottom: '5px', lineHeight: 1.3,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: F, fontSize: '13.5px', fontWeight: 300,
              color: 'rgba(255,255,255,0.4)', marginBottom: '10px',
              lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}
          >
            {sub}
          </div>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(46,170,220,0.12)',
              color: '#2EAADC',
              padding: '4px 12px',
              borderRadius: '100px',
              fontFamily: F,
              fontSize: '8.5px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function Team() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith('ar');

  const moroccoMembers = [
    {
      name: isAr ? 'وليد بعلي' : 'Walid Baali',
      sub:  isAr ? 'المدرسة الوطنية للتجارة والتسيير' : 'ENCG Kénitra',
      badge: t('team.network_morocco'),
    },
    {
      name: t('team.network_morocco'),
      sub:  t('team.local'),
      badge: t('team.badge_terrain'),
    },
  ];

  const franceMembers = [
    {
      name: isAr ? 'إكرام ستوف' : 'Ikrame Settouf',
      sub:  isAr ? 'جامعة ليل' : 'Université de Lille',
      badge: t('team.network_france'),
    },
    {
      name: t('team.network_france'),
      sub:  t('team.partners'),
      badge: t('team.badge_suivi'),
    },
  ];

  return (
    <section
      id="team"
      style={{ background: '#0D1F3C', fontFamily: F, position: 'relative', overflow: 'hidden' }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,170,220,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── 2-col header ── */}
        <RevealWrapper>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginBottom: '52px' }}
          >
            <div>
              <SectionTag className="text-sky">{t('team.tag')}</SectionTag>
              <h2
                style={{
                  fontFamily: F,
                  fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.11,
                  letterSpacing: '-0.022em',
                  color: '#fff',
                  margin: '16px 0 0',
                }}
              >
                {isAr ? t('team.title') : 'Meet Our Team'}
              </h2>
            </div>
            <div>
              <Rule />
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(255,255,255,0.42)', margin: 0 }}>
                {t('team.sub')}
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Two-network layout ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_52px_1fr]"
          style={{ alignItems: 'stretch' }}
        >

          {/* ── Morocco network ── */}
          <RevealWrapper>
            <div style={{ paddingRight: 'clamp(16px, 3vw, 36px)' }}>
              {/* Network label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '18px', height: '2px', background: '#2EAADC', borderRadius: '1px' }} />
                <span
                  style={{
                    fontFamily: F, fontSize: '8.5px', fontWeight: 700,
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.32)',
                  }}
                >
                  Réseau Maroc
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {moroccoMembers.map((m, idx) => (
                  <MemberCard key={idx} {...m} delay={idx * 0.1} />
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* ── Center divider ── */}
          <div
            className="hidden lg:flex flex-col items-center"
            style={{ padding: '4px 0' }}
          >
            <div style={{ flex: 1, width: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <div
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'rgba(46,170,220,0.10)',
                border: '1px solid rgba(46,170,220,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, margin: '14px 0',
              }}
            >
              <span style={{ fontFamily: F, fontSize: '12px', fontWeight: 700, color: '#2EAADC' }}>
                ↔
              </span>
            </div>
            <div style={{ flex: 1, width: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Mobile divider */}
          <div
            className="lg:hidden flex items-center gap-3 my-8"
          >
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontFamily: F, fontSize: '10px', fontWeight: 700, color: '#2EAADC' }}>↔</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* ── France network ── */}
          <RevealWrapper delay={0.15}>
            <div style={{ paddingLeft: 'clamp(16px, 3vw, 36px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '18px', height: '2px', background: '#2EAADC', borderRadius: '1px' }} />
                <span
                  style={{
                    fontFamily: F, fontSize: '8.5px', fontWeight: 700,
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.32)',
                  }}
                >
                  Réseau France
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {franceMembers.map((m, idx) => (
                  <MemberCard key={idx} {...m} delay={(idx + 2) * 0.1} />
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>

        {/* ── Bottom strip ── */}
        <RevealWrapper delay={0.3}>
          <div
            style={{
              marginTop: '52px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontFamily: F, fontSize: '8px', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.18)',
              }}
            >
              Deux réseaux · Une seule mission
            </span>
            <span
              style={{
                fontFamily: F, fontSize: '8px', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.18)',
              }}
            >
              Maroc ↔ France
            </span>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}