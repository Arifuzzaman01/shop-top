"use client";
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
interface Props {
  categories: Category[];
  slug: string;
}
const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCategoryChange = (newSlag: string) => {
    if (newSlag == currentSlug) return;
    setCurrentSlug(newSlag);
    router.push(`/category/${newSlag}`, { scroll: false });
  };
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
      <div></div>
    </div>
  );
};

export default CategoryProducts;
