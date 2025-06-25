import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./styles/Tooltip.css"; // Import custom CSS for animations and additional styles

/**
 * TooltipProvider Component
 * - Provides a global wrapper to manage tooltip timing and behavior.
 */
function TooltipProvider({ delayDuration = 0, children }) {
  const overlayProps = { delay: delayDuration };
  return <div data-slot="tooltip-provider" {...overlayProps}>{children}</div>;
}

/**
 * TooltipTrigger Component
 * - Handles the element triggering the tooltip.
 */
function TooltipTrigger({ children, ...props }) {
  return (
    <OverlayTrigger
      {...props}
      delay={props.delay || 0}
      overlay={<CustomTooltip {...props.tooltipProps}>{props.tooltipContent}</CustomTooltip>}
    >
      {children}
    </OverlayTrigger>
  );
}

/**
 * TooltipContent Component
 * - Renders the Tooltip content with animations and positioning.
 */
function CustomTooltip({ className, sideOffset = 0, children, ...props }) {
  return (
    <Tooltip
      data-slot="tooltip-content"
      className={`custom-tooltip ${className || ""}`}
      style={{ marginTop: sideOffset }}
      {...props}
    >
      {children}
      {/* Tooltip Arrow */}
      <div className="tooltip-arrow" />
    </Tooltip>
  );
}

/**
 * Tooltip Component
 * - Combines the Provider and Content into a single functional component.
 */
function TooltipComponent({ content, className, children, sideOffset, delayDuration, ...props }) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipTrigger tooltipContent={content} tooltipProps={{ sideOffset, className }}>
        {children}
      </TooltipTrigger>
    </TooltipProvider>
  );
}

export { TooltipComponent as Tooltip, TooltipTrigger, CustomTooltip as TooltipContent, TooltipProvider };