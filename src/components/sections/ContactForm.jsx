import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, AlertCircle, Loader2, Lock, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import RevealWrapper from '../ui/RevealWrapper';
import { appendLeadToSheet } from '../../lib/googleSheets';

const F = "'Roboto', sans-serif";

/* ── shared label style ─────────────────────────────────────── */
const labelStyle = {
  fontFamily: F,
  fontSize: '8.5px',
  fontWeight: 700,
  letterSpacing: '0.26em',
  textTransform: 'uppercase',
  color: 'rgba(13,31,60,0.45)',
  marginBottom: '8px',
  display: 'block',
};

/* ── input base ─────────────────────────────────────────────── */
const inputBase = {
  fontFamily: F,
  fontSize: '13.5px',
  fontWeight: 400,
  color: '#0D1F3C',
  background: '#F8F7F4',
  border: '1px solid rgba(13,31,60,0.10)',
  borderRadius: '3px',
  padding: '12px 14px',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, background 0.2s',
  appearance: 'none',
  WebkitAppearance: 'none',
};

function CustomSelect({ value, onChange, options, placeholder, error, searchable }) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selected = options.find(o => o.value === value);
  const selectRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    if (!open) {
      setSearchTerm('');
    }
  }, [open, searchable]);

  const filteredOptions = searchable 
    ? options.filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
    : options;

  return (
    <div className="relative" ref={selectRef}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          ...inputBase,
          borderColor: error ? '#c0392b' : open ? '#2EAADC' : 'rgba(13,31,60,0.10)',
          background: open ? '#fff' : '#F8F7F4',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <span style={{ color: selected ? '#0D1F3C' : 'rgba(13,31,60,0.5)' }}>
          {selected ? selected.label : placeholder}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={14} style={{ color: 'rgba(13,31,60,0.4)' }} />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              background: '#fff',
              border: '1px solid rgba(13,31,60,0.10)',
              borderRadius: '3px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              zIndex: 50,
              maxHeight: '260px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {searchable && (
              <div style={{ padding: '8px', borderBottom: '1px solid rgba(13,31,60,0.07)' }}>
                <input 
                  ref={searchInputRef}
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    fontFamily: F,
                    fontSize: '12px',
                    border: '1px solid rgba(13,31,60,0.1)',
                    borderRadius: '3px',
                    outline: 'none',
                    background: '#F8F7F4'
                  }}
                />
              </div>
            )}
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map(opt => (
                  <div
                    key={opt.value}
                    onMouseDown={() => { onChange(opt.value); setOpen(false); }}
                    style={{
                      padding: '10px 14px',
                      fontFamily: F,
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      background: value === opt.value ? 'rgba(46,170,220,0.1)' : 'transparent',
                      color: value === opt.value ? '#2EAADC' : '#0D1F3C',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => { if (value !== opt.value) e.currentTarget.style.background = '#F8F7F4'; }}
                    onMouseLeave={e => { if (value !== opt.value) e.currentTarget.style.background = 'transparent'; }}
                  >
                    {opt.label}
                  </div>
                ))
              ) : (
                <div style={{ padding: '12px 14px', fontFamily: F, fontSize: '13px', color: 'rgba(13,31,60,0.4)', textAlign: 'center' }}>
                  Aucun résultat
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={labelStyle}>{label}</label>
      {children}
      {error && (
        <span style={{ fontFamily: F, fontSize: '10px', color: '#c0392b', marginTop: '5px', fontWeight: 500 }}>
          Champ requis
        </span>
      )}
    </div>
  );
}

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language.startsWith('ar');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm();
  const levelValue = watch('level');
  const targetRegionValue = watch('targetRegion');

  const levelOptions = [
    { value: "CPGE", label: t('form.level_cpge') },
    { value: "Bac", label: t('form.level_bac') },
    { value: "Licence", label: t('form.level_licence') },
    { value: "Master", label: t('form.level_master') },
    { value: "Autre", label: t('form.level_other') },
  ];

  const regionOptions = [
    { value: "Île-de-France", label: "Île-de-France" },
    { value: "Auvergne-Rhône-Alpes", label: "Auvergne-Rhône-Alpes" },
    { value: "Bourgogne-Franche-Comté", label: "Bourgogne-Franche-Comté" },
    { value: "Bretagne", label: "Bretagne" },
    { value: "Centre-Val de Loire", label: "Centre-Val de Loire" },
    { value: "Corse", label: "Corse" },
    { value: "Grand Est", label: "Grand Est" },
    { value: "Hauts-de-France", label: "Hauts-de-France" },
    { value: "Normandie", label: "Normandie" },
    { value: "Nouvelle-Aquitaine", label: "Nouvelle-Aquitaine" },
    { value: "Occitanie", label: "Occitanie" },
    { value: "Pays de la Loire", label: "Pays de la Loire" },
    { value: "Provence-Alpes-Côte d'Azur", label: "Provence-Alpes-Côte d'Azur" },
    { value: "Guadeloupe", label: "Guadeloupe" },
    { value: "Martinique", label: "Martinique" },
    { value: "Guyane", label: "Guyane" },
    { value: "La Réunion", label: "La Réunion" },
    { value: "Mayotte", label: "Mayotte" }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      await appendLeadToSheet(data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      const apiKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
      const sheetId = import.meta.env.VITE_GOOGLE_SPREADSHEET_ID;
      if (!apiKey || apiKey === 'your_google_api_key_here' || !sheetId || sheetId === 'your_spreadsheet_id_here') {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMsg(isAr
          ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
          : "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /* focus/blur handlers */
  const onFocus = e => {
    e.currentTarget.style.borderColor = '#2EAADC';
    e.currentTarget.style.background  = '#fff';
  };
  const onBlur = e => {
    e.currentTarget.style.borderColor = 'rgba(13,31,60,0.10)';
    e.currentTarget.style.background  = '#F8F7F4';
  };

  return (
    <section
      id="formulaire"
      style={{ background: '#F5F0E8', fontFamily: F, position: 'relative' }}
      className="py-28 px-6 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(to right, transparent, #2EAADC, transparent)' }} />

      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>

        {/* ── 2-col header ── */}
        <RevealWrapper>
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: 'clamp(28px, 5vw, 80px)', alignItems: 'end', marginBottom: '48px' }}
          >
            <div>
              <SectionTag>{t('form.tag')}</SectionTag>
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
                {t('form.title')}
              </h2>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '18px 0 20px' }}>
                <div style={{ width: '28px', height: '1px', background: 'rgba(46,170,220,0.55)' }} />
                <div style={{ flex: 1, height: '1px', background: 'rgba(13,31,60,0.07)' }} />
              </div>
              <p style={{ fontFamily: F, fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(13,31,60,0.5)', margin: 0 }}>
                {t('form.desc')}
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* ── Form card ── */}
        <RevealWrapper>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(13,31,60,0.07)',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 2px 24px rgba(13,31,60,0.07)',
            }}
          >

            {/* Card label bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '13px 32px',
                borderBottom: '1px solid rgba(13,31,60,0.07)',
                background: 'rgba(13,31,60,0.02)',
              }}
            >
              <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.28)' }}>
                Formulaire de candidature
              </span>
              <span style={{ fontFamily: F, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(13,31,60,0.22)' }} className='hidden lg:block'>
                Maroc → France
              </span>
            </div>

            {/* ── Success state ── */}
            {isSuccess ? (
              <div
                style={{
                  padding: 'clamp(48px, 8vw, 96px) 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={48} strokeWidth={1.5} style={{ color: '#2EAADC', marginBottom: '24px' }} />
                <h3
                  style={{
                    fontFamily: F,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#0D1F3C',
                    margin: '0 0 16px',
                  }}
                >
                  {t('form.success_title')}
                </h3>
                <p
                  style={{
                    fontFamily: F,
                    fontSize: '18px',
                    fontWeight: 300,
                    lineHeight: 1.88,
                    color: 'rgba(13,31,60,0.52)',
                    maxWidth: '500px',
                    margin: '0 0 32px',
                  }}
                >
                  {t('form.success_desc')}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  style={{
                    fontFamily: F,
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: '#0D1F3C',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '12px 24px',
                    cursor: 'pointer',
                    transition: 'background 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2EAADC'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0D1F3C'; }}
                >
                  {isAr ? 'إرسال طلب آخر' : 'Envoyer une autre demande'}
                </button>
              </div>
            ) : (

              /* ── Form body ── */
              <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 'clamp(24px, 4vw, 40px) 16px 36px' }}>

                {/* Error */}
                {errorMsg && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 16px',
                      background: 'rgba(192,57,43,0.05)',
                      border: '1px solid rgba(192,57,43,0.18)',
                      borderLeft: '3px solid #c0392b',
                      borderRadius: '0 3px 3px 0',
                      marginBottom: '28px',
                    }}
                  >
                    <AlertCircle size={14} strokeWidth={1.8} style={{ color: '#c0392b', flexShrink: 0 }} />
                    <span style={{ fontFamily: F, fontSize: '12.5px', fontWeight: 400, color: '#c0392b' }}>
                      {errorMsg}
                    </span>
                  </div>
                )}

                {/* ── Grid: 2 cols ── */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: '20px', marginBottom: '20px' }}
                >
                  <Field label={`${t('form.full_name')} *`} error={errors.fullName}>
                    <input
                      type="text"
                      {...register('fullName', { required: true })}
                      placeholder={t('form.full_name')}
                      style={{
                        ...inputBase,
                        borderColor: errors.fullName ? '#c0392b' : 'rgba(13,31,60,0.10)',
                      }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <Field label={`${t('form.email')} *`} error={errors.email}>
                    <input
                      type="email"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder={t('form.email')}
                      style={{
                        ...inputBase,
                        borderColor: errors.email ? '#c0392b' : 'rgba(13,31,60,0.10)',
                      }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <Field label={`${t('form.phone')} *`} error={errors.phone}>
                    <input
                      type="tel"
                      maxLength={10}
                      {...register('phone', { required: true })}
                      placeholder={t('form.phone')}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9+\s]/g, '');
                      }}
                      style={{
                        ...inputBase,
                        borderColor: errors.phone ? '#c0392b' : 'rgba(13,31,60,0.10)',
                      }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <Field label={`${t('form.city')} *`} error={errors.city}>
                    <input
                      type="text"
                      {...register('city', { required: true })}
                      placeholder={t('form.city')}
                      style={{
                        ...inputBase,
                        borderColor: errors.city ? '#c0392b' : 'rgba(13,31,60,0.10)',
                      }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>

                  <Field label={`${t('form.level')} *`} error={errors.level}>
                    <input type="hidden" {...register('level', { required: true })} />
                    <CustomSelect
                      value={levelValue}
                      onChange={(val) => setValue('level', val, { shouldValidate: true })}
                      options={levelOptions}
                      placeholder={t('form.level')}
                      error={errors.level}
                    />
                  </Field>

                  <Field label={t('form.target_field')}>
                    <input
                      type="text"
                      {...register('targetField')}
                      placeholder="ex: École d'Ingénieurs, Business"
                      style={inputBase}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>
                </div>

                {/* Target region — full width */}
                <div style={{ marginBottom: '20px' }}>
                  <Field label={t('form.target_region')}>
                    <input type="hidden" {...register('targetRegion')} />
                    <CustomSelect
                      value={targetRegionValue}
                      onChange={(val) => setValue('targetRegion', val, { shouldValidate: true })}
                      options={regionOptions}
                      placeholder="Sélectionnez une région..."
                      error={errors.targetRegion}
                      searchable={true}
                    />
                  </Field>
                </div>

                {/* Message — full width */}
                <div style={{ marginBottom: '32px' }}>
                  <Field label={t('form.message')}>
                    <textarea
                      rows={4}
                      {...register('message')}
                      placeholder="Message..."
                      style={{ ...inputBase, resize: 'none', lineHeight: 1.7 }}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </Field>
                </div>

                {/* ── Divider ── */}
                <div style={{ height: '1px', background: 'rgba(13,31,60,0.06)', marginBottom: '28px' }} />

                {/* ── Submit row ── */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>

                  {/* Privacy note */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Lock size={10} strokeWidth={1.8} style={{ color: 'rgba(13,31,60,0.30)', flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: F,
                        fontSize: '10px',
                        fontWeight: 400,
                        color: 'rgba(13,31,60,0.35)',
                        lineHeight: 1.5,
                        maxWidth: '320px',
                      }}
                    >
                      {t('form.privacy')}
                    </span>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      fontFamily: F,
                      fontSize: '9.5px',
                      fontWeight: 700,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      background: isSubmitting ? 'rgba(13,31,60,0.5)' : '#0D1F3C',
                      border: 'none',
                      borderRadius: '3px',
                      padding: '14px 28px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.25s',
                      flexShrink: 0,
                      boxShadow: '0 4px 18px rgba(13,31,60,0.15)',
                    }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#2EAADC'; }}
                    onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = '#0D1F3C'; }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} strokeWidth={2} className="animate-spin" />
                        {t('form.submitting')}
                      </>
                    ) : (
                      <>
                        {t('form.submit')}
                        <ArrowRight size={11} strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                </div>
              </form>
            )}
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}