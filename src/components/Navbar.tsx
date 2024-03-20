import Image from "next/image";
import React from "react";
import cart from "@/assets/images/cart.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="custom-container">
      <nav className="flex justify-between items-center h-[92px] mx-auto py-4 dark:text-white">
        <div>
          <h2 className="text-2xl font-semibold">RESET DIGITAL</h2>
        </div>
        <div className="flex text-sm font-light gap-4">
          <Link href="/" className="">
            HOME
          </Link>
          <Link href="/about" className="">
            ABOUT
          </Link>
          <Link href="/packages" className="">
            PACKAGES
          </Link>
          <Link href="/blog" className="">
            BLOG
          </Link>
          <Link href="/contact" className="">
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
