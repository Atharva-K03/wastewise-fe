import React from "react";
import "./styles/textarea.css"; // Import the custom styles

/**
 * Textarea Component
 * - A wrapper for a customizable textarea element with support for additional classes and attributes.
 */
function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={`form-control custom-textarea ${className || ""}`}
      {...props}
    />
  );
}

export { Textarea };