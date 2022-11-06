import dayjs from 'dayjs'
import Link from 'next/link'
import { getArticles } from '../utils'

export default async function Articles() {
  const articles = await getArticles()

  return (
    <section className="container">
      <h2>Latest Articles</h2>
      {articles.map((a) => (
        <Link className="article" key={a._id} href={`/blog/${a.slug}`}>
          <h3>{a.title}</h3>
          <span>Published on {dayjs(a._createdAt).format('DD.MM.YYYY')}</span>
          <p>{a.description}</p>
        </Link>
      ))}

      <Link href="/blog">
        <button>Blog</button>
      </Link>
    </section>
  )
}
