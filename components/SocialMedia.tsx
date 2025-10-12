import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName: string;
}
const socialLink = [
  {
    title: "Facebook",
    href: "lgfhkfg",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "lgfhkfg",
    icon: <Youtube className="w-5 h-5" />,
  },
  { title: "GitHub", href: "lgfhkfg", icon: <Github className="w-5 h-5" /> },
  {
    title: "LinkedIn",
    href: "lgfhkfg",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "lgfhkfg",
    icon: <Twitter className="w-5 h-5" />,
  },
];
function SocialMedia({ className, iconClassName, tooltipClassName }: Props) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5")}>
        {socialLink.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                target="blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-white text-darkColor font-semibold ', tooltipClassName)}>{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
