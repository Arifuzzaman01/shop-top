import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const categoryType = defineType({
    name: "category",
    title: "Categories",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "range",
            type: "number",
            description: "starting from 1"
        }),
        defineField({
            name: "featured",
            type: "boolean",
            initialValue: false
        }),
        defineField({
            name : "image",
            title : "Categories Image",
            type: "image",
            options:{
                hotspot: true
            }
        })
    ],
    preview:{
        select:{
            title: "title",
            subTitle: "description",
            media: "image"
        }
    }

})