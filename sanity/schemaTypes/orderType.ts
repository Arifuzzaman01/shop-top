import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons"

export const orderType = defineType(
    {
        name: "order",
        title: "Order",
        type: "document",
        icon: BasketIcon,
        fields: [
            defineField({
                name: "orderNumber",
                title: "Order Number",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "invoice",
                type: "object",
                fields: [
                    { name: "id", type: "string" },
                    { name: "number", type: "string" },
                    { name: "hosted_invoice_url", type: "url" }
                ]
            }),
            defineField({
                name: "stripeCheckoutSessionId",
                title: "Stripe Checkout Session ID",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "stripeCustomerId",
                title: "Stripe Customer ID",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "clerkId",
                title: "Store User ID",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "customerName",
                title: "Customer Name",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "email",
                title: "Customer Email",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "stripePaymentIntentId",
                title: "Stripe Payment Intent ID",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "products",
                title: "Products",
                type: "array",
                of: [
                    defineArrayMember({
                        type: "object",
                        fields: [
                            defineField({
                                name: "product",
                                title: "Product bought",
                                type: "reference",
                                to: [{ type: "product" }]
                            }),
                            defineField({
                                name: "quantity",
                                title: "Quantity Purchased",
                                type: "number"
                            })
                        ],
                        preview: {
                            select: {
                                product: "product.name",
                                quantity: "quantity",
                                image: "product.image",
                                price: "product.price",
                                currency: "product.currency"

                            },
                            prepare: (select) => {
                                return {
                                    title: `${select.product} x ${select.quantity}`,
                                    subtitle: `${select.price} * ${select.quantity}`,
                                    media: select.image,
                                }
                            }
                        }
                    })
                ]
            }),
            defineField({
                name: "totalPrice",
                title: "Total Price",
                type: "number",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "currency",
                title: "Currency",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "amountDiscount",
                title: "Amount Discount",
                type: "number",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "address",
                title: "Shipping Address",
                type: "object",
                fields: [
                    defineField({ name: "state", title: "State", type: "string" }),
                    defineField({ name: "zip", title: "Zip Code", type: "string" }),
                    defineField({ name: "city", title: "City", type: "string" }),
                    defineField({ name: "address", title: "Address", type: "string" }),
                    defineField({ name: "name", title: "Name", type: "string" })
                ]
            }),
            defineField({
                name: "status",
                title: "Order Status",
                type: "string",
                options: {
                    list: [
                        { title: "Pending", value: "pending" },
                        { title: "In Progress", value: "inProgress" },
                        { title: "Out of Delivery", value: "outOfDelivery" },
                        { title: "Completed", value: "completed" },
                        { title: "Cancelled", value: "cancelled" },
                        { title: "Collected", value: "collected" },
                    ]
                }
            }),
            defineField({
                name: "orderData",
                title: "Order Data",
                type: "datetime",
                validation: Rule => Rule.required(),

            })
        ],
        preview: {
            select: {
                name: "customerName",
                amount: "totalPrice",
                currency: "currency",
                orderId: "orderNumber",
                email: "email"
            },
            prepare: (select) => {
                const orderIdShipping = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
                return {
                    title: `${select.name} (${orderIdShipping})`,
                    subtitle: `${select.amount} ${select.currency}, ${select.email}`,
                    media: BasketIcon
                };
            }
        }
    }
)