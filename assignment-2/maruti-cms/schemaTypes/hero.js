import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cta',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
