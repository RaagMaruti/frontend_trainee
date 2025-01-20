import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({name: 'header', type: 'reference', to: [{type: 'header'}]}),
    defineField({
      name: 'components',
      type: 'array',
      of: [
        {name: 'hero', type: 'reference', to: {type: 'hero'}},
        {name: 'clients', type: 'reference', to: {type: 'clients'}},
        {name: 'community', type: 'reference', to: {type: 'community'}},
        {name: 'mediaText', type: 'reference', to: {type: 'mediaText'}},
        {name: 'achievements', type: 'reference', to: {type: 'achievements'}},
        {name: 'customers', type: 'reference', to: {type: 'customers'}},
        {name: 'updates', type: 'reference', to: {type: 'updates'}},
        {name: 'demo', type: 'reference', to: {type: 'demo'}},
      ],
    }),
    defineField({name: 'footer', type: 'reference', to: [{type: 'footer'}]}),
  ],
})
