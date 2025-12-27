'use client'

import React, { useMemo, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import createGlobe from 'cobe'

type Status = 'In focus' | 'Online' | 'Offline'

interface Avatar {
  id: string
  name: string
  status: Status
  top: string
  left: string
  imageUrl: string
}

const avatars: Avatar[] = [
  {
    id: 'paul',
    name: 'Paul',
    status: 'In focus',
    top: '30%',
    left: '35%',
    imageUrl: '/images/paul.jpg'
  },
  {
    id: 'nathan',
    name: 'Nathan',
    status: 'Online',
    top: '45%',
    left: '65%',
    imageUrl: '/images/nathan.jpg'
  },
  {
    id: 'luis',
    name: 'Luis',
    status: 'In focus',
    top: '60%',
    left: '50%',
    imageUrl: '/images/luis.jpg'
  },
]

const statusStyles: Record<Status, string> = {
  'In focus': 'bg-violet-500',
  'Online': 'bg-green-500',
  'Offline': 'bg-gray-500',
}

export function FriendsGlobeBackground() {
  const onlineCount = useMemo(() => avatars.filter(a => a.status === 'Online').length, [])
  const inFocusCount = useMemo(() => avatars.filter(a => a.status === 'In focus').length, [])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400,
      height: 400,
      phi: 0,
      theta: 0.3,
      dark: 0.95,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.7, 0.7, 1],
      markerColor: [1, 0.5, 1],
      glowColor: [0.5, 0.3, 0.8],
      markers: [
        { location: [40.7128, -74.0060], size: 0.1, color: [0.6, 0.4, 1] }, // Paul (New York - purple)
        { location: [51.5074, -0.1278], size: 0.1, color: [0, 1, 0.5] },  // Nathan (London - green)
        { location: [37.7749, -122.4194], size: 0.12, color: [0.6, 0.4, 1] }, // Luis (San Francisco - purple)
      ],
      onRender: (state) => {
        // Keep globe static - no rotation
      }
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 p-4 overflow-hidden select-none">
      {/* Status Badges */}
      <div className="flex items-center gap-2 mb-4">
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

      <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48">
         <div className="relative w-full h-full rounded-full overflow-visible">
             {/* COBE Globe */}
             <canvas
               ref={canvasRef}
               className="w-full h-full"
               style={{
                 width: '100%',
                 height: '100%',
                 aspectRatio: 1,
               }}
             />

             {/* Avatar overlays on markers */}
             {avatars.map((avatar) => {
               const statusColor = statusStyles[avatar.status]
               return (
                 <motion.div
                   key={avatar.id}
                   className="absolute cursor-pointer pointer-events-auto group"
                   style={{
                     top: avatar.top,
                     left: avatar.left,
                   }}
                   initial={{ scale: 0, x: '-50%', y: '-50%' }}
                   whileHover={{
                     scale: 1,
                     zIndex: 10,
                   }}
                   transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                 >
                   <div className="relative w-12 h-12 rounded-full border-2 border-gray-600 shadow-lg bg-gray-700 overflow-hidden">
                     <Image
                       src={avatar.imageUrl}
                       alt={avatar.name}
                       fill
                       className="object-cover"
                       sizes="48px"
                     />
                     <span
                       className={cn(
                         "absolute top-[-3px] right-[-3px] w-4 h-4 rounded-full border-2 border-gray-800",
                         statusColor
                       )}
                     />
                   </div>
                   {/* Name label on hover */}
                   <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <span className="text-xs font-medium text-white bg-gray-900 px-2 py-1 rounded whitespace-nowrap">
                       {avatar.name}
                     </span>
                   </div>
                 </motion.div>
               )
             })}
         </div>
      </div>
    </div>
  )
} 