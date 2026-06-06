import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';
  const isFr = currentLang.startsWith('fr');
  const isAr = currentLang.startsWith('ar');

  return (
    <div className="flex gap-1 items-center bg-white/5 border border-white/10 rounded-full p-1">
      <button
        onClick={() => i18n.changeLanguage('fr')}
        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300
          ${isFr
            ? 'bg-sky text-white shadow-sm'
            : 'text-white/60 hover:text-white hover:bg-white/5'}`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage('ar')}
        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300
          ${isAr
            ? 'bg-sky text-white shadow-sm'
            : 'text-white/60 hover:text-white hover:bg-white/5'}`}
      >
        عر
      </button>
    </div>
  );
}
