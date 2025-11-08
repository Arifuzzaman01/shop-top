"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { ShoppingBag } from "lucide-react";
import React from "react";
interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  const outOfStock = product.stock === 0;
  const handleAddToCart = () => {
    window.alert(`${product.name} added to cart!`);
  }
  return (
    <div>
      <Button
      onClick={handleAddToCart}
      disabled={outOfStock}
        className={cn(
          "bg-shop_btn_dark_green/80 w-full text-shop_light_bg shadow-none border border-shop_dark_green/80 font-semibold tracking-wider hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect"
        )}
      >
        <ShoppingBag />
        {outOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
