import ReadingProgress from '@/components/ReadingProgress'

interface IPost {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}
interface IPosts {
  posts: IPost[]
  total: number
  skip: number
  limit: number
}

const PostPage = async () => {
  const data = await getAllPosts()
  // console.log('posts', data)
  return (
    <main className=" mt-12">
      <ReadingProgress />
      <section className=" grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3 ">
        {data.posts.map((post) => (
          <article
            key={post.id}
            className=" flex flex-col items-center justify-center "
          >
            <h2 className="my-4 text-2xl">{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default PostPage

export async function getAllPosts(): Promise<IPosts> {
  const res = await fetch('https://dummyjson.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
  // const films = await fetch('https://dummyjson.com/posts').then((res) =>
  //   res.json()
  // )

  // return films
}
