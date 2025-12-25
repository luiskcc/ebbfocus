"use client"

import { Music, Calendar, Users } from "lucide-react"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { SpotifyBackground } from "@/components/backgrounds/SpotifyBackground"
import { SimpleScheduling } from "@/components/backgrounds/SimpleScheduling"
import { GlobeBackground } from "@/components/backgrounds/GlobeBackground"

const features = [
  {
    Icon: Users,
    name: "Build Together (Live)",
    description: "Join live co-working sessions with other builders and creatives. Stream your progress on Discord",
    href: "#",
    cta: "Join the Community",
    background: <GlobeBackground />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-4",
  },
  {
    Icon: Music,
    name: "Focus Soundtracks",
    description: "Connect your Spotify and play your favorite focus playlists automatically when you lock in",
    href: "#",
    cta: "Works with Spotify Premium",
    background: <SpotifyBackground />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Calendar,
    name: "Smart Scheduling",
    description: "Set recurring focus sessions and build a consistent daily habit with calendar integration",
    href: "#",
    cta: "Schedule Sessions",
    background: <SimpleScheduling />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
]

export function ExtraFeaturesSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Feature Cards */}
        <div className="max-w-5xl mx-auto space-y-4">
          {/* Globe container - full width */}
          <BentoCard {...features[0]} className="w-full" background={<GlobeBackground />} />
          
          {/* Two column grid for remaining cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard {...features[1]} className="w-full" />
            <BentoCard {...features[2]} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
