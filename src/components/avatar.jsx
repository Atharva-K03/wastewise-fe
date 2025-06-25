"use client";

import React from "react";
import "./styles/avatar.css"; // Import the CSS file from the "styles" subdirectory

/**
 * Avatar - Container for the avatar, providing overflow-hidden, rounded, and flexible sizing.
 *
 * Props:
 * - `className` (string): For custom CSS classes.
 * - `children` (node): Elements like AvatarImage or AvatarFallback.
 */
function Avatar({ className, ...props }) {
  return (
    <div
      data-slot="avatar"
      className={`avatar relative flex overflow-hidden rounded-full ${className || ""}`}
      {...props}
    />
  );
}

/**
 * AvatarImage - Displays the main image for the avatar.
 *
 * Props:
 * - `src` (string): Source of the image.
 * - `alt` (string): Alt text for the image.
 * - `className` (string): For custom CSS classes (optional).
 * - Other image-related props for fine-tuning.
 */
function AvatarImage({ className, ...props }) {
  return (
    <img
      data-slot="avatar-image"
      className={`avatar-image aspect-square h-full w-full ${className || ""}`}
      {...props}
    />
  );
}

/**
 * AvatarFallback - Provides a fallback UI if the AvatarImage source fails to load.
 *
 * Props:
 * - `className` (string): For custom CSS classes (optional).
 * - `children` (node): Content to display as the fallback (e.g., initials or icons).
 */
function AvatarFallback({ className, ...props }) {
  return (
    <div
      data-slot="avatar-fallback"
      className={`avatar-fallback bg-muted text-muted-foreground flex items-center justify-center rounded-full h-full w-full ${className || ""}`}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };