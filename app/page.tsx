import Link from 'next/link'
import { promises as fs } from 'fs'

export const dynamic = 'force-dynamic' // отключает кеш

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data.txt', 'utf-8')
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <h2>Main Page</h2>
      <div className="">{file}</div>
      <Link href={'/history'}>Жмык</Link>
    </main>
  )
}
