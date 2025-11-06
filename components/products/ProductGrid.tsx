"use client";

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productTypes } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProducts from "./NoProducts";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productTypes[0]?.title || "");
  const query = `*[_type == "product" && variant == "${selectedTab.toLowerCase()}"] | order( name asc){
..., "categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.error("Product Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {loading ? (
        <div className="flex items-center justify-center py-10 min-h-80 gap-2 bg-gray-100 mt-10 w-full">
          <div className="flex gap-2 text-shop_light_green items-center ">
            <Loader2 className="w-5 h-5 animate-spin" />
            <p>Product is loading...</p>
          </div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 mt-10">
          {products?.map((product) => (
            <AnimatePresence key={product?._id}>
              <motion.div>
                <p>{product.name}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProducts selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
