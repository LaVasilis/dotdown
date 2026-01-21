import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'Title (English)',
          type: 'string',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'el',
          title: 'Title (Greek)',
          type: 'string',
          validation: (r) => r.required(),
        }),
      ],
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming Lives', value: 'upcoming'},
          {title: 'Artist Releases', value: 'releases'},
          {title: 'General News', value: 'general'},
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'Excerpt (English)',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'el',
          title: 'Excerpt (Greek)',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {hotspot: true},
    }),

        defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'Body (English)',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'el',
          title: 'Body (Greek)',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
  ],
})
