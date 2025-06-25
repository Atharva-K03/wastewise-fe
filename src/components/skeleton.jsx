import React from "react";
import "./styles/skeleton.css"; // Import the CSS for animation and styles

function Skeleton({ className = "", ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={`skeleton animate-pulse rounded-md ${className}`}
      {...props}
    />
  );
}

export { Skeleton };