import Link from 'next/link'

export default function History() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <h2>History Page</h2>
      <Link href={'/'}>Home Page</Link>
    </main>
  )
}
