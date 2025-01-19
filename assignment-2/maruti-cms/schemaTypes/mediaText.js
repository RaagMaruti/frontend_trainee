import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaText',
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
      name: 'description',
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
      type: 'object',
      fields: [
        defineField({name: 'text', type: 'string'}),
        defineField({name: 'link', type: 'string'}),
      ],
    }),
  ],
})
