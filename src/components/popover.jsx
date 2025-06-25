// components/popover.jsx
import React, { useState, useRef } from "react";
import { Overlay, Popover as RBPopover } from "react-bootstrap";
import "./styles/popover.css"; // Custom styles

/**
 * Popover component using React Bootstrap.
 * Mimics Radix UI behavior with controlled visibility and positioning.
 */
function Popover({ children }) {
  return <>{children}</>;
}

/**
 * PopoverTrigger component.
 * Wraps the trigger element and manages popover visibility.
 */
function PopoverTrigger({ children, onClick }) {
  return (
    <span onClick={onClick} data-slot="popover-trigger" style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}

/**
 * PopoverContent component.
 * Uses React Bootstrap's Overlay and Popover to display content.
 */
function PopoverContent({ show, target, placement = "bottom", children }) {
  return (
    <Overlay target={target} show={show} placement={placement} rootClose>
      <RBPopover
        id="popover-content"
        className="custom-popover"
        data-slot="popover-content"
      >
        <RBPopover.Body>{children}</RBPopover.Body>
      </RBPopover>
    </Overlay>
  );
}

/**
 * PopoverAnchor component.
 * Provides a ref for positioning the popover.
 */
function PopoverAnchor({ children }) {
  const ref = useRef(null);
  return (
    <span ref={ref} data-slot="popover-anchor">
      {children}
    </span>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
