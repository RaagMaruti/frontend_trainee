import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'reference',
      to: {type: 'hero'},
    }),
    defineField({
      name: 'clients',
      type: 'reference',
      to: {type: 'clients'},
    }),
    defineField({
      name: 'community',
      type: 'reference',
      to: {type: 'community'},
    }),
    defineField({
      name: 'pixelgrade',
      type: 'reference',
      to: {type: 'hero'},
    }),
    defineField({
      name: 'calendar',
      type: 'reference',
      to: {type: 'hero'},
    }),
  ],
})
