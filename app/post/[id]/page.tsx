// interface IProps {
//   params: {
//     id: string
//   }
// }

// const PostPage = ({ params }: IProps) => {
//   const { id } = params
//   console.log('params', params) // params {id: 23}
//   return <div>PostPage-ID - {id}-</div>
// }

// export default PostPage

import { getFilm } from '@/app/actions/getAllFilms'

interface IProps {
  params: {
    id: string
  }
}

const FilmPage = async ({ params }: IProps) => {
  const { id } = params
  // console.log('params', params) // params {id: 23}
  const film = await getFilm(+id)
  // console.log('film ', film)
  return (
    <div>
      <h1>{film.result.properties.title}</h1>
    </div>
  )
}

export default FilmPage
