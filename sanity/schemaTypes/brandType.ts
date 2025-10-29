import { SubTitle } from "@/components/ui/text";
import { defineField, defineType } from "sanity";

export const brandType = defineType({ 
    name: "brand",
    title: "Brand",
    type: "document",
    fields: [
      defineField({
        name: "title",

        type: "string"
      }),
      defineField({
        name: "slug",
        type: "slug",
        options: {
          source: "title"
        },
        validation: (Rule) => Rule.required()
      })
       , 
       defineField({
        name: "description",
        type: "text"
       }),
       defineField({
        name: "image",
        title: "Brand Image",
        type: "image",
        options: {
          hotspot: true
        }
       }),
    ],
    preview:{
        select:{
            title: "title",
            SubTitle: "description",
            media: "image"
        }
    }
});