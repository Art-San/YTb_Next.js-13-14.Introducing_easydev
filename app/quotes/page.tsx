export interface IQuote {
  id: number
  quote: string
  author: string
}
export interface IQuotes {
  quotes: IQuote[]
  total: number
  skip: number
  limit: number
}

export async function getAllQuotes(): Promise<IQuotes> {
  const res = await fetch('https://dummyjson.com/quotes')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Quotes() {
  const data = await getAllQuotes()
  return (
    <section className=" grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-3 my-[70px]">
      {data.quotes.map((quote) => (
        <article
          key={quote.id}
          className=" flex flex-col items-center justify-center "
        >
          <h2 className="my-4 text-2xl">{quote.quote}</h2>
          <p>{quote.author}</p>
        </article>
      ))}
    </section>
  )
}
