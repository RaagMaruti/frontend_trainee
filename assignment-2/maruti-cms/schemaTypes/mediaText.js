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
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
