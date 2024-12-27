'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import ConsultationForm from './ConsultationForm'

const AdvisoryServices = () => {
  const [showForm, setShowForm] = useState(false)
  
  const services = [
    {
      title: "Technical Due Diligence",
      description: "Comprehensive evaluation of technical assets, engineering teams, and architecture for M&A and investment decisions. Experience across $1B+ transactions.",
      focus: ["Engineering Assessment", "Architecture Review", "Risk Analysis", "Growth Planning"]
    },
    {
      title: "AI Engineering",
      description: "Strategic integration of AI and LLMs into products and engineering workflows. Expertise in building AI-powered developer tools and automated code analysis systems.",
      focus: ["LLM Integration", "Developer Productivity", "AI Architecture", "Workflow Automation"]
    },
    {
      title: "Portfolio Company Advisory",
      description: "Strategic guidance for scaling engineering organizations from Series A to exit. Track record of leading 100+ person engineering organizations.",
      focus: ["Organizational Design", "Technical Strategy", "Leadership Development", "Platform Scaling"]
    },
    {
      title: "Interim Leadership",
      description: "Experienced engineering executive for critical transition periods. Led multiple organizations through rapid growth and transformation.",
      focus: ["Org Assessment", "Team Building", "Process Implementation", "Leadership Hiring"]
    }
  ];

  return (
    <div className="bg-stone-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-light text-stone-900">Advisory Services</h2>
          <p className="mt-4 text-lg text-stone-600">
            Strategic engineering counsel for investors and executives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-white hover:shadow-md transition-all group cursor-pointer">
              <h3 className="text-xl font-medium text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.focus.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-700">
                    <div className="w-1 h-1 bg-stone-400"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-stone-500 font-light">
              Executive references from venture-backed startups available upon request
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowForm(true)}
            className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 inline-flex items-center gap-2 transition-colors"
          >
            Request Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}
      </div>
    </div>
  );
};

export default AdvisoryServices; 