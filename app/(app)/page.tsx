import { Metadata } from 'next'
import { HeroSection } from "@/components/home/HeroSection"
import { WorkflowSection } from "@/components/home/WorkflowSection"
import { DiscordCommunitySection } from "@/components/home/DiscordCommunitySection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { SuccessCaseSection } from "@/components/home/SuccessCaseSection"
import { CTASection } from "@/components/home/CTASection"
import { FeaturesSection } from "@/components/home/FeaturesSection"

export const metadata: Metadata = {
  title: 'Ebb Focus - Lock In, Get Focused, and Save Time',
  description: 'Block distractions, play focus music, and get closer to your goals. Join 500+ focused creators using Ebb Focus.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <DiscordCommunitySection />
      <TestimonialsSection />
      <SuccessCaseSection />
      <CTASection />
    </main>
  )
}
