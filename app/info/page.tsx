// @ ---- Параллельный роут
import Link from 'next/link'
import { FC } from 'react'

const InfoPage: FC = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" max-w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className=" text-2xl font-bold mb-4">Welcome to the info page</h1>
        <p className=" text-gray-700 mb-6">Перехватывающие маршруты </p>
        <Link href={'/login'}>
          <button className=" bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default InfoPage
