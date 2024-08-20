'use client';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import Image from 'next/image';
import clsx from 'clsx';
import { useMemo } from 'react';
import React from 'react';
import NavigationButton from '../../../../app/components/Buttons/NavigationButton';
import LoadingComponent from '../../../../app/components/LoadingComponent';
import { Article } from '../../articleInterface';
import { formatDate } from '../../../../utils/formatDate';
import NotArticleFound from './NotArticleFound';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const production_URL = 'https://joe-backend-production.up.railway.app';
const fetchArticleById = async (id: string): Promise<Article | null> => {
  try {
    const res = await fetch(`${production_URL}/api/articles/${id}?populate=*`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch article');
    }
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error; // Re-throw the error to be handled by react-query
  }
};

export default function ArticleClientComponent({
  articleId,
}: {
  articleId: string;
}) {
  const queryResult: UseQueryResult<Article | null> = useQuery({
    queryKey: ['article', articleId],
    queryFn: () => fetchArticleById(articleId),
  });

  const { data, isLoading, isError } = queryResult;

  const articleData = useMemo(() => {
    const articleMockData = {
      id: 0,
      attributes: {
        title: 'Loading Title...',
        description: 'Loading Description...',
        publishedAt: '2024-07-24T15:57:08.890Z',
        date: '2024-07-24T15:57:08.890Z',
        image: {
          data: {
            attributes: {
              url: '/uploads/',
            },
          },
        },
      },
    };

    if (data) {
      return {
        id: data.id,
        attributes: {
          title: data.attributes.title,
          description: data.attributes.description,
          publishedAt: data.attributes.publishedAt,
          date: data.attributes.date,
          image: {
            data: {
              attributes: {
                url: data.attributes.image?.data?.attributes?.url,
              },
            },
          },
        },
      };
    }
    return articleMockData;
  }, [data]);

  if (isError) {
    return <NotArticleFound />;
  }

  if (!articleData || !articleData?.attributes?.title) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold text-gray-600">
          Δεν βρέθηκε το άρθρο
        </h2>
        <p className="text-gray-500">
          Ζητάμε συγνώμη, αλλά το άρθρο που ζητήσατε δεν υπάρχει{' '}
        </p>
        <NavigationButton
          text="Back to Articles"
          link="/articles"
          width={300}
        />
      </div>
    );
  }

  return (
    <section className="flex flex-col container mx-auto px-5 sm:px-28 lg:px-60 py-10 bg-sky-50">
      <div className="flex flex-col justify-center items-center mb-10 space-y-5">
        <h1 className="text-2xl font-bold py-10" suppressHydrationWarning>
          <LoadingComponent
            isLoading={isLoading}
            height={50}
            isCentered
            fullWidth
            width={200}
          >
            {articleData?.attributes?.title}
          </LoadingComponent>
        </h1>

        <div
          className="w-full max-w-3xl relative flex items-center justify-center mb-10"
          suppressHydrationWarning
        >
          <LoadingComponent
            isLoading={isLoading}
            height={200}
            isCentered
            width={200}
          >
            <div className="flex w-64 h-64 relative">
              <Image
                src={`${production_URL}${articleData?.attributes?.image?.data?.attributes?.url}`}
                alt={articleData?.attributes.title}
                className={clsx('object-cover shadow-xl rounded-xl')}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={100}
              />
            </div>
          </LoadingComponent>
        </div>

        <p className="text-gray-700 mb-4" suppressHydrationWarning>
          <LoadingComponent
            isLoading={isLoading}
            isCentered
            fullWidth
            width={500}
            height={500}
          >
            {articleData?.attributes?.description}
          </LoadingComponent>
        </p>
        <div className="flex flex-row w-full items-center justify-end space-x-2.5">
          <p className="tracking-tight"> Δημοσιεύτηκε στις </p>
          <p
            className=" text-sm text-gray-500 font-bold tracking-tight underline"
            suppressHydrationWarning
          >
            <LoadingComponent
              isLoading={isLoading}
              height={50}
              isCentered
              width={200}
            >
              {formatDate(articleData?.attributes?.date)}
            </LoadingComponent>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-20">
        <NavigationButton
          text="ΠΙΣΩ ΣΕ ΟΛΑ ΤΑ ΑΡΘΡΑ"
          link="/articles"
          width={300}
        />
      </div>
    </section>
  );
}
