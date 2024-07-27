"use client";
import React, { useState } from "react";
import "@/components/navbar.css";
import { cn } from "@/lib/utils";
import menu from "@/app/assets/menu_icon.svg";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Senslyze");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-transparent h-[46px] fixed top-0 z-30 mt-4">
      <div className="w-full flex items-center justify-center ">
        <nav className="sm:block hidden navbar max-w-[600px] w-full bg-red-400 h-full">
          <ul className="flex h-full px-[1rem] items-center justify-between">
            <li
              className="relative"
              onClick={() => handleItemClick("Senslyze")}
            >
              Home
              <span
                className={cn({
                  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px":
                    activeItem == "Senslyze",
                })}
              ></span>
            </li>
            <li className="relative" onClick={() => handleItemClick("AboutUs")}>
              About Us
              <span
                className={cn({
                  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px":
                    activeItem == "AboutUs",
                })}
              ></span>
            </li>

            <li className="relative" onClick={() => handleItemClick("OurServices")}>
              Our Services
              <span
                className={cn({
                  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px":
                    activeItem == "OurServices",
                })}
              ></span>
            </li>

            {/* <li className="relative" onClick={() => handleItemClick("Products")}> */}
            {/*   Products */}
            {/*   <span */}
            {/*     className={cn({ */}
            {/*       "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px": */}
            {/*         activeItem == "Products", */}
            {/*     })} */}
            {/*   ></span> */}
            {/* </li> */}

            <li
              className="relative"
              onClick={() => handleItemClick("ContactsUs")}
            >
              Contact Us
              <span
                className={cn({
                  "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px":
                    activeItem == "ContactsUs",
                })}
              ></span>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="block sm:hidden cursor-pointer z-20 px-[1rem]"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        id="drawer"
        className={`fixed z-10 right-0 top-[0] sm:w-[20%] md:w-[40%] xl:w-[20%] h-full  transition-all ease-in-out duration:150 ${nav ? "opacity-100" : "opacity-0 invisible"
          }`}
      >
        <ul className="p-4 text-[#FFF] z-10 cursor-pointer mt-[1rem]">
          <div className="sm:hidden px-1 flex items-center">
            <li
              className={activeItem === "Senslyze" ? "active" : ""}
              onClick={() => handleItemClick("Senslyze")}
            >
              <p className="p-4 border-gray-200">Home</p>
            </li>
          </div>

          <div className=" px-1 flex items-center">
            <li
              className={activeItem === "AboutUs" ? "active" : ""}
              onClick={() => handleItemClick("AboutUs")}
            >
              <p className="p-4 border-gray-200">About Us</p>
            </li>
          </div>

          <div className=" px-1 flex items-center">
            <li
              className={activeItem === "OurServices" ? "active" : ""}
              onClick={() => handleItemClick("OurServices")}
            >
              <p className="p-4 border-gray-200">Our Services</p>
            </li>
          </div>

          {/* <div className=" px-1 flex items-center"> */}
          {/*   <li */}
          {/*     className={activeItem === "Products" ? "active" : ""} */}
          {/*     onClick={() => handleItemClick("Products")} */}
          {/*   > */}
          {/*     <p className="p-4 border-gray-200">Products</p> */}
          {/*   </li> */}
          {/* </div> */}

          <div className=" px-1 flex items-center">
            <li
              className={activeItem === "ContactsUs" ? "active" : ""}
              onClick={() => handleItemClick("ContactsUs")}
            >
              <p className="p-4 border-gray-200">Contact Us</p>
            </li>
          </div>

          {/* <div className=" px-1 flex items-center">
            <li
              className={activeItem === "footer" ? "active" : ""}
              onClick={() => handleItemClick("footer")}
            >
              <p className="p-4 border-gray-200">Footer</p>
            </li>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
