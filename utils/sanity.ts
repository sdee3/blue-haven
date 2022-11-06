import { createClient } from 'next-sanity'
import { Article } from '../types'

export const client = createClient({
  projectId: 'qung8owu',
  dataset: 'production',
  apiVersion: '2022-11-02',
  useCdn: false
})

export const getArticles = async (): Promise<Article[]> => {
  const result = await client.fetch('*[_type=="article"]')

  return result
}

export const getArticle = async (slug: string): Promise<Article> => {
  const result = await client.fetch(`*[_type=="article" && slug=="${slug}"]`)

  return result[0]
}
