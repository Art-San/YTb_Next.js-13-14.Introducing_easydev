export async function getAllFilms(): Promise<FilmsResponse> {
  const films = await fetch('https://swapi.tech/api/films').then((res) =>
    res.json()
  )

  return films
}
// export async function getAllFilms(): Promise<FilmsResponse> {
//   const films = await fetch('https://swapi.dev/api/films', {
//     // cache: 'no-store' // эквивалент SSR -- getServerSideProps - getStaticProps(Лучше это использовать)
//     // cache: 'force-cache' // Так по умолчанию -- SSG - getStaticProps
//     next: { revalidate: 60 } // ISR -- getStaticProps and revalidate
//   }).then((res) => res.json())

//   return films
// }
