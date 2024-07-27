// src/app/article/articleInterface.ts

export interface ArticlesResponse {
  data: Article[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    preview: string;
    image?: {
      data?: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats?: {
            thumbnail?: ImageFormat;
            small?: ImageFormat;
            medium?: ImageFormat;
            large?: ImageFormat;
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string; // URL for the original image
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string; // URL for the specific format
}
