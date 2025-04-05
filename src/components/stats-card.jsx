import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"


export function StatsCard({ title, value, description, icon, trend, trendDirection = "neutral" }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1">
          <CardDescription className="text-xs">{description}</CardDescription>
          {trend && (
            <div
              className={`ml-auto flex items-center text-xs font-medium ${
                trendDirection === "up"
                  ? "text-green-600"
                  : trendDirection === "down"
                    ? "text-red-600"
                    : "text-muted-foreground"
              }`}
            >
              {trendDirection === "up" ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : trendDirection === "down" ? (
                <ArrowDown className="h-3 w-3 mr-1" />
              ) : null}
              {trend}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

