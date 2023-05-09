import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar'
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Malvin Juanda',
    template: '%s | MJ',
  },
  description: 'Fullstack Software engineer and photographer.',
  openGraph: {
    title: 'Malvin Juanda',
    description: 'Fullstack Software engineer and photographer.',
    siteName: 'Malvin Juanda',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased dark:bg-[#0d0c0c] max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-32 md:mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
        <NavBar />
        <div className="text-[25vmin] bold font-serif font-black fixed bottom-10 -left-10 text-neutral-100 dark:text-neutral-950 z-[-1]">
          It's a great day
        </div>
        <Analytics />
      </body>
    </html>
  )
}
