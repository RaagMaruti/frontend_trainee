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
      name: 'linkName',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'string',
    }),
  ],
})
