export default function SectionHeading({ title, description, id }) {
  return (
    <div className="max-w-prose">
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
