import React from "react";
import ".styles/alert.css"; // Custom CSS for additional styling
import { Alert as BootstrapAlert } from "react-bootstrap";

/**
 * Alert component for contextual messages like warnings, errors, etc.
 *
 * Props:
 * - `variant` (string): The type of alert (e.g., "default" or "destructive").
 * - `className` (string): Additional classes for custom styling.
 * - `children` (node): Content inside the alert component.
 */
function Alert({ variant = "default", className, ...props }) {
  const variantClass = variant === "destructive" ? "alert-destructive" : "alert-default";

  return (
    <BootstrapAlert
      role="alert"
      className={`alert ${variantClass} ${className || ""}`}
      data-slot="alert"
      {...props}
    >
      {props.children}
    </BootstrapAlert>
  );
}

/**
 * AlertTitle for the alert's title message.
 *
 * Props:
 * - `className` (string): Additional classes for styling.
 * - `children` (node): The title content.
 */
function AlertTitle({ className, ...props }) {
  return (
    <div
      className={`alert-title fw-semibold ${className || ""}`}
      data-slot="alert-title"
      {...props}
    >
      {props.children}
    </div>
  );
}

/**
 * AlertDescription for secondary/descriptive details in the alert.
 *
 * Props:
 * - `className` (string): Additional classes for styling.
 * - `children` (node): The description content.
 */
function AlertDescription({ className, ...props }) {
  return (
    <div
      className={`alert-description text-muted ${className || ""}`}
      data-slot="alert-description"
      {...props}
    >
      {props.children}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription };