import { getAllFilms } from '@/app/actions/getAllFilms'
import { getFilm } from '@/app/actions/getFilm'

interface IProps {
  params: {
    slug: number
  }
}

export default async function Film({ params: { slug } }: IProps) {
  const film = await getFilm(slug)

  return (
    <div className="container mx-auto mt-20 ml-6">
      <h1>{film.result.properties.title}</h1>
      <p>{film.result.description}</p>
    </div>
  )
}
// λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
// -------------------------------------------------------
// благодаря этой функции после билда получили такой компонент
// ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
// ●  (SSG)  14-js   prerendered as static HTML (uses getStaticProps)

export async function generateStaticParams() {
  const films = await getAllFilms()

  return films.result.map((film) => ({
    slug: film.uid
  }))
}

//---------------------------------------------------------
// export async function generateStaticParams() {
//   const films = await fetch('https://swapi.dev/api/films').then((res) =>
//     res.json()
//   )

//   return films.results.map((film: any) => ({
//     slug: film.title.replace(/\s+/g, '-')
//   }))
// }

// const SingleMoviePage = ({ params }: any) => {
//   console.log('SingleMoviePage params', params) // params {id: 23}
//   return <div>PostPage-ID - {JSON.stringify(params)}-</div>
// }

// export default SingleMoviePage
