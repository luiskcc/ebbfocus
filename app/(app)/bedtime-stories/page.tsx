import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bedtime Stories - Ebb Focus Blog',
  description: 'Stories, insights, and lessons from focused creators building their dreams.',
}

export default function BedtimeStories() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            Bedtime Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and lessons from focused creators building their dreams
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-muted/50 rounded-2xl p-12 border border-border text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">📚</div>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-6">
              We're crafting stories about creators who locked in and made it happen.
              Subscribe to be notified when we publish our first story.
            </p>

            {/* Email Signup Placeholder */}
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Notify Me</Button>
            </div>
          </div>
        </div>

        {/* Future Blog Topics Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "The 10,000 Hour Lie",
              description: "Why focused sessions beat mindless practice",
              emoji: "🎯"
            },
            {
              title: "Building in Public",
              description: "Stories from creators shipping daily",
              emoji: "🚀"
            },
            {
              title: "The Focus Stack",
              description: "Tools and habits of deep workers",
              emoji: "🛠️"
            }
          ].map((topic, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl mb-3">{topic.emoji}</div>
              <h3 className="font-semibold mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
