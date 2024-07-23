// payload.config.ts
const config = {
  collections: [
    {
      slug: 'posts',
      labels: {
        singular: 'Post',
        plural: 'Posts',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          unique: true,
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'published_at',
          type: 'date',
        },
      ],
    },
  ],
  globals: [],
  admin: {
    user: 'users',
  },
};

export default config;
