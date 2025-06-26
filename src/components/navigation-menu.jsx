import React from "react";
import { Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import "./styles/navigation-menu.css"; // Import the styles

function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <Navbar className={`navigation-menu ${className}`} {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </Navbar>
  );
}

function NavigationMenuList({ className, ...props }) {
  return <Nav className={`navigation-menu-list ${className}`} {...props} />;
}

function NavigationMenuItem({ className, ...props }) {
  return <Nav.Item className={`navigation-menu-item ${className}`} {...props} />;
}

function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavDropdown.Toggle className={`navigation-menu-trigger ${className}`} {...props}>
      {children} <ChevronDown className="navigation-menu-trigger-icon" />
    </NavDropdown.Toggle>
  );
}

function NavigationMenuContent({ className, children, ...props }) {
  return (
    <NavDropdown.Menu className={`navigation-menu-content ${className}`} {...props}>
      {children}
    </NavDropdown.Menu>
  );
}

function NavigationMenuViewport({ className, ...props }) {
  return <div className={`navigation-menu-viewport ${className}`} {...props} />;
}

function NavigationMenuLink({ className, ...props }) {
  return <Nav.Link className={`navigation-menu-link ${className}`} {...props} />;
}

function NavigationMenuIndicator({ className, ...props }) {
  return (
    <div className={`navigation-menu-indicator ${className}`} {...props}>
      <div className="navigation-menu-indicator-inner" />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
