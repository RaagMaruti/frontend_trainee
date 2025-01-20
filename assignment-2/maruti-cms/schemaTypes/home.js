import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
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
      name: 'components',
      type: 'array',
      of: [
        {type: 'header'},
        {type: 'hero'},
        {type: 'clients'},
        {type: 'community'},
        {type: 'mediaText'},
        {type: 'achievements'},
        {type: 'customers'},
        {type: 'updates'},
        {type: 'demo'},
        {type: 'footer'},
      ],
    }),
  ],
})
