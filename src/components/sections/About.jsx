import { useTranslation } from 'react-i18next';
import { GraduationCap, Globe, Users, Award, ArrowUpRight } from 'lucide-react';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';
import logo from "../../assets/logo.png"

const F = "'Roboto', sans-serif";

const CARDS_DEF = (t) => [
  { Icon: GraduationCap, title: t('about.card_exp_title'),    desc: t('about.card_exp_desc')    },
  { Icon: Globe,         title: t('about.card_net_title'),    desc: t('about.card_net_desc')    },
  { Icon: Users,         title: t('about.card_follow_title'), desc: t('about.card_follow_desc') },
  { Icon: Award,         title: t('about.card_result_title'), desc: t('about.card_result_desc') },
];

function Rule() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
      <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
      <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.07)' }} />
    </div>
  );
}

function Card({ Icon, title, desc, delay }) {
  return (
    <RevealWrapper delay={delay} style={{ height: '100%' }}>
      <div
        style={{
          fontFamily: F,
          background: '#fff',
          border: '1px solid rgba(13,31,60,0.07)',
          borderRadius: '4px',
          padding: '28px 24px',
          boxShadow: '0 1px 6px rgba(13,31,60,0.04)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box',
          transition: 'box-shadow 0.28s, transform 0.28s',
          cursor: 'default',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 10px 32px rgba(13,31,60,0.10)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 1px 6px rgba(13,31,60,0.04)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Icon chip */}
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '4px',
            background: 'rgba(46,170,220,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '18px',
            flexShrink: 0,
          }}
        >
          <Icon size={19} strokeWidth={1.6} style={{ color: '#2EAADC' }} />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#0D1F3C',
            marginBottom: '9px',
            lineHeight: 1.45,
          }}
        >
          {title}
        </div>

        {/* Accent rule */}
        <div style={{ width: '22px', height: '1px', background: 'rgba(46,170,220,0.4)', marginBottom: '13px' }} />

        {/* Description */}
        <p
          style={{
            fontSize: '13.5px',
            fontWeight: 300,
            lineHeight: 1.88,
            color: 'rgba(13,31,60,0.55)',
            flex: 1,
            margin: 0,
          }}
        >
          {desc}
        </p>
      </div>
    </RevealWrapper>
  );
}

/* ─── main ──────────────────────────────────────────────────── */

export default function About() {
  const { t } = useTranslation();
  const cards = CARDS_DEF(t);

  return (
    <section
      id="about"
      style={{ background: '#F5F0E8', fontFamily: F }}
      className=" px-6 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="flex flex-col items-center pt-10 gap-mb-10">
        <img src={logo} alt="" srcset="" className="w-44 h-44 object-contain "/>
        <div style={{ maxWidth: '1480px', margin: '0 auto' }} className='pb-28 '>

        {/* ── Full-width two-col header ── */}
        <RevealWrapper>
          <div
            style={{
              gap: 'clamp(28px, 5vw, 80px)',
              marginBottom: '40px',
            }}
            className="grid grid-cols-1 lg:grid-cols-2 items-start lg:items-end"
          >
            {/* Title side */}
            <div>
              <SectionTag>{t('about.tag')}</SectionTag>
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
                {t('about.title')}
              </h2>
            </div>

            {/* Description side */}
            <div>
              <Rule />
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: '0 0 10px' }}>
                {t('about.desc_1')}
              </p>
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: 0 }}>
                {t('about.desc_2')}
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Image | Cards grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '14px', alignItems: 'stretch' }}
        >

          {/* ════ LEFT — Image fills full height of right column ════ */}
          <RevealWrapper style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '6px',
                flex: 1,
                minHeight: '480px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=88&w=1170&auto=format&fit=crop&crop=faces,center"
                alt="Students collaborating"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'saturate(0.82) brightness(0.90)',
                  transition: 'transform 0.85s ease',
                  display: 'block',
                }}
                
              />

              {/* Gradient — lightens toward card */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to top, rgba(13,31,60,0.50) 0%, rgba(13,31,60,0.06) 48%, transparent 70%)',
              }} />

              {/* Warm tone grade */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'rgba(218,196,160,0.06)',
                mixBlendMode: 'multiply',
              }} />

              {/* ── White bottom card — edge to edge, no gap ── */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: '#ffffff',
                  
                  padding: '20px 26px 22px',
                }}
              >
                <div style={{
                  fontFamily: F,
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#2EAADC',
                  marginBottom: '6px',
                }}>
                  {t('about.tag') || 'Notre approche'}
                </div>
                <div style={{
                  fontFamily: F,
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#0D1F3C',
                  lineHeight: 1.32,
                }}>
                  Relier l'ambition à l'opportunité
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* ════ RIGHT — Cards 2×2 ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {/* Cards in 2×2 grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: '14px', flex: 1 }}
            >
              {cards.map(({ Icon, title, desc }, idx) => (
                <Card key={idx} Icon={Icon} title={title} desc={desc} delay={idx * 0.08} />
              ))}
            </div>

            {/* Trust strip */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(13,31,60,0.07)',
                borderRadius: '4px',
                padding: '14px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                boxShadow: '0 1px 6px rgba(13,31,60,0.04)',
              }}
            >
              {['Campus France', 'TCF / DELF', 'Visa Campus', 'Admission'].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: F,
                    fontSize: '8px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(13,31,60,0.30)',
                  }}
                >
                  {tag}
                </span>
              ))}
              <a
                href="#services"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('services');
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
                Voir nos services
                <ArrowUpRight size={11} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}