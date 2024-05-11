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
    <div className="m-auto mt-10 flex max-w-[60vw] items-center justify-center bg-black">
      <BackgroundGradient className="max-w-[80vw] rounded-[22px] bg-black p-4 text-justify text-white dark:bg-zinc-900 sm:p-8">
        <div className="w-full space-y-6 leading-9">
          <h2 className="pb-10 text-center text-xl font-bold md:text-3xl">
            Welcome to Senslyze — Where Innovation Meets Impact
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="first-letter:float-left first-letter:mr-4 first-letter:bg-gradient-to-r first-letter:from-white first-letter:to-cyan-300 first-letter:bg-clip-text first-letter:text-2xl first-letter:font-bold first-letter:text-transparent md:first-letter:text-7xl">
                At Senslyze, we don’t just embrace technology, we create the
                future with it. As a vanguard in IT solutions, our expertise
                spans from building High Throughput Architectures that handle
                massive scales, to crafting tailored Web Applications that drive
                business success. We’re more than a software consulting firm; we
                are your partner in redefining potential.
              </div>
              <p>
                At Senslyze, success is not just about meeting expectations but
                exceeding them, transforming challenges into opportunities. We
                invite you to join us in this journey of transformation, where
                your vision is met with our innovative drive. Together, let’s
                shape your future with solutions that are not just effective,
                but revolutionary.
              </p>
            </div>

            <div className="flex flex-col items-center gap-14">
              <ul className="list-disc space-y-4">
                <h3 className="text-xl font-bold">Why Choose Senslyze?</h3>
                <li>
                  <span className="font-semibold">Pioneering Solutions:</span>{" "}
                  We go beyond the standard to pioneer developments that set
                  industry benchmarks.
                </li>
                <li>
                  <span className="font-semibold">Tailored Excellence:</span>{" "}
                  Each project is a unique landscape, and we navigate it by
                  customizing our solutions to perfectly fit your business
                  needs.
                </li>
                <li>
                  <span className="font-semibold">Proven Expertise:</span> Our
                  team is your team—experts who aren’t just skilled, but
                  continually push the envelope on what’s possible in
                  technology.
                </li>
              </ul>

              <BackgroundGradient className="rounded-3xl bg-zinc-900 py-2" containerClassName="w-full text-center">
                <button
                  onClick={() => handleItemClick("ContactsUs")}
                  className="text-grad text-nowrap text-lg"
                >
                  JOIN US
                </button>
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};
// z-1

export default BackgroundGradientDemo;
