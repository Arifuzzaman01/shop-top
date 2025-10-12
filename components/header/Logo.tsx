import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black  hover:text-shop_light_green uppercase hoverEffect group",
          className
        )}
      >
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          S
        </span>
        hop
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          T
        </span>
        op
      </h2>
    </Link>
  );
}

export default Logo;
