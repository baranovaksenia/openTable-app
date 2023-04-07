import { Outfit } from 'next/font/google';

import './globals.css'

export const metadata = {
  title: 'OpenTable',
  description: 'OpenTable App',
}

const font = Outfit({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
