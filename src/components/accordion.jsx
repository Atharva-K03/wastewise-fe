import React from "react";
import { Accordion } from "react-bootstrap";
import "./styles/accordion.css";

function CustomAccordion({ items }) {
  return (
    <Accordion defaultActiveKey="0">
      {items.map((item, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;