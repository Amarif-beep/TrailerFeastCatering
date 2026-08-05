import React from "react";

/**
 * Editorial marquee — slow, single row of gold serif italic phrases with dot separators.
 * Doubles the content so the -50% CSS translate loops seamlessly.
 */
export default function EditorialMarquee({
  items = [],
  className = "",
}) {
  const row = [...items, ...items];
  return (
    <div
      data-testid="editorial-marquee"
      className={`relative w-full overflow-hidden py-8 md:py-10 ${className}`}
    >
      <div className="marquee-track">
        {row.map((it, i) => (
          <span
            key={i}
            className="font-editorial text-[#c9a04e] whitespace-nowrap text-4xl sm:text-5xl md:text-6xl px-8 md:px-12 flex items-center gap-8 md:gap-12"
          >
            {it}
            <span className="text-[#c9a04e]/60 text-2xl md:text-3xl" aria-hidden>
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
