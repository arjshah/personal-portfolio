import Navigation from '@/components/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import ThoughtLeadership from '@/components/sections/ThoughtLeadership'
import TwitterFeed from '@/components/sections/TwitterFeed'
import AdvisoryServices from '@/components/sections/AdvisoryServices'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="experience">
          <ExperienceTimeline />
        </div>
        <div id="thought-leadership">
          <ThoughtLeadership />
        </div>
        <div id="twitter">
          <TwitterFeed />
        </div>
        <div id="advisory">
          <AdvisoryServices />
        </div>
      </main>
    </>
  )
}
