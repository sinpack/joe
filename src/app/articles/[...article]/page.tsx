// pages/article/[...article]/page.tsx

import { Article } from '../articleInterface';
import ArticleClientComponent from './ArticleClientComponent';
import slugify from 'slugify';
import React from 'react';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const production_URL = 'https://joe-backend-production.up.railway.app';

// Correct format for catch-all dynamic route
export async function generateStaticParams(): Promise<
  { params: { slug: string[] } }[]
> {
  // Fetch data
  const res = await fetch(`${production_URL}/api/articles/?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await res.json();
  const articles: Article[] = data.data;

  // Generate static paths
  const paths = articles.map((article) => {
    const slug = [
      article.id.toString(),
      slugify(article.attributes.title, { lower: true }),
    ];
    return { params: { slug } };
  });

  return paths;
}

// Component for rendering articles
export default function Page({ params }: { params: { article: string[] } }) {
  const [id, ...titleParts] = params.article;
  const title = titleParts.join(' ');

  return (
    <section>
      <ArticleClientComponent articleId={id} />
    </section>
  );
}
