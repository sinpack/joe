import { Article } from '../articleInterface';
import ArticleClientComponent from './ArticleClientComponent';
import slugify from 'slugify';

// Extract both id and slug from URL
export default function ArticlePage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [id, ...titleParts] = params.slug;
  const title = titleParts.join(' ');

  return (
    <section>
      <ArticleClientComponent articleId={id} />
    </section>
  );
}

// Generate static params with both ID and slug
export async function generateStaticParams(): Promise<
  { params: { slug: string[] } }[]
> {
  const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const res = await fetch(`${STRAPI_API_URL}/api/articles/?populate=*`, {
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

  return articles.map((article) => {
    const slug = [
      article.id.toString(),
      slugify(article.attributes.title, { lower: true }),
    ];
    return { params: { slug } };
  });
}
