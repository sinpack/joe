'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import PhotoCard from '../components/PhotoCard';
import { Article, articles, ArticlesResponse, HardCodedArticle } from './articleInterface';
import { formatDate } from '../../utils/formatDate';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
// import { fetchArticlesData } from './ArticlesData';
import LoadingComponent from '../components/LoadingComponent';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import slugify from 'slugify';
import ServerError from './ServerError';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const ArticlesList = () => {
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(3);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [allArticles, setAllArticles] = useState<HardCodedArticle[]>([]);
  const [allVisible, setAllVisible] = useState(false);
  // const queryResult: UseQueryResult<ArticlesResponse> = useQuery({
  //   queryKey: ['articles'],
  //   queryFn: () => fetchArticlesData(),
  // });

  // const { data, isLoading, isError } = queryResult;

  // useEffect(() => {
  //   if (data && data.data) {
  //     setAllArticles(data.data);
  //   }
  // }, [data]);

  const sortArticles = useCallback(
    (articles: HardCodedArticle[], order: 'asc' | 'desc') => {
      return [...articles].sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return order === 'desc' ? dateB - dateA : dateA - dateB;
      });
    },
    []
  );

  const sortedArticles = useMemo(() => {
    // if (allArticles.length === 0) {
    //   return [];
    // }

    const sorted = sortArticles(articles, sortOrder);
    return sorted.slice(0, visibleArticlesCount);
  }, [sortOrder, visibleArticlesCount, sortArticles]);

  // const mockArticles: Article[] = useMemo(() => {
  //   const mockArticleItem: Article = {
  //     id: 0,
  //     attributes: {
  //       title: 'Loading Title',
  //       description: 'Loading Description',
  //       date: '2024-07-24T15:57:08.890Z',
  //       createdAt: '2024-07-24T15:57:08.890Z',
  //       updatedAt: '2024-07-24T15:57:08.890Z',
  //       publishedAt: '2024-07-24T15:57:08.890Z',
  //       preview: 'Loading Preview',
  //       image: {
  //         data: {
  //           id: 0,
  //           attributes: {
  //             name: 'loading.jpg',
  //             alternativeText: null,
  //             caption: null,
  //             width: 500,
  //             height: 300,
  //             formats: {
  //               thumbnail: {
  //                 name: 'thumbnail_loading.jpg',
  //                 hash: 'thumbnail_loading',
  //                 ext: '.jpg',
  //                 mime: 'image/jpeg',
  //                 path: null,
  //                 width: 150,
  //                 height: 90,
  //                 size: 2.5,
  //                 sizeInBytes: 2500,
  //                 url: '/uploads/',
  //               },
  //             },
  //             hash: 'loading',
  //             ext: '.jpg',
  //             mime: 'image/jpeg',
  //             size: 5,
  //             url: '/uploads/',
  //             previewUrl: null,
  //             provider: 'local',
  //             provider_metadata: null,
  //             createdAt: '2024-07-24T15:57:08.890Z',
  //             updatedAt: '2024-07-24T15:57:08.890Z',
  //           },
  //         },
  //       },
  //     },
  //   };

  //   return new Array(3).fill(mockArticleItem).map((item, index) => ({
  //     ...item,
  //     id: index + 1,
  //     attributes: {
  //       ...item.attributes,
  //       image: {
  //         ...item.attributes.image,
  //         data: {
  //           ...item.attributes.image?.data,
  //           id: index + 1,
  //         },
  //       },
  //     },
  //   }));
  // }, []);

  // const articles = useMemo(() => {
  //   if (isLoading) {
  //     return mockArticles;
  //   }

  //   return sortedArticles.length > 0 ? sortedArticles : mockArticles;
  // }, [isLoading, sortedArticles, mockArticles]);

  const handleViewAll = () => {
    setVisibleArticlesCount(articles.length);
    setAllVisible(true);
  };

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const shouldShowViewAll =
    articles.length > visibleArticlesCount && !allVisible;

  // if (isError) {
  //   return <ServerError />;
  // }



  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-8">
      {allVisible && (
        <div className="text-center mb-10 flex flex-col items-end space-y-2.5">
          <span className="text-md font-semibold text-gray-600">
            ΤΑΞΙΝΟΜΗΣΗ
          </span>
          <button
            onClick={handleSortToggle}
            className="flex w-[200px] py-2.5 cursor-pointer border border-gray-300 shadow-sm rounded-2xl text-sm text-gray-500 font-semibold transition-all duration-300 hover:bg-gray-100 items-center justify-center gap-2"
          >
            {sortOrder === 'desc' ? (
              <>
                Πιο πρόσφατα πρώτα
                <FaArrowDown className="flex" />
              </>
            ) : (
              <>
                Πιο παλιά πρώτα
                <FaArrowUp className="flex" />
              </>
            )}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
        {sortedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${encodeURIComponent(
              slugify(article.title, {
                lower: true,
              })
            )}/${encodeURIComponent(article?.id.toString())}`}
            className="flex flex-col border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-gray-500 cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <div className="flex flex-col w-full h-full items-center justify-center">
              <LoadingComponent
                isLoading={false}
                height={200}
                width={200}
                isCentered
              >
                <PhotoCard
                  title={article.title}
                  imageUrl={article.imageUrl}
                  roundClassName="rounded-lg"
                  cursor="cursor-pointer"
                  isTransformed={false}
                />
              </LoadingComponent>
              <div className="flex flex-col mt-4 w-full justify-between flex-grow">
                <p
                  className="text-gray-700 mb-4 break-words first-letter:text-7xl first-letter:font-bold first-letter:uppercase"
                >
                  {article.preview}
                </p>
                <div className="flex items-center justify-end text-sm text-gray-500">
                  <LoadingComponent
                    isLoading={false}
                    height={20}
                    isCentered
                    width={100}
                  >
                    <span>{formatDate(article.publishedAt)}</span>
                  </LoadingComponent>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {shouldShowViewAll && (
        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-[300px] mx-auto text-gray-500 font-semibold transition-all duration-300 hover:bg-gray-100"
          >
            ΟΛΑ ΤΑ ΑΡΘΡΑ{' '}
          </button>
        </div>
      )}
    </section>
  );
};

export default ArticlesList;
