import React from "react";
import Button from "react-bootstrap/Button";
import "./styles/toggle.css"; // Custom CSS for styles and animations

/**
 * Toggles a button between on and off states, with customizable variants and sizes.
 */
function Toggle({ className, variant = "default", size = "default", isInvalid = false, ...props }) {
  // Determine button class based on variant and size
  const getButtonClass = () => {
    let base = "toggle-btn d-inline-flex align-items-center justify-content-center gap-2 text-sm fw-medium transition-all";
    const variants = {
      default: "bg-transparent",
      outline: "btn-outline-primary shadow-sm",
    };
    const sizes = {
      sm: "h-sm px-sm min-w-sm",
      default: "h-md px-md min-w-md",
      lg: "h-lg px-lg min-w-lg",
    };
    base += ` ${variants[variant] || variants.default}`;
    base += ` ${sizes[size] || sizes.default}`;
    if (className) base += ` ${className}`;
    if (isInvalid) base += " toggle-invalid"; // Custom invalid style
    return base;
  };

  return (
    <Button
      {...props}
      data-slot="toggle"
      className={getButtonClass()}
      aria-pressed={props["data-state"] === "on"} // Define pressed state
    >
      {props.children}
    </Button>
  );
}

export { Toggle };