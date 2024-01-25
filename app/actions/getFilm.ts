export async function getFilm(id: number): Promise<FilmResponse> {
  const film = await fetch(`https://swapi.tech/api/films/${id}`).then((res) =>
    res.json()
  )

  return film
}
