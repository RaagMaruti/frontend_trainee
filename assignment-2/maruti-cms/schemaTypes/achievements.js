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
      name: 'card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
            }),
            defineField({
              name: 'paragraph',
              type: 'string',
            }),
            defineField({
              name: 'image',
              type: 'image',
            }),
          ],
        },
      ],
    }),
  ],
})
