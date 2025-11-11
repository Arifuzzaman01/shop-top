import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type == "brand"] | order(title asc) {
  _id,
  _type,
  title,
  slug,
  description,
  image{
    asset->{
      _id,
      url,
      metadata
    },
    alt
  }
}`);

export { BRAND_QUERY };