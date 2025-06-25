import React from "react";
import { Accordion as BootstrapAccordion } from "react-bootstrap";
import { ChevronDown as ChevronDownIcon } from "lucide-react";
import "./styles/accordion-bootstrap.css";

/**
 * Accordion Component
 * Root Accordion wrapper for collapsible sections.
 */
function Accordion({ ...props }) {
  return <BootstrapAccordion {...props} />;
}

/**
 * AccordionItem Component
 * Represents a single collapsible section.
 */
function AccordionItem({ className, ...props }) {
  return (
    <BootstrapAccordion.Item
      className={`accordion-item border-b last:border-b-0 ${className || ""}`}
      {...props}
    />
  );
}

/**
 * AccordionTrigger Component
 * The header that toggles the visibility of its section.
 */
function AccordionTrigger({ className, children, eventKey, ...props }) {
  return (
    <BootstrapAccordion.Header>
      <div
        className={`accordion-trigger d-flex justify-content-between align-items-center gap-4 text-start text-sm fw-medium ${className || ""}`}
        {...props}
      >
        <span>{children}</span>
        <ChevronDownIcon
          className="chevron-icon text-muted-foreground pointer-events-none transition-transform duration-200"
        />
      </div>
    </BootstrapAccordion.Header>
  );
}

/**
 * AccordionContent Component
 * The content inside a collapsible section.
 */
function AccordionContent({ className, children, ...props }) {
  return (
    <BootstrapAccordion.Body
      className={`accordion-content text-sm ${className || ""}`}
      {...props}
    >
      <div className={`py-2 ${className || ""}`}>{children}</div>
    </BootstrapAccordion.Body>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };