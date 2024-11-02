// Importing necessary libraries and components
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Array to store slide information (title, description, and background image)
  const slides = [
    {
      title: "Learn Quran for kids",
      description:
        "Interactive Quran lessons for kids online, taught by experienced teachers for a strong foundation in faith.",
      bgImage: "bg-[url('/Group-12.png')]",
    },
    {
      title: "Learn Quran Online anytime anywhere",
      description:
        "Learn the Quran at your own pace, with online classes available anytime and from any location.",
      bgImage: "bg-[url('/Frame-417.png')]",
    },
    {
      title: "Quran Online Classes UK",
      description:
        "Experience engaging Quran classes online in the UK, tailored for your convenience and spiritual growth!",
      bgImage: "bg-[url('/Frame-418.png')]",
    },
  ];

  // Automatically change slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  // Handle slide navigation
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Motion variants for animations
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute w-full h-full ${
            slide.bgImage
          } bg-cover bg-center flex items-center justify-between p-8 ${
            currentIndex === index ? "block" : "hidden"
          }`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1 }}
          variants={bgVariants}
        >
          {/* Left side: Title, description, and button */}
          <div className="text-left text-white w-full md:w-[40%]">
            <motion.h2
              key={`title-${currentIndex}`} // Key for re-triggering animation
              className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              key={`desc-${currentIndex}`} // Key for re-triggering animation
              className="mt-4 text-[#4F4F4F]"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 1 }}
            >
              {slide.description}
            </motion.p>
            <motion.button
              key={`button-${currentIndex}`} // Key for re-triggering animation
              className=" mt-44 md:mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={() => setIsModalOpen(true)} // Open modal on click
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 1 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default Carousel;
