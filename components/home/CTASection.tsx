'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock } from "lucide-react"
import Aurora from "@/components/backgrounds/aurora"

export function CTASection() {
  return (
    <section id="early-access" className="relative w-full border-t overflow-hidden">
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 dark:opacity-30"
        colorStops={["#7c3aed", "#4c1d95", "#7c3aed"]}
        blend={0.3}
        amplitude={1}
        speed={0.8}
      />
      <div className="relative z-10 container px-4 md:px-6 max-w-[1140px] mx-auto py-20 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          {/* Gif Image */}
          <div className="relative w-full max-w-5xl mb-4">
            <Image
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmx4OWdyMHpxejVwdXQ4NGZmN2lwaGd3NGtnZmdyMnIwb296YjUzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4w70V3qqkZn8A0OwX/giphy.gif"
              alt="Lock in and focus"
              width={1600}
              height={900}
              className="rounded-lg border border-border/50 shadow-xl"
              unoptimized
            />
            {/* Film-style subtitle overlay */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <h2 className="text-3xl md:text-3xl font-black tracking-tight text-yellow-400"
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.6)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '0.05em'
                  }}>
                Ready to Lock-in?
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
              Stop letting distractions steal your time.
              <br />
              Join 300+ creators building their future, one focused session at a time.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="#trial-signup">
              <Button size="lg" className="px-16 py-6 text-lg font-bold">
                <Lock className="w-5 h-5 mr-2" />
                JOIN EARLY ACCESS!
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <Badge variant="outline" className="border-primary/50">No credit card required</Badge>
              <Badge variant="outline" className="border-primary/50">macOS only</Badge>
              <Badge variant="outline" className="border-primary/50">2-minute setup</Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4">
            <span className="flex items-center gap-1">
              ✓ Privacy-focused
            </span>
            <span className="flex items-center gap-1">
              ✓ Discord community
            </span>
            <span className="flex items-center gap-1">
              ✓ macOS compatible
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 