import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../ui/button";

const Links = [
  {
    title: "Services",
    links: [
      { title: "Home", link: "/" },
      { title: "About", link: "/about" },
      { title: "Services", link: "/services" },
      { title: "Contact", link: "/contact" },
    ],
  },
  {
    title: "Insights",
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
    title: "Company",
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
    <div className="pt-20 p-section container-custom-xxl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-14">
        <div className="col-span-2">
          <p className=" font-semibold text-base mb-[17px] dark:text-white">
            RESET DIGITAL
          </p>
          <p className="text-xs font-light mb-3">
            A leading web consultancy firm specializing in exquisite website
            designs and impactful branding solutions since 2023, we are an
            innovative team committed to transforming your ideas into reality,
            seamlessly blending creativity with purpose.
          </p>
        </div>
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
        <div>
          <h4 className="text-4 font-normal mb-[10px]">Contact</h4>
          <Button className="w-full max-w-64">Book A Call</Button>
          <p className="text-xs mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            sequi quas error
          </p>
          <div className="flex gap-3 xl:gap-8 mt-4">
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
        {/* <div className="grid grid-cols-3">
        </div> */}
      </div>
      <hr className="bg-[#786DFF4D]/30 w-full mt-10" />
      <div className="text-sm font-light pb-10 pt-10 dark:text-white text-center">
        <p className=" ">© 2024 Reset Digital. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
