// components/radio-group.jsx
import React from "react";
import "./styles/radio-group.css"; // Custom styles
import { BsCircleFill } from "react-icons/bs"; // Bootstrap-style filled circle icon

/**
 * RadioGroup component using vanilla Bootstrap styles and custom layout.
 * Mimics Radix UI's grid layout and accessibility.
 *
 * Props:
 * - className: optional additional class names
 * - children: radio items
 */
function RadioGroup({ className = "", children, ...props }) {
  return (
    <div
      className={`radio-group ${className}`}
      data-slot="radio-group"
      role="radiogroup"
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * RadioGroupItem component.
 * Represents a single radio button with custom styling and indicator.
 *
 * Props:
 * - value: string (radio value)
 * - name: string (group name)
 * - checked: boolean (selected state)
 * - onChange: function (change handler)
 * - disabled: boolean (disabled state)
 */
function RadioGroupItem({
  className = "",
  value,
  name,
  checked,
  onChange,
  disabled = false,
  ...props
}) {
  return (
    <label className={`radio-item ${className}`} data-slot="radio-group-item">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-input"
        {...props}
      />
      <span className="radio-indicator" data-slot="radio-group-indicator">
        {checked && <BsCircleFill className="radio-icon" />}
      </span>
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
