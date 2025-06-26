/**
 * The `Toaster` component is a **UI notification component** that provides toast messages 
 * to notify users about updates, errors, successes, or other alerts.
 * * It uses the `sonner` library for toast notifications and integrates with the `next-themes`
 *   library to adapt to the current theme (light, dark, or system).
 * Components:
 * Toaster: The main component that wraps the toast functionality.
 * Use case:
 * - Use the `Toaster` component to display temporary messages to users, such as success messages, 
 *   error alerts, or informational notifications.
 * - The `theme` prop allows the component to adapt to the current theme, ensuring consistent
 *   styling across light and dark modes.
 * - The `className` and `style` props can be used to customize the appearance
 *   of the toast notifications.
 * - The `Toaster` component can be placed at the root of your application to ensure
 *   that toast notifications are accessible from anywhere in the app.
 * - It can be used in conjunction with other UI components to provide feedback to users
 *   after actions such as form submissions, data updates, or error handling.
 * - The `Toaster` component can be used to enhance user experience by providing timely feedback
 *   and notifications without interrupting the user's workflow.
 * - It can be used to display messages that require user attention, such as warnings or errors
 *   that need to be acknowledged.
 */

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        }
      }
      {...props} />
  );
}

export { Toaster }
