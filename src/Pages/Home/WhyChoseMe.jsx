import React from 'react';

const WhyChoseMe = () => {
  return (
    <div>
      <div className="h-[100vh] flex justify-center mt-72 md:mt-0 items-center bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start p-4 md:p-0">
          {/* Left: Images Section */}
          <div className="flex flex-col space-y-4 md:space-y-2 md:w-1/3">
            <div className="w-full">
              <img
                src="/why-chose-side-image.svg"
                className="w-[100%]"
                alt="Large Image"
              />
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-10 md:ml-8">
            <h3 className="text-green-500 font-semibold text-lg">Why Choose</h3>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">
              Smart Quran Institute
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            {/* Flexbox for paragraphs with proper spacing */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <img
                  src="/parar-upper-line.svg"
                  className="w-[60%]"
                  alt="Upper line"
                />
                <h4 className="text-lg mt-2 font-semibold text-gray-800">
                  Free Trial Classes for All
                </h4>
                <p className="text-gray-600">
                  At Quran Online Academy, we bring years of dedicated
                  experience in teaching the Quran online with the intention of
                  spreading knowledge for the sake of Allah. Enjoy a free trial
                  of our online Quran classes anytime. Register now for Skype
                  lessons or contact us for a free consultation!
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="/parar-upper-line.svg"
                  className="w-[60%]"
                  alt="Upper line"
                />
                <h4 className="text-lg mt-2 font-semibold text-gray-800">
                  Expert Quran Tutor
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseMe;
