import { Article, articles, HardCodedArticle } from '../../articleInterface';
import ArticleClientComponent from './ArticleClientComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Άρθρα Γιώργου Αντωνόπουλου',
};

// export const dynamic = 'force-static';

// Component for rendering articles
export default function ArticlePage({
  params,
}: {
  params: { title: string, id: string };
}) {

  const articleData = articles.find(article => article.id.toString() === params.id)
  return (
    <section>
      <ArticleClientComponent articleData={articleData} />
    </section>
  );
}

// Generate static params for both title and id
export async function generateStaticParams() {
  // const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  // const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  // const res = await fetch(
  //   `${STRAPI_API_URL}/api/articles/?populate=*&sort=publishedAt:desc`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );

  // if (!res.ok) {
  //   throw new Error('Failed to fetch articles');
  // }

  // const data = await res.json();
  // const articles: Article[] = data.data;

  // Generate paths from article titles and IDs
  return articles.map((article: HardCodedArticle) => {
    const { title, id } = article;
    return { title: title, id: id.toString() };
  });
}
