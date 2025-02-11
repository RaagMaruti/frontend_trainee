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
      name: 'review',
      type: 'string',
    }),
    defineField({
      name: 'reviewer',
      type: 'string',
    }),
    defineField({
      name: 'customerName',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'cta',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
