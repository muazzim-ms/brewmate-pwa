export default function Avatar({ name, imageUrl, size = 100 }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full border-2 border-solid border-border-strong"
      style={{ width: size, height: size }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <div
          className="flex size-full items-center justify-center rounded-full bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10"
          role="img"
          aria-label={name}
        >
          <span className="font-heading text-[28px] font-bold text-text-primary">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
