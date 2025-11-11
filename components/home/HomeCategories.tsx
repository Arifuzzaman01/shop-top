import React from "react";
import { SubTitle } from "../ui/text";
import { Category } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

const HomeCategories = async ({ categories }: { categories: Category[] }) => {
  // console.log("categories", categories);
  return (
    <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 md:p-7 rounded-md">
      <SubTitle className="text-xl font-bold text-center border-b pb-3">
        Popular Categories
      </SubTitle>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {categories?.map((category) => (
          <div key={category?._id} className="group flex items-center gap-3 bg-shop_light_bg">
            {category?.image?.asset && 'url' in category.image.asset && category.image.asset.url ? (
              <div className="overflow-hidden border border-shop_orange/30 hover:border-shop_orange w-20 h-20 p-1">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={category?.image?.asset?.url}
                    alt={category?.title || "Category image"}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 hoverEffect cursor-pointer"
                  />
                </Link>
              </div>
            ) : (
              <div className="bg-gray-200 overflow-hidden border border-shop_orange/30 hover:border-shop_orange w-20 h-20 p-1">
                <span className="text-gray-500">No image</span>
              </div>
            )}
            <div className="p-2 space-y-1">
              <h3 className="font-semibold text-base">{category.title}</h3>
              <p className="text-sm"><span className="font-semibold">{`(${category.productCount})`}</span> items available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;