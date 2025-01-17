import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'community',
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
      name: 'image1',
      type: 'image',
    }),
    defineField({
      name: 'heading1',
      type: 'string',
    }),
    defineField({
      name: 'pargraph1',
      type: 'string',
    }),
    defineField({
      name: 'image2',
      type: 'image',
    }),
    defineField({
      name: 'heading2',
      type: 'string',
    }),
    defineField({
      name: 'pargraph2',
      type: 'string',
    }),
    defineField({
      name: 'image3',
      type: 'image',
    }),
    defineField({
      name: 'heading3',
      type: 'string',
    }),
    defineField({
      name: 'pargraph3',
      type: 'string',
    }),
  ],
})
