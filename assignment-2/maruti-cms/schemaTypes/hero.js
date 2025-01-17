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
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkName',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
  ],
})
