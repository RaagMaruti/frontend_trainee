import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clients',
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
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
