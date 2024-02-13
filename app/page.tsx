import Link from 'next/link'

// ○  (Static)  automatically rendered as static HTML (uses no initial props)
export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed mt-12 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Info Page&nbsp;
        <Link href={'/login'}>
          <button className=" bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </main>
  )
}
