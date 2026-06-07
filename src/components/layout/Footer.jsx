import { useTranslation } from 'react-i18next';
import {
  ArrowUpRight,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import RevealWrapper from '../ui/RevealWrapper';
import logo from '../../assets/logo.webp';

const F = "'Roboto', sans-serif";

const colors = {
  navy: '#0D1F3C',
  deepNavy: '#08162A',
  sky: '#2EAADC',
  cream: '#F5F0E8',
  gold: '#C9A84C',
};

function scrollToSection(e, href) {
  if (!href.startsWith('#')) return;

  e.preventDefault();
  const el = document.querySelector(href);
  if (!el) return;

  if (window.lenis) {
    window.lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function SectionTitle({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        style={{
          width: '18px',
          height: '1px',
          background: colors.sky,
          opacity: 0.75,
        }}
      />
      <span
        style={{
          fontFamily: F,
          fontSize: '8.5px',
          fontWeight: 800,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.34)',
        }}
      >
        {children}
      </span>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      onClick={e => scrollToSection(e, href)}
      className="group inline-flex w-fit items-center gap-2 text-white/55 transition-colors duration-300 hover:text-white"
      style={{
        fontFamily: F,
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: 1.4,
        textDecoration: 'none',
      }}
    >
      <span
        className="transition-all duration-300 group-hover:w-5 group-hover:bg-[#2EAADC]"
        style={{
          width: '10px',
          height: '1px',
          background: 'rgba(255,255,255,0.22)',
          flexShrink: 0,
        }}
      />
      {children}
    </a>
  );
}

const WhatsAppIcon = ({ size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

function ContactLink({ href, icon: Icon, label, children, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-[6px] border border-white/[0.07] bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-[#2EAADC]/35 hover:bg-white/[0.065]"
      style={{ textDecoration: 'none' }}
    >
      <span
        className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-[4px] transition-colors duration-300 "
        
      >
        <Icon
          size={18}
          strokeWidth={1.8}
          className="text-[#2EAADC] transition-colors duration-300 group-hover:text-white"
        />
      </span>
      <span className="min-w-0 flex-1">
        <span
          style={{
            display: 'block',
            fontFamily: F,
            fontSize: '8px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            marginBottom: '4px',
          }}
        >
          {label}
        </span>
        <span
          className="truncate text-white/70 transition-colors duration-300 group-hover:text-white"
          style={{
            display: 'block',
            fontFamily: F,
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          {children}
        </span>
      </span>
      <ArrowUpRight
        size={14}
        strokeWidth={2}
        className="flex-shrink-0 text-white/20 transition-colors duration-300 group-hover:text-[#2EAADC]"
      />
    </a>
  );
}

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith('ar');

  const navLinks = [
    { href: '#accueil', label: isAr ? 'الرئيسية' : 'Accueil' },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#vision', label: t('nav.vision') },
    { href: '#team', label: t('nav.team') },
    { href: '#formulaire', label: t('nav.register') },
  ];

  const serviceLinks = [
    t('services.s1'),
    t('services.s3'),
    t('services.s4'),
    t('services.s8'),
  ];

  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${colors.navy} 0%, ${colors.deepNavy} 100%)`,
        fontFamily: F,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="px-6 pb-10 pt-20 md:px-12 md:pt-24 lg:px-16 xl:px-20"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2EAADC]/50 to-transparent" />
     

      <div className="relative z-10 mx-auto max-w-[1480px]">
        <RevealWrapper>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <a
                href="#accueil"
                onClick={e => scrollToSection(e, '#accueil')}
                aria-label="CAEMI"
                className="mb-7 inline-flex items-center gap-4"
                style={{ textDecoration: 'none' }}
              >
                <span className="grid h-[70px] w-[70px] place-items-center  ">
                  <img src={logo} alt="CAEMI" className="h-20 w-auto object-contain" />
                </span>
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: F,
                      fontSize: '20px',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    CAEMI
                  </span>
                  <span
                    style={{
                      display: 'block',
                      marginTop: '8px',
                      fontFamily: F,
                      fontSize: '8.5px',
                      fontWeight: 800,
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      color: colors.gold,
                    }}
                  >
                    {t('footer.tagline')}
                  </span>
                </span>
              </a>

              <p
                style={{
                  maxWidth: '480px',
                  margin: 0,
                  fontFamily: F,
                  fontSize: '15px',
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.58)',
                }}
              >
                {t('about.desc_2')}
              </p>

              <div className="mt-8 grid max-w-[520px] grid-cols-1 gap-3 sm:grid-cols-2 border-t border-white/10 py-4">
                <div className="rounded-[6px] border-r border-white/[0.07] bg-white/[0.05] p-4">
                  <GraduationCap size={18} strokeWidth={1.7} style={{ color: colors.sky, marginBottom: '12px' }} />
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: '8.5px',
                      fontWeight: 800,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.32)',
                      marginBottom: '8px',
                    }}
                  >
                    Campus France
                  </div>
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.72)',
                    }}
                  >
                    {isAr ? 'مرافقة أكاديمية وإدارية' : 'Accompagnement académique et administratif'}
                  </div>
                </div>

                <div className="rounded-[6px] border-l border-white/[0.07] bg-white/[0.05] p-4">
                  <MapPin size={18} strokeWidth={1.7} style={{ color: colors.gold, marginBottom: '12px' }} />
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: '8.5px',
                      fontWeight: 800,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.32)',
                      marginBottom: '8px',
                    }}
                  >
                    Maroc / France
                  </div>
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: '13px',
                      fontWeight: 500,
                      lineHeight: 1.55,
                      color: 'rgba(255,255,255,0.72)',
                    }}
                  >
                    {isAr ? 'شبكة قريبة من الطلبة' : 'Un réseau proche des étudiants'}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <SectionTitle>{isAr ? 'روابط' : 'Navigation'}</SectionTitle>
              <div className="flex flex-col gap-3.5">
                {navLinks.map(link => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <SectionTitle>{isAr ? 'خدمات' : 'Services'}</SectionTitle>
              <div className="flex flex-col gap-3.5">
                {serviceLinks.map(service => (
                  <FooterLink key={service} href="#services">
                    {service}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <SectionTitle>{isAr ? 'تواصل معنا' : 'Contact'}</SectionTitle>
              <div className="flex flex-col gap-3">
                <ContactLink href="mailto:caemi0901@gmail.com" icon={Mail} label="Email">
                  caemi0901@gmail.com
                </ContactLink>
                <ContactLink
                  href="https://www.instagram.com/caemi_support/"
                  icon={Instagram}
                  label="Instagram"
                  external
                >
                  @caemi_support
                </ContactLink>
                <ContactLink
                  href="https://wa.me/212763867060"
                  icon={WhatsAppIcon}
                  label="WhatsApp"
                  external
                >
                  {isAr ? 'تواصل سريع' : 'Contact rapide'}
                </ContactLink>
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.15}>
          <div
            className="mt-14 flex flex-col gap-5 border-t border-white/[0.07] pt-7 md:flex-row md:items-center md:justify-between"
          >
            <span
              style={{
                fontFamily: F,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.34)',
              }}
            >
              {t('footer.rights')}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2EAADC]" />
              <span
                style={{
                  fontFamily: F,
                  fontSize: '9px',
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                {isAr ? 'المغرب إلى فرنسا' : 'Maroc vers France'}
              </span>
              <span className="hidden h-px w-8 bg-white/10 sm:block" />
              <a
                href="#formulaire"
                onClick={e => scrollToSection(e, '#formulaire')}
                className="inline-flex items-center gap-2 text-[#2EAADC] transition-opacity duration-300 hover:opacity-70"
                style={{
                  fontFamily: F,
                  fontSize: '9px',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {t('nav.register')}
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </footer>
  );
}
