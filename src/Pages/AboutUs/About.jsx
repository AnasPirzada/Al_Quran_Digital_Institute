import React from "react";
import FreeTrail from "./FreeTrail";

function About() {
  const details = [
    {
      image: "/Frame 1261153708.png",
      title: "Flexible Timings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/Frame 1261153708.png",
      title: "Expert Teachers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/Frame 1261153708.png",
      title: "Expert Teachers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/Frame 1261153708.png",
      title: "Expert Teachers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <section>
        <div className="relative flex flex-col md:flex-row justify-center items-center">
          {/* Image Container */}
          <div className="w-full relative flex justify-center md:justify-end">
            <img
              src="/Frame 1261153740.png"
              alt="About-Us"
              className="w-full h-auto object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-4 md:px-16 mb-6">
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-[#1A1A1A]">
                About Us
              </h1>
              <p className="text-[#1A1A1A] text-lg sm:text-xl md:text-2xl font-medium mt-2 sm:mt-4">
                Al Rehman learning Quran institute
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 pt-10 px-4 md:px-16 gap-8 md:gap-16 lg:gap-20 xl:gap-20 2xl:gap-20 ">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-medium text-[#1C8E5A] text-3xl md:text-4xl">
              Al Rehman learning Quran institute
            </h1>
            <p className="font-normal text-base md:text-lg text-[#333333] mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat... Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat...Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat...Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat...
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <img src="/Group 9.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="pt-10 flex flex-col justify-center items-center gap-3 px-4 md:px-16">
          <h2 className="text-[#1C8E5A] text-lg md:text-xl text-center font-medium">
            Why Study with US
          </h2>
          <h1 className="font-medium text-xl md:text-2xl text-center">
            Al Rehman learning Quran institute
          </h1>
          <p className="text-[#333333] font-normal text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
          {details.map((item, index) => (
            <div key={index} className="text-start">
              <img src={item.image} alt="img" className="" />
              <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
              <p className="mt-2 text-[#333333] text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="px-4 md:px-10">
          <FreeTrail />
        </div>
      </section>
    </>
  );
}

export default About;
