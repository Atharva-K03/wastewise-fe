import React from "react";
import { FormLabel } from "react-bootstrap";
import "./styles/label.css"; // Import the styles

/**
 * Label component using React Bootstrap.
 * Represents a styled label with various states.
 */
function Label({ className, ...props }) {
  return (
    <FormLabel
      className={`label ${className}`}
      {...props}
    />
  );
}

export { Label };
