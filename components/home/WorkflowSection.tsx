"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Settings, Lock, Timer } from "lucide-react"

interface WorkflowStep {
  icon: React.ReactNode
  title: string
  description: string
  videoPlaceholder: string | React.ReactNode
}

const steps: WorkflowStep[] = [
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Set Your Preferences",
    description: "Pick apps/websites to block, difficulty level, and Spotify playlist",
    videoPlaceholder: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/start-focus.mov"
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Lock In",
    description: "Start your session whilst blocking away distractions",
    videoPlaceholder: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/start-focus.mov"
  },
  {
    icon: <Timer className="w-12 h-12" />,
    title: "Track with Pomodoro",
    description: "Stay on track with built-in Pomodoro timer and session stats",
    videoPlaceholder: "https://demoairbnbbucket.s3.us-east-2.amazonaws.com/ebb-steps-web/demo-3.mp4"
  }
]

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">
            From Distracted to Focused in 3 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Turn your goals into reality with a simple system that blocks distractions
            and builds lasting focus habits
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                activeStep === index
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 text-primary">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Display Area */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-muted rounded-2xl overflow-hidden border-2 border-border">
          {typeof steps[activeStep].videoPlaceholder === 'string' ? (
            <video
              key={steps[activeStep].videoPlaceholder}
              src={steps[activeStep].videoPlaceholder}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">{steps[activeStep].icon}</div>
                <p className="text-xl font-semibold mb-2">{steps[activeStep].title}</p>
                <p className="text-sm text-muted-foreground mb-4">{steps[activeStep].description}</p>   
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
