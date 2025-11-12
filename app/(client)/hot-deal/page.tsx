import Container from "@/components/Container";
import ProductCard from "@/components/products/ProductCard";
import { SubTitle } from "@/components/ui/text";
import { getDealProducts } from "@/sanity/quries";
import React from "react";

const hotDeal = async () => {
  const products = await getDealProducts();

  return (
    <div className="bg-deal_bg py-10">
      <Container>
        <SubTitle className="mb-5 underline underline-offset-4 decoration-[1px] text-base tracking-wide uppercase font-bold">
          Hot Deal of the weeks
        </SubTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default hotDeal;
