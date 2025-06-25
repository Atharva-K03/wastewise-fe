/**
 * React Bootstrap equivalent of the Tailwind-based Separator component.
 * This component uses a simple div styled via Bootstrap classes and custom CSS.
 */

import React from "react";
import "./styles/seperator.css";

/**
 * Separator component using Bootstrap.
 * @param {string} orientation - "horizontal" or "vertical"
 * @param {boolean} decorative - Whether the separator is decorative
 * @param {string} className - Additional class names
 */
function Separator({ className = "", orientation = "horizontal", decorative = true, ...props }) {
  const separatorClass = orientation === "vertical" ? "separator-vertical" : "separator-horizontal";

  return (
    <div
      role={decorative ? "presentation" : "separator"}
      className={`separator ${separatorClass} ${className}`}
      {...props}
    />
  );
}

export { Separator };
