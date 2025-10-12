import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { HeaderData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "../SocialMedia";
import { useOutSideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SiteMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname()
    const sidebarRef = useOutSideClick<HTMLDivElement>(onClose)
  return (
    <div
      className={`fixed min-h-screen left-0 inset-y-0 z-50 w-full bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect text-white/70`}
    >
      <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen border-r border-shop_light_green p-10 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div>
          {HeaderData?.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`flex flex-col space-y-3.5 font-semibold tracking-wide hover:text-shop_light_green hoverEffect ${pathName === item.href && 'text-white'}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SiteMenu;
