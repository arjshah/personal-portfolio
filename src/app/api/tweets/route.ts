import { NextResponse } from 'next/server'

export async function GET() {
  const response = await fetch('https://api.twitter.com/2/users/YOUR_USER_ID/tweets?max_results=5', {
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
    }
  })
  
  const data = await response.json()
  return NextResponse.json(data.data)
} 