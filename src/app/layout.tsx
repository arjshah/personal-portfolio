import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Shah | Engineering Executive & AI Consultant",
  description: "Engineering executive specialized in scaling teams, AI integration, and rapid product development. Former engineering leader at Carta and Amazon.",
  metadataBase: new URL('https://www.arjunshah.co'),
  keywords: [
    'Engineering Executive',
    'AI Integration',
    'Technical Leadership',
    'Engineering Management',
    'Team Scaling',
    'Technical Due Diligence',
    'AI Consulting',
    'Silicon Valley Executive',
    'Engineering Strategy',
    'Product Development'
  ],
  authors: [{ name: 'Arjun Shah' }],
  creator: 'Arjun Shah',
  publisher: 'Arjun Shah',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.arjunshah.co',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.arjunshah.co',
    title: 'Arjun Shah | Engineering Executive',
    description: 'Engineering executive specialized in scaling teams, AI integration, and rapid product development.',
    siteName: 'Arjun Shah',
    images: [
      {
        url: '/og-image.png',  // We'll create this
        width: 1200,
        height: 630,
        alt: 'Arjun Shah - Engineering Executive'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arjun Shah | Engineering Executive',
    description: 'Engineering executive specialized in scaling teams, AI integration, and rapid product development.',
    images: ['/og-image.png'],
    creator: '@AShah460'
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#1C1917'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
