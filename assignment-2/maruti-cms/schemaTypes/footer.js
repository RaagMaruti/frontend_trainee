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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'logo',
      type: 'object',
      fields: [
        defineField({name: 'image', type: 'image'}),
        defineField({name: 'link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'copyright',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'image', type: 'image'}),
            defineField({name: 'link', type: 'string'}),
          ],
        },
      ],
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
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({name: 'text', type: 'string'}),
                    defineField({name: 'link', type: 'string'}),
                  ],
                },
              ],
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
