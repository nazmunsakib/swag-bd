type Trait = {
  name: string;
  description: string;
};

type Props = {
  label: string;
  title: string;
  traits: Trait[];
};

export function TraitGrid({ label, title, traits }: Props) {
  return (
    <section className="container-site">
      <div className="mb-10 border-b border-line pb-6">
        <p className="label-editorial-accent mb-3">{label}</p>
        <h2 className="font-display text-display-md font-extrabold text-ink">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {traits.map((trait, index) => (
          <div key={trait.name} className="group bg-paper p-6 transition-colors duration-300 hover:bg-paper-deep sm:p-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-label text-stone">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-[19px] font-semibold text-ink">{trait.name}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{trait.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}