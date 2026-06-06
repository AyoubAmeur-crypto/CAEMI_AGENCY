export default function SectionTag({ children, className = '' }) {
  return (
    <span className={`inline-block text-[0.75rem] font-bold tracking-[0.2em] uppercase text-sky mb-4 ${className}`}>
      {children}
    </span>
  );
}
