import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import "./styles/breadcrumb.css"; // Import the custom CSS for refined styling

/**
 * Breadcrumb - Container for breadcrumb navigation.
 */
function Breadcrumb(props) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

/**
 * BreadcrumbList - Ordered list wrapper holding breadcrumb items.
 */
function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`breadcrumb-list d-flex flex-wrap align-items-center gap-2 text-muted text-sm ${className || ""}`}
      {...props}
    />
  );
}

/**
 * BreadcrumbItem - An individual breadcrumb item in the list.
 */
function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`breadcrumb-item d-inline-flex align-items-center gap-1 ${className || ""}`}
      {...props}
    />
  );
}

/**
 * BreadcrumbLink - A clickable link within a breadcrumb item.
 */
function BreadcrumbLink({ asChild = false, className, ...props }) {
  const Component = asChild ? "div" : "a"; // Use anchor by default unless `asChild` is true

  return (
    <Component
      data-slot="breadcrumb-link"
      className={`breadcrumb-link text-decoration-none transition-color hover-text-primary ${className || ""}`}
      {...props}
    />
  );
}

/**
 * BreadcrumbPage - Represents the current page in the breadcrumb trail.
 */
function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`breadcrumb-page text-dark fw-normal ${className || ""}`}
      {...props}
    />
  );
}

/**
 * BreadcrumbSeparator - Divider between breadcrumb items.
 */
function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={`breadcrumb-separator d-flex align-items-center ${className || ""}`}
      {...props}
    >
      {children || <ChevronRight className="size-4" />}
    </li>
  );
}

/**
 * BreadcrumbEllipsis - Ellipsis for collapsed sections in breadcrumb trails.
 */
function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`breadcrumb-ellipsis d-flex justify-content-center align-items-center ${className || ""}`}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span> {/* Screen reader accessible */}
    </span>
  );
}

BreadcrumbList.propTypes = BreadcrumbItem.propTypes = BreadcrumbLink.propTypes = {
  className: PropTypes.string,
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};