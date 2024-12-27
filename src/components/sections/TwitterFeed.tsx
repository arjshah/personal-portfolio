'use client'

import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

const TwitterFeed = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on mobile
    setIsMobile(window.innerWidth < 768)

    // Load Twitter widget script
    const script = document.createElement('script')
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (isMobile) {
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-stone-900">Latest Thoughts</h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600">
              Follow my latest insights on engineering leadership and AI
            </p>
          </div>
          
          <Card className="p-8 text-center">
            <p className="text-stone-600 mb-6">
              View my latest updates and thoughts on engineering leadership, AI, and technology.
            </p>
            <a
              href="https://twitter.com/AShah460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-6 py-3 hover:bg-stone-800 transition-colors"
            >
              View Latest Updates
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-stone-900">Latest Thoughts</h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Follow my latest insights on engineering leadership and AI
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <a 
            className="twitter-timeline" 
            data-height="600"
            data-theme="light"
            href="https://twitter.com/AShah460"
          >
            Loading tweets...
          </a>
        </div>
      </div>
    </div>
  )
}

export default TwitterFeed 