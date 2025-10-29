import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
    name: "Address",
    title: "Address ",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "name",
            title: "address",
            type: "string",
            description: "A friendly name for the address (e.g. 'Home', 'Work')",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "User Email",
            type: "email",
        }),
        defineField({
            name: "address",
            title: "Street Address",
            description: "The street address of the user",
            type: "string",
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "state",
            title: "State",
            type: "string",
            description: "Two letter State Code",
            validation: (Rule) => Rule.required().length(2).uppercase(),
        }),
        defineField({
            name: "zip",
            title: "Zip",
            type: "string",
            validation: (Rule) => Rule.required().regex(/^\d{5}(-\d{4})?$/,
                {
                    name: "Zip Code",
                    invert: false
                }
            ).custom((zip: string | undefined) => {
                if (!zip) {
                    return "Zip Code is required"
                }
                if (!zip.match(/^\d{5}(-\d{4})?$/)) {
                    return "Please enter a valid zip code (e.g. 12345 or 12345-6789)"
                }
                return true
            }),
        }),
        defineField(
            {
                name: "default",
                title: "Default Address",
                type: "boolean",
                description: "Is this the default address?",
                initialValue: false,
            }
        ),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            description: "When was this address created?",
            initialValue: () => new Date().toISOString(),

        }),

    ],
    preview: {
        select: {
            title: "name",
            subtitle: "Address",
            city: "city",
            state: "state",
            isDefault: "default",
        },
        prepare: ({ title, subtitle, city, state, isDefault }) => {
            return {
                title: `${title} ${isDefault ? "(Default)" : ""}`,
                subtitle: `${subtitle}, ${city}, ${state}`,
            }
        },

    }

})