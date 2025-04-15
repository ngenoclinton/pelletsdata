"use client"

import type React from "react"

import { forwardRef } from "react"
import NextLink, { type LinkProps as NextLinkProps } from "next/link"

export interface LinkProps extends NextLinkProps {
  children: React.ReactNode
  className?: string
  showLoader?: boolean
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, className, showLoader = true, ...props }, ref) => {
  const handleClick = () => {
    if (showLoader) {
      // Dispatch custom event to show loader
      window.dispatchEvent(new Event("navigationStart"))

      // Simulate navigation completion
      setTimeout(() => {
        window.dispatchEvent(new Event("navigationComplete"))
      }, 500)
    }
  }

  return (
    <NextLink {...props} ref={ref} className={className} onClick={handleClick}>
      {children}
    </NextLink>
  )
})

Link.displayName = "Link"

export { Link }
