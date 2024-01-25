interface IProps {
  params: {
    id: number
  }
}

const FilmPage = async ({ params: { id } }: IProps) => {
  // const film = await getFilm(id)

  return (
    <div>
      <h1>{'ffff'}</h1>
      {/* <h1>{film.result.properties.title}</h1> */}
    </div>
  )
}

export default FilmPage

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
