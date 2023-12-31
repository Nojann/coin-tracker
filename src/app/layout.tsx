import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NavBar from './NavBar'
import Search from './search/Search'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coin tracker',
  description: 'A simple coin tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar></NavBar>
        <Search></Search>
        {children}
      </body>
    </html>
  )
}
