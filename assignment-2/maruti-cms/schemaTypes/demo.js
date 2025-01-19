import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'demo',
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
      name: 'tagline',
      type: 'string',
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
