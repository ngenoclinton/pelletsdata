"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface PageLoaderProps {
  isLoading?: boolean
  onLoadingComplete?: () => void
  size?: "small" | "medium" | "large"
}

export function PageLoader({ isLoading: externalIsLoading, onLoadingComplete, size = "medium" }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(externalIsLoading !== undefined ? externalIsLoading : true)

  // Size mapping
  const sizeMap = {
    small: {
      container: "w-16 h-16",
      logo: { width: 40, height: 40 },
      ring: { size: 64, thickness: 2 },
    },
    medium: {
      container: "w-24 h-24",
      logo: { width: 60, height: 60 },
      ring: { size: 96, thickness: 3 },
    },
    large: {
      container: "w-32 h-32",
      logo: { width: 80, height: 80 },
      ring: { size: 128, thickness: 4 },
    },
  }

  const { container, logo, ring } = sizeMap[size]

  useEffect(() => {
    if (externalIsLoading !== undefined) {
      setIsLoading(externalIsLoading)
    } else {
      // Auto-hide after 2 seconds if not controlled externally
      const timer = setTimeout(() => {
        setIsLoading(false)
        onLoadingComplete?.()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [externalIsLoading, onLoadingComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f5f5f5] z-50">
      <div className={`relative ${container} flex items-center justify-center`}>
        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Image src="/company-logo.png" alt="Company Logo" width={logo.width} height={logo.height} priority />
        </div>

        {/* Rotating Ring */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg
            width={ring.size}
            height={ring.size}
            viewBox={`0 0 ${ring.size} ${ring.size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={ring.size / 2}
              cy={ring.size / 2}
              r={ring.size / 2 - ring.thickness / 2}
              stroke="#121212"
              strokeWidth={ring.thickness}
              strokeDasharray={`${(Math.PI * (ring.size - ring.thickness)) / 4} ${Math.PI * (ring.size - ring.thickness)}`}
              strokeLinecap="round"
              transform={`rotate(-90 ${ring.size / 2} ${ring.size / 2})`}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
