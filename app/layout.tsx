import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { Merriweather } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['cyrillic']
})

export const metadata: Metadata = {
  title: 'Hapzy, Inc.',
  description: 'Hapzy, Inc. is the new Etsy marketplace for moment creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      layout: {
        termsPageUrl: 'https://hapzy.co/terms',
        privacyPageUrl: 'https://hapzy.co/privacy',
        helpPageUrl: 'https://hapzy.co/help',
      }
    }}>
      <html className={inter.className} lang="en">
        {/* className="h-full w-full overflow-x-hidden overflow-y-auto bg-stone-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]" */}
        <body
          className="h-full w-full">{children}</body>
      </html>
    </ClerkProvider>
  )
}
