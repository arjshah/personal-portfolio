'use client'

import React from 'react'
import { Card } from "@/components/ui/card"

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "SVP of Engineering",
      company: "PushPress",
      period: "Apr 2024 - Present",
      location: "San Francisco Bay Area",
      description: "Leading engineering, infrastructure, and data teams (30+). Driving AI integration across products and engineering workflows. Building next-generation AI and payments platform for thousands of fitness businesses."
    },
    {
      role: "Engineering Director",
      company: "Carta",
      period: "Oct 2021 - Apr 2024",
      location: "San Francisco Bay Area",
      description: "Led 12+ engineering teams across product and platform. Built Fund Tax from 0 to multi-million ARR in 5 months. Scaled identity, documents, valuations, and data infrastructure services serving 30k+ startups."
    },
    {
      role: "Co-Founder",
      company: "Wildkard",
      period: "Jan 2021 - Dec 2021",
      location: "San Francisco Bay Area",
      description: "Built a B2B SaaS platform for youth sports organizations. Raised $1 million in seed funding from PayPal, Airbnb, and Instagram executives. Hired and led an 8-person growth and engineering team. Successfully exited via acquisition."
    },
    {
      role: "Leader - Platform Architecture",
      company: "Amazon Web Services (AWS)",
      period: "Sep 2018 - Jan 2021",
      location: "San Francisco Bay Area",
      description: "Hired and led 3 platform architecture teams working with major AWS customers like NVIDIA, Tesla, Samsung, and Twitter to build large-scale solutions on AWS. Served as Amazon Bar Raiser for technical hiring."
    },
    {
      role: "Director of Product Engineering",
      company: "Pivotal Software, Inc.",
      period: "Apr 2017 - Aug 2018",
      location: "Greater Los Angeles Area",
      description: "Led R&D teams building products for LA startups in crypto, media, and commerce. Implemented test-driven development and pair programming practices. Scaled agile development processes across multiple teams."
    },
    {
      role: "Senior Engineering Manager",
      company: "T-Mobile",
      period: "Aug 2014 - Apr 2017",
      location: "Greater Seattle Area",
      description: "Led 4 engineering teams (60+ engineers) for core e-commerce platform serving 20M+ users. Executed major cloud migration initiative. Shipped 100+ features through multiple Black Friday launches."
    },
    {
      role: "Engineering Manager",
      company: "Quotient Technology Inc.",
      period: "May 2012 - Aug 2014",
      location: "San Francisco Bay Area",
      description: "Hired and led an engineering team of 15. Built platform infrastructure supporting B2B retail products. Scaled systems to handle 80M+ consumers. Led technical initiatives through successful IPO."
    },
    {
      role: "Senior Product Manager",
      company: "VMware",
      period: "Jun 2010 - May 2012",
      location: "San Francisco Bay Area",
      description: "Led product development and launch of customer success platform serving VMware's 2.2 million customers. Drove product execution across a 100+ person distributed team."
    },
    {
      role: "Software Engineer",
      company: "Liberty Mutual Insurance",
      period: "Feb 2009 - Jun 2010",
      location: "Greater Boston Area",
      description: "Built developer infrastructure for critical services. Led on-call rotations and implemented automated monitoring solutions. Improved reliability and deployment processes."
    },
    {
      role: "Software Engineer",
      company: "Purdue University",
      period: "Jan 2008 - Dec 2009",
      location: "Lafayette, Indiana Area",
      description: "Developed social network platform for athletes and sports organizations. Implemented viral growth features and local business integrations. Scaled to thousands of users."
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-stone-900">Experience</h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            15+ years of scaling engineering teams and delivering impactful products
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-stone-200" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 lg:mb-16 last:mb-0">
              {/* Desktop layout */}
              <div className="hidden lg:block">
                <div className={`flex items-start justify-${index % 2 === 0 ? 'end' : 'start'} w-1/2 ${index % 2 === 0 ? 'ml-auto pr-8' : 'mr-auto pl-8'}`}>
                  <Card className="w-full p-6 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-medium text-stone-900">{exp.role}</h3>
                        <p className="text-stone-600">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-stone-500">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{exp.description}</p>
                    </div>
                  </Card>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-3 h-3 bg-stone-900 rounded-full" />
              </div>

              {/* Mobile/Tablet layout */}
              <div className="lg:hidden">
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-medium text-stone-900">{exp.role}</h3>
                      <p className="text-stone-600">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm text-stone-500">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{exp.description}</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline