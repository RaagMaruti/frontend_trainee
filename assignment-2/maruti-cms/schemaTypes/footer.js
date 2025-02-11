import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
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
      name: 'copyright',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'imgLink'}]}],
    }),
    defineField({
      name: 'nav',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'links',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'link'}]}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactMessage',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'placeholder', type: 'string'}),
      ],
    }),
  ],
})
