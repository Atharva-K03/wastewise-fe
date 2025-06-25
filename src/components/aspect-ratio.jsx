import React from "react";
import ".styles/aspect-ratio.css"; // Import CSS file for aspect ratio utility

/**
 * AspectRatio component to enforce specific aspect ratios for child elements.
 *
 * Props:
 * - `ratio` (number): The aspect ratio to enforce. Example: 16/9 for a 16:9 ratio.
 * - `className` (string): Additional classes for styling.
 * - `children` (node): Elements to render inside the aspect ratio container.
 */
function AspectRatio({ ratio = 16 / 9, className, children, ...props }) {
  return (
    <div
      className={`aspect-ratio ${className || ""}`}
      style={{ "--aspect-ratio": ratio }}
      data-slot="aspect-ratio"
      {...props}
    >
      {children}
    </div>
  );
}

export { AspectRatio };