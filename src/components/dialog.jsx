import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles/dialog.css"; // Import custom styles

export function Dialog({ show, onHide, children }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" className="custom-dialog">
      {children}
    </Modal>
  );
}

export function DialogTrigger({ onClick, children }) {
  return (
    <Button onClick={onClick} className="custom-dialog-trigger">
      {children}
    </Button>
  );
}

export function DialogOverlay() {
  return <div className="custom-dialog-overlay" />;
}

export function DialogContent({ children }) {
  return <Modal.Body className="custom-dialog-content">{children}</Modal.Body>;
}

export function DialogClose({ onClick }) {
  return (
    <Button variant="light" onClick={onClick} className="custom-dialog-close" aria-label="Close">
      &times;
    </Button>
  );
}

export function DialogHeader({ children }) {
  return <Modal.Header className="custom-dialog-header">{children}</Modal.Header>;
}

export function DialogFooter({ children }) {
  return <Modal.Footer className="custom-dialog-footer">{children}</Modal.Footer>;
}

export function DialogTitle({ children }) {
  return <Modal.Title className="custom-dialog-title">{children}</Modal.Title>;
}

export function DialogDescription({ children }) {
  return <p className="custom-dialog-description">{children}</p>;
}
