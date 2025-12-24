import { Button } from "@/components/ui/button"
import Aurora from "@/components/backgrounds/aurora"
import Image from "next/image"
import Link from 'next/link'
import { AnimatedTooltipPreview } from "@/components/ui/animated-tooltip-demo"

export function HeroSection() {
  return (
    <section className="relative w-full text-center flex flex-col items-center justify-center min-h-screen md:min-h-[calc(100vh-8rem)] overflow-hidden">
      <Aurora
        className="absolute top-0 left-0 w-full h-full z-0 opacity-30 dark:opacity-50"
        colorStops={["#7c3aed", "#4c1d95", "#7c3aed"]}
        blend={0.5}
        amplitude={1}
        speed={0.8}
      />
      <div className="relative z-10 flex flex-col items-center max-w-[1140px] mx-auto px-4 md:px-6 pt-20">
        {/* App Icon */}
        <div className="relative mb-8 w-fit">
          <Image
            src="/images/ebb-app.png"
            alt="Ebb Focus App Icon"
            width={128}
            height={128}
            className="rounded-3xl"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tighter max-w-4xl">
          Lock In, Get Focused, and Save Time.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-xl text-foreground/80 mb-8 font-medium max-w-2xl">
          Block distractions, play focus music, and get closer to your goals
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col gap-4 mb-6">
          <Link href="#early-access">
            <Button size="lg" className="px-20 py-6 text-lg font-bold">
              JOIN EARLY ACCESS
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">
            7-day free trial • No credit card required • macOS only
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center justify-center gap-3 mt-4">
          <AnimatedTooltipPreview />
          <p className="text-sm text-muted-foreground">
            Join 500+ focused creators
          </p>
        </div>
      </div>
    </section>
  )
} 