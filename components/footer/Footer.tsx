import React from "react";

import FooterTop from "./FooterTop";
import Container from "../Container";
import Logo from "../header/Logo";
import SocialMedia from "../SocialMedia";
import { SubText, SubTitle } from "../ui/text";
import { CategoriesData, QuickLinkData } from "@/constants/data";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shoptop, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_dark_green hover:text-shop_dark_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {QuickLinkData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {CategoriesData?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>pending...</div>
       
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
