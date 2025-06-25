// components/resizable.jsx
import React, { useRef, useState } from "react";
import "./styles/resizable.css";
import { GripVertical } from "react-bootstrap-icons"; // Bootstrap-style grip icon

/**
 * ResizablePanelGroup component.
 * Container for resizable panels. Supports horizontal and vertical layout.
 *
 * Props:
 * - direction: "horizontal" | "vertical"
 * - className: optional additional class names
 */
function ResizablePanelGroup({ direction = "horizontal", className = "", children, ...props }) {
  return (
    <div
      className={`resizable-group ${direction === "vertical" ? "vertical" : "horizontal"} ${className}`}
      data-slot="resizable-panel-group"
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ResizablePanel component.
 * Represents a resizable panel. Uses flex-grow for dynamic sizing.
 */
function ResizablePanel({ children, className = "", ...props }) {
  return (
    <div className={`resizable-panel ${className}`} data-slot="resizable-panel" {...props}>
      {children}
    </div>
  );
}

/**
 * ResizableHandle component.
 * Divider between panels. Can optionally show a grip icon.
 *
 * Props:
 * - withHandle: boolean (show grip icon)
 * - className: optional additional class names
 */
function ResizableHandle({ withHandle = false, className = "", ...props }) {
  return (
    <div
      className={`resizable-handle ${className}`}
      data-slot="resizable-handle"
      {...props}
    >
      {withHandle && (
        <div className="resizable-grip">
          <GripVertical className="grip-icon" />
        </div>
      )}
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
