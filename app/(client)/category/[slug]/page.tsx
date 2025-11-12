import CategoryProducts from "@/components/categories/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/ui/text";
import { getCategories } from "@/sanity/quries";
import React from "react";

const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Product by Categories:{" "}
          <span className="font-bold text-green-600 tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
};

export default Category;
