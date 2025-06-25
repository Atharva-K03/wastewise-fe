"use client";

import React, { useState } from "react";
import "./styles/tabs.css"; // Import the corresponding custom styles

/**
 * Tabs Component
 * - Root component for the tabs structure.
 * - Manages active tab state from its children.
 */
function Tabs({ className, defaultActiveKey, children, ...props }) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || null);

  return (
    <div
      data-slot="tabs"
      className={`tabs-container ${className || ""}`}
      {...props}
    >
      {/* Pass activeKey and setActiveKey to children components */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && (child.type === TabsList || child.type === TabsContent)) {
          return React.cloneElement(child, { activeKey, setActiveKey });
        }
        return child;
      })}
    </div>
  );
}

/**
 * TabsList Component
 * - Container for tab triggers.
 */
function TabsList({ className, children, activeKey, setActiveKey, ...props }) {
  return (
    <div
      data-slot="tabs-list"
      className={`tabs-list bg-muted text-muted-foreground ${className || ""}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === TabsTrigger) {
          return React.cloneElement(child, { activeKey, setActiveKey });
        }
        return child;
      })}
    </div>
  );
}

/**
 * TabsTrigger Component
 * - Handles tab trigger logic and styling.
 */
function TabsTrigger({ className, eventKey, children, activeKey, setActiveKey, ...props }) {
  const handleClick = () => {
    if (setActiveKey) {
      setActiveKey(eventKey);
    }
  };

  const isActive = activeKey === eventKey;

  return (
    <button
      data-slot="tabs-trigger"
      className={`tabs-trigger ${isActive ? "active" : ""} ${className || ""}`}
      onClick={handleClick}
      aria-selected={isActive}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * TabsContent Component
 * - Renders the content for an active tab.
 */
function TabsContent({ className, eventKey, activeKey, children, ...props }) {
  return (
    activeKey === eventKey && (
      <div
        data-slot="tabs-content"
        className={`tabs-content ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    )
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };