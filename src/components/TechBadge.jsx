export default function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-base px-2.5 py-1 font-mono text-xs text-ink-soft">
      {label}
    </span>
  );
}
