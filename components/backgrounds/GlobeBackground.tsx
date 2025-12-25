"use client"

import Image from "next/image"

export function GlobeBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Globe Image */}
      <div className="relative w-full h-full">
        <Image
          src="/images/globe.png"
          alt="Global community"
          fill
          className="object-contain opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-2xl"
        />
      </div>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20" />

      {/* Purple glow behind globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
    </div>
  )
}
