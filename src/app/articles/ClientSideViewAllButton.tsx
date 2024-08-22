'use client';

import Link from 'next/link';
import { useState } from 'react';
import slugify from 'slugify';
import PhotoCard from '../components/PhotoCard';
import { Article } from './articleInterface';

const ClientSideViewAllButton = ({ articles }: { articles: Article[] }) => {
  const [visibleArticles, setVisibleArticles] = useState(articles.length);

  const handleViewAll = () => {
    setVisibleArticles(articles.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto container px-4 sm:px-6 lg:px-8">
        {articles.slice(0, visibleArticles).map((article, index) => {
          const id = slugify(article.attributes.title);
          return (
            <Link
              key={article.id}
              href={`/articles/${id}`}
              className={`flex flex-col border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-gray-400 cursor-pointer ${
                visibleArticles > 3 && index >= 3 ? 'fade-in' : ''
              }`}
            >
              <div className="flex flex-col w-full h-full">
                <PhotoCard
                  title={article.attributes.title}
                  imageUrl={
                    article.attributes.image?.data?.attributes?.url ||
                    'https://via.placeholder.com/500'
                  }
                  roundClassName="rounded-lg"
                  cursor="cursor-pointer"
                />
                <div className="flex flex-col mt-4 w-full justify-between flex-grow">
                  <p className="text-gray-700 mb-4 break-words first-letter:text-7xl first-letter:font-bold first-letter:uppercase">
                    {article.attributes.preview}
                  </p>
                  <div className="flex items-center justify-end text-sm text-gray-500">
                    <span>
                      {new Date(article.attributes.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {articles.length > 3 && (
        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 mx-auto text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
          >
            View All
          </button>
        </div>
      )}
    </>
  );
};

export default ClientSideViewAllButton;
