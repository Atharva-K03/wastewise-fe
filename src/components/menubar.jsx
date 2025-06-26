import React from "react";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Check, ChevronRight, Circle } from "react-bootstrap-icons";
import "./styles/menubar.css"; // Import the styles

function Menubar({ className, ...props }) {
  return <ButtonGroup className={`menubar ${className}`} {...props} />;
}

function MenubarMenu({ children, ...props }) {
  return <Dropdown as={ButtonGroup} {...props}>{children}</Dropdown>;
}

function MenubarGroup({ children, ...props }) {
  return <div className="menubar-group" {...props}>{children}</div>;
}

function MenubarPortal({ children, ...props }) {
  return <div className="menubar-portal" {...props}>{children}</div>;
}

function MenubarRadioGroup({ children, ...props }) {
  return <div className="menubar-radio-group" {...props}>{children}</div>;
}

function MenubarTrigger({ className, children, ...props }) {
  return (
    <Dropdown.Toggle className={`menubar-trigger ${className}`} {...props}>
      {children}
    </Dropdown.Toggle>
  );
}

function MenubarContent({ className, children, ...props }) {
  return (
    <Dropdown.Menu className={`menubar-content ${className}`} {...props}>
      {children}
    </Dropdown.Menu>
  );
}

function MenubarItem({ className, children, ...props }) {
  return (
    <Dropdown.Item className={`menubar-item ${className}`} {...props}>
      {children}
    </Dropdown.Item>
  );
}

function MenubarCheckboxItem({ className, children, ...props }) {
  return (
    <Dropdown.Item className={`menubar-checkbox-item ${className}`} {...props}>
      <Check className="menubar-checkbox-icon" />
      {children}
    </Dropdown.Item>
  );
}

function MenubarRadioItem({ className, children, ...props }) {
  return (
    <Dropdown.Item className={`menubar-radio-item ${className}`} {...props}>
      <Circle className="menubar-radio-icon" />
      {children}
    </Dropdown.Item>
  );
}

function MenubarLabel({ className, children, ...props }) {
  return (
    <span className={`menubar-label ${className}`} {...props}>
      {children}
    </span>
  );
}

function MenubarSeparator({ className, ...props }) {
  return <Dropdown.Divider className={`menubar-separator ${className}`} {...props} />;
}

function MenubarShortcut({ className, children, ...props }) {
  return (
    <span className={`menubar-shortcut ${className}`} {...props}>
      {children}
    </span>
  );
}

function MenubarSub({ children, ...props }) {
  return <DropdownButton as={ButtonGroup} {...props}>{children}</DropdownButton>;
}

function MenubarSubTrigger({ className, children, ...props }) {
  return (
    <Dropdown.Toggle className={`menubar-sub-trigger ${className}`} {...props}>
      {children}
      <ChevronRight className="menubar-sub-trigger-icon" />
    </Dropdown.Toggle>
  );
}

function MenubarSubContent({ className, children, ...props }) {
  return (
    <Dropdown.Menu className={`menubar-sub-content ${className}`} {...props}>
      {children}
    </Dropdown.Menu>
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
