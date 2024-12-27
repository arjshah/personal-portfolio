'use client'

import React, { useState } from 'react'
import { ArrowRight, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import ConsultationForm from './ConsultationForm'
import Script from 'next/script'

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arjun Shah",
    "jobTitle": "Engineering Executive",
    "description": "Engineering executive specialized in scaling teams, AI integration, and rapid product development.",
    "url": "https://www.arjunshah.co",
    "sameAs": [
      "https://www.linkedin.com/in/arjunshah/",
      "https://github.com/arjshah",
      "https://twitter.com/AShah460",
      "https://medium.com/@arjun_shah"
    ],
    "knowsAbout": [
      "Engineering Leadership",
      "AI Integration",
      "Team Scaling",
      "Technical Due Diligence",
      "Product Development"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Carta"
      },
      {
        "@type": "Organization",
        "name": "Amazon Web Services"
      }
    ]
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-[90vh] bg-stone-50 text-stone-900 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text Content - Now wider */}
            <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-stone-900">
                  Hi, I&apos;m Arjun
                </h1>
                {/* Shorter, punchier intro */}
                <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-3xl">
                Engineering executive specialized in scaling teams, AI integration, and rapid product development. Currently SVP of Engineering at PushPress, a Series B FitnessTech startup. Formerly led engineering teams at Carta and Amazon.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 rounded-none font-light flex items-center justify-center gap-2 transition-colors"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto border border-stone-300 hover:border-stone-400 px-8 py-4 rounded-none font-light transition-colors text-center"
                >
                  View Experience
                </button>
              </div>
              
              <div className="flex gap-6 pt-6">
                <a 
                  href="https://www.linkedin.com/in/arjunshah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/arjshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/AShah460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://medium.com/@arjun_shah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Image Section - Now more compact */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="relative max-w-[280px] mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-stone-200 -rotate-3 transform"></div>
                  <div className="absolute inset-0 bg-stone-900 rotate-3 transform"></div>
                  <div className="relative bg-stone-100 p-4">
                    <div className="relative aspect-square">
                      <Image
                        src="/profile.png"
                        alt="Arjun Shah - Engineering Executive"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}
    </>
  )
}

export default HeroSection