import { defineField, defineType } from "sanity"

export default defineType({
    name: "paragraph",
    type: "document",
    fields: [
        defineField({
            name: "text",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "text",
            },
        }),
        defineField({
            name: "content",
            type: "string",
        }),
    ],
})
