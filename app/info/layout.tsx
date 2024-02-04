import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Info page',
  description: 'Info pag description'
}

export default function InfoLayout({
  children,
  team,
  contacts
}: {
  children: React.ReactNode
  team: React.ReactNode // @ ---- Параллельный роут
  contacts: React.ReactNode // @ ---- Параллельный роут
}) {
  return (
    <div className=" container max-w-7xl mx-auto px-6 mb:px-12 xl:px-6">
      {children}
      <div className=" grid grid-cols-2">
        {team}
        {contacts}
      </div>
    </div>
  )
}
