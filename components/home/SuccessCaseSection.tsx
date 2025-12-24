"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, TrendingUp } from "lucide-react"
import Link from "next/link"

const successStories = [
  {
    name: "Joschua Sutee",
    handle: "@JoschuaBuilds",
    title: "How Joschua Built in Public",
    avatar: "/images/joschua.jpg",
    quote: "I was living off savings and constantly distracted. Ebb helped me lock in, build consistently, and actually ship. Now I'm building in public every day.",
    result: "Daily building streak, growing audience, shipping real products",
    link: "https://x.com/JoschuaBuilds",
    results: [
      { label: "Focus sessions completed", value: "184" },
      { label: "Hours of deep work", value: "156" },
      { label: "Distractions blocked", value: "3,421" },
      { label: "X/Twitter blocked (saved ~12 hrs)", value: "68x" },
      { label: "YouTube blocked (saved ~9 hrs)", value: "42x" }
    ],
    note: "💪 From \"living off savings\" to building in public daily"
  }
]

export function SuccessCaseSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">
            SUCCESS STORIES
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from focused creators
          </p>
        </div>

        {/* Success Stories */}
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div key={index}>
              <Card className="overflow-hidden border-2">
                <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Story Content */}
                  <div className="flex flex-col justify-center">
                    {/* Avatar and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={story.avatar} alt={story.name} />
                        <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold">
                          {story.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{story.handle}</p>
                      </div>
                    </div>

                    <blockquote className="text-lg text-foreground/90 mb-6 border-l-4 border-primary pl-4 italic">
                      "{story.quote}"
                    </blockquote>

                    <div className="flex items-center gap-2 mb-6">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <p className="text-sm font-semibold">
                        Result: {story.result}
                      </p>
                    </div>

                    <Link href={story.link} target="_blank">
                      <Button variant="outline" size="lg">
                        Follow Their Journey →
                      </Button>
                    </Link>
                  </div>

                  {/* Results Stats */}
                  <div className="flex flex-col justify-center">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="text-2xl">📊</span>
                        {story.name.split(' ')[0]}'s Results
                      </h4>
                      <div className="space-y-4">
                        {story.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                          >
                            <span className="text-sm text-muted-foreground">
                              {result.label}
                            </span>
                            <span className="text-lg font-bold text-primary">
                              {result.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Additional Note */}
              <div className="mt-6 text-center">
                <div className="inline-block bg-muted/30 rounded-lg px-6 py-3 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    {story.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
