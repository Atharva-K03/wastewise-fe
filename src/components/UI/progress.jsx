/**
 * Used to create a progress bar component with Radix UI.
 * Components:
 * - Progress: To create the root progress bar.
 * - ProgressIndicator: To create the indicator within the progress bar.
 * Use case:
 * - To create a progress bar that visually represents the completion of a task.
 * - To create a progress bar that can be used in various applications, such as dashboards or websites.
 */
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </ProgressPrimitive.Root>
  );
}

export { Progress }
