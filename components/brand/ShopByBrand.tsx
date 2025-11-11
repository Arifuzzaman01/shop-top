import React from "react";
import { SubTitle } from "../ui/text";
import Link from "next/link";
import { getAllBrands } from "@/sanity/quries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BRAND_QUERYResult } from "@/sanity.types";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraDate = [
  {
    title: "Free Delivery",
    description: "For all orders over $100",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Returns",
    description: "Return money within 30 days",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friendly 27/7 free Customer Support",
    icon: <Headset size={54} />,
  },
  {
    title: "Money back Guarantee",
    description: "Quality Checked by our team",
    icon: <ShieldCheck size={45} />,
  },
];
const ShopByBrand = async () => {
  const brands = await getAllBrands();
  // console.log("Brands:", brands);
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2.5  justify-items-center">
        {brands?.map((brand: BRAND_QUERYResult[0]) => (
          <Link
            href={`brand/${brand?.slug?.current}`}
            key={brand._id}
            className="bg-white w-34 h-24 flex items-center justify-center overflow-hidden hover:shadow-lg shadow-shop_dark_green hoverEffect"
          >
            {brand?.image?.asset?._id && (
              <Image
                src={urlFor(brand.image).url()}
                alt={brand.title || "brandImage"}
                width={250}
                height={250}
                className="object-contain w-32 h-20"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-16 p-2 shadow-shop_light_green/20 py-5">
        {extraDate?.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green"
          >
            <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
              {data?.icon}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize">
                {data?.title}
              </p>
              <p className="text-lightColor">{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrand;
