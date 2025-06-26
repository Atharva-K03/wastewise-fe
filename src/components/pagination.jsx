import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import { ChevronLeft, ChevronRight, ThreeDots } from "react-bootstrap-icons";
import "./styles/pagination.css"; // Import the styles

function Pagination({ className, ...props }) {
  return (
    <nav role="navigation" aria-label="pagination" className={`pagination ${className}`} {...props} />
  );
}

function PaginationContent({ className, ...props }) {
  return <BootstrapPagination className={`pagination-content ${className}`} {...props} />;
}

function PaginationItem({ children, ...props }) {
  return <BootstrapPagination.Item {...props}>{children}</BootstrapPagination.Item>;
}

function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return (
    <BootstrapPagination.Item
      active={isActive}
      className={`pagination-link ${isActive ? "active" : ""} ${className}`}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={`pagination-previous ${className}`} {...props}>
      <ChevronLeft />
      <span className="d-none d-sm-inline">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink aria-label="Go to next page" size="default" className={`pagination-next ${className}`} {...props}>
      <span className="d-none d-sm-inline">Next</span>
      <ChevronRight />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span aria-hidden className={`pagination-ellipsis ${className}`} {...props}>
      <ThreeDots />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
