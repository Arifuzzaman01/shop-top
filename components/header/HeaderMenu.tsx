"use client";
import { HeaderData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderMenu() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="hidden md:inline-flex justify-end w-1/3 gap-6 text-sm font-semibold capitalize text-lightColor">
      {HeaderData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop_light_green hoverEffect relative group ${
            pathName === item.href && "text-shop_light_green"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2  hoverEffect ${
              pathName === item.href && "w-1/2"
            } `}
          />
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2  hoverEffect ${
              pathName === item.href && "w-1/2"
            } `} />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
