"use client";
import React from "react";
import Image from "next/image";
import Illustrator from "../app/assets/Illustration.svg"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface BlobProps {
  position?: { top: string };
}

const BackgroundGradientDemo: React.FC<BlobProps> = ({ position }) => {
  const handleItemClick = (item: string) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container m-auto  flex items-center justify-center md:max-w-[90%] w-full bg-red">
      <div className="max-w-[90vw]  rounded-[22px] bg-black p-4 px-7 text-justify text-white  sm:p-8">
        <div className="w-full md:mt-40 leading-6 md:leading-9">
          <h2 className="pb-5 text-left text-xl font-normal md:text-4xl">
            Welcome to <span className="Senslyzeimage1">Senslyze</span>{" "}
            <span className="block mt-2  pl-6 text-sm">
              -Where Innovation Meets Impact
            </span>
          </h2>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className=" sm:text-[18px] leading-snug sm:leading-8 text-left hyphens-auto break-words">
                At Senslyze, we don't just embrace technology, we create the
                future with it. As a vanguard in IT solutions, our expertise
                spans from building High Throughput Architectures that handle
                massive scales, to crafting tailored Web Applications that drive
                business success. We're more than a software consulting firm; we
                are your partner in redefining potential.<br/> At Senslyze, success
                is not just about meeting expectations but exceeding them,
                transforming challenges into opportunities. We invite you to
                join us in this journey of transformation, where your vision is
                met with our innovative drive. Together, let's shape your future
                with solutions that are not just effective, but revolutionary.
              </div>
            </div>

            <div className="flex flex-col items-center gap-14">
            <Image className='hidden sm:block'src={Illustrator} alt="Illustration of something" />
            </div>
          </div>
          <div className="space-y-6 ">
            <div className="mt-[1rem] md:mt-[7rem]">
            <h2 className="pb-5 text-left text-xl font-normal md:text-4xl">
            Why Choose <span className="Senslyzeimage1">Senslyze</span> ?{" "}
          </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className=" md:text-[28px]  mb-2">Pioneering Solutions</h4>
                <div className="w-1/2 sm:w-1/5 md:w-1/4 lg:w-1/2 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#0047ff]"></div>
                <p className="sm:text-[18px] mt-4 text-left leading-snug sm:leading-8">
                  We go beyond the standard to pioneer developments that set
                  industry benchmarks.
                </p>
              </div>

              <div>
                <h4 className="md:text-[28px] mb-2">Tailored Excellence</h4>
                <div className="w-1/2 sm:w-1/5 md:w-1/4 lg:w-1/2 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#0047ff]"></div>
                <p className="sm:text-[18px] mt-4 text-left leading-snug sm:leading-8">
                  Each project is a unique landscape, and we navigate it by
                  customizing our solutions to perfectly fit your business
                  needs.
                </p>
              </div>

              <div>
                <h4 className="md:text-[28px]  mb-2">Proven Expertise</h4>
                <div className="w-1/2 sm:w-1/5 md:w-1/4 lg:w-1/2 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#0047ff]"></div>

                <p className="sm:text-[18px] mt-4 leading-snug sm:leading-8">
                  Our team is your team—experts who aren't just skilled, but
                  continually push the envelope on what's possible in
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// z-1

export default BackgroundGradientDemo;
