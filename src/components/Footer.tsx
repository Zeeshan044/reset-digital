import React from "react";
import facebook from "@/assets/images/facebook.svg";
import insta from "@/assets/images/insta.svg";
import twitter from "@/assets/images/twitter.svg";
import youtube from "@/assets/images/youtube.svg";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Links = [
  {
    title: "Main",
    links: [
      { title: "Home", link: "" },
      { title: "About", link: "" },
      { title: "Projects", link: "" },
      { title: "Single Projects", link: "" },
      { title: "Team", link: "" },
      { title: "Contact", link: "" },
    ],
  },
  {
    title: "Other Pages",
    links: [
      { title: "Packages", link: "" },
      { title: "Packages Single", link: "" },
      { title: "Blog", link: "" },
      { title: "Blog Single", link: "" },
      { title: "Privacy Policy", link: "" },
      { title: "Terms & Conditions", link: "" },
    ],
  },
  {
    title: "Utilities",
    links: [
      { title: "Style Guide", link: "" },
      { title: "Licenses", link: "" },
      { title: "Changelog", link: "" },
      { title: "Instructions", link: "" },
      { title: "404", link: "" },
      { title: "Password", link: "" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 dark:text-secondary-light">
      <div className="grid grid-cols-2">
        <div>
          <p className=" font-semibold text-base mb-[17px] dark:text-white">
            RESET DIGITAL
          </p>
          <p className="text-base font-light mb-3 text-body ">
            Where Creativity Meets Innovation.
          </p>
          <div className="flex gap-8 mt-4  text-body">
            <a href="">
              <FaFacebook className="hover:text-primary duration-200 hover:scale-125" />
            </a>
            <a href="">
              <FaInstagram className="hover:text-primary duration-200 hover:scale-125" />
            </a>
            <a href="">
              <FaXTwitter className="hover:text-primary duration-200 hover:scale-125" />
            </a>
            <a href="">
              <FaYoutube className="hover:text-primary duration-200 hover:scale-125" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 text-body ">
          {Links.map((link, index) => (
            <div key={link.title} className="font-open-sans">
              <h4 className="text-4 font-normal mb-[10px]">{link.title}</h4>
              <ul className="flex flex-col gap-y-2 text-[15px] font-light">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="hover:text-primary cursor-pointer duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-[#786DFF4D]/30 w-full mt-10" />
      <div className="text-[15px] font-light pb-[71px] mt-10 dark:text-white flex justify-between">
        <p className=" ">© 2024 Reset Digital. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
