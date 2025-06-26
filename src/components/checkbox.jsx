import React from "react";
import { FormCheck } from "react-bootstrap";
import "./styles/checkbox.css"; 

// Checkbox component using React Bootstrap
export function Checkbox({ className = "", ...props }) {
  return (
    <div className={`custom-checkbox-wrapper ${className}`}>
      <FormCheck
        type="checkbox"
        className="custom-checkbox"
        {...props}
      />
      <span className="custom-checkbox-indicator">
        {/* Checkmark icon using Bootstrap-compatible styling */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="check-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    </div>
  );
}
