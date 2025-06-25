import React from "react";
import PropTypes from "prop-types";
import "./styles/button.css"; // Import custom CSS for additional styles

/**
 * Button Component
 *
 * Props:
 * - `variant` (string): Determines the button style (e.g., default, destructive, outline, etc.).
 * - `size` (string): Determines the button size (e.g., sm, lg, icon, etc.).
 * - `className` (string): Additional custom classes.
 * - `asChild` (boolean): Allows rendering as another element (e.g., `<a>` or `<div>`).
 * - Other props (spread): Passed directly to the rendered component.
 */
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  // Define the default component to render (button or custom component via `asChild`)
  const Component = asChild ? "div" : "button";

  // Base button class
  const baseClass = "btn d-inline-flex align-items-center justify-center gap-2 text-nowrap rounded-md text-sm fw-medium transition disabled pointer-events-none opacity-50";

  // Define variant-specific classes
  const variantClasses = {
    default: "bg-primary text-white shadow-sm hover-bg-primary-dark",
    destructive: "bg-danger text-white shadow-sm hover-bg-danger-dark",
    outline: "border bg-white text-dark shadow-sm hover-bg-light",
    secondary: "bg-secondary text-white shadow-sm hover-bg-secondary-dark",
    ghost: "bg-transparent text-dark hover-bg-light hover-text-primary",
    link: "text-primary underline hover-text-primary-dark",
  };

  // Define size-specific classes
  const sizeClasses = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 py-1",
    lg: "h-10 px-6 py-3",
    icon: "h-9 w-9 p-0 d-flex align-items-center justify-center",
  };

  // Combine all classes dynamically
  const computedClassName = [
    baseClass,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className,
  ]
    .filter(Boolean) // Remove falsy values
    .join(" "); // Join all classes for the final class string

  return <Component className={computedClassName} {...props} />;
}

// PropTypes validation for the Button component
Button.propTypes = {
  variant: PropTypes.oneOf(["default", "destructive", "outline", "secondary", "ghost", "link"]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
  className: PropTypes.string,
  asChild: PropTypes.bool,
};

export { Button };