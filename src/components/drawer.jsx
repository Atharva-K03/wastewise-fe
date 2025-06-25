
import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import "./styles/drawer.css";  // Import custom styles

export function Drawer({ show, onHide, placement = "end", children }) {
  return (
    <Offcanvas show={show} onHide={onHide} placement={placement} className="custom-drawer">
      {children}
    </Offcanvas>
  );
}

export function DrawerTrigger({ onClick, children }) {
  return (
    <Button onClick={onClick} className="custom-drawer-trigger">
      {children}
    </Button>
  );
}

export function DrawerOverlay() {
  return <div className="custom-drawer-overlay" />;
}

export function DrawerContent({ children }) {
  return <Offcanvas.Body className="custom-drawer-content">{children}</Offcanvas.Body>;
}

export function DrawerHeader({ children }) {
  return <Offcanvas.Header className="custom-drawer-header">{children}</Offcanvas.Header>;
}

export function DrawerFooter({ children }) {
  return <div className="custom-drawer-footer">{children}</div>;
}

export function DrawerTitle({ children }) {
  return <Offcanvas.Title className="custom-drawer-title">{children}</Offcanvas.Title>;
}

export function DrawerDescription({ children }) {
  return <p className="custom-drawer-description">{children}</p>;
}
