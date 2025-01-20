import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imgLink',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'url', type: 'string'}),
  ],
})
