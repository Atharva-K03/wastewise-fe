
import React from "react";
import { Card as RBCard } from "react-bootstrap";
import "./styles/card.css"; // Import the custom CSS for additional styling

// Main Card wrapper using React Bootstrap's Card component
export function Card({ children, className = "", ...props }) {
  return (
    <RBCard className={`custom-card ${className}`} {...props}>
      {children}
    </RBCard>
  );
}

// CardHeader component using RBCard.Header
export function CardHeader({ children, className = "", ...props }) {
  return (
    <RBCard.Header className={`custom-card-header ${className}`} {...props}>
      {children}
    </RBCard.Header>
  );
}

// CardTitle component using RBCard.Title
export function CardTitle({ children, className = "", ...props }) {
  return (
    <RBCard.Title className={`custom-card-title ${className}`} {...props}>
      {children}
    </RBCard.Title>
  );
}

// CardDescription component styled with custom class
export function CardDescription({ children, className = "", ...props }) {
  return (
    <div className={`custom-card-description ${className}`} {...props}>
      {children}
    </div>
  );
}

// CardAction component for positioning action elements
export function CardAction({ children, className = "", ...props }) {
  return (
    <div className={`custom-card-action ${className}`} {...props}>
      {children}
    </div>
  );
}

// CardContent component using RBCard.Body
export function CardContent({ children, className = "", ...props }) {
  return (
    <RBCard.Body className={`custom-card-content ${className}`} {...props}>
      {children}
    </RBCard.Body>
  );
}

// CardFooter component using RBCard.Footer
export function CardFooter({ children, className = "", ...props }) {
  return (
    <RBCard.Footer className={`custom-card-footer ${className}`} {...props}>
      {children}
    </RBCard.Footer>
  );
}
