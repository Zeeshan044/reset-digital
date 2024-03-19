import Image from "next/image";
import React from "react";
import cart from "@/assets/images/cart.png"
import Link from "next/link";
const Navbar = () => {
    return (
        <div >
            <nav className="flex justify-between items-center h-[92px] mx-auto py-4 dark:text-white">
                <div>
                    <h2 className="text-2xl font-semibold">RESET DIGITAL</h2>
                </div>
                <div className=" flex text-sm font-light gap-4">
                    <a href="/" className="">HOME</a>
                    <Link href="/about" className="">ABOUT</Link>
                    {/* <a href="/projects" className="">PROJECTS</a> */}
                    {/* <a href="" className="">TEAM</a>
                    <a href="" className="">BLOG</a> */}
                    <a href="/packages" className="">PACKAGES</a>
                    <a href="/contact" className="">CONTACT</a>
                    {/* <div className=" ml-5 flex gap-4 items-center">
                        <Image src={cart} alt="" width={20} height={20} className="  bg-black dark:bg-none " />
                        <p className="rounded-full text-white w-5 h-5 items-center text-center bg-black dark:bg-white dark:text-black">0</p>
                    </div> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
