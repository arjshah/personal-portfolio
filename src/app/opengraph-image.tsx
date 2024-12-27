import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Arjun Shah - Engineering Executive'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 48,
          }}
        >
          {/* Profile Image */}
          <img
            src={`https://www.arjunshah.co/profile.png`}
            alt="Arjun Shah"
            style={{
              width: 256,
              height: 256,
              borderRadius: 128,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 300,
                color: '#1c1917',
                margin: 0,
              }}
            >
              Arjun Shah
            </h1>
            <p
              style={{
                fontSize: 32,
                fontWeight: 300,
                color: '#57534e',
                margin: 0,
                maxWidth: 600,
              }}
            >
              Engineering executive specialized in scaling teams, AI integration, and rapid product development.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 