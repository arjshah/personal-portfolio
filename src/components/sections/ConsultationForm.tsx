'use client'

import React, { useState } from 'react'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

interface ConsultationFormProps {
  onClose: () => void;
}

type ConsultationType = 
  | 'Technical Due Diligence'
  | 'Portfolio Company Advisory'
  | 'Executive Advisory'
  | 'Interim Leadership'
  | 'Other';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ConsultationForm = ({ onClose }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '' as ConsultationType,
    message: '',
    timeline: ''
  })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const consultationTypes: ConsultationType[] = [
    'Technical Due Diligence',
    'Portfolio Company Advisory',
    'Executive Advisory',
    'Interim Leadership',
    'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          type: '' as ConsultationType,
          message: '',
          timeline: ''
        })
        // Auto close after 2 seconds on success
        setTimeout(() => {
          onClose()
        }, 2000)
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      setFormStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  const StatusMessage = () => {
    switch (formStatus) {
      case 'success':
        return (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
              <p className="text-xl font-light text-stone-900">Message sent successfully</p>
              <p className="text-sm text-stone-600">
                Thank you for your interest. I&apos;ll be in touch soon.
              </p>
            </div>
          </div>
        )
      case 'error':
        return (
          <div className="absolute top-0 left-0 right-0 p-4 bg-red-50 border-b border-red-100">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]">
      <div className="bg-white p-8 max-w-xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-light text-stone-900 mb-8">Request Consultation</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          <StatusMessage />
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-stone-600 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light text-stone-600 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-light text-stone-600 mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-light text-stone-600 mb-2">
                Type of Consultation <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as ConsultationType })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors"
              >
                <option value="">Select a type</option>
                {consultationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-light text-stone-600 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors"
              >
                <option value="">Select a timeline</option>
                <option value="Immediate">Immediate</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-stone-600 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-stone-200 focus:border-stone-900 outline-none transition-colors resize-none"
                placeholder="Please describe your needs and objectives"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 border border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-3 flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              {formStatus === 'submitting' ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsultationForm 