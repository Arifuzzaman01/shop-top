"use client";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProducts from "../products/NoProducts";
import ProductCard from "../products/ProductCard";
interface Props {
  categories: Category[];
  slug: string;
}
const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCategoryChange = (newSlag: string) => {
    if (newSlag == currentSlug) return;
    setCurrentSlug(newSlag);
    router.push(`/category/${newSlag}`, { scroll: false });
  };
  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `
      *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id)] |order(name asc){
      ...,"categories":categories[]->title
      }
      `;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.log("error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router]);
  return (
    <div className="p-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {categories?.map((item) => (
          <Button
            onClick={() => handleCategoryChange(item?.slug?.current as string)}
            key={item?._id}
            className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none  hover:text-white font-semibold hoverEffect border-b last:border-b-0 capitalize transition-colors ${item?.slug?.current == currentSlug && "bg-shop_orange border-shop_orange text-white"}`}
          >
            <p className="w-full text-left px-2">{item.title}</p>
          </Button>
        ))}
      </div>
      <div className="flex-1">
        {loading ? (
          <div>
            <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 bg-gray-100 text-center rounded-xl w-full">
              <div className="flex items-center text-blue-600 gap-2.5">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Products is Loading...</span>
              </div>
            </div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {products?.map((product: Product) => (
              <AnimatePresence key={product._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProducts selectedTab={currentSlug} />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
