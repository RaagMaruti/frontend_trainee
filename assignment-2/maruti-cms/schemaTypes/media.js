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
    ],
})
