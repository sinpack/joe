// src/services/strapi.ts

import { ArticlesResponse } from '../app/article/articleInterface';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export const fetchArticlesFromStrapi = async (): Promise<ArticlesResponse> => {
  const res = await fetch(`${STRAPI_API_URL}/articles?populate=*`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  return res.json();
};
