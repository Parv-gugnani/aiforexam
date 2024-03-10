import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWapper";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = async () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-gradient-to-b from-blue-100 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>AiForExam</span>
          </Link>

          <div>Here should be the menus</div>

          <div>user account</div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
