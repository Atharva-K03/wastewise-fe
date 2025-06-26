import React from "react";
import { FormControl } from "react-bootstrap";
import "./styles/input.css"; // Import the styles

/**
 * Input component using React Bootstrap.
 * Represents a styled input field with various states.
 */
function Input({ className, type, ...props }) {
  return (
    <FormControl
      type={type}
      className={`input ${className}`}
      {...props}
    />
  );
}

export { Input };
