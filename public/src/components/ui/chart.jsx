"use client"

import * as React from "react"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Scatter, ScatterChart, Area, AreaChart, RadialBar, RadialBarChart } from "recharts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext({})

function Chart({
  config,
  children,
  className,
  ...props
}) {
  const newConfig = React.useMemo(() => {
    let activeProvider = null
    if (config) {
      activeProvider = Object.values(config).filter((item) => item.active)[0]?.provider
    }
    return { ...config, activeProvider }
  }, [config])

  return (
    <ChartContext.Provider value={newConfig}>
      <div
        data-chart={newConfig?.activeProvider}
        className={cn("flex aspect-video justify-center text-sm [&_.recharts-tooltip-content>div]:grid [&_.recharts-tooltip-content>div]:!bg-background [&_.recharts-tooltip-content>div]:!text-foreground [&_.recharts-tooltip-content>div]:!border-border [&_.recharts-tooltip-content>div]:!rounded-lg [&_.recharts-tooltip-item]:flex [&_.recharts-label]:font-semibold [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-axis.recharts-yAxis]:-translate-x-3 [&_.recharts-cartesian-axis.recharts-xAxis]:translate-y-3 [&_path[stroke^="url(#"][stroke$=")"]]:stroke-[2px] [&_.recharts-tooltip-cursor]:fill-accent/20 [&_.recharts-active-dot]:stroke-background [&_.recharts-active-dot]:stroke-[2px] [&_.recharts-dot]:fill-primary", className)}
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

function ChartContainer({
  className,
  children,
  ...props
}) {
  const { activeProvider } = React.useContext(ChartContext)

  return (
    <div
      data-chart-container={activeProvider}
      className={cn("flex aspect-video w-full", className)}
      {...props}
    >
      {children}
    </div>
  )
}

const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 text-sm shadow-md">
        <div className="grid gap-1">
          <div className="text-muted-foreground">{label}</div>
          {payload.map((item, index) => (
            <div
              key={item.dataKey}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </div>
              <div className="font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

const ChartLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {payload.map((item, index) => (
          <li
            key={item.value}
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.value}
          </li>
        ))}
      </ul>
    )
  }

  return null
}

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  Bar, BarChart, Line, LineChart, Pie, PieChart, Scatter, ScatterChart, Area, AreaChart, RadialBar, RadialBarChart
}
