"use client"

import SpotifyIcon from "@/components/icons/SpotifyIcon"

export function SpotifyBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-green-600/20 to-green-700/30" />

      {/* Spotify Icon - Large centered */}
      <div className="relative z-10 flex items-center justify-center scale-110">
        <SpotifyIcon className="w-48 h-48 md:w-56 md:h-56 opacity-80 hover:opacity-100 transition-all duration-300 drop-shadow-2xl" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,215,96,0.25)_0%,_transparent_70%)]" />

      {/* Extra glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl" />
    </div>
  )
}
