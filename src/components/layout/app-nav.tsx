import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ImMenu, ImCross } from "react-icons/im";
import { useRouter } from "next/router";

const LINKS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT", href: "/contact" },
];

const AppNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="container-custom">
        <nav className="flex justify-between items-center h-[92px] 2xl:px-4 dark:text-white">
          <div>
            <h2 className="text-2xl font-semibold">RESET DIGITAL</h2>
          </div>
          <div className="hidden lg:flex text-sm font-light gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary duration-200 ${
                  router.pathname === link.href
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
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
              <div className="flex justify-end p-8">
                <ImCross
                  onClick={() => setIsMobileNavOpen(false)}
                  className="h-6 w-6 hover:text-primary duration-100"
                />
              </div>
              <div className="flex flex-col gap-4 px-8 py-6">
                {LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="hover:text-primary duration-200 border-primary border-b pb-2 pl-2 border-l block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppNav;
