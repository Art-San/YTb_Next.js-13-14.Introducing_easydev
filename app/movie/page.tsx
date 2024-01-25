import Link from 'next/link'
import { getAllFilms } from '../actions/getAllFilms'

const MoviePage = async () => {
  const allFilms = await getAllFilms()

  // console.log('films', allFilms)
  return (
    <div className=" container mx-auto mt-4 ml-6">
      <h2 className=" mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Films list
      </h2>
      <ul className=" max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {allFilms.result.map((film) => (
          <li key={film.uid}>
            <Link href={`/movie/${film.uid}`}>{film.properties.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MoviePage

//--------- первый вариант
// import { getAllFilms } from '../actions/getAllFilms'

// export const dynamic = 'force-dynamic' // SSR

// const MoviePage = async () => {
//   const allFilms = await getAllFilms()

//   // console.log('films', allFilms)
//   return (
//     <div className="">
//       {allFilms.results.map((film) => (
//         <div key={film.title}>{film.title}</div>
//       ))}
//     </div>
//   )
// }

// export default MoviePage
