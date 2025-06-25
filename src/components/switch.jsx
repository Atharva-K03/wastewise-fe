"use client";

import React from "react";
import "./styles/switch.css"; // Import the custom styles

function Switch({ className, checked = false, disabled = false, onChange, ...props }) {
  const handleToggle = () => {
    if (disabled) return;
    onChange && onChange(!checked);
  };

  return (
    <button
      type="button"
      data-slot="switch"
      className={`switch ${checked ? "checked" : "unchecked"} ${
        disabled ? "disabled" : ""
      } ${className || ""}`}
      onClick={handleToggle}
      aria-checked={checked}
      aria-disabled={disabled}
      role="switch"
      {...props}
    >
      <span
        data-slot="switch-thumb"
        className={`switch-thumb ${checked ? "checked" : "unchecked"}`}
      />
    </button>
  );
}

export { Switch };