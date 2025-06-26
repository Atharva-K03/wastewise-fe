import React, { createContext, useState, useCallback, useEffect, useContext } from "react";
import "./styles/sidebar.css";

// Constants for Sidebar configuration
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Sidebar Context provides global state
const SidebarContext = createContext();

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export function SidebarProvider({ children, defaultOpen = true }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openMobile, setOpenMobile] = useState(false);
  const [open, setOpen] = useState(defaultOpen);

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((prev) => !prev);
    } else {
      setOpen((prev) => !prev);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === SIDEBAR_KEYBOARD_SHORTCUT) {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleSidebar]);

  const contextValue = {
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function Sidebar({ children, side = "left", variant = "sidebar", collapsible = "icon" }) {
  const { open, openMobile, isMobile, setOpenMobile } = useSidebar();
  const state = open ? "expanded" : "collapsed";

  if (collapsible === "none") {
    return (
      <div className="sidebar sidebar-static" data-state={state}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={`mobile-sidebar ${openMobile ? "open" : "closed"}`} data-side={side}>
        <button
          className="mobile-sidebar-close"
          onClick={() => setOpenMobile((prev) => !prev)}
        >
          Close
        </button>
        <div className="mobile-sidebar-content">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`sidebar ${state}`}
      data-collapsible={collapsible}
      data-variant={variant}
      data-side={side}
    >
      <div className="sidebar-content">{children}</div>
    </div>
  );
}

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button className="sidebar-trigger" onClick={toggleSidebar}>
      Toggle Sidebar
    </button>
  );
}

export function SidebarHeader({ children }) {
  return <div className="sidebar-header">{children}</div>;
}

export function SidebarContent({ children }) {
  return <div className="sidebar-content">{children}</div>;
}

export function SidebarFooter({ children }) {
  return <div className="sidebar-footer">{children}</div>;
}

export function SidebarMenu({ children }) {
  return <ul className="sidebar-menu">{children}</ul>;
}

export function SidebarMenuItem({ children }) {
  return <li className="sidebar-menu-item">{children}</li>;
}

export function SidebarSeparator() {
  return <hr className="sidebar-separator" />;
}