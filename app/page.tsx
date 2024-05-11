// website/app/page.tsx
"use client";
import React from "react";
import Navbar from "@/components/NavBar";
import Link from "next/link";
import Blob from "@/app/blob/page";
import Image from "next/image";
import logo from "./assets/logo.svg";
import logo1 from "./assets/logo1.svg";
import senslyze from "./assets/senslyze.svg";
import senslyze1 from "./assets/senslyze1.svg";
import vactor1 from "./assets/Vector-1.svg";
import vactor2 from "./assets/Vector-2.svg";
import vactor3 from "./assets/Vector-3.svg";
import vactor4 from "./assets/Vector.svg";
import menu from "@/app/assets/menu_icon.svg";

import { Button } from "@/components/ui/moving-border";
import BackgroundGradientDemo from "@/components/background";
import Form from "@/components/form";
import "@/app/script.js";
import Footers from "@/components/footer";
// import Foot from "@/components/Footernew";

const App: React.FC = () => {
  return (
    <div className="app relative">
      <div id="Senslyze" className="section">
        <Navbar />
        <div className="logo-container">
          <div className="flex h-[300px] w-[180px] items-center md:h-[700px] md:w-[350px]">
            <Image width={350} height={700} src={logo} alt="logo.svg" />
          </div>

          <h1>
            <div>
              <span className="Senslyzeimage">Senslyze</span>

              <p className="channelize absolute right-[18%] top-[57%] mt-4 font-medium italic text-white">
                - &quot;Channelize Your Ideas to Products&quot;
              </p>
            </div>
          </h1>
        </div>
        <div className="button-container">
          <span
            className="absolute w-full md:left-[3%] md:top-[25%] lg:left-[8%] lg:top-[15%] xl:left-[15%] xl:top-[20%]"
            id="transform"
          >
            <Button
              onClick={() => {}}
              duration={2000}
              className="text-nowrap px-5 py-1"
            >
              <span className="text-grad">
                Transforming Visions Into Reality
              </span>
            </Button>
          </span>

          <span
            className="absolute w-full md:right-[-72%] md:top-[20%] lg:right-[-80%] lg:top-[20%] xl:left-[70%] xl:top-[20%]"
            id="consult"
          >
            <Button
              onClick={() => {}}
              duration={3000}
              className="text-nowrap px-5 py-1"
            >
              <span className="text-grad">Consult, Design, Refine</span>
            </Button>
          </span>

          <span className="absolute w-full md:bottom-[32%] md:left-[2%] lg:left-[10%] lg:top-[65%] xl:left-[10%] xl:top-[74%]">
            <Button
              onClick={() => {}}
              duration={4000}
              className="text-nowrap px-5 py-1"
            >
              <span className="text-grad">
                Building solutions that simplify your world.
              </span>
            </Button>
          </span>

          <span className="absolute w-full md:bottom-[25%] md:right-[-48%] lg:right-[-60%] lg:top-[75%] xl:right-[-60%] xl:top-[85%]">
            <Button
              onClick={() => {}}
              duration={5000}
              className="text-nowrap px-5 py-1"
            >
              <span className="text-grad">
                Transform complex problems into elegant solutions.
              </span>
            </Button>
          </span>
        </div>
      </div>

      {/* ======== */}

      <div id="AboutUs" className="flex min-h-screen items-center">
        <div className="mx-auto flex w-full flex-col">
          <div className="wrapper">
            <span className="text-[#B8ECFE]">ABOUT US</span>
          </div>

          <div id="background-card" className="">
            <BackgroundGradientDemo></BackgroundGradientDemo>
          </div>
        </div>
      </div>

      {/* ======= */}

      <div
        id="ContactsUs"
        className="flex  min-h-screen w-full flex-col items-center justify-center "
      >
        <div className="wrapper">
          <span className="text-[#B8ECFE]">CONTACT US</span>
        </div>

        <div className="relative w-2/3">
          <Form></Form>
        </div>
      </div>

      <div
        className="m-auto flex h-[2px] w-[80vw] bg-gradient-to-tr from-blue-300 to-green-700"
        style={{ borderRadius: "50%" }}
      ></div>

      {/* ======== */}
      <div className="relative mt-44 overflow-y-hidden pb-5">
        <Footers />
        <Blob params={{ bottom: "-30rem", right: "", left: "6%", top: "" }} />
        <Blob params={{ bottom: "-30rem", right: "6%", left: "", top: "" }} />
      </div>

      <Blob params={{ top: "-3%", left: "-4%", right: "", bottom: "" }} />
      <Blob params={{ top: "-3%", right: "-4%", left: "", bottom: "" }} />
      <Blob params={{ bottom: "-4%", left: "35%", right: "", top: "20%" }} />
      <Blob params={{ bottom: "20%", left: "-20%", right: "", top: "" }} />
      <Blob params={{ bottom: "20%", right: "-20%", left: "", top: "" }} />
    </div>
  );
};

export default App;
