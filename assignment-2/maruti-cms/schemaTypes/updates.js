import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'updates',
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
            defineField({name: 'image', type: 'image'}),
            defineField({name: 'blogTitle', type: 'string'}),
            defineField({
              name: 'cta',
              type: 'reference',
              to: [{type: 'cta'}],
            }),
          ],
        },
      ],
    }),
  ],
})
