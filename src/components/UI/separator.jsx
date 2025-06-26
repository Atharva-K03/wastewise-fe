/**
 * Used to separate content in a list or between sections.
 * Components:
 * - Separator: A horizontal or vertical line that visually separates content.
 * - SeparatorPrimitive: A primitive component from Radix UI that provides the basic functionality.
 * Use case:
 * - Use the Separator component to create visual breaks in content, such as between list items or
 *   sections of a form.
 * - The orientation prop allows for horizontal or vertical separators.
 * - The decorative prop can be set to false if the separator is used for accessibility purposes.
 */

"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props} />
  );
}

export { Separator }
