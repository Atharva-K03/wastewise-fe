import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import "./styles/collapsible.css"; // Import custom styles

// Collapsible component using React Bootstrap's Collapse
export function Collapsible({ children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="custom-collapsible" data-slot="collapsible">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
}

// Trigger button to toggle collapsible content
export function CollapsibleTrigger({ children, open, setOpen, ...props }) {
  return (
    <Button
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="custom-collapsible-trigger"
      data-slot="collapsible-trigger"
      {...props}
    >
      {children}
    </Button>
  );
}

// Collapsible content that shows/hides based on state
export function CollapsibleContent({ children, open, ...props }) {
  return (
    <Collapse in={open}>
      <div className="custom-collapsible-content" data-slot="collapsible-content" {...props}>
        {children}
      </div>
    </Collapse>
  );
}
