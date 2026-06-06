import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, GraduationCap, Users } from 'lucide-react';
import logo from '../../assets/logo.png';

const FONT = "'Roboto', sans-serif";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '13%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '7%']);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const stats = [
    { num: '8', label: t('hero.stat_services'), Icon: GraduationCap },
    { num: '2', label: t('hero.stat_networks'), Icon: Users },
    { num: '100%', label: t('hero.stat_custom'), Icon: MapPin },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F5F0E8] overflow-hidden flex flex-col"
      style={{ fontFamily: FONT }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2EAADC]/45 to-transparent z-30" />

      {/* Logo watermark */}
      <div className="absolute top-[6%] left-[1%] select-none pointer-events-none z-0 hidden lg:block">
        <img src={logo} alt="" className="w-[280px] h-[360px] object-contain opacity-[0.038]" />
      </div>

      {/* ── Main layout ── */}
      <div className="flex-1 flex flex-col   lg:flex-row min-h-screen">

        {/* ════ LEFT — Text ════ */}
        <motion.div
          className="flex flex-col justify-start lg:justify-center lg:w-[45%] xl:w-[43%]
                     px-8 md:px-14 lg:px-16 xl:px-20
                     pt-28 pb-16 lg:pt-32 lg:pb-19 relative z-10"
          style={{ y: textY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >

          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-7 ">
            <div
              className={`inline-flex items-center gap-2 px-3 py-[6px] border
                          ${isAr ? 'flex-row-reverse' : ''}`}
              style={{
                borderColor: 'rgba(46,170,220,0.22)',
                background: 'rgba(46,170,220,0.055)',
                borderRadius: '2px',
              }}
            >

              <span
                style={{
                  fontFamily: FONT,
                  fontSize: '8px',
                  fontWeight: 700,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: '#2EAADC',
                }}
              >
                {isAr ? 'المغرب ← فرنسا' : 'Maroc → France'}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className={isAr ? 'text-right' : ''}
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(2.2rem, 3.8vw, 3.7rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0D1F3C',
              marginBottom: '1.25rem',
            }}
          >
            {isAr ? (
              <>
                جسرك نحو{' '}
                <span style={{ color: '#2EAADC' }}>التميّز</span>
                <br />الأكاديمي
              </>
            ) : (
              <>
                Votre passerelle
                <br />vers{' '}
                <span style={{ color: '#2EAADC' }}>l'excellence</span>
                <br />académique
              </>
            )}
          </motion.h1>

          {/* Rule */}
          <motion.div
            variants={fadeUp}
            className="flex items-center mb-5"
            style={{ gap: '10px' }}
          >
            <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
            <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.08)' }} />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className={isAr ? 'text-right' : ''}
            style={{
              fontFamily: FONT,
              fontSize: '0.85rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(13,31,60,0.48)',
              maxWidth: '400px',
              marginBottom: '2rem',
            }}
          >
            {t('hero.desc')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className={`flex flex-wrap mb-6 ${isAr ? 'flex-row-reverse' : ''}`}
            style={{ gap: '10px' }}
          >
            <a
              href="#services"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) window.lenis ? window.lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center transition-all duration-400"
              style={{
                fontFamily: FONT,
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#fff',
                background: '#0D1F3C',
                padding: '11px 22px',
                borderRadius: '2px',
                gap: '8px',
                boxShadow: '0 4px 18px rgba(13,31,60,0.18)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2EAADC'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0D1F3C'; }}
            >
              {t('hero.cta_primary')}
              <ArrowRight size={10} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://www.instagram.com/caemi_support/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-all duration-300"
              style={{
                fontFamily: FONT,
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(13,31,60,0.55)',
                border: '1px solid rgba(13,31,60,0.14)',
                padding: '11px 22px',
                borderRadius: '2px',
                gap: '8px',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2EAADC';
                (e.currentTarget as HTMLElement).style.color = '#2EAADC';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,31,60,0.14)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(13,31,60,0.55)';
              }}
            >
              {t('hero.cta_secondary')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 lg:mb-1"
            style={{ borderTop: '1px solid rgba(13,31,60,0.08)', paddingTop: '1.5rem' }}
          >
            {stats.map(({ num, label, Icon }, i) => (
              <div
                key={i}
                className="flex flex-col"
                style={{
                  gap: '6px',
                  paddingLeft: i > 0 ? '18px' : undefined,
                  borderLeft: i > 0 ? '1px solid rgba(13,31,60,0.08)' : undefined,
                }}
              >
                <Icon size={12} strokeWidth={1.5} style={{ color: 'rgba(46,170,220,0.4)' }} />
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    color: '#0D1F3C',
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: '7.5px',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(13,31,60,0.3)',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ════ RIGHT — Photo ════ */}
        <motion.div
          className="relative hidden lg:block lg:w-[55%] xl:w-[57%]"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <img
              src="https://images.unsplash.com/photo-1500301111609-42f1aa6df72a?w=1300&q=88&auto=format&fit=crop&crop=faces,center"
              alt="Étudiante devant la Tour Eiffel, Paris"
              className="w-full h-full object-cover object-center"
              style={{ filter: 'saturate(0.83) brightness(0.93)' }}
            />

            {/* Left cream blend */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, #F5F0E8 0%, rgba(245,240,232,0.12) 38%, transparent 60%)' }}
            />
            {/* Bottom vignette */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,31,60,0.22) 0%, transparent 55%)' }}
            />
            {/* Top fade */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(245,240,232,0.15) 0%, transparent 28%)' }}
            />
            {/* Warm tone grade */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(228,205,172,0.06)', mixBlendMode: 'multiply' }}
            />

            {/* ── Floating card ── */}
            <motion.div
              className="absolute bottom-12 left-8 z-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="backdrop-blur-xl"
                style={{
                  width: '204px',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '10px',
                  padding: '16px',
                  boxShadow: '0 20px 52px rgba(0,0,0,0.20)',
                }}
              >
                {/* Logo + name row */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <img src="/logo.png" alt="CAEMI" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                  <div>
                    <div style={{ fontFamily: FONT, fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', color: '#ffffff', lineHeight: 1 }}>
                      CAEMI
                    </div>
                    <div style={{ fontFamily: FONT, fontSize: '7.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(54, 54, 54, 0.8)', marginTop: '2px' }}>
                      Campus France
                    </div>
                  </div>
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.09)', marginBottom: '12px' }} />

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="relative flex" style={{ width: '7px', height: '7px' }}>
                    
                  </span>
                  <span style={{ fontFamily: FONT, fontSize: '8px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.81)' }}>
                    {isAr ? 'مقاعد متاحة' : 'Dossiers ouverts'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Vertical label */}
            <motion.div
              className="absolute right-6 top-1/2 z-10"
              style={{ transform: 'translateY(-50%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.9 }}
            >
              <div
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontFamily: FONT,
                  fontSize: '7.5px',
                  fontWeight: 700,
                  letterSpacing: '0.44em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.11)',
                }}
              >
                Paris · 2025
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom navy strip ── */}
      <motion.div
        className="static z-10 bg-[#0D1F3C] w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div
          className="max-w-[1440px] mx-auto flex items-center justify-between flex-wrap"
          style={{ padding: '13px 80px', gap: '16px' }}
        >
          <p style={{ fontFamily: FONT, fontSize: '8px', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            {isAr ? 'مرافقة كاملة من الملف إلى القبول' : "Accompagnement complet · Du dossier à l'admission"}
          </p>

          <div className="hidden sm:flex items-center" style={{ gap: '20px' }}>
            {['Campus France', 'TCF', 'Visa', 'Admission'].map((tag, i, arr) => (
              <span key={i} className="flex items-center" style={{ gap: '20px' }}>
                <span style={{ fontFamily: FONT, fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
                  {tag}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(46,170,220,0.18)', fontSize: '11px' }}>·</span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#formulaire"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('formulaire');
              if (el) window.lenis ? window.lenis.scrollTo(el) : el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center transition-all duration-300 hover:gap-2.5"
            style={{ fontFamily: FONT, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#2EAADC', gap: '6px' }}
          >
            {isAr ? 'ابدأ الآن' : 'Commencer'}
            <ArrowRight size={9} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}