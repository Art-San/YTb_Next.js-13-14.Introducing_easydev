import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
  map,
  rules
}: {
  children: React.ReactNode
  map: React.ReactNode // @ ---- Параллельный роут
  rules: React.ReactNode // @ ---- Параллельный роут
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>главный Layout</header> */}
        {/* {map} */}
        {/* {rules} */}
        {children}
        {/* <footer>Footer</footer> */}
      </body>
    </html>
  )
}
