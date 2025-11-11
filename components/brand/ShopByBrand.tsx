import React from "react";
import { SubTitle } from "../ui/text";
import Link from "next/link";
import { getAllBrands } from "@/sanity/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BRAND_QUERYResult } from "@/sanity.types";

const ShopByBrand = async () => {
  const brands = await getAllBrands();
  console.log("Brands:", brands);
  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <SubTitle className="text-2xl font-bold">Shop By Brand</SubTitle>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
        >
          View All
        </Link>
      </div>
      <div className="flex flex-wrap gap-5">
        {brands?.map((brand: BRAND_QUERYResult[0]) => (
          <Link href={`brand/${brand?.slug?.current}`} key={brand._id}>
            {brand?.image && brand?.image?.asset && (
              <Image
                src={urlFor(brand.image).url()}
                alt={brand.title || "brandImage"}
                width={100}
                height={100}
                className="object-contain"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrand;