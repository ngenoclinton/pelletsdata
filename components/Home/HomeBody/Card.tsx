"use client"

import Link from "next/link"
import { Shield, BarChart3, Settings, Database, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"


export default function CardHome() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }


  const featureCards = [
    {
      icon: <Database className="h-5 w-5 text-gray-700" />,
      title: "Data Security and Compliance",
      description:
        " We implement robust encryption, access controls, and adhere to relevant regulations, ensuring that client data is safeguarded.",
    },
    {
      icon: <LineChart className="h-5 w-5 text-gray-700" />,
      title: "Data Quality Enhancement",
      description:
        "ClearBook offers data cleansing and quality assurance services that help organizations maintain accurate, consistent, and error-free data.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-gray-700" />,
      title: "Customized Solutions",
      description:
        "ClearBook tailors its data management solutions to meet the specific needs and objectives of each client.",
    },
  ]

  return (
    <main className="min-h-screen  text-[#051926] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
        src="https://img.freepik.com/premium-photo/computer-screen-that-has-word-t-it_886588-9948.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
        width={90}
        height={90}        
        alt="Professional with data visualization"
        className="object-cover"
        ></Image>
        
      </div>

      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          className="grid gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Left Column - Text and Buttons */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <motion.h1 className="text-4xl font-semibold text-[#051926] md:text-4xl lg:text-5xl" variants={item}>
                Clarity in Data,
                <br />
                <motion.span
                  className="text-[#a4e052]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  Precision
                </motion.span>{" "}
                in Insights
              </motion.h1>
              <motion.p className="max-w-md text-lg text-[#051926]" variants={item}>
                Pellets Data Analysts help business leaders overcome data challenges by converting complex information
                into strategic assets that provide timely insights for critical decision-making.
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={item}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full bg-[#e8f7c7] px-6 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition-all hover:bg-[#d9f0a3] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4e052] focus:ring-offset-2"
                >
                  Get Consultation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-[#051926] text-white px-6 py-2.5 text-sm font-medium shadow-sm transition-all hover:bg- hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Explore Training
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Feature Cards */}
          <motion.div className="flex flex-col space-y-4" variants={container}>
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className={`group rounded-xl p-6 transition-all duration-300 ${
                  activeCard === index
                    ? "bg-[#e8f7c7] text-gray-800"
                    : activeCard !== null
                      ? "bg-[#092c3f] opacity-80 text-white"
                      : "bg-[#092c3f] text-white" // Dark blue background for all cards by default
                }`}
                variants={item}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  y: -5,
                }}
                initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      activeCard === index ? "bg-white" : "bg-white"
                    } shadow-sm`}
                    whileHover={{ rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className={`text-lg font-medium ${activeCard === index ? "text-gray-800" : "text-white"}`}>
                    {card.title}
                  </h3>
                </div>
                <p className={`text-sm ${activeCard === index ? "text-gray-600" : "text-gray-200"}`}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
