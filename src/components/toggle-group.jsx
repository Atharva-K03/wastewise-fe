import React, { createContext, useContext } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./styles/toggle-group.css"; // Import the associated custom styles for toggle groups

// Context for capturing size and variant for the entire group
const ToggleGroupContext = createContext({
  size: "default",
  variant: "default",
});

/**
 * ToggleGroup Component
 * - A wrapper component for a group of toggle buttons
 * - Provides context to manage variant and size across all child items
 */
function ToggleGroup({ className, variant = "default", size = "default", children, ...props }) {
  return (
    <ButtonGroup
      data-slot="toggle-group"
      className={`toggle-group ${variant === "outline" ? "toggle-group-outline" : ""} ${className || ""}`}
      {...props}
    >
      {/* Context Provider for size & variant */}
      <ToggleGroupContext.Provider value={{ size, variant }}>
        {children}
      </ToggleGroupContext.Provider>
    </ButtonGroup>
  );
}

/**
 * ToggleGroupItem Component
 * - Represents an individual button within the toggle group
 * - Gets size and variant from ToggleGroup context unless explicitly overridden
 */
function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const { size: groupSize, variant: groupVariant } = useContext(ToggleGroupContext);

  // Determine the effective size and variant
  const appliedSize = size || groupSize;
  const appliedVariant = variant || groupVariant;

  // Generate the class names for the button
  const getButtonClass = () => {
    const base = `toggle-group-item flex-grow-1`; // Ensure buttons grow equally
    const sizeClasses = {
      sm: "btn-sm",
      default: "btn-md",
      lg: "btn-lg",
    };
    const variantClasses = {
      default: "btn-secondary",
      outline: "btn-outline-secondary border-0",
    };
    return `${base} ${variantClasses[appliedVariant] || "btn-secondary"} ${sizeClasses[appliedSize] || "btn-md"} ${className || ""}`;
  };

  return (
    <Button
      data-slot="toggle-group-item"
      className={getButtonClass()}
      {...props}
    >
      {children}
    </Button>
  );
}

// Export the ToggleGroup and ToggleGroupItem components
export { ToggleGroup, ToggleGroupItem };