interface IProps {
  params: {
    id: string
  }
}

const PostPage = ({ params }: IProps) => {
  const { id } = params
  console.log('params', params) // params {id: 23}
  return <div>PostPage-ID - {id}-</div>
}

export default PostPage
