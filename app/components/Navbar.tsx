"use client";

import Link from "next/link";
import NavButtons from "./NavButtons";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import NavbarSidebar from "./NavbarSidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="flex flex-row bg-primary justify-between border-b-2 h-15 border-white items-center ">
      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
      <Link href="/" className="flex h-full">
        <span className="flex items-center text-lg text-white font-semibold border-r-2 border-white px-12">
          Stoic AI
        </span>
      </Link>
      <NavButtons />
      <div className="flex md:hidden items-center h-full justify-center">
        <Button
          variant="ghost"
          className="size-14 border-transparent h-full text-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
