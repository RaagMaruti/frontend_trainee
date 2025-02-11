import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'demo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      type: 'reference',
      to: [{type: 'cta'}],
    }),
  ],
})
