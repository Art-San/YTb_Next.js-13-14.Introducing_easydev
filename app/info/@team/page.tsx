// @ ---- Параллельный роут
import { getAllFilms } from '@/app/actions/getAllFilms'
import { FC } from 'react'

const TeamPage: FC = async () => {
  const films = await getAllFilms()
  return (
    <div className="">
      <h2 className=" text-blue-800 text-4xl">Team</h2>
    </div>
  )
}

export default TeamPage
