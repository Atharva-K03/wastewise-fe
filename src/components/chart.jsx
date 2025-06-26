
import React, { useContext, useMemo, useId } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import "./styles/chart.css"; // Import custom styles

const ChartContext = React.createContext(null);

// Hook to access chart configuration
function useChart() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

// Chart container component
function ChartContainer({ id, className = "", children, config, ...props }) {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={`chart-container ${className}`}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// Dynamic style injection based on theme config
function ChartStyle({ id, config }) {
  const THEMES = { light: "", dark: ".dark" };
  const colorConfig = Object.entries(config).filter(([, cfg]) => cfg.theme || cfg.color);

  if (!colorConfig.length) return null;

  const styleContent = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const rules = colorConfig
        .map(([key, cfg]) => {
          const color = cfg.theme?.[theme] || cfg.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join("\n");
      return `${prefix} [data-chart=${id}] {\n${rules}\n}`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: styleContent }} />;
}

// Tooltip content component
function ChartTooltipContent({
  active,
  payload,
  className = "",
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) return null;
    const [item] = payload;
    const key = labelKey || item?.dataKey || item?.name || "value";
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;

    if (labelFormatter) {
      return <div className={`fw-medium ${labelClassName}`}>{labelFormatter(value, payload)}</div>;
    }

    return value ? <div className={`fw-medium ${labelClassName}`}>{value}</div> : null;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) return null;

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div className={`chart-tooltip ${className}`}>
      {!nestLabel && tooltipLabel}
      <div className="tooltip-items">
        {payload.map((item, index) => {
          const key = nameKey || item.name || item.dataKey || "value";
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload?.fill || item.color;

          return (
            <div key={item.dataKey} className={`tooltip-entry ${indicator === "dot" ? "dot-indicator" : ""}`}>
              {!hideIndicator && (
                <div
                  className={`indicator ${indicator}`}
                  style={{
                    backgroundColor: indicatorColor,
                    borderColor: indicatorColor
                  }}
                />
              )}
              <div className={`tooltip-label ${nestLabel ? "align-end" : "align-center"}`}>
                <div className="label-group">
                  {nestLabel && tooltipLabel}
                  <span className="text-muted">{itemConfig?.label || item.name}</span>
                </div>
                {item.value !== undefined && (
                  <span className="text-value">{item.value.toLocaleString()}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Legend content component
function ChartLegendContent({ className = "", hideIcon = false, payload, verticalAlign = "bottom", nameKey }) {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div className={`chart-legend ${verticalAlign === "top" ? "pb-3" : "pt-3"} ${className}`}>
      {payload.map((item) => {
        const key = nameKey || item.dataKey || "value";
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div key={item.value} className="legend-entry">
            {!hideIcon && (
              itemConfig?.icon ? <itemConfig.icon /> : (
                <div className="legend-icon" style={{ backgroundColor: item.color }} />
              )
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) return undefined;

  const payloadPayload = "payload" in payload && typeof payload.payload === "object" ? payload.payload : undefined;
  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export {
  ChartContainer,
  ChartStyle,
  ChartTooltipContent,
  ChartLegendContent,
  Tooltip as ChartTooltip,
  Legend as ChartLegend
};
