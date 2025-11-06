import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  // console.log(p);
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
            className="object-cover w-full h-auto border rounded-t-md"
          />
        )}
        {product?.status === "sales" && <p className="absolute top-2 left-2">Sale!</p>}
      </div>
      <div className="p-3">Product Details</div>
    </div>
  );
};

export default ProductCard;
