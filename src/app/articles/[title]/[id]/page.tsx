import { Article } from '../../articleInterface';
import ArticleClientComponent from './ArticleClientComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Άρθρα Γιώργου Αντωνόπουλου',
};

// Component for rendering articles
export default function ArticlePage({
  params,
}: {
  params: { title: string; id: string };
}) {
  const { title, id } = params;

  return (
    <section>
      <ArticleClientComponent articleId={id} />
    </section>
  );
}

// Generate static params for both title and id
export async function generateStaticParams() {
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
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await res.json();
  const articles: Article[] = data.data;

  // Generate paths from article titles and IDs
  return articles.map((article) => {
    const title = article.attributes.title;
    const id = article.id.toString();
    return { params: { title, id } };
  });
}
