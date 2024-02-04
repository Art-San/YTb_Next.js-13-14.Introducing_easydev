// @ ---- Параллельный роут
import Link from 'next/link'
import { FC } from 'react'

const InfoPage: FC = () => {
  return (
    <>
      <h2 className=" text-3xl font-bold tracking-tight text-gray-900 text-center mt-4 mb-5">
        info Page
      </h2>
      <Link href={'/info/map'}>Map</Link>
    </>
  )
}

export default InfoPage
