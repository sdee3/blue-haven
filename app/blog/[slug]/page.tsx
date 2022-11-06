import showdown from 'showdown'
import { getArticle } from '../../../utils'

export default async function BlogArticle(query: any) {
  const converter = new showdown.Converter()
  const article = await getArticle(query.params.slug)

  const html = converter.makeHtml(article.content)

  return (
    <main>
      <div className="container">
        <h1>{article.title}</h1>
        <h2>{article.description}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
