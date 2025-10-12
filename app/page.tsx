import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <Container>
      <div className="bg-shop_light-pink">
        Home
        <h2>Home</h2>
        <Button>Shop Now</Button>
      </div>
    </Container>
  );
}

export default page;
