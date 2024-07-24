import React from 'react';
import Image from 'next/image';
import softwarearc from '../app/assets/softwarearc.svg'
import UIUX from '../app/assets/UIUX.svg'
import AIML from '../app/assets/AIML.svg'
import AppDevelopment from '../app/assets/AppDevelopment.svg'
import WebDevelopment from '../app/assets/WebDevelopment.svg'
import consultancy from '../app/assets/consultancy.svg'

const ServiceGrid = () => {
  return (

    <div className="grid grid-cols-1 p-4 md:grid-cols-3">
      <div className="p-4  flex flex-col sm:sm:border-r-2 sm:border-b-2 border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px]' src={consultancy}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4">
          Consultancy
        </h1>
        <p className="text-white text-center text-sm mt-4">
          Leverage strategic digital insights and expert guidance from our
          consultants for tailored solutions driving technology adoption and
          efficient project management.
        </p>
      </div>

      <div className="p-4  flex flex-col sm:sm:border-r-2 sm:border-b-2 border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px]' src={softwarearc}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4 ">
          Software Arc
        </h1>
        <p className="text-white text-center text-sm  mt-4">
          Develop robust, scalable software systems with our tailored high
          throughput architecture solutions for efficiency, flexibility, future
          scalability.
        </p>
      </div>

      <div className="p-4  flex flex-col sm:border-b-2 border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px] md:mr-2' src={UIUX}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4 ">
          UI/UX
        </h1>
        <p className="text-white text-center text-sm  mt-4">
          Our UI/UX experts craft captivating, intuitive interfaces by
          understanding user behaviors, creating memorable experiences that
          enhance engagement.
        </p>
      </div>

      <div className=" p-4  flex flex-col sm:border-r-2  border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px]' src={AIML}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4 ">
          AI/ML
        </h1>
        <p className="text-white text-center text-sm  mt-4">
          We harness AI's power; predictive analytics, natural language
          processing, intelligent decision-making, streamlined processes &
          unlock new opportunities.
        </p>
      </div>

      <div className=" p-4  flex flex-col sm:border-r-2  border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px]' src={AppDevelopment}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4">
          App Development
        </h1>
        <p className="text-white text-center text-sm  mt-4">
          Crafting innovative, user-friendly mobile apps for iOS and Android,
          ensuring seamless functionality and captivating user experiences.
        </p>
      </div>

      <div className="p-4 flex flex-col border-[#004E76]">
      <div className="relative flex items-center justify-center overflow-hidden h-30">
          <Image className='w-[50px] h-[50px]' src={WebDevelopment}   alt=""></Image>
        </div>
        <h1 className="text-white text-center text-2xl font-medium  mt-4">
          Web Development
        </h1>
        <p className="text-white text-center text-sm  mt-4">
          Enhance online visibility through our custom website development,
          crafting visually captivating, responsive websites for optimal
          performance and user engagement.
        </p>
      </div>
    </div>
  );
};

export default ServiceGrid;