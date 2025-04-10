"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { ChevronRight, User, Bell, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { useParallax } from "../hooks/useParallax"
import { WorkloadCard } from "./WorkloadCard"
import { ProgressRing } from "./ProgressRing"
import { AnalyticsCard } from "./AnalyticsCard"
import { NetworkCard } from "./NetworkCard "

import { motion, useScroll, useTransform } from "framer-motion"
import { ParticleBackground } from "./ParticleBackground"
import { RotatingCube } from "./RotatingCube"
import { CursorFollower } from "../CursorFollower"

// import { ParticleBackground } from "@/components/particle-background"
// import { RotatingCube } from "@/components/rotating-cube"
// import { CursorFollower } from "@/components/cursor-follower"

export default function Hero() {
  const [percentage, setPercentage] = useState(0)
  const { ref } = useParallax()
  const { scrollYProgress } = useScroll()

  // Scroll-based animations
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(47)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" ref={ref}>
      {/* Cursor follower */}
      <CursorFollower />

      {/* Background with glow effect */}
      <div className="absolute inset-0 bg-[#092c3f] w-1/2 z-0">
        <ParticleBackground />
        <motion.div
          className="absolute -inset-[100px] bg-[#0a3b54] rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-white p-8 lg:p-12">
          <motion.div style={{ opacity: headerOpacity, y: headerY }} className="relative">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {["Data", "Refined,", "Insights", "Defined"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * i }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <p className="text-lg mb-8 text-[#a8c5d3] max-w-md">
              Transform your data into actionable insights with our powerful analytics platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-hoverable="true">
                <Button className="bg-white text-[#092c3f] hover:bg-[#f0f5f8] transition-all" size="lg">
                Get a Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-hoverable="true">
                <Button
                  variant="outline"
                  className="border-white text-[#092c3f] hover:bg-[#f0f5f8] transition-all"
                  size="lg"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Workload Card */}
          <motion.div
            className="absolute left-8 top-32 lg:top-36 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              y: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <WorkloadCard />
          </motion.div>

          {/* Rotating cube decorations */}
          <RotatingCube size={8} position="left-20 top-32" />
          <RotatingCube size={12} position="left-40 bottom-20" />
        </div>

        {/* Right Content */}
        <div className="relative bg-gray-50 flex items-center justify-center p-8 lg:p-0">
          {/* Header */}
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 flex items-center gap-3 z-30">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(9, 44, 63, 0)",
                  "0 0 0 10px rgba(9, 44, 63, 0.1)",
                  "0 0 0 0 rgba(9, 44, 63, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              data-hoverable="true"
            >
              <Badge className="bg-[#f0f5f8] text-[#092c3f] hover:bg-[#e0edf5] flex items-center gap-2 py-1.5 px-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#092c3f]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
                Score 7.9
              </Badge>
            </motion.div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Securing Your Success</span>
            </div>
          </div>

         

          {/* Person Image */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://img.freepik.com/free-photo/corporate-business-people-meeting-boardroom-african-manager-brainstorming-with-colleagues-discussing-strategy-sharing-problem-solving-ideas-collaborating-conference-room-company_482257-13747.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
              width={700}   
              height={800}
              alt="Professional with data visualization"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            className="absolute top-32 right-8 z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
            //   y: 0,
              y: [0, -8, 0],
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              y: {
                delay: 1,
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            whileHover={{
              rotateY: 5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            data-hoverable="true"
          >
            <div className="bg-white rounded-xl shadow-lg p-4 w-44">
              <div className="text-sm text-gray-500 mb-2">recent project</div>
              <div className="flex items-center justify-between">
                <ProgressRing percentage={percentage} size={80} />
                <div className="text-sm text-[#092c3f] flex items-center">
                  Details
                  <ChevronRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-12 z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
            //   y: 0,
              y: [0, -12, 0],
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
              y: {
                delay: 1.2,
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            whileHover={{
              rotateY: -5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            data-hoverable="true"
          >
            <AnalyticsCard />
          </motion.div>

          <motion.div
            className="absolute bottom-48 left-8 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
              y: {
                delay: 1.5,
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            whileHover={{
              rotateY: 5,
              rotateX: -5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            data-hoverable="true"
          >
            <NetworkCard />
          </motion.div>

          {/* Logo */}
          <motion.div
            className="absolute top-8 left-8 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            data-hoverable="true"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#092c3f] text-white p-1 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="font-bold text-[#092c3f]">Pellets Analytics</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
