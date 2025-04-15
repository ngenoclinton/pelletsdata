"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Menu, X, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoFallbackRef = useRef<HTMLDivElement | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle logo fallback
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none"

    // Clear any existing fallback to prevent duplication
    if (logoFallbackRef.current) {
      logoFallbackRef.current.innerHTML = ""
    }

    // Create fallback content
    const fallbackContent = `
      <div class="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-[#e94d65]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8v8m-8-5v5m0-8v.01M12 4v16" />
        </svg>
        <span class="font-bold text-[#092c3f]">Pellets Data Analysts</span>
      </div>
    `

    if (logoFallbackRef.current) {
      logoFallbackRef.current.innerHTML = fallbackContent
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full ">
        <div>
      {/* Top navbar - dark blue with business hours and social icons */}
      {/* <motion.div
        className="bg-[#092c3f] text-white py-3 flex justify-center items-center w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex flex-wrap justify-between items-center text-xs w-3xl">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 mr-2 text-[#e94d65]" />
            <span className="hidden sm:inline">MON - SAT: 8:00 AM - 5:00 PM</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>SUN: CLOSED</span>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="https://facebook.com" className="hover:text-[#e94d65] transition-colors duration-300">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-[#e94d65] transition-colors duration-300">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-[#e94d65] transition-colors duration-300">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:info@example.com" className="hover:text-[#e94d65] transition-colors duration-300">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div> */}

      {/* Main navbar - glassy background with logo and navigation */}
      <motion.div
        className={cn(
          "backdrop-blur-md transition-all duration-300 flex justify-center items-center w-full",
          scrolled ? "bg-white/80 shadow-md" : "bg-white/90 shadow-md",
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container flex h-24 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-32 ">
                <Image
                  src="https://pelletsdata.co.ke/assets/img/logo/logo.png"
                  alt="Pellets Data Analysts"
                  fill
                  className="object-contain"
                  onError={handleLogoError}
                />
                <div ref={logoFallbackRef} className="absolute inset-0 flex items-center"></div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Training", href: "/training" },
              { name: "Consultancy & More", href: "/consultancy" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[#092c3f] transition-all duration-300 hover:text-[#e94d65] relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e94d65] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden relative z-[60]" // Increased z-index to 60, higher than the menu overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#092c3f] hover:text-[#e94d65] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e94d65] transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex items-center gap-1">
                {isMenuOpen ? (
                  <>
                    <X className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">Close</span>
                  </>
                ) : (
                  <>
                    <Menu className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">Menu</span>
                  </>
                )}
              </div>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu with Layered Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden overflow-hidden">
            {/* Background Layer - Lowest opacity */}
            <motion.div
              className="fixed inset-0 bg-[#092c3f]/10 backdrop-blur-sm z-[40]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Container - Middle opacity */}
            <motion.div
              className="relative z-[50] bg-white/80 backdrop-blur-md border-b shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Menu Items - Highest opacity, slides in last */}
              <motion.div
                className="bg-white/95 backdrop-blur-md"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Training", href: "/training" },
                    { name: "Consultancy & More", href: "/consultancy" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#092c3f] hover:text-[#e94d65] hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <motion.div
                  className="px-5 py-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <div className="flex items-center mb-3">
                    <Phone className="h-4 w-4 text-[#e94d65] mr-2" />
                    <span className="text-sm text-[#092c3f]">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-[#e94d65] mr-2" />
                    <span className="text-sm text-[#092c3f]">info@pelletsdata.com</span>
                  </div>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div
                  className="px-5 py-3 border-t border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <div className="flex justify-center space-x-6">
                    <Link
                      href="https://facebook.com"
                      className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:info@example.com"
                      className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
