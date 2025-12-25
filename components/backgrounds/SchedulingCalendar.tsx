"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const sessions = [
  { day: 2, time: '9:00 AM', active: true },  // Wednesday
  { day: 3, time: '2:00 PM', active: true },  // Thursday
  { day: 4, time: '9:00 AM', active: true },  // Friday
  { day: 5, time: '10:00 AM', active: false }, // Saturday
]

export function SchedulingCalendar() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="relative w-full max-w-[280px]">
        {/* Calendar Card */}
        <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-5 border-2 border-border shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Focus Schedule</span>
            </div>
            <span className="text-xs text-muted-foreground">This Week</span>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {days.map((day, index) => (
              <div key={index} className="text-center">
                <span className="text-xs font-medium text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar dates */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {Array.from({ length: 28 }, (_, i) => {
              const hasSession = sessions.some(s => Math.floor(s.day + 7) === i + 1)
              const isActive = sessions.some(s => Math.floor(s.day + 7) === i + 1 && s.active)

              return (
                <motion.div
                  key={i}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center text-xs
                    ${hasSession
                      ? isActive
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'bg-primary/20 text-primary font-medium'
                      : 'bg-muted/30 text-muted-foreground'
                    }
                  `}
                  whileHover={hasSession ? { scale: 1.1 } : {}}
                  animate={isActive ? {
                    boxShadow: [
                      '0 0 0 0 rgba(124, 58, 237, 0.4)',
                      '0 0 0 8px rgba(124, 58, 237, 0)',
                    ],
                  } : {}}
                  transition={isActive ? {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  } : {}}
                >
                  {i + 1}
                </motion.div>
              )
            })}
          </div>

          {/* Upcoming session */}
          <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">Next Session</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Wed, 9:00 AM • 90 min Focus
            </div>
          </div>
        </div>

        {/* Floating pulse indicator */}
        <motion.div
          className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </motion.div>
      </div>
    </div>
  )
}
