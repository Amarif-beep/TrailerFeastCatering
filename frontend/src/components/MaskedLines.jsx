import React from "react";
import { motion } from "framer-motion";

/**
 * MaskedLines — award-worthy line-by-line reveal.
 * Each line clips its overflow while an inner span slides up from below.
 *
 * Usage:
 *   <MaskedLines
 *     lines={["Street Food", "Done Right."]}
 *     className="font-display text-white text-7xl uppercase"
 *     highlightIndex={1}
 *   />
 */
export default function MaskedLines({
  lines = [],
  className = "",
  highlightClassName = "text-gold-solid",
  highlightIndex = -1,
  delay = 0,
  stagger = 0.11,
  duration = 0.9,
  as: Tag = "h1",
  ...rest
}) {
  return (
    <Tag className={className} {...rest}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span
            className={`line-inner ${i === highlightIndex ? highlightClassName : ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
