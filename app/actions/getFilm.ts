export async function getFilm(id: number): Promise<FilmResponse> {
  const film = await fetch(`https://swapi.tech/api/films/${id}`).then((res) =>
    res.json()
  )

  return film
}

// в Next.js-14 было так
// export async function getFilm(id: number): Promise<FilmResponse> {
//   const film = await fetch(`https://swapi.tech/api/films/${id}`, {
//     // cache: 'force-cache' //_____14_// λ  (Dynamic)  server-rendered on demand using Node.js --- λ (динамический) отображается на сервере по требованию с использованием Node.js
//     // cache: 'no-store' //________14_// λ  (Dynamic)  server-rendered on demand using Node.js --- λ (динамический) отображается на сервере по требованию с использованием Node.js
//     // next: { revalidate: 60 } //_14_// λ  (Dynamic)  server-rendered on demand using Node.js --- λ (динамический) отображается на сервере по требованию с использованием Node.js
//   }).then((res) => res.json())

//   return film
// }
