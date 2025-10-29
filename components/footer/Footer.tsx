import React from "react";

import FooterTop from "./FooterTop";
import Container from "../Container";
import Logo from "../header/Logo";
import SocialMedia from "../SocialMedia";
import { SubText, SubTitle } from "../ui/text";
import { CategoriesData, QuickLinkData } from "@/constants/data";
import Link from "next/link";
import { Button } from "../ui/button";

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
          <div className="space-y-4">
            <SubTitle>News Letter</SubTitle>
            <SubText>Subscribe to our newsletter to receive latest update and exclusive offers.</SubText>
            <form >
              <input type="text" placeholder="Enter your email" required className="w-full mt-4 px-4 py-2 border border-darkColor/60 rounded-md focus:outline-none focus:border-shop_light_green" />
              <Button className="bg-shop_dark_green text-white mt-4 w-full">Subscribe</Button>
            </form>
          </div>

        </div>
        <div className="py-6 border-t border-darkColor/60 text-center text-sm text-gray-600">
          <div className="text-center text-darkColor/60 font-wider hover:text-shop_dark_green hoverEffect group uppercase">© {new Date().getFullYear()} {""}
            <Logo className="text-sm"/>  All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
