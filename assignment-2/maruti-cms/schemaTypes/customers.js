import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customers',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'review',
      type: 'string',
    }),
    defineField({
      name: 'reviewer',
      type: 'string',
    }),
    defineField({
      name: 'customerName',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        defineField({name: 'text', type: 'string'}),
        defineField({name: 'link', type: 'string'}),
      ],
    }),
  ],
})
