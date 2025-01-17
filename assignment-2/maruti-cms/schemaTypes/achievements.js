import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'achievements',
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
      name: 'numbers1',
      type: 'string',
    }),
    defineField({
      name: 'description1',
      type: 'string',
    }),
    defineField({
      name: 'image2',
      type: 'image',
    }),
    defineField({
      name: 'numbers2',
      type: 'string',
    }),
    defineField({
      name: 'description2',
      type: 'string',
    }),
    defineField({
      name: 'image3',
      type: 'image',
    }),
    defineField({
      name: 'numbers3',
      type: 'string',
    }),
    defineField({
      name: 'description3',
      type: 'string',
    }),
    defineField({
      name: 'image4',
      type: 'image',
    }),
    defineField({
      name: 'numbers4',
      type: 'string',
    }),
    defineField({
      name: 'description4',
      type: 'string',
    }),
  ],
})
