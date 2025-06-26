/**
 * The Slider component is a reusable UI control component that allows users to select a 
 * numeric value or a range of values. It is commonly used in forms, interactive widgets, or filters 
 * for varying inputs like price ranges, volumes, or ratings.
 * 
 * Components:
 * - Slider: The main component that wraps the slider functionality.
 * - SliderPrimitive: A primitive component from Radix UI that provides the basic slider functionality.
 * Use case:
 * - Use the Slider component to create a range input that allows users to select a value or a range of values.
 * - The className prop allows for customization of the slider's appearance.
 * - The defaultValue and value props can be used to set the initial value or range of the slider.
 * - The min and max props define the range of values that can be selected.
 * - The component supports both single and range sliders, depending on the value and defaultValue props
 */

"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(() =>
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max], [value, defaultValue, min, max])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}>
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider }
