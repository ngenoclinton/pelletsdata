"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { PageLoader } from "./PageLoader"

export function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    // Create custom events for navigation
    window.addEventListener("navigationStart", handleStart)
    window.addEventListener("navigationComplete", handleComplete)

    return () => {
      window.removeEventListener("navigationStart", handleStart)
      window.removeEventListener("navigationComplete", handleComplete)
    }
  }, [])

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  return <PageLoader isLoading={isLoading} size="small" />
}
