/**
 * React Bootstrap equivalent of the Tailwind-based Select component.
 * This component uses Dropdown from React Bootstrap to mimic the behavior.
 */

import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/select.css";

/**
 * Select component using React Bootstrap.
 * @param {Array} options - List of options to display in the dropdown.
 * @param {string} value - Currently selected value.
 * @param {function} onChange - Callback when an option is selected.
 * @param {string} label - Optional label for the select component.
 */
function Select({ options, value, onChange, label }) {
  return (
    <div className="custom-select">
      {label && <div className="select-label">{label}</div>}
      <Dropdown onSelect={onChange} as={ButtonGroup}>
        <Dropdown.Toggle variant="outline-secondary" className="select-trigger">
          {value || "Select an option"}
        </Dropdown.Toggle>

        <Dropdown.Menu className="select-content">
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              eventKey={option}
              active={option === value}
              className="select-item"
            >
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Select;
