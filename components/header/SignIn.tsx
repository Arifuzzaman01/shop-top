import { SignInButton } from "@clerk/nextjs";
import React from "react";

function SignIn() {
  return (
    <SignInButton mode="modal">
      <div className="text-sm font-semibold hover:text-darkColor hoverEffect text-lightColor cursor-pointer">
        LogIn
      </div>
    </SignInButton>
  );
}

export default SignIn;
