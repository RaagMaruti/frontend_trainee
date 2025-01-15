import { defineField, defineType } from "sanity"

export default defineType({
    name: "card",
    type: "document",
    fields: [
        defineField({
            name: "content",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "content",
            },
        }),
        defineField({
            name: "heading",
            type: "reference",
            to: { type: "heading" }
        }),
        defineField({
            name: "paragraph",
            type: "reference",
            to: { type: "paragraph" }
        }),
        defineField({
            name: "media",
            type: "reference",
            to: { type: "media" }
        }),
    ],
})
