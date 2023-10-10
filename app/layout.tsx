import './globals.css'

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
    <html className={inter.className} lang="en">
      <body
        className="h-full w-full overflow-x-hidden overflow-y-auto bg-stone-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]">{children}</body>
    </html>
  )
}
