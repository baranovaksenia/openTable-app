import { Outfit } from 'next/font/google';

import './globals.css'
import Navbar from './components/Navbar';

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
      <body className={font.className}>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <main className='max-w-screen-2xl m-auto bg-white'>
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
