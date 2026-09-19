type Props = {
  children: string;
  className?: string;
};

export function Badge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block bg-paper px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-label text-ink ${className}`}
    >
      {children}
    </span>
  );
}