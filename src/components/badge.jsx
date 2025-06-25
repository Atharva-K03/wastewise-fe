import React from "react";
import PropTypes from "prop-types";
import "./styles/badge.css"; // Custom Bootstrap-style CSS (defined in the next section)

/**
 * Badge Component: Displays a styled badge with optional variants, child tags, and custom styles.
 *
 * Props:
 * - `variant` (string): Determines the style of the badge (default: `default`, `secondary`, `destructive`, `outline`).
 * - `className` (string): Additional custom classes.
 * - `asChild` (boolean): Allows rendering a custom tag instead of `<span>` (e.g., `<a>` or `<div>`).
 * - Other props (spread): Directly applied to the rendered element.
 */
function Badge({ variant = "default", className = "", asChild = false, ...props }) {
  // Determine the component type (span by default)
  const Component = asChild ? "div" : "span";

  // Base class for the badge
  const baseClass = "badge d-inline-flex align-items-center justify-content-center rounded px-2 py-1 text-nowrap";

  // Map variants to corresponding Bootstrap-inspired styles
  const variantClasses = {
    default: "bg-primary text-white border-0", // Default: Primary background with white text
    secondary: "bg-secondary text-white border-0", // Secondary Variant
    destructive: "bg-danger text-white border-0", // Destructive Variant
    outline: "bg-transparent text-dark border border-dark", // Outline Variant
  };

  // Combine the class names
  const computedClassName = [baseClass, variantClasses[variant] || variantClasses.default, className]
    .filter(Boolean) // Remove falsy values like `null` or `undefined`
    .join(" ");

  return (
    <Component
      data-slot="badge"
      className={computedClassName}
      {...props} // Pass remaining props (e.g., event handlers, attributes)
    />
  );
}

// Prop Types for the Badge Component
Badge.propTypes = {
  variant: PropTypes.oneOf(["default", "secondary", "destructive", "outline"]),
  className: PropTypes.string,
  asChild: PropTypes.bool,
};

export { Badge };