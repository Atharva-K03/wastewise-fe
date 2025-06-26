
import React from "react";
import { Modal, FormControl, ListGroup, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./styles/command.css"; 

export function Command({ children, className = "", ...props }) {
  return (
    <div className={`command-container ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CommandDialog({ show, onHide, title = "Command Palette", description = "Search for a command to run...", children }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="sr-only">
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Command>{children}</Command>
      </Modal.Body>
    </Modal>
  );
}

export function CommandInput({ className = "", ...props }) {
  return (
    <div className={`command-input-wrapper ${className}`}>
      <Search className="search-icon" />
      <FormControl
        type="text"
        className="command-input"
        placeholder="Type a command..."
        {...props}
      />
    </div>
  );
}

export function CommandList({ children, className = "", ...props }) {
  return (
    <div className={`command-list ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CommandEmpty({ children, className = "", ...props }) {
  return (
    <div className={`command-empty ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CommandGroup({ heading, children, className = "", ...props }) {
  return (
    <div className={`command-group ${className}`} {...props}>
      <div className="command-group-heading">{heading}</div>
      <ListGroup variant="flush">{children}</ListGroup>
    </div>
  );
}

export function CommandSeparator({ className = "", ...props }) {
  return <hr className={`command-separator ${className}`} {...props} />;
}

export function CommandItem({ children, className = "", ...props }) {
  return (
    <ListGroup.Item className={`command-item ${className}`} {...props}>
      {children}
    </ListGroup.Item>
  );
}

export function CommandShortcut({ children, className = "", ...props }) {
  return (
    <span className={`command-shortcut ${className}`} {...props}>
      {children}
    </span>
  );
}
