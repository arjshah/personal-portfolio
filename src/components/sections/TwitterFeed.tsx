'use client'

import React, { useEffect } from 'react'

const TwitterFeed = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script')
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-stone-900">Latest Thoughts</h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Follow my insights on technology, AI, and engineering leadership
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <a 
            className="twitter-timeline" 
            data-height="600"
            data-theme="light"
            data-chrome="noheader nofooter noborders transparent"
            href="https://twitter.com/AShah460"
          >
            Tweets by Arjun Shah
          </a>
        </div>
      </div>
    </div>
  )
}

export default TwitterFeed 