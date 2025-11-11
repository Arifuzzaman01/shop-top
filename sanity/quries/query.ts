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

const LATEST_BLOG_QUERY =
  defineQuery(`*[_type == "blog" && isLatest == true] | order(name asc){
  ...,
  mainImage{
    asset->{
      _id,
      url,
      metadata
    }
  },
  blogcategories[]->{
  title}
  }`);

export { BRAND_QUERY, LATEST_BLOG_QUERY };