import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "./styles/calendar.css"; // Custom CSS for the Calendar
import { Button } from "@/components/Button"; // Leveraging the Button component

/**
 * Calendar component
 */
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`calendar-container ${className || ""}`}
      classNames={{
        months: "calendar-months d-flex flex-column flex-sm-row gap-2",
        month: "calendar-month d-flex flex-column gap-3",
        caption: "calendar-caption d-flex justify-content-center align-items-center position-relative w-100 pt-1 gap-2",
        caption_label: "text-sm fw-medium",
        nav: "calendar-nav d-flex justify-content-between align-items-center gap-1",
        nav_button: "btn btn-outline-secondary p-1 size-7 bg-transparent opacity-50 hover-opacity-100",
        nav_button_previous: "position-absolute start-0",
        nav_button_next: "position-absolute end-0",
        table: "calendar-table w-100 border-collapse",
        head_row: "d-flex",
        head_cell: "calendar-head-cell text-muted w-8 text-nowrap text-sm font-normal",
        row: "d-flex w-100 mt-1",
        cell: "calendar-cell position-relative p-0 text-center text-sm",
        day: "calendar-day btn btn-ghost p-1",
        day_range_start: "calendar-day-range-start bg-primary text-white rounded-start",
        day_range_end: "calendar-day-range-end bg-primary text-white rounded-end",
        day_selected: "calendar-day-selected bg-primary text-white hover-bg-primary",
        day_today: "calendar-day-today bg-light",
        day_outside: "calendar-day-outside text-muted",
        day_disabled: "calendar-day-disabled text-muted opacity-50",
        day_range_middle: "calendar-day-range-middle bg-light text-dark",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={`size-4 ${className || ""}`} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={`size-4 ${className || ""}`} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };