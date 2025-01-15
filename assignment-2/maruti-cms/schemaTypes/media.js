import { defineField, defineType } from "sanity"

export default defineType({
    name: "media",
    type: "document",
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: "image",
            type: "image",
        }),
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
    ],
})
