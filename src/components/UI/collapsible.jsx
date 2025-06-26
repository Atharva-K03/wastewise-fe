/**
 * Used to create collapsible sections in the UI.
 * Components:
 * - Collapsible: The main collapsible component that manages the open/close state.
 * - CollapsibleTrigger: A button or element that toggles the collapsible state.
 * - CollapsibleContent: The content that is shown or hidden based on the collapsible state 
 * * Use case example: FAQs, accordions, or any section that can expand/collapse to show/hide content.
 */
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />);
}

function CollapsibleContent({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />);
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
