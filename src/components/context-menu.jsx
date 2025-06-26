import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import "./styles/context-menu.css"; 

export function ContextMenu({ children }) {
  return <div className="context-menu">{children}</div>;
}

export function ContextMenuTrigger({ label = "Right Click", children }) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="context-menu-trigger">
        {label}
      </Dropdown.Toggle>
      {children}
    </Dropdown>
  );
}

export function ContextMenuContent({ children }) {
  return <Dropdown.Menu className="context-menu-content">{children}</Dropdown.Menu>;
}

export function ContextMenuItem({ children, disabled = false, onClick }) {
  return (
    <Dropdown.Item
      className="context-menu-item"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Dropdown.Item>
  );
}

export function ContextMenuCheckboxItem({ label, checked, onChange }) {
  return (
    <div className="context-menu-checkbox-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

export function ContextMenuRadioItem({ name, value, checked, onChange, label }) {
  return (
    <div className="context-menu-radio-item">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
}

export function ContextMenuLabel({ children }) {
  return <div className="context-menu-label">{children}</div>;
}

export function ContextMenuSeparator() {
  return <hr className="context-menu-separator" />;
}

export function ContextMenuShortcut({ children }) {
  return <span className="context-menu-shortcut">{children}</span>;
}
