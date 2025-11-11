import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToWishListButton from "./AddToWishListButton";
import { SubTitle } from "../ui/text";
import PriceView from "./price/PriceView";
import AddToCartButton from "./addToCard/AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  // console.log(product?.category );
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.image && (
          <Image
            src={urlFor(product.image[0]).url()}
            alt={product.name || "Product Image"}
            loading="lazy"
            width={300}
            height={300}
            className={`object-cover w-full h-full border rounded-t-md overflow-hidden transition-transform hoverEffect  bg-shop_light_bg ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
        )}
        <AddToWishListButton product={product} />
        {product?.status === "sales" && (
          <p className="absolute top-2 left-2 z-10 border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green text-xs hoverEffect bg-white">
            Sale!
          </p>
        )}
        {product?.status === "hot" && (
          <Link
            href={`/deal`}
            className="absolute top-2 left-2 z-10 border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green text-xs hoverEffect bg-white group-hover:bg-shop_orange"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-white pb-0.5 "
            />
          </Link>
        )}
        {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_green group-hover:text-shop_light_green text-xs hoverEffect bg-white">
            New!
          </p>
        )}
        {product?.status === "outOfStock" && (
          <p className="absolute top-2 left-2 z-10 border border-darkColor/75 px-2 rounded-full text-darkColor/750  group-hover:border-darkColor/55 group-hover:text-darkColor/55 text-xs hoverEffect bg-gray-100 ">
            Out of Stock
          </p>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-shop-light_text text-xs">
            {product.categories.map((cat) => cat?.title ).join(", ")}
          </p>
        )}
        <SubTitle className=" text-[16px] line-clamp-1 font-bold">{product?.name}</SubTitle>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                size={12}
                key={i}
                className={`${i < 4 ? "text-shop_lighter_green" : "text-shop_lighter_text"}`}
                fill={i < 4 ? "#93d991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-xs text-shop_light_text tracking-wide">
            5 Reviews
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">In Stock:</p>
          <p
            className={`${product?.stock === 0 ? "text-red-500" : "text-shop_light_green font-semibold"}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "Unavailable"}
          </p>
        </div>
        <PriceView price={product?.price} discount={product?.discount} className="text-sm" />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
