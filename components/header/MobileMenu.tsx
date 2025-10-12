'use client'
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SiteMenu from "./SiteMenu";

function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen]= useState(false)
  return (
    <>
      <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
        <AlignLeft className="hover:text-darkColor hoverEffect hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SiteMenu
        isOpen={isSidebarOpen}
        onClose={()=> setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}

export default MobileMenu;
