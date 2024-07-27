// src/app/articles/ArticlesData.tsx (Server Component)

import { ArticlesResponse } from './articleInterface';

export async function fetchArticlesData(): Promise<ArticlesResponse> {
  const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const production_URL = 'https://joe-backend-production.up.railway.app';

  const res = await fetch(
    `${production_URL}/api/articles/?populate=*&sort=publishedAt:desc`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = res.json();
  return data;
}
