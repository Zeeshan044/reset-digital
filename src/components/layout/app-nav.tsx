import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ImMenu, ImCross } from "react-icons/im";

const AppNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <div className="container-custom">
        <nav className="flex justify-between items-center h-[92px] 2xl:px-4 dark:text-white">
          <div>
            <h2 className="text-2xl font-semibold">RESET DIGITAL</h2>
          </div>
          <div className="hidden lg:flex text-sm font-light gap-8">
            <Link href="/" className="hover:text-primary duration-200">
              HOME
            </Link>
            <Link href="/" className="hover:text-primary duration-200">
              ABOUT
            </Link>
            <Link href="/services" className="hover:text-primary duration-200">
              SERVICES
            </Link>
            <Link href="/" className="hover:text-primary duration-200">
              CONTACT
            </Link>
          </div>

          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="lg:hidden"
          >
            <ImMenu className="h-6 w-6 hover:text-primary duration-100" />
          </button>
        </nav>
      </div>

      {/* Mobile Side nav */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <div className="">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={"fixed inset-0 bg-black z-50"}
            ></motion.div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-full sm:w-64 bg-card z-50"
            >
              <div className="flex justify-end p-4">
                <ImCross
                  onClick={() => setIsMobileNavOpen(false)}
                  className="h-6 w-6 hover:text-primary duration-100"
                />
              </div>
              <div className="flex flex-col gap-4 p-4">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppNav;
