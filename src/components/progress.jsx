// components/progress.jsx
import React from "react";
import "./styles/progress.css"; // Custom styles

/**
 * Progress component using vanilla Bootstrap styles and custom animation.
 * Mimics Radix UI's progress bar behavior.
 *
 * Props:
 * - value: number (0 to 100) indicating progress percentage
 * - className: optional additional class names
 */
function Progress({ className = "", value = 0, ...props }) {
  const progressValue = Math.min(Math.max(value, 0), 100); // Clamp between 0 and 100

  return (
    <div
      className={`progress-container ${className}`}
      data-slot="progress"
      {...props}
    >
      <div
        className="progress-indicator"
        data-slot="progress-indicator"
        style={{ transform: `translateX(-${100 - progressValue}%)` }}
      />
    </div>
  );
}

export { Progress };
