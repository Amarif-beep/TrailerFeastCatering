import React from "react";

/**
 * Paint splatter SVGs — hand-crafted splat shapes for graffiti vibe.
 * Pass `variant`, `color`, `size`, `style` (position) and optional `rotate`.
 */

const SHAPES = {
  splat1: (
    <>
      <circle cx="50" cy="50" r="22" />
      <circle cx="78" cy="40" r="6" />
      <circle cx="32" cy="75" r="8" />
      <circle cx="82" cy="78" r="4" />
      <circle cx="20" cy="35" r="5" />
      <circle cx="68" cy="20" r="3" />
      <circle cx="95" cy="55" r="3" />
      <circle cx="12" cy="60" r="3" />
      <path d="M50 50 Q60 30 70 25 Q72 35 60 45 Z" />
      <path d="M50 50 Q35 65 30 80 Q40 75 50 60 Z" />
    </>
  ),
  splat2: (
    <>
      <ellipse cx="50" cy="50" rx="28" ry="20" transform="rotate(20 50 50)" />
      <circle cx="20" cy="30" r="6" />
      <circle cx="85" cy="35" r="9" />
      <circle cx="80" cy="75" r="5" />
      <circle cx="25" cy="80" r="4" />
      <circle cx="92" cy="60" r="2.5" />
      <path d="M50 30 L60 10 L65 25 Z" />
      <path d="M70 70 Q85 80 90 95 Q75 88 65 75 Z" />
    </>
  ),
  drip: (
    <>
      <ellipse cx="50" cy="35" rx="18" ry="22" />
      <path d="M40 50 Q38 70 42 90 Q46 92 48 75 Z" />
      <path d="M58 55 Q60 80 56 95 Q52 88 54 70 Z" />
      <circle cx="35" cy="20" r="3" />
      <circle cx="75" cy="40" r="4" />
      <circle cx="20" cy="55" r="3" />
    </>
  ),
  brush: (
    <>
      <path d="M5 50 Q30 30 60 45 Q80 55 95 40 L95 60 Q70 55 50 65 Q25 75 5 60 Z" />
      <circle cx="92" cy="50" r="3" />
      <circle cx="3" cy="58" r="2" />
    </>
  ),
};

export default function PaintSplatter({
  variant = "splat1",
  color = "#e63ebd",
  size = 220,
  style = {},
  rotate = 0,
  opacity = 0.9,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`pointer-events-none select-none absolute ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        opacity,
        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
        ...style,
      }}
      aria-hidden="true"
    >
      <g fill={color}>{SHAPES[variant] || SHAPES.splat1}</g>
    </svg>
  );
}
