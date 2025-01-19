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
        {name: 'header', type: 'reference', to: {type: 'header'}},
        {name: 'hero', type: 'reference', to: {type: 'hero'}},
        {name: 'clients', type: 'reference', to: {type: 'clients'}},
        {name: 'community', type: 'reference', to: {type: 'community'}},
        {name: 'mediaText', type: 'reference', to: {type: 'mediaText'}},
        {name: 'achievements', type: 'reference', to: {type: 'achievements'}},
        // {name: 'mediaText2', type: 'reference', to: {type: 'mediaText'}},
        {name: 'customers', type: 'reference', to: {type: 'customers'}},
        {name: 'updates', type: 'reference', to: {type: 'updates'}},
        {name: 'demo', type: 'reference', to: {type: 'demo'}},
        {name: 'footer', type: 'reference', to: {type: 'footer'}},
      ],
    }),
  ],
})
