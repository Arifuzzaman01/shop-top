import { sanityFetch } from "../lib/live";
import { BRAND_QUERY } from "./query";

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == "category"] | order(title asc)[0...$quantity] {
        _id,
        _type,
        title,
        slug,
        description,
        range,
        featured,
        image{
          asset->{
            _id,
            url,
            metadata
          },
          alt
        },
        "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == "category"] | order(title asc){
        _id,
        _type,
        title,
        slug,
        description,
        range,
        featured,
        image{
          asset->{
            _id,
            url,
            metadata
          },
          alt
        },
        "productCount": count(*[_type == "product" && references(^._id)])
        }`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data;
  } catch (error) {
    console.log("Error form fetching categories", error);
    return [];
  }
};
const getAllBrands = async () => {
  try {
    const {data} = await sanityFetch({query: BRAND_QUERY});
    return data ?? [];
  } catch (error) {
    console.log("Error form fetching brands", error);
    return [];
  }
}

export { getCategories, getAllBrands };