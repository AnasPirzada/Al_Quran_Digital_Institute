import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Modal = ({ isOpen, setIsOpen }) => {
  // State variables
  const [selectedOption, setSelectedOption] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Dropdown handling functions
  const handleOptionClick = (option) => {
    setInput4(option);
    setShowDropdown(false);
  };

  const handleImageClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // Button click handler
  const handleEnrollNowClick = () => {
    console.log("Enroll Now clicked");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#FFD050] to-[#FFD050] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />

            {/* Image Section */}
            <div className="flex justify-end items-end">
              <img
                src="/si_close-duotone.svg"
                alt="close"
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Text and Radio Button Section */}
            <div className="flex flex-col gap-4 justify-center text-white">
              <motion.h1
                className="text-[#1C8E5A] font-semibold text-2xl text-center"
                variants={sectionVariants}
              >
                Book 3 Days Free Trial
              </motion.h1>

              <motion.div
                className="flex items-center gap-4 justify-center"
                variants={sectionVariants}
              >
                <label className={`flex items-center gap-2 ${selectedOption === "Male" ? "text-[#1C8E5A]" : "text-[#9F9F9F]"}`}>
                  <input
                    type="radio"
                    value="Male"
                    checked={selectedOption === "Male"}
                    onChange={() => setSelectedOption("Male")}
                    className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${selectedOption === "Male" ? "border-[#1C8E5A]" : "border-transparent"}`}
                  />
                  <span>Male</span>
                </label>
                <label className={`flex items-center gap-2 ${selectedOption === "Female" ? "text-[#1C8E5A]" : "text-[#9F9F9F]"}`}>
                  <input
                    type="radio"
                    value="Female"
                    checked={selectedOption === "Female"}
                    onChange={() => setSelectedOption("Female")}
                    className={`form-radio cursor-pointer w-4 h-4 rounded-full border-2 ${selectedOption === "Female" ? "border-[#1C8E5A]" : "border-transparent"}`}
                  />
                  <span>Female</span>
                </label>
              </motion.div>

              {/* Input Fields */}
              <motion.div className="flex flex-col gap-y-4 mt-4" variants={sectionVariants}>
                <div className="flex flex-col md:flex-row gap-4 relative">
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

                  <div className="flex items-center bg-white p-1 ps-3 w-full md:w-1/2 rounded-3xl relative">
                    <PhoneInput
                      country={"us"}
                      value={input2}
                      onChange={(phone) => setInput2(phone)}
                      enableSearch
                      inputClass="text-black rounded-3xl border-none"
                      buttonClass="rounded-3xl border-none"
                      dropdownClass="text-black bg-white rounded-3xl shadow-lg border border-gray-300"
                      className="flex w-full items-center rounded-3xl"
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
                        className="absolute right-0 bottom-0 mt-10 bg-white text-black border border-gray-300 shadow-lg p-2 z-10 w-full md:w-48"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {["Qaida Noorania Online", "Quran Reading Online", "Tajweed Quran Online", "Quran Memorization Online"].map((option) => (
                          <div
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
                          >
                            {option}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enroll Button */}
            <motion.div className="flex justify-center mt-4" variants={sectionVariants}>
              <button
                onClick={handleEnrollNowClick}
                className="px-8 py-3 bg-[#1C8E5A] hover:bg-green-700 font-semibold rounded-3xl transition duration-300"
              >
                Enroll Now
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
