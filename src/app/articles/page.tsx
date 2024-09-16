// src/app/article/page.tsx

import { fetchArticlesData } from './ArticlesData';
import ArticlesList from './ArticlesList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Άρθρα Γιώργου Αντωνόπουλου',
};

const ArticlesPage = async () => {
  const data = await fetchArticlesData();
  const articles = data.data;

  return (
    <section className="py-24">
      <h1 className="text-center mb-14 mx-auto container px-4 sm:px-6 lg:px-8 tracking-wider">
        ΑΡΘΡΑ
      </h1>
      <ArticlesList />
    </section>
  );
};

export default ArticlesPage;
