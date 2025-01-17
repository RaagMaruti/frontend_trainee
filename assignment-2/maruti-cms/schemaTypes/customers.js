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
      name: 'paragraph1',
      type: 'string',
    }),
    defineField({
      name: 'paragraph2',
      type: 'string',
    }),
    defineField({
      name: 'paragraph3',
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
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
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
