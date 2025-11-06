import { productTypes } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab?: string;
  onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex justify-between gap-6 flex-wrap items-center">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productTypes.map((item) => (
          <button
            key={item?.title}
            className={`border border-shop_light_green/30 px-3 py-1.5 md:px-5 md:py-2 hover:bg-shop_light_green hover:text-white rounded-full hover:border-shop_light_green hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20"}`}
            onClick={() => onTabSelect?.(item?.title)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="border border-shop_light_green/30 px-3 py-1.5 md:px-5 md:py-2 hover:bg-shop_light_green hover:text-white rounded-full hover:border-shop_light_green hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
