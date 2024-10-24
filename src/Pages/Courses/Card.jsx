import React from "react";

const Card = ({ title, description, icon, isActive, onClick, buttonText }) => {
  return (
    <div className="relative  sm:px-5 px-5">
      <div className="flex items-center justify-center translate-y-12 z-20 relative">
        <img src={icon} alt={`${title} Icon`} className="w-100 h-100" />
      </div>

      {/* Card below the icon */}
      <div className="bg-white shadow-lg rounded-[30px_30px_0px_0px] p-6 relative overflow-hidden ">
        <div className="flex justify-end items-start w-full">
          <img src="/Card-right.png" alt="" />
        </div>
        <div className="mt-2 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>

      {/* Button with active and inactive states */}
      <div
        className={`transition-transform transform hover:scale-105 p-2 z-10 ${
          isActive ? "bg-[#1C8E5A] z-10" : "bg-[#E1E1E1]"
        }`}
      >
        <button
          onClick={onClick}
          className="px-4 py-2 text-white rounded-full flex items-center justify-center "
        >
          {buttonText}
          <span className="ml-2">&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
