import HomeBanner from "@/components/home/HomeBanner";
import Container from "@/components/Container";
import ProductGrid from "@/components/products/ProductGrid";

import React from "react";
import HomeCategories from "@/components/home/HomeCategories";
import { getCategories } from "@/sanity/quries";
import ShopByBrand from "@/components/brand/ShopByBrand";

async function page() {
  const categories = await getCategories(6);
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
        <HomeCategories categories={categories} />
        <ShopByBrand />
      </div>
    </Container>
  );
}

export default page;
