import { useTranslation } from 'react-i18next';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';

const F = "'Roboto', sans-serif";

function Rule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
      <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.07)' }} />
    </div>
  );
}

function PillarRow({ num, text, isLast }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '16px 0',
        borderBottom: isLast ? 'none' : '1px solid rgba(13,31,60,0.06)',
        transition: 'padding-left 0.22s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.paddingLeft = '8px';
        e.currentTarget.querySelector('[data-num]').style.color = 'rgba(46,170,220,0.55)';
        e.currentTarget.querySelector('[data-text]').style.color = '#0D1F3C';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.paddingLeft = '0';
        e.currentTarget.querySelector('[data-num]').style.color = 'rgba(13,31,60,0.20)';
        e.currentTarget.querySelector('[data-text]').style.color = 'rgba(13,31,60,0.70)';
      }}
    >
      <span
        data-num=""
        style={{ fontFamily: F, fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(13,31,60,0.20)', minWidth: '20px', flexShrink: 0, transition: 'color 0.22s' }}
      >
        0{num}
      </span>
      <span
        data-text=""
        style={{ fontFamily: F, fontSize: '13.5px', fontWeight: 500, color: 'rgba(13,31,60,0.70)', flex: 1, transition: 'color 0.22s', lineHeight: 1.5 }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Vision() {
  const { t } = useTranslation();

  const pillars = [
    t('vision.p1'), t('vision.p2'), t('vision.p3'),
    t('vision.p4'), t('vision.p5'),
  ];

  return (
    <section
      id="vision"
      style={{ background: '#F5F0E8', fontFamily: F }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20 border-t border-10 border-[rgba(13,31,60,0.08)]"
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>

        {/* ── 2-col header ── */}
        <RevealWrapper>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginBottom: '48px' }}
          >
            <div>
              <SectionTag>{t('vision.tag')}</SectionTag>
              <h2
                style={{
                  fontFamily: F,
                  fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.11,
                  letterSpacing: '-0.022em',
                  color: '#0D1F3C',
                  margin: '16px 0 0',
                }}
              >
                {t('vision.title')}
              </h2>
            </div>
            <div>
              <Rule />
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: 0 }}>
                {t('vision.mission_label') || ''}
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Main 2-col ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 'clamp(28px, 5vw, 64px)', alignItems: 'start' }}
        >

          {/* ════ LEFT — Vision + Mission blocks ════ */}
          <RevealWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Vision */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(13,31,60,0.07)',
                  borderLeft: '3px solid #2EAADC',
                  borderRadius: '0 4px 4px 0',
                  padding: '26px 28px',
                  boxShadow: '0 1px 6px rgba(13,31,60,0.04)',
                  transition: 'box-shadow 0.28s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,31,60,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(13,31,60,0.04)'; }}
              >
                <div
                  style={{
                    fontFamily: F, fontSize: '8.5px', fontWeight: 700,
                    letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: '#2EAADC', marginBottom: '12px',
                  }}
                >
                  {t('vision.vision_label')}
                </div>
                <div style={{ width: '20px', height: '1px', background: 'rgba(46,170,220,0.35)', marginBottom: '14px' }} />
                <p style={{ fontFamily: F, fontSize: '14px', fontWeight: 400, lineHeight: 1.88, color: 'rgba(13,31,60,0.70)', margin: 0 }}>
                  {t('vision.vision_text')}
                </p>
              </div>

              {/* Mission */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(13,31,60,0.07)',
                  borderLeft: '3px solid #0D1F3C',
                  borderRadius: '0 4px 4px 0',
                  padding: '26px 28px',
                  boxShadow: '0 1px 6px rgba(13,31,60,0.04)',
                  transition: 'box-shadow 0.28s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,31,60,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(13,31,60,0.04)'; }}
              >
                <div
                  style={{
                    fontFamily: F, fontSize: '8.5px', fontWeight: 700,
                    letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: '#0D1F3C', marginBottom: '12px',
                  }}
                >
                  {t('vision.mission_label')}
                </div>
                <div style={{ width: '20px', height: '1px', background: 'rgba(13,31,60,0.20)', marginBottom: '14px' }} />
                <p style={{ fontFamily: F, fontSize: '14px', fontWeight: 400, lineHeight: 1.88, color: 'rgba(13,31,60,0.70)', margin: 0 }}>
                  {t('vision.mission_text')}
                </p>
              </div>
            </div>
          </RevealWrapper>

          {/* ════ RIGHT — Pillars catalog ════ */}
          <RevealWrapper>
            {/* Pillars sub-header */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: F, fontSize: '8.5px', fontWeight: 700,
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: 'rgba(13,31,60,0.28)', marginBottom: '10px',
                }}
              >
                {t('vision.pillars_tag')}
              </div>
              <h3
                style={{
                  fontFamily: F,
                  fontSize: 'clamp(1.3rem, 2.2vw, 2rem)',
                  fontWeight: 700,
                  lineHeight: 1.16,
                  letterSpacing: '-0.02em',
                  color: '#0D1F3C',
                  margin: 0,
                }}
              >
                {t('vision.pillars_title')}
              </h3>
            </div>

            {/* Catalog card */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(13,31,60,0.07)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 1px 6px rgba(13,31,60,0.04)',
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: '12px 24px',
                  borderBottom: '1px solid rgba(13,31,60,0.06)',
                  background: 'rgba(13,31,60,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontFamily: F, fontSize: '8px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.28)' }}>
                  05 piliers stratégiques
                </span>
              </div>

              {/* Pillar rows */}
              <div style={{ padding: '0 24px' }}>
                {pillars.map((pillar, idx) => (
                  <RevealWrapper key={idx} delay={idx * 0.07}>
                    <PillarRow num={idx + 1} text={pillar} isLast={idx === pillars.length - 1} />
                  </RevealWrapper>
                ))}
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}