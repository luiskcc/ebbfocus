"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    app: "Twitter",
    quote: "This app won't let me check Twitter during work. Terrible.",
    author: "Twitter (probably)",
    color: "from-blue-500/10 to-sky-500/10",
    rotate: "-rotate-1"
  },
  {
    app: "YouTube",
    quote: "Used to get 100 hours a month. Now I get zero. 0/10",
    author: "YouTube",
    color: "from-red-500/10 to-rose-500/10",
    rotate: "rotate-1"
  },
  {
    app: "Instagram",
    quote: "They block me right when the feed gets good. Unacceptable.",
    author: "Instagram",
    color: "from-pink-500/10 to-fuchsia-500/10",
    rotate: "-rotate-2"
  },
  {
    app: "TikTok",
    quote: "My doomscrolling metrics are DOWN 90%. This is outrageous.",
    author: "TikTok",
    color: "from-purple-500/10 to-violet-500/10",
    rotate: "rotate-2"
  }
]

export function OneStarReviewsSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            1 STAR REVIEWS
          </h2>
          <p className="text-xl text-muted-foreground">
            From apps we blocked
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Collecting complaints since 2024
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`${review.rotate} transition-transform`}
            >
              <Card className={`p-6 h-full bg-gradient-to-br ${review.color} border-2 hover:border-primary/50 transition-colors`}>
                {/* 1-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-semibold">1.0</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm mb-4 leading-relaxed">
                  "{review.quote}"
                </blockquote>

                {/* Author */}
                <p className="text-xs text-muted-foreground font-medium">
                  — {review.author}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
