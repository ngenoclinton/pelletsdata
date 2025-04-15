"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart2,
  PieChart,
  CheckCircle2,
  Users,
  Target,
  Shield,
  TrendingUp,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowWeDoIt() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("data-analytics-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div id="data-analytics-section" className="w-full bg-white">
      {/* Section 1: How We Do It */}
      <section className="relative w-full py-20 md:py-20 overflow-visible">
        <div className="container mx-auto px-4">
          {/* Dotted connection lines */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[80%] h-[60%] pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-20"
            >
              <path
                d="M200,100 C400,50 600,350 800,300"
                stroke="#092c3f"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative z-10 mb-12 md:mb-0">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e8ff8d] rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#dc3545]/10 rounded-full"></div>

                {/* Wavy lines */}
                <svg
                  className="absolute -bottom-4 -left-4 w-[60%] h-auto opacity-20"
                  viewBox="0 0 100 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 15 Q 25 0, 50 15 Q 75 30, 100 15" stroke="#092c3f" strokeWidth="1" fill="none" />
                </svg>

                <svg
                  className="absolute top-[10%] -right-4 w-[40%] h-auto opacity-15"
                  viewBox="0 0 100 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10 Q 20 20, 40 10 Q 60 0, 80 10 Q 100 20, 120 10"
                    stroke="#092c3f"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>



                {/* Main image with border */}
                <motion.div
                  className="relative rounded-lg overflow-hidden border-8 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://img.freepik.com/free-photo/business-scene-top-view-with-laptop_23-2147626519.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                    alt="Data analytics dashboard showing charts and graphs"
                    className="w-full h-auto"
                  />

                  {/* Floating icons */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-white p-2 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                  >
                    <BarChart2 className="w-5 h-5 text-[#dc3545]" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5 }}
                  >
                    <PieChart className="w-5 h-5 text-[#092c3f]" />
                  </motion.div>
                </motion.div>

                {/* Vertical text */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 transform -rotate-90 origin-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-[2px] bg-[#092c3f]"></div>
                    <span className="text-xs tracking-widest text-[#092c3f] font-medium">DATA ANALYTICS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 md:pl-16">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#092c3f]">
                  Professional Approach and Quality Services
                </h2>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Unlike standard hard-wired application reports, business intelligence reports are meant to address
                  changing and varying business requirements at different levels of an organization.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#dc3545]" />
                    </div>
                    <span className="text-[#092c3f] font-medium">Best-in-class Visualization Service</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#dc3545]" />
                    </div>
                    <span className="text-[#092c3f] font-medium">Business Strategy & Growth</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#dc3545]" />
                    </div>
                    <span className="text-[#092c3f] font-medium">Highly Customized Models</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#dc3545]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#dc3545]" />
                    </div>
                    <span className="text-[#092c3f] font-medium">99% Customer Satisfaction</span>
                  </div>
                </div>

                <Button className="bg-[#dc3545] hover:bg-[#dc3545]/90 text-white rounded-md flex items-center gap-2 group px-6 py-2.5">
                  MORE ABOUT US
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Do It */}
      <section className="relative w-full py-20 md:py-20 overflow-visible">
        <div className="container mx-auto px-4">
          {/* Dotted connection lines */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[80%] h-[60%] pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 800 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-20"
            >
              <path
                d="M600,100 C400,150 200,250 0,200"
                stroke="#092c3f"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center">
            {/* Right side - Image */}
            <div className="w-full md:w-1/2 relative z-10 mb-12 md:mb-0">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#e8ff8d] rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#dc3545]/10 rounded-full"></div>

                {/* Wavy lines */}
                <svg
                  className="absolute -top-4 -right-4 w-[60%] h-auto opacity-20"
                  viewBox="0 0 100 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 15 Q 25 0, 50 15 Q 75 30, 100 15" stroke="#092c3f" strokeWidth="1" fill="none" />
                </svg>

                {/* Dots pattern */}
                <div className="absolute bottom-1/4 -right-4 w-8 h-32">
                  <div className="relative w-full h-full">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={`dot2-${i}`}
                        className="absolute rounded-full bg-[#092c3f]"
                        style={{
                          width: `${Math.random() * 3 + 2}px`,
                          height: `${Math.random() * 3 + 2}px`,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Main image with border */}
                <motion.div
                  className="relative rounded-lg overflow-hidden border-8 border-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://img.freepik.com/free-photo/young-woman-analysing-charts-laptop-start-up-business-meeting-room_482257-5026.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                    alt="Data analytics professional working"
                    className="w-full h-auto"
                  />
                </motion.div>

                {/* Vertical text */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 transform rotate-90 origin-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-[2px] bg-[#092c3f]"></div>
                    <span className="text-xs tracking-widest text-[#092c3f] font-medium">WHO WE ARE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left side - Content */}
            <div className="w-full md:w-1/2 md:pr-16">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#092c3f]">
                  Providing Quality Data Services & Consulting
                </h2>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Pellets Data Analysts is a data consultancy firm focused on helping businesses harness the full value
                  of their data. We combine technology, domain knowledge, and a customer-first approach to deliver
                  practical, tailored analytics solutions.
                </p>

                {/* Key metrics instead of percentage circles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#092c3f]/5 p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-[#dc3545]/10">
                        <TrendingUp className="w-5 h-5 text-[#dc3545]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#092c3f] text-lg">10+ Years</h3>
                        <p className="text-gray-600">Industry Experience</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#092c3f]/5 p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-[#dc3545]/10">
                        <Users className="w-5 h-5 text-[#dc3545]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#092c3f] text-lg">200+</h3>
                        <p className="text-gray-600">Satisfied Clients</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#092c3f]/5 p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-[#dc3545]/10">
                        <LineChart className="w-5 h-5 text-[#dc3545]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#092c3f] text-lg">500+</h3>
                        <p className="text-gray-600">Projects Completed</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#092c3f]/5 p-5 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-full bg-[#dc3545]/10">
                        <Target className="w-5 h-5 text-[#dc3545]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#092c3f] text-lg">24/7</h3>
                        <p className="text-gray-600">Support Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="mb-3">
                    <p className="text-gray-600">
                    Our Mission To increase efficiency in businesses by providing timely, reliable intelligence to
                      decision-makers.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600">To make data a strategic asset for every client we serve.</p>
                  </div>
                </div>

                <Button className="bg-[#dc3545] hover:bg-[#dc3545]/90 text-white rounded-md flex items-center gap-2 group px-6 py-2.5">
                  CONTACT US
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}