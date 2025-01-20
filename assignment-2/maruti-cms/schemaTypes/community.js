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
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
    }),
    defineField({
      name: 'cards',
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
              name: 'description',
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
