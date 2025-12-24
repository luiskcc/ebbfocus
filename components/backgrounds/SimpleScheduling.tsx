"use client"

import { Calendar, Clock } from "lucide-react"

export function SimpleScheduling() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-teal-500/30" />

      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Simple schedule illustration */}
      <div className="relative z-10 w-full max-w-[220px]">
        <div className="space-y-2.5">
          {/* Schedule items */}
          {[
            { time: "9:00 AM", label: "Deep Work", active: true },
            { time: "11:00 AM", label: "Focus Session", active: false },
            { time: "2:00 PM", label: "Build Time", active: false },
          ].map((item, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-3 p-3 rounded-lg backdrop-blur-md border
                ${item.active
                  ? 'bg-primary/30 border-primary/60 shadow-lg shadow-primary/20'
                  : 'bg-background/60 border-border/60'
                }
              `}
            >
              <Clock className={`w-4 h-4 flex-shrink-0 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold ${item.active ? 'text-primary' : 'text-foreground'}`}>
                  {item.time}
                </p>
                <p className="text-xs text-muted-foreground truncate">{item.label}</p>
              </div>
              {item.active && (
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0 shadow-lg shadow-green-500/50" />
              )}
            </div>
          ))}
        </div>

        {/* Calendar icon in corner */}
        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  )
}
