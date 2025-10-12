import React from "react";
import Container from "../Container";
import MobileMenu from "./MobileMenu";

import HeaderMenu from "./HeaderMenu";
import Searchbar from "./Searchbar";
import CardIcon from "./CardIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import Logo from "./Logo";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

async function Header() {
  const user = await currentUser();
  console.log(user, "user");
  return (
    <header className="bg-white py-4 border-b border-black/20">
      <Container className="flex items-center justify-between">
        {/* logo */}
        <div className="w-auto md:w-1/3 flex justify-start items-center  gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        {/* NavLink */}
        <HeaderMenu />
        {/* NavButton */}
        <div className="w-auto md:w-1/3 flex justify-end items-center gap-5">
          <Searchbar />
          <CardIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
