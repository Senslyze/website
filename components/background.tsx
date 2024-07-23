"use client";
import React from "react";
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
    <div className="container m-auto mt-10 flex items-center justify-center md:max-w-[90%] w-full bg-red">
      <div className="max-w-[80vw] rounded-[22px] bg-black p-4 px-7 text-justify text-white  sm:p-8">
        <div className="w-full space-y-6 leading-6 md:leading-9">
          <h2 className="pb-10 text-left text-xl font-bold md:text-2xl">
            Welcome to <span className="Senslyzeimage1">Senslyze</span>{" "}
            <span className="block mt-2 text-sm">
              -Where Innovation Meets Impact
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="text-md sm:text-md leading-snug sm:leading-normal text-left hyphens-auto break-words">
                At Senslyze, we don't just embrace technology, we create the
                future with it. As a vanguard in IT solutions, our expertise
                spans from building High Throughput Architectures that handle
                massive scales, to crafting tailored Web Applications that drive
                business success. We're more than a software consulting firm; we
                are your partner in redefining potential. At Senslyze, success
                is not just about meeting expectations but exceeding them,
                transforming challenges into opportunities. We invite you to
                join us in this journey of transformation, where your vision is
                met with our innovative drive. Together, let's shape your future
                with solutions that are not just effective, but revolutionary.
              </div>
            </div>

            <div className="flex flex-col items-center gap-14">
          
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose <span className="Senslyzeimage2">Senslyze</span>?</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Pioneering Solutions</h4>
                <p className="leading-normal">
                  We go beyond the standard to pioneer developments that set
                  industry benchmarks.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Tailored Excellence</h4>
                <p className="leading-normal">
                  Each project is a unique landscape, and we navigate it by
                  customizing our solutions to perfectly fit your business
                  needs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Proven Expertise</h4>
                <p className="leading-normal">
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
