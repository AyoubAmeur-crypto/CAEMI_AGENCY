import { useTranslation } from 'react-i18next';
import {
  FileSignature, FileText, PenTool, Compass,
  FolderCheck, User, GraduationCap, Search, ArrowUpRight,
} from 'lucide-react';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';
import logo from '../../assets/logo.png';

const F = "'Roboto', sans-serif";

const ICONS = [
  FileSignature, FileText, PenTool, Compass,
  FolderCheck, User, GraduationCap, Search,
];

function Rule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
      <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.07)' }} />
    </div>
  );
}

/* ── Single catalog row ──────────────────────────────────────── */
function ServiceRow({ num, Icon, text, delay, isLast }) {
  return (
    <RevealWrapper delay={delay}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '18px 0',
          borderBottom: isLast ? 'none' : '1px solid rgba(13,31,60,0.07)',
          cursor: 'default',
          transition: 'padding-left 0.22s ease, border-color 0.22s ease',
          position: 'relative',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.paddingLeft = '10px';
          if (!isLast) e.currentTarget.style.borderBottomColor = 'rgba(46,170,220,0.22)';
          e.currentTarget.querySelector('[data-title]').style.color = '#0D1F3C';
          e.currentTarget.querySelector('[data-arrow]').style.color = '#2EAADC';
          e.currentTarget.querySelector('[data-num]').style.color = 'rgba(46,170,220,0.55)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.paddingLeft = '0';
          if (!isLast) e.currentTarget.style.borderBottomColor = 'rgba(13,31,60,0.07)';
          e.currentTarget.querySelector('[data-title]').style.color = 'rgba(13,31,60,0.72)';
          e.currentTarget.querySelector('[data-arrow]').style.color = 'rgba(13,31,60,0.18)';
          e.currentTarget.querySelector('[data-num]').style.color = 'rgba(13,31,60,0.20)';
        }}
      >
        {/* Number */}
        <span
          data-num=""
          style={{
            fontFamily: F,
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'rgba(13,31,60,0.20)',
            minWidth: '22px',
            flexShrink: 0,
            transition: 'color 0.22s',
          }}
        >
          {num}
        </span>

        {/* Icon chip */}
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '4px',
            background: 'rgba(46,170,220,0.07)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={15} strokeWidth={1.6} style={{ color: '#2EAADC' }} />
        </div>

        {/* Title */}
        <span
          data-title=""
          style={{
            fontFamily: F,
            fontSize: '13.5px',
            fontWeight: 500,
            color: 'rgba(13,31,60,0.72)',
            lineHeight: 1.45,
            flex: 1,
            transition: 'color 0.22s',
          }}
        >
          {text}
        </span>

        {/* Arrow */}
        <ArrowUpRight
          data-arrow=""
          size={13}
          strokeWidth={2}
          style={{ color: 'rgba(13,31,60,0.18)', flexShrink: 0, transition: 'color 0.22s' }}
        />
      </div>
    </RevealWrapper>
  );
}

/* ─── main ──────────────────────────────────────────────────── */
export default function Services() {
  const { t } = useTranslation();

  const services = [
    { num: '01', Icon: ICONS[0], text: t('services.s1') },
    { num: '02', Icon: ICONS[1], text: t('services.s2') },
    { num: '03', Icon: ICONS[2], text: t('services.s3') },
    { num: '04', Icon: ICONS[3], text: t('services.s4') },
    { num: '05', Icon: ICONS[4], text: t('services.s5') },
    { num: '06', Icon: ICONS[5], text: t('services.s6') },
    { num: '07', Icon: ICONS[6], text: t('services.s7') },
    { num: '08', Icon: ICONS[7], text: t('services.s8') },
  ];

  const col1 = services.slice(0, 4);
  const col2 = services.slice(4, 8);

  return (
    <section
      id="services"
      style={{ background: '#F5F0E8', fontFamily: F, position: 'relative', overflow: 'hidden' }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Background Logo Watermark for entire section */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          opacity: 0.03,
          zIndex: 0,
        }}
      >
      </div>

      <div style={{ maxWidth: '1480px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Full-width 2-col header (same as About) ── */}
        <RevealWrapper>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginBottom: '48px' }}
          >
            <div>
              <SectionTag>{t('services.tag')}</SectionTag>
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
                {t('services.title')}
              </h2>
            </div>
            <div>
              <Rule />
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: 0 }}>
                {t('services.desc')}
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Catalog grid ── */}
        <div
          style={{
            position: 'relative',
            background: '#fff',
            border: '1px solid rgba(13,31,60,0.07)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 1px 8px rgba(13,31,60,0.05)',
          }}
        >
          {/* Top label bar */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '13px 28px',
              borderBottom: '1px solid rgba(13,31,60,0.07)',
              background: 'rgba(13,31,60,0.02)',
            }}
          >
            <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.28)' }}>
              08 services disponibles
            </span>
            <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.22)' }}>
              Maroc → France
            </span>
          </div>

          {/* Two catalog columns */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ padding: '0 28px', position: 'relative', zIndex: 1 }}
          >

            {/* Column 1 */}
            <div
              style={{ paddingRight: '0' }}
              className="lg:pr-10 lg:border-r lg:border-r-[rgba(13,31,60,0.06)]"
            >
              {col1.map(({ num, Icon, text }, idx) => (
                <ServiceRow
                  key={num}
                  num={num}
                  Icon={Icon}
                  text={text}
                  delay={idx * 0.06}
                  isLast={idx === col1.length - 1}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="lg:pl-10">
              {col2.map(({ num, Icon, text }, idx) => (
                <ServiceRow
                  key={num}
                  num={num}
                  Icon={Icon}
                  text={text}
                  delay={(idx + 4) * 0.06}
                  isLast={idx === col2.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA bar */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px 28px',
              borderTop: '1px solid rgba(13,31,60,0.07)',
              background: 'rgba(13,31,60,0.015)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.38)' }}>
                Accompagnement personnalisé · Du dossier à l'admission
              </span>
            </div>
            <a
              href="#formulaire"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('formulaire');
                if (el) window.lenis ? window.lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontFamily: F,
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#2EAADC',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.65'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              Commencer maintenant
              <ArrowUpRight size={11} strokeWidth={2.5} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}