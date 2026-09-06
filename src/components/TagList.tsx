export function TagList({
  items,
  accent = false,
  label,
}: {
  items: string[];
  accent?: boolean;
  label?: string;
}) {
  return (
    <div>
      {label && <p className="key-label mb-2">{label}</p>}
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <span className={`chip ${accent ? "chip-accent" : ""}`}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
