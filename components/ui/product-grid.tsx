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

const ProductGrid = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* First row - 2 boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#2A2A2A] p-4 rounded-md flex flex-col">
          <div className="relative overflow-hidden h-60 md:h-80 mb-4">
            <Image
              className="rounded-md transition-opacity duration-300 absolute inset-0"
              src={Memegene1}
              alt=""
            />
            <Image
              className="rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100"
              src={Memegene2}
              alt=""
            />
          </div>
          <div className="flex items-center">
            <Image
              src={MemeLogo}
              alt="Meme Logo"
              className="w-8 h-8 mr-2 rounded-sm"
            />
            <div>
              <h3 className="text-white text-lg">MemeGenie</h3>
              <h6 className='text-white'>Create Meme from any image....</h6>
            </div>
          </div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-md flex flex-col">
          <div className="relative overflow-hidden h-60 md:h-80 mb-4">
            <Image
              className="rounded-md transition-opacity duration-300 absolute inset-0"
              src={Analytics1}
              alt=""
            />
            <Image
              className="rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100"
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
            <h6 className='text-white'>Create Meme from any image....</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Second row - 3 boxes */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className="bg-[#2A2A2A] p-4 rounded-md flex flex-col md:col-span-2">
          <div className="relative overflow-hidden h-60 md:h-80 mb-4">
            {/* <Image className='rounded-md transition-opacity duration-300 absolute inset-0' src={Box3Image1} alt="" />
      <Image className='rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100' src={Box3Image2} alt="" /> */}
          </div>
          <div className="flex items-center">
            <Image
              src={MemeLogo}
              alt="Box 3 Logo"
              className="w-8 h-8 mr-2 rounded-sm"
            />
            <div>
              <h3 className="text-white text-lg">MemeGenie</h3>
              <h6 className='text-white'>Create Meme from any image....</h6>
            </div>
          </div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-md flex flex-col md:col-span-2">
          <div className="relative overflow-hidden h-60 md:h-80 mb-4">
            {/* <Image className='rounded-md transition-opacity duration-300 absolute inset-0' src={Box4Image1} alt="" /> */}
            {/* <Image className='rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100' src={Box4Image2} alt="" /> */}
          </div>
          <div className="flex items-center">
            <Image
              src={MemeLogo}
              alt="Box 4 Logo"
              className="w-8 h-8 mr-2 rounded-sm"
            />
            <div>
              <h3 className="text-white text-lg">MemeGenie</h3>
              <h6 className='text-white'>Create Meme from any image....</h6>
            </div>
          </div>
        </div>

        <div className="bg-[#2A2A2A] p-4 rounded-md flex flex-col md:col-span-3">
          <div className="relative overflow-hidden h-60 md:h-80 mb-4">
            <Image className='rounded-md transition-opacity duration-300 absolute inset-0' src={blog1} alt="" />
      <Image className='rounded-md transition-opacity duration-300 absolute inset-0 opacity-0 hover:opacity-100' src={blog2} alt="" />
          </div>
          <div className="flex items-center">
            <Image
              src={BlogoLogo}
              alt="Box 5 Logo"
              className="w-8 h-8 mr-2 rounded-sm"
            />
            <div>
              <h3 className="text-white text-lg">Blog-pedia</h3>
              <h6 className='text-white'>Create blog from any topic....</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;