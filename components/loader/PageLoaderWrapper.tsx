"use client"

import { useEffect, useState } from "react"
import { PageLoader } from "./PageLoader"

export function PageLoaderWrapper() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return <PageLoader isLoading={isLoading} />
}
