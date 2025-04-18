import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'url', type: 'string'}),
  ],
})
