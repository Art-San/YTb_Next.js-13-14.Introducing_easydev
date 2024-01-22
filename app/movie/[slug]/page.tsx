export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) =>
    res.json()
  )

  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, '-')
  }))
}

const SingleMoviePage = ({ params }: any) => {
  console.log('params', params) // params {id: 23}
  return <div>PostPage-ID - {JSON.stringify(params)}-</div>
}

export default SingleMoviePage
