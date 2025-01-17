import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
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
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
