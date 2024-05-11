import React from "react";
import Image from "next/image";
import senslyze from "@/app/assets/footer-senslyze.svg";
import vactor1 from "@/app/assets/Vector-1.svg";
import vactor2 from "@/app/assets/Vector-2.svg";
import vactor3 from "@/app/assets/Vector-3.svg";
import vactor4 from "@/app/assets/Vector.svg";

const Footer = () => {
  const link1 = "https://twitter.com/senslyze";
  const link2 = "https://www.linkedin.com/in/senslyze-business-b84213289/";
  const link3 = "https://www.instagram.com/senslyze/";

  const link4 = "https://www.facebook.com/profile.php?id=61551632660784";

  const handleLinkClick = (link: string) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };
  const footerNavs = [
    {
      label: "Navigation",
      items: [{ name: "Home" }, { name: "About Us" }],
    },
    {
      label: "Need Help",
      items: [{ name: "FAQs" }, { name: "Contacts Us" }],
    },
    {
      label: "Contact",
      items: [
        { name: "Email: senslyzeforbusiness@gmail.com" },
        { name: "Contact No: +91 8446681324" },
      ],
    },
  ];

  return (
    // <footer className="bg-transparent w-[100%] md:w-[86%] lg:w-[93%] xl:w-[82%] flex m-auto">
    //   <div className="max-w-screen-xl mx-auto md:px-2">
    //     <div className="flex flex-col items-center md:flex-row md:justify-between">
    //       <div className="flex flex-col items-center md:mb-0">
    //         <Image src={logo1} alt="logo1" width={100} height={100} />
    //         <Image src={senslyze1} alt="senslyze1" width={100} height={100} />
    //       </div>

    //       <div>
    //         <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //           {footerNavs.map((item, idx) => (
    //             <div className="text-gray-300 text-start" key={idx}>
    //               <span className="text-gray-200 font-semibold text-center">
    //                 {item.label}
    //               </span>
    //               <ul className="space-y-2">
    //                 {item.items.map((el, idx) => (
    //                   <li
    //                     className="text-[12px] md:text-[14px] md:px-0 px-[1rem]"
    //                     key={idx}
    //                   >
    //                     {el.name}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex justify-center items-center space-x-6 mt-[3rem]">
    //       <a
    //         href={link1}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         onClick={() => handleLinkClick(link1)}
    //       >
    //         <Image width={38} height={38} src={vactor1} alt="Vector-1.svg" />
    //       </a>
    //       <a
    //         href={link2}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         onClick={() => handleLinkClick(link2)}
    //       >
    //         <Image width={38} height={38} src={vactor2} alt="Vector-2.svg" />
    //       </a>
    //       <a
    //         href={link3}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         onClick={() => handleLinkClick(link3)}
    //       >
    //         <Image width={38} height={38} src={vactor3} alt="Vector-3.svg" />
    //       </a>
    //       <a
    //         href={link4}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         onClick={() => handleLinkClick(link4)}
    //       >
    //         <Image width={38} height={38} src={vactor4} alt="Vector.svg" />
    //       </a>
    //     </div>

    //     <div className="mt-6 border-t border-gray-700 w-[80vw]"></div>
    //     <div className="py-1 flex flex-col items-center md:flex-row justify-between">
    //       <p className="text-gray-300 text-lg md:text-base text-center p-2">
    //         © 2024 Senslyze Inc.Copyright. All rights reserved.
    //       </p>
    //       <div className="hidden sm:flex items-center gap-2">
    //         <p className="text-gray-300 text-sm md:text-base">English</p>
    //         <span className="text-gray-300 text-sm md:text-base">|</span>
    //         <p className="text-gray-300 text-sm md:text-base">TOU</p>
    //         <span className="text-gray-300 text-sm md:text-base">|</span>
    //         <p className="text-gray-300 text-sm md:text-base">Privacy</p>
    //         <span className="text-gray-300 text-sm md:text-base">|</span>
    //         <p className="text-gray-300 text-sm md:text-base">Community</p>
    //         <span className="text-gray-300 text-sm md:text-base">|</span>
    //         <p className="text-gray-300 text-sm md:text-base">
    //           Cookie preferences
    //         </p>
    //       </div>
    //       <div className="sm:hidden flex flex-col items-center pt-2 gap-1">
    //         <p className="text-gray-300 text-sm md:text-base">English</p>
    //         <p className="text-gray-300 text-sm md:text-base">TOU</p>
    //         <p className="text-gray-300 text-sm md:text-base">Privacy</p>
    //         <p className="text-gray-300 text-sm md:text-base">Community</p>
    //         <p className="text-gray-300 text-sm md:text-base">
    //           Cookie preferences
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="">
      <div className="flex flex-col items-center gap-10 w-[80vw] m-auto text-white md:hidden">
        <Image src={senslyze} alt="senslyze" width={250} height={60} />

        <div className="flex flex-col items-center gap-4">
          {footerNavs.map(({ label, items }) => (
            <div key={label}>
              <ul className="flex flex-col items-center">
                <span className="font-medium">{label}</span>
                {items.map(({ name }) => (
                  <li className="text-xs mt-1 text-neutral-300" key={name}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex gap-8">
          <a
            href={link4}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(link4)}
          >
            <Image width={26} height={26} src={vactor4} alt="Vector.svg" />
          </a>
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(link1)}
          >
            <Image width={26} height={26} src={vactor1} alt="Vector-1.svg" />
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(link2)}
          >
            <Image width={26} height={26} src={vactor2} alt="Vector-2.svg" />
          </a>
          <a
            href={link3}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick(link3)}
          >
            <Image width={26} height={26} src={vactor3} alt="Vector-3.svg" />
          </a>
        </div>

        <div className="border-t border-gray-700 w-[80vw]"></div>

        <div className="">
          <div className="text-xs text-slate-300">
            © 2024 Senslyze Inc. All rights reserved.
          </div>
          <div className="flex flex-col gap-2 items-center mt-2">
            <p className="text-xs text-slate-300">English</p>
            <p className="text-xs text-slate-300">TOU</p>
            <p className="text-xs text-slate-300">Privacy</p>
            <p className="text-xs text-slate-300">Community</p>
            <p className="text-xs text-slate-300">Cookie preferences</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col md:items-center md:gap-10 md:w-[80vw] md:m-auto md:text-white">
        <div className="text-white w-[80vw] flex m-auto">
          <div className="flex gap-14 m-auto">
            <div className="flex flex-col items-center w-52">
              <Image src={senslyze} alt="senslyze1" width={250} height={60} />
            </div>

            <div className="flex flex-col justify-between mb-1">
              <div className="flex gap-12">
                {footerNavs.map(({ label, items }) => (
                  <div className="flex flex-col" key={label}>
                    <span className="font-medium">{label}</span>
                    <ul className="text-xs mt-4 leading-5 text-neutral-300">
                      {items.map((el, index) => (
                        <li key={index}>{el.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex gap-10">
                <a
                  href={link4}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(link4)}
                >
                  <Image
                    width={38}
                    height={38}
                    src={vactor4}
                    alt="Vector.svg"
                  />
                </a>
                <a
                  href={link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(link1)}
                >
                  <Image
                    width={38}
                    height={38}
                    src={vactor1}
                    alt="Vector-1.svg"
                  />
                </a>
                <a
                  href={link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(link2)}
                >
                  <Image
                    width={38}
                    height={38}
                    src={vactor2}
                    alt="Vector-2.svg"
                  />
                </a>
                <a
                  href={link3}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(link3)}
                >
                  <Image
                    width={38}
                    height={38}
                    src={vactor3}
                    alt="Vector-3.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-3 border-t border-gray-700 w-[80vw]"></div>

        <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full md:max-w-[80vw] md:pt-1 md:pb-2 md:px-20">
          <div className="text-xs text-slate-300">
            © 2024 Senslyze Inc.Copyright. All rights reserved.
          </div>
          <div className="flex gap-4">
            <p className="text-xs text-slate-300">English</p>
            <p className="text-xs text-slate-300">TOU</p>
            <p className="text-xs text-slate-300">Privacy</p>
            <p className="text-xs text-slate-300">Community</p>
            <p className="text-xs text-slate-300">Cookie preferences</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
