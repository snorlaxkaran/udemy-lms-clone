import React from "react";
import { MobileSidebar } from "./mobileSidebar";
import NavbarRoutes from "@/components/navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full items-center flex bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
