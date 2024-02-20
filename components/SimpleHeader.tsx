import Link from 'next/link'
import ReadingProgress from './ReadingProgress'

const SimpleHeader = () => {
  return (
    <header className=" bg-gray-900 py-4 fixed w-full top-0">
      <div className=" mx-auto px-4">
        <nav className=" flex items-center justify-between ">
          <div className="text-white text-2xl font-bold">Your logo</div>

          <ul className=" flex space-x-4">
            <Link href="/" className=" text-white hover:text-blue-500">
              Home
            </Link>

            <Link href="/quotes" className=" text-white hover:text-blue-500">
              Quotes
            </Link>
            <Link href="/movie" className=" text-white hover:text-blue-500">
              Movies
            </Link>
            <Link href="/posts" className=" text-white hover:text-blue-500">
              Posts
            </Link>

            <Link href="" className=" text-white hover:text-blue-500">
              Services
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default SimpleHeader
