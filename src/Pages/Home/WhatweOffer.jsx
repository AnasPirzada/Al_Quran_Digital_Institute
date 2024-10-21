import React, { useState } from 'react';

const WhatweOffer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const courses = [
    {
      title: 'Qaida Noorania Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
      buttonText: 'Enroll Now',
      icon: '/card-logo-Quran.svg',
    },
    {
      title: 'Quran Reading Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
      buttonText: 'Enroll Now',
      icon: '/card-logo-Quran.svg',
    },
    {
      title: 'Tajweed Quran Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
      buttonText: 'Enroll Now',
      icon: '/card-logo-Quran.svg',
    },
    {
      title: 'Quran Memorization Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.',
      buttonText: 'Enroll Now',
      icon: '/card-logo-Quran.svg',
    },
  ];

  return (
    <div className='relative bg-[#3F3322] p-20'>
      {/* Background image outside cards */}
      <div className="absolute inset-0 bg-[url('/what-we-offer.png')] bg-cover bg-center opacity-10 z-0"></div>

      {/* Section Header */}
      <div className='relative z-10 text-center mb-12'>
        <p className='text-yellow-400 font-bold text-lg'>WHAT WE OFFER</p>
        <p className='text-white text-2xl font-bold'>
          We Deliver Top-Quality Arabic & Quran Instruction
        </p>
      </div>

      {/* Cards Container */}
      <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {courses.map((course, index) => (
          <div key={index} className='relative'>
            <div className=' flex items-center justify-center mx-auto translate-y-12 z-20 relative'>
              <img
                src={course.icon}
                alt={`${course.title} Icon`}
                className='w-100 h-100'
              />
            </div>

            {/* Card below the icon */}
            <div className='bg-white shadow-lg rounded-[30px_30px_0px_0px] p-6 relative overflow-hidden '>
              {/* Card Content */}
              <div className='flex justify-end items-start w-full'>
                <img src='/Card-right.png' alt='' />
              </div>
              <div className='mt-2 text-center'>
                <h3 className='text-lg font-semibold text-gray-800'>
                  {course.title}
                </h3>
                <p className='text-gray-600 mt-2'>{course.description}</p>
              </div>
            </div>

            {/* Button with active and inactive states */}
            <div
              className={`transition-transform transform hover:scale-105 p-2 ${
                activeIndex === index ? 'bg-[#1C8E5A]' : 'bg-[#E1E1E1]'
              }`}
            >
              <button
                onClick={() => setActiveIndex(index)} // Set the active button
                className='px-4 py-2 text-white rounded-full flex items-center justify-center'
              >
                {course.buttonText}
                <span className='ml-2'>&gt;&gt;</span> {/* Arrow icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatweOffer;
