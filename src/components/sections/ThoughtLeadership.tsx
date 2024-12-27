'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

const ThoughtLeadership = () => {
  const content = [
    {
      type: 'Article',
      title: 'How PushPress Integrates AI into Software Development',
      venue: 'Medium',
      description: 'Deep dive into how AI integration made our 26-person engineering team 40% more productive with faster reviews, more PRs, and quicker deployments.',
      link: 'https://medium.com/@arjun_shah/how-pushpress-integrates-ai-into-software-development-51ada589c440',
      date: '2024'
    },
    {
      type: 'Article',
      title: 'Four Lessons from a First-time Founder',
      venue: 'Medium',
      description: 'Insights and learnings from the journey of building and exiting a startup.',
      link: 'https://medium.com/@arjun_shah/four-lessons-from-a-first-time-founder-2b98ce37e812',
      date: '2023'
    },
    {
      type: 'Article',
      title: 'Power of Youth Sports Could Help Save the World',
      venue: 'Marin Independent Journal',
      description: 'How youth sports and technology can rebuild communities and transform experiences.',
      link: 'https://www.marinij.com/2021/07/22/marin-voice-power-of-youth-sports-could-help-save-the-world/',
      date: '2021'
    },
    {
      type: 'Article',
      title: 'So, You Want to Be a "Silicon Valley-like" Tech Leader?',
      venue: 'Revised Perspective',
      description: 'Inspiring teams in one of the most intellectually demanding vocations.',
      link: 'https://medium.com/men-in-healing/so-you-want-to-be-a-silicon-valley-like-tech-leader-edcaf153b4db',
      date: '2019'
    },
    {
      type: 'Article',
      title: 'Building a Silicon Valley-like Software Developer Culture',
      venue: 'Built to Adapt',
      description: 'How to focus on people while reinventing enterprise IT\'s identity as a modern software development shop.',
      link: 'https://medium.com/built-to-adapt/so-you-want-to-build-a-silicon-valley-like-software-developer-culture-focus-on-the-people-809ddf4c426a',
      date: '2018'
    },
    {
      type: 'Talk',
      title: 'Building Enterprise Cloud Operations As a Service',
      venue: 'AWS re:Invent',
      description: 'How T-Mobile built and scaled cloud operations using AWS service catalogs.',
      link: 'https://www.youtube.com/watch?v=lsai0PFWvMQ',
      date: '2016'
    }
  ];

  return (
    <div className="bg-stone-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-stone-900">Thought Leadership</h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Speaking and writing about technology and engineering leadership
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {content.map((item, index) => (
            <div key={index}>
              <div 
                className="py-6 sm:py-8 group cursor-pointer hover:bg-stone-100 transition-colors"
                onClick={() => window.open(item.link, '_blank')}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm text-stone-500">{item.type}</span>
                      <span className="text-sm text-stone-400">•</span>
                      <span className="text-sm text-stone-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-stone-900 pr-8 sm:pr-0">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm">{item.venue}</p>
                    <p className="text-stone-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                  <ArrowUpRight className="hidden sm:block w-5 h-5 text-stone-400 group-hover:text-stone-600 transition-colors flex-shrink-0" />
                </div>
              </div>
              {index < content.length - 1 && <Separator className="sm:my-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThoughtLeadership 