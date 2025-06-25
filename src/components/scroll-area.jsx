// components/scroll-area.jsx
import React from "react";
import "./styles/scroll-area.css";

/**
 * ScrollArea component.
 * A scrollable container with custom styled scrollbars.
 *
 * Props:
 * - className: optional additional class names
 * - children: scrollable content
 */
function ScrollArea({ className = "", children, ...props }) {
  return (
    <div className={`scroll-area-root ${className}`} data-slot="scroll-area" {...props}>
      <div className="scroll-area-viewport" data-slot="scroll-area-viewport">
        {children}
      </div>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
      <div className="scroll-area-corner" />
    </div>
  );
}

/**
 * ScrollBar component.
 * Custom scrollbar for vertical or horizontal orientation.
 *
 * Props:
 * - orientation: "vertical" | "horizontal"
 * - className: optional additional class names
 */
function ScrollBar({ orientation = "vertical", className = "", ...props }) {
  return (
    <div
      className={`scrollbar ${orientation} ${className}`}
      data-slot="scroll-area-scrollbar"
      {...props}
    >
      <div className="scrollbar-thumb" data-slot="scroll-area-thumb" />
    </div>
  );
}

export { ScrollArea, ScrollBar };
