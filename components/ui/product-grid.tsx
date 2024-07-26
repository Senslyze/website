import React from 'react';
import Memegene1 from '../../app/assets/image 14.png'
import Memegene2 from '../../app/assets/1image.png'
import Analytics1 from '../../app/assets/2image.png'
import Analytics2 from '../../app/assets/3image.png'
import MemeLogo from '../../app/assets/memelogo.png'
import AnalyticsLogo from '../../app/assets/AnalyticsLogo.png'
import BlogoLogo from '../../app/assets/blogologo.png'
import blog1 from '../../app/assets/blog1.png'
import blog2 from '../../app/assets/blog2.png'
import Image from 'next/image';
import { useEffect } from 'react';

const ProductGrid = () => {

  useEffect(() => {
    const wand = document.getElementById("wand");
    const tiles = document.querySelectorAll<HTMLElement>(".tile");

    const xy = (x: number, y: number) => ({ x, y });
    const px = (value: number) => `${value}px`;
    const deg = (value: number) => `${value}deg`;
    const clamp = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);

    const updateMouse = (mouseX: number, mouseY: number) => {
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
      
      const mouse = {
        position: xy(mouseX, mouseY),
        decimal: xy(mouseX / windowWidth, mouseY / windowHeight),
        multiplier: xy(1.3, 0.4),
        offset: xy(windowWidth * -0.15, windowHeight * 0.1),
        modifiedPosition: xy(0, 0)
      }
      
      mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;  
      mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;  
      
      return mouse;
    }
    const revealImages = (mouseX: number) => {
      tiles.forEach((tile) => {
        const htmlTile = tile as HTMLElement;  // Type assertion here
        const dimensions = htmlTile.getBoundingClientRect(),
              relativeMouseX = mouseX - dimensions.left,
              mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);
        
        const opacity = mouseXAsDecimal,
              blur = 1 - mouseXAsDecimal;
        
        htmlTile.style.setProperty("--opacity", opacity.toString());
        htmlTile.style.setProperty("--blur", blur.toString());
      });
    }
    const getWandStyles = (mouse: ReturnType<typeof updateMouse>) => ({
      left: px(mouse.modifiedPosition.x),
      top: px(mouse.modifiedPosition.y),
      rotate: deg(mouse.decimal.x * 20 - 10)
    });

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = updateMouse(e.clientX, e.clientY);
      const wandStyles = getWandStyles(mouse);
    
      if (wand) {
        wand.animate(wandStyles, { duration: 400, fill: "forwards" });
      }
    
      revealImages(mouse.modifiedPosition.x);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <div
        id="wand"
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 hidden"
      ></div>
      <div className="flex flex-col gap-4">
        {/* First row - 2 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col">
            <div className="group relative overflow-hidden h-60 md:h-80 mb-4">
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={Memegene1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={Memegene2}
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src={MemeLogo}
                alt="Meme Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">MemeGenie</h3>
                <h6 className="text-white">Create Meme from any image....</h6>
              </div>
            </div>
          </div>

          {/* <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col">
            <div className=" group relative overflow-hidden h-60 md:h-80 mb-4">
              <Image
                className=" img rounded-md transition-opacity duration-300 absolute inset-0"
                src={Analytics1}
                alt=""
              />
              <Image
                className=" img rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100"
                src={Analytics2}
                alt=""
              />
            </div>
            <div className="flex items-center">
              <Image
                src={AnalyticsLogo}
                alt="Analytics Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />

              <div>
                <h3 className="text-white text-lg">Analytics Dashboard</h3>
                <h6 className="text-white">Create Meme from any image....</h6>
              </div>
            </div>
          </div> */}

          <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col">
            <div className="group relative overflow-hidden h-60 md:h-80 mb-4">
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={Analytics1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={Analytics2}
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src={AnalyticsLogo}
                alt="Analytics Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">Analytics Dashboard</h3>
                <h6 className="text-white">Create Meme from any image....</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Second row - 3 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col md:col-span-2">
          <div className="group relative overflow-hidden h-60 md:h-80 mb-4">
    
            </div>

            <div className="flex items-center">
              <Image
                src={MemeLogo}
                alt="Meme Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">MemeGenie</h3>
                <h6 className="text-white">Create Meme from any image....</h6>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col md:col-span-2">
          <div className="group relative overflow-hidden h-60 md:h-80 mb-4">
    
            </div>

            <div className="flex items-center">
              <Image
                src={MemeLogo}
                alt="Meme Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">MemeGenie</h3>
                <h6 className="text-white">Create Meme from any image....</h6>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#2A2A2A] hover:border-[#0047ff] p-4 rounded-md flex flex-col md:col-span-3">
            {/* <div className="relative overflow-hidden h-60 md:h-80 mb-4">
              <Image
                className="rounded-md transition-opacity duration-300 absolute inset-0"
                src={blog1}
                alt=""
              />
              <Image
                className="rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100"
                src={blog2}
                alt=""
              />
            </div>
            <div className="flex items-center">
              <Image
                src={BlogoLogo}
                alt="Box 5 Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">Blog-pedia</h3>
                <h6 className="text-white">Create blog from any topic....</h6>
              </div>
            </div> */}

<div className="group relative overflow-hidden h-60 md:h-80 mb-4">
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={blog1}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <Image
                  className="rounded-md w-full h-full object-cover"
                  src={blog2}
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src={BlogoLogo}
                alt="Box 5 Logo"
                className="w-8 h-8 mr-2 rounded-sm"
              />
              <div>
                <h3 className="text-white text-lg">Blog-pedia</h3>
                <h6 className="text-white">Create blog from any topic....</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;