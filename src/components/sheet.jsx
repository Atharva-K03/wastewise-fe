/**
 * React Bootstrap + Vanilla Bootstrap equivalent of the Tailwind-based Sheet (Drawer) component.
 * This component uses Offcanvas from React Bootstrap to mimic the behavior.
 */

import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/sheet.css";

/**
 * Sheet component using React Bootstrap Offcanvas.
 * @param {boolean} show - Controls visibility of the sheet.
 * @param {function} onClose - Callback to close the sheet.
 * @param {string} side - Position of the sheet: "start", "end", "top", "bottom".
 * @param {string} title - Title of the sheet.
 * @param {string} description - Optional description.
 * @param {React.ReactNode} children - Content inside the sheet.
 */
function Sheet({ show, onClose, side = "end", title, description, children }) {
  return (
    <Offcanvas show={show} onHide={onClose} placement={side} className="custom-sheet">
      <Offcanvas.Header closeButton className="sheet-header">
        <Offcanvas.Title className="sheet-title">{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="sheet-body">
        {description && <div className="sheet-description">{description}</div>}
        {children}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

/**
 * SheetTrigger component to open the sheet.
 * @param {function} onClick - Callback to open the sheet.
 * @param {string} label - Button label.
 */
function SheetTrigger({ onClick, label = "Open Sheet" }) {
  return (
    <Button variant="primary" onClick={onClick}>
      {label}
    </Button>
  );
}

export { Sheet, SheetTrigger };
