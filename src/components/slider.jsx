"use client";

import React, { useState, useEffect, useRef } from "react";
import "./styles/slider.css";

function Slider({
  className = "",
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  ...props
}) {
  const [sliderValue, setSliderValue] = useState(
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
      ? defaultValue
      : [min]
  );

  const handleThumbChange = (newValue, index) => {
    const newValues = [...sliderValue];
    newValues[index] = Math.min(Math.max(newValue, min), max);
    if (index > 0) {
      // Ensure lower thumbs don't exceed higher thumbs (for ranges)
      newValues[index] = Math.max(newValues[index], newValues[index - 1]);
    }
    if (index < newValues.length - 1) {
      // Ensure higher thumbs don't fall below lower thumbs (for ranges)
      newValues[index] = Math.min(newValues[index], newValues[index + 1]);
    }
    setSliderValue(newValues);
    onChange && onChange(newValues);
  };

  const percentage = (val) => ((val - min) / (max - min)) * 100;

  return (
    <div
      className={`slider-container ${disabled ? "disabled" : ""} ${className}`}
      {...props}
    >
      <div className="slider-track">
        <div
          className="slider-range"
          style={{
            left: `${percentage(sliderValue[0])}%`,
            width: `${
              sliderValue.length > 1
                ? percentage(sliderValue[1]) - percentage(sliderValue[0])
                : percentage(sliderValue[0])
            }%`
          }}
        />
        {sliderValue.map((val, index) => (
          <input
            key={index}
            type="range"
            min={min}
            max={max}
            step={step}
            value={val}
            onChange={(e) => handleThumbChange(Number(e.target.value), index)}
            disabled={disabled}
            className="slider-thumb"
            style={{
              left: `${percentage(val)}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export { Slider };