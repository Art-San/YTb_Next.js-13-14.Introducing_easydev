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

// в Next.js-14 было так
// export async function getAllFilms(): Promise<FilmsResponse> {
//   const films = await fetch('https://swapi.tech/api/films', {
//     // next: { revalidate: 60 } //_14_// ○  (Static)   prerendered as static content  --- предварительно визуализированный как статический контент
//     // cache: 'no-store' //____14_// λ  (Dynamic)  server-rendered on demand using Node.js --- λ (динамический) отображается на сервере по требованию с использованием Node.js
//     // cache: 'force-cache' //_14_// ○  (Static)   prerendered as static content  --- предварительно визуализированный как статический контент
//   }).then((res) => res.json())

//   return films
// }
