import Image from "next/image";
import React from "react";
import cart from "@/assets/images/cart.png";
import Link from "next/link";
const AppNav = () => {
  return (
    <div className="custom-container">
      <nav className="flex justify-between items-center h-[92px] mx-auto py-4 px-10 2xl:px-4 dark:text-white">
        <div>
          <h2 className="text-2xl font-semibold">RESET DIGITAL</h2>
        </div>
        <div className="flex text-sm font-light gap-8">
          <Link href="/" className="hover:text-primary duration-200">
            HOME
          </Link>
          <Link href="/" className="hover:text-primary duration-200">
            ABOUT
          </Link>
          <Link href="/" className="hover:text-primary duration-200">
            SERVICES
          </Link>
          <Link href="/" className="hover:text-primary duration-200">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AppNav;
