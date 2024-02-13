export interface IPost {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}
export interface IPosts {
  posts: IPost[]
  total: number
  skip: number
  limit: number
}

export async function getAllPosts(): Promise<IPosts> {
  const res = await fetch('https://dummyjson.com/posts?skip=0&limit=10')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
  // const films = await fetch('https://dummyjson.com/posts').then((res) =>
  //   res.json()
  // )

  // return films
}
