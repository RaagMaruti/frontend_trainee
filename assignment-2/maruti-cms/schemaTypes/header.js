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
      name: 'logo',
      type: 'reference',
      to: [{type: 'imgLink'}],
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'link'}],
        },
      ],
    }),
    defineField({
      name: 'cta',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
