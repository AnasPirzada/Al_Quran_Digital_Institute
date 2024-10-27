import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FreeTrail() {
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

  // Variants for the animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleImageClick = () => setShowDropdown((prev) => !prev);
  const handleOptionClick = (option) => {
    setInput4(option);
    setShowDropdown(false);
  };

  return (
    <motion.section
      className="bg-[#1C8E5A] rounded-3xl p-4 mt-10"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#1C8E5A] overflow-hidden">
        {/* Image Section */}
        <div className="col-span-12 md:col-span-5 flex justify-center items-center">
          <motion.img
            src="/Frame 1261153739.png"
            alt="Trial Image"
            className="w-1/2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* Text and Radio Button Section */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4 justify-center text-white">
          <motion.h1
            className="text-[#FFD050] font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 text-center"
            variants={sectionVariants}
          >
            Book 3 Days Free Trial
          </motion.h1>

          <motion.div
            className="flex items-center gap-4 justify-center"
            variants={sectionVariants}
          >
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
          </motion.div>

          {/* Input Fields */}
          <motion.div
            className="flex flex-col gap-y-4 mt-4"
            variants={sectionVariants}
          >
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

              <div className="flex items-center overflow-hidden bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl">
                <PhoneInput
                  country={"us"}
                  value={input2}
                  onChange={(phone) => setInput2(phone)}
                  inputClass="text-black rounded-3xl outline-transparent rounded-3xl w-full"
                  buttonClass="rounded-3xl"
                  className="border-none outline-none inline rounded-3xl"
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
                        className="text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Enroll Button */}
          <motion.div
            className="flex justify-center items-center mt-4"
            variants={sectionVariants}
          >
            <button className="h-10 md:h-12 w-[150px] md:w-[200px] bg-[#FFD050] rounded-3xl border-none text-[#FFFFFF] font-semibold text-sm md:text-base">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FreeTrail;
