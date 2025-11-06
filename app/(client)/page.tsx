import HomeBanner from "@/components/banner/HomeBanner";
import Container from "@/components/Container";
import ProductGrid from "@/components/products/ProductGrid";

import React from "react";

function page() {
  return (
    <Container>
      <HomeBanner/>
      <div className="py-10">
        <ProductGrid/>
      </div>
    </Container>
  );
}

export default page;
