import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./styles/hover-card.css"; // Import the styles

/**
 * HoverCard component using OverlayTrigger from React Bootstrap.
 * Displays a popover when the child element is hovered.
 */
function HoverCard({ children, overlay, placement = "right", ...props }) {
  return (
    <OverlayTrigger
      trigger="hover"
      placement={placement}
      overlay={overlay}
      {...props}
    >
      {children}
    </OverlayTrigger>
  );
}

/**
 * HoverCardTrigger component.
 * Wraps the element that triggers the hover card.
 */
function HoverCardTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

/**
 * HoverCardContent component using Popover from React Bootstrap.
 * Represents the content shown inside the hover card.
 */
function HoverCardContent({ className, ...props }) {
  return (
    <Popover id="hover-card-content" className={className} {...props}>
      <Popover.Content>{props.children}</Popover.Content>
    </Popover>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
