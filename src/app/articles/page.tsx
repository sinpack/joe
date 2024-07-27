// src/app/article/page.tsx

import { fetchArticlesData } from './ArticlesData';
import ArticlesList from './ArticlesList';

const ArticlesPage = async () => {
  const data = await fetchArticlesData();
  const articles = data.data;

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold text-center mb-14 mx-auto container px-4 sm:px-6 lg:px-8">
        ΑΡΘΡΑ
      </h2>
      <ArticlesList />
    </section>
  );
};

export default ArticlesPage;
