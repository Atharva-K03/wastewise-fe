import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ".styles/alert-dialog.css"; // Import the relevant CSS file

/**
 * Main AlertDialog component that renders the dialog overlay and content.
 *
 * Props:
 * - `show` (boolean): Controls visibility of the dialog.
 * - `onHide` (function): Callback to close the dialog when the Cancel action (or overlay) is triggered.
 * - `children` (node): The dialog structure (header, body, footer) rendered inside this component.
 */
function AlertDialog({ show, onHide, children }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="alert-dialog"
      data-slot="alert-dialog"
    >
      {children}
    </Modal>
  );
}

/**
 * AlertDialogTrigger component acts as the button or link to open the dialog.
 *
 * Props:
 * - `onClick` (function): A callback to show the `alert-dialog` when clicked.
 * - `children` (node): The button text or content.
 */
function AlertDialogTrigger({ onClick, children }) {
  return (
    <Button
      onClick={onClick}
      className="alert-dialog-trigger"
      data-slot="alert-dialog-trigger"
    >
      {children}
    </Button>
  );
}

/**
 * AlertDialogContent component to define the actual dialog content area.
 *
 * Props:
 * - `children` (node): Content that defines the body of the dialog.
 * - `className` (string): Additional classes for styling.
 */
function AlertDialogContent({ children, className }) {
  return (
    <Modal.Body
      className={`alert-dialog-content ${className || ""}`}
      data-slot="alert-dialog-content"
    >
      {children}
    </Modal.Body>
  );
}

/**
 * AlertDialogHeader renders the dialog's header (typically includes a title and the close button).
 *
 * Props:
 * - `children` (node): Content such as the title of the dialog.
 * - `className` (string): Additional classes for styling.
 */
function AlertDialogHeader({ children, className }) {
  return (
    <Modal.Header
      closeButton
      className={`alert-dialog-header ${className || ""}`}
      data-slot="alert-dialog-header"
    >
      {children}
    </Modal.Header>
  );
}

/**
 * AlertDialogTitle is used for the title text in the dialog header.
 *
 * Props:
 * - `children` (node): Title text/content.
 * - `className` (string): Additional classes for styling.
 */
function AlertDialogTitle({ children, className }) {
  return (
    <Modal.Title
      className={`alert-dialog-title ${className || ""}`}
      data-slot="alert-dialog-title"
    >
      {children}
    </Modal.Title>
  );
}

/**
 * AlertDialogDescription provides descriptive text for the dialog content.
 *
 * Props:
 * - `children` (node): Description text/content.
 * - `className` (string): Additional classes for styling.
 */
function AlertDialogDescription({ children, className }) {
  return (
    <p
      className={`alert-dialog-description ${className || ""}`}
      data-slot="alert-dialog-description"
    >
      {children}
    </p>
  );
}

/**
 * AlertDialogFooter renders the footer area for actions, such as confirm and cancel buttons.
 *
 * Props:
 * - `children` (node): Buttons for user actions.
 * - `className` (string): Additional classes for styling.
 */
function AlertDialogFooter({ children, className }) {
  return (
    <Modal.Footer
      className={`alert-dialog-footer ${className || ""}`}
      data-slot="alert-dialog-footer"
    >
      {children}
    </Modal.Footer>
  );
}

/**
 * AlertDialogAction represents the confirmation action, such as "OK" or "Proceed".
 *
 * Props:
 * - `onClick` (function): A callback for the confirm action.
 * - `children` (node): Text content for the action button.
 */
function AlertDialogAction({ onClick, children, className }) {
  return (
    <Button
      onClick={onClick}
      className={`alert-dialog-action btn-primary ${className || ""}`}
      data-slot="alert-dialog-action"
    >
      {children}
    </Button>
  );
}

/**
 * AlertDialogCancel is for the cancel action to dismiss the dialog.
 *
 * Props:
 * - `onClick` (function): Callback to close the dialog.
 * - `children` (node): Text content for the cancel button.
 */
function AlertDialogCancel({ onClick, children, className }) {
  return (
    <Button
      onClick={onClick}
      className={`alert-dialog-cancel btn-outline-secondary ${className || ""}`}
      data-slot="alert-dialog-cancel"
    >
      {children}
    </Button>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};