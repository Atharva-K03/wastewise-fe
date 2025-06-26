/**
 * Used to create a loading placeholder that indicates content is being loaded.
 * Components:
 * - Skeleton: A simple div that serves as a placeholder for content that is loading.
 * Use case:
 * - Use the Skeleton component to provide visual feedback to users while content is being fetched or processed.
 * - The className prop allows for customization of the skeleton's appearance.
 */
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props} />
  );
}

export { Skeleton }
