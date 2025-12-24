"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Trophy, Music, Target } from "lucide-react"
import Link from "next/link"
import Aurora from "@/components/backgrounds/aurora"
import { Badge } from "@/components/ui/badge"
import { DiscordIcon } from "../icons/DiscordIcon"

const channels = [
  {
    icon: <Target className="w-5 h-5" />,
    name: "#lock-in-sessions",
    description: "Live co-working sessions"
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    name: "#wins",
    description: "Celebrate your progress"
  },
  {
    icon: <Music className="w-5 h-5" />,
    name: "#focus-music",
    description: "Playlist sharing"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    name: "#accountability",
    description: "Daily check-ins"
  }
]

export function DiscordCommunitySection() {
  // Mock data - in real app, this would come from API/database
  const onlineCount = 42
  const inFocusCount = 18

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0 opacity-20 dark:opacity-30"
        colorStops={["#5865F2", "#7289DA", "#5865F2"]}
        blend={0.3}
        amplitude={0.8}
        speed={0.5}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">
            THE LOCKED IN COMMUNITY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with 500+ builders, creators, and founders who are locking in and shipping daily
          </p>
        </div>

        {/* Discord Preview Card */}
        <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-border mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center">
              <DiscordIcon width={24} height={24} fill="white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Ebb Locked-in Community</h3>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="gap-1.5 border-green-500/30 bg-green-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">{onlineCount} Online</span>
                </Badge>
                <Badge variant="outline" className="gap-1.5 border-violet-500/30 bg-violet-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                  </span>
                  <span className="text-xs font-medium">{inFocusCount} In Focus</span>
                </Badge>
              </div>
            </div>
          </div>

          {/* Active Channels */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-4 text-muted-foreground">ACTIVE CHANNELS</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <div className="text-muted-foreground mt-0.5">
                    {channel.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{channel.name}</p>
                    <p className="text-xs text-muted-foreground">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="border-l-4 border-primary pl-4 py-2 mb-6 italic text-sm text-muted-foreground">
            "The accountability from the community keeps me coming back every day"
            <footer className="text-xs mt-1 not-italic">— Discord member</footer>
          </blockquote>

          {/* CTA */}
          <div className="text-center">
            <Link href="https://discord.gg/ebbfocus" target="_blank">
              <Button size="lg" className="px-12 bg-[#5865F2] hover:bg-[#4752C4]">
                <MessageSquare className="w-5 h-5 mr-2" />
                Join Discord Server
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
