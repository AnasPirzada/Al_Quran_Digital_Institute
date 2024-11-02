import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [selectedOption, setSelectedOption] = useState("Male");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Animation setup
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  if (inView) {
    controls.start("visible");
  }

  // Define animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleImageClick = () => setShowDropdown(!showDropdown);

  const handlePhoneInputClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown on phone input click
  };

  const handleOptionClick = (option) => {
    setInput4(option);
    setShowDropdown(false);
  };

  return (
    <motion.section
      className="bg-[#1C8E5A] mt-10 "
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#1C8E5A] overflow-hidden">
        {/* Image and Text Section */}
        <motion.div
          className="col-span-12 relative md:col-span-5 flex  flex-col gap-4 justify-center items-start"
          variants={sectionVariants}
        >
          {/* Logo and Text Section */}
          <img
            src="/Frame 7.svg"
            alt="Footer Logo"
            className="mb-4 relative sm:px-4 px-3"
          />

          <p className="font-normal text-base text-[#FFFFFF] text-wrap mb-4 relative sm:px-4 px-3">
            Al Rehman learning Quran institute, we are dedicated to offering
            students around the globe a profound understanding of the Holy Quran
            and the wisdom embedded in its verses. Recognized internationally
            for our high-quality online education, we pride ourselves on
            delivering exceptional support to our learners. Our qualified tutors
            possess authentic degrees and Ijazah certificates, ensuring that you
            receive the best guidance on your journey to Quranic knowledge.
          </p>

          {/* Vector Image Section */}
          <div className=" absolute bottom-[-0px]">
            <img src="/Vector.png" alt="Vector Image" />
          </div>
        </motion.div>

        <div className=" col-span-2 md:col-span-2"></div>
        {/* Form Section */}
        <motion.div
          className="col-span-12 p-4 md:col-span-5 flex flex-col gap-4 justify-center text-white"
          variants={sectionVariants}
        >
          <h1 className="text-[#FFFFFF] font-semibold text-xl mb-2 md:mb-4 text-center">
            Book 3 Days Free Trial
          </h1>

          {/* Gender Selection */}
          <div className="flex items-center gap-4 justify-center">
            <label
              className={`flex items-center gap-2 ${
                selectedOption === "Male" ? "text-[#FFD050]" : "text-[#9F9F9F]"
              }`}
            >
              <input
                type="radio"
                value="Male"
                checked={selectedOption === "Male"}
                onChange={() => setSelectedOption("Male")}
                className={`form-radio cursor-pointer w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 focus:ring-0 ${
                  selectedOption === "Male"
                    ? "border-[#FFD050]"
                    : "border-transparent"
                } accent-[#FFD050]`}
              />
              <span>Male</span>
            </label>
            <label
              className={`flex items-center gap-2 ${
                selectedOption === "Female"
                  ? "text-[#FFD050]"
                  : "text-[#9F9F9F]"
              }`}
            >
              <input
                type="radio"
                value="Female"
                checked={selectedOption === "Female"}
                onChange={() => setSelectedOption("Female")}
                className={`form-radio cursor-pointer w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 focus:ring-0 ${
                  selectedOption === "Female"
                    ? "border-[#FFD050]"
                    : "border-transparent"
                } accent-[#FFD050]`}
              />
              <span>Female</span>
            </label>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-y-4 mt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl">
                <img src="/solar_user-linear.png" alt="" />
                <hr className="h-7 border-[#9F9F9F] border mx-2" />
                <input
                  type="text"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  placeholder="Name"
                  className="p-1 rounded-3xl text-black w-full outline-transparent"
                />
              </div>

              <div className="flex items-center overflow-hidden bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative">
                <PhoneInput
                  country={"us"} // default country
                  value={input2}
                  onChange={(phone) => setInput2(phone)}
                  enableSearch={true} // Enables search within the dropdown
                  inputClass="text-black rounded-3xl outline-transparent w-full border-none"
                  buttonClass="rounded-3xl border-none"
                  dropdownClass="text-black bg-white rounded-3xl shadow-lg border border-gray-300 max-h-56 overflow-y-auto" // Max height and scroll for dropdown
                  className="flex w-full items-center rounded-3xl border-none" // Wrapper class
                  onClick={handlePhoneInputClick} // Add onClick handler
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl">
                <img src="Frame 33.svg" alt="" />
                <hr className="h-7 border-[#9F9F9F] border mx-2" />
                <input
                  type="text"
                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                  placeholder="Email"
                  className="p-1 rounded-3xl text-black w-full outline-transparent"
                />
              </div>

              <div className="flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative">
                <input
                  type="text"
                  value={input4}
                  onChange={(e) => setInput4(e.target.value)}
                  placeholder="Qaida Noorania Online"
                  className="p-[6px] ps-1 rounded-3xl text-black w-full outline-transparent"
                />
                <img
                  src="/Frame 36.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={handleImageClick}
                />
                {showDropdown && (
                  <motion.div
                    className="absolute right-0 bottom-0 rounded-3xl mt-10 bg-white border border-gray-300 shadow-lg p-2 z-10 w-full md:w-48"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      "Qaida Noorania Online",
                      "Quran Reading Online",
                      "Tajweed Quran Online",
                      "Quran Memorization Online",
                    ].map((option) => (
                      <p
                        key={option}
                        className="text-gray-700 cursor-pointer hover:bg-gray-100 p-[7px] rounded"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <motion.div
            className="flex justify-center mt-6 md:mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-[#FFD050]  font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-yellow-400 w-3/4">
              Enroll Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Footer;
