import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Modal from '../../Components/Modal';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

  // Array to store slide information with desktop and mobile images
  const slides = [
    {
      title: 'Learn Quran for kids',
      description:
        'Interactive Quran lessons for kids online, taught by experienced teachers for a strong foundation in faith.',
      bgImageDesktop: "bg-[url('/Group-12.png')]",
      bgImageMobile: "bg-[url('/Group-12.png')]", // Add mobile-specific image URL
    },
    {
      title: 'Learn Quran Online anytime anywhere',
      description:
        'Learn the Quran at your own pace, with online classes available anytime and from any location.',
      bgImageDesktop: "bg-[url('/Frame-417.png')]",
      bgImageMobile: "bg-[url('/Frame-417.png')]",
    },
    {
      title: 'Quran Online Classes UK',
      description:
        'Experience engaging Quran classes online in the UK, tailored for your convenience and spiritual growth!',
      bgImageDesktop: "bg-[url('/Frame-418.png')]",
      bgImageMobile: "bg-[url('/Frame-418.png')]",
    },
  ];

  // Effect to check the screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set to true if width is less than 768px (Tailwind's md breakpoint)
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  // Automatically change slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  // Slide navigation functions
  const goToNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Animation variants
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
    <div className='relative h-[50vh] w-full md:h-[100vh] overflow-hidden'>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute w-50 md:w-full md:h-full ${
            isMobile ? 'bg-contain bg-no-repeat' : 'bg-cover'
          } flex items-center justify-between ${
            currentIndex === index ? 'block' : 'hidden'
          } ${isMobile ? slide.bgImageMobile : slide.bgImageDesktop}`}
          initial='hidden'
          animate='visible'
          exit='hidden'
          transition={{ duration: 1 }}
          variants={bgVariants}
        >
          {/* Left side content */}
          <div className='text-left text-white px-4 pt-60 md:pt-0 w-full md:w-[40%]'>
            <motion.h2
              key={`title-${currentIndex}`}
              className='text-2xl md:text-4xl font-bold text-[#1A1A1A]'
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
              {slide.title}
            </motion.h2>
            <motion.p
              key={`desc-${currentIndex}`}
              className='mt-4 text-[#4F4F4F]'
              variants={textVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 0.5, duration: 1 }}
            >
              {slide.description}
            </motion.p>
            <motion.button
              key={`button-${currentIndex}`}
              className='mt-10 md:mt-4 px-4 py-2 bg-yellow-500 text-white rounded'
              onClick={() => setIsModalOpen(true)}
              variants={buttonVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: 1, duration: 1 }}
            >
              Start 3 Days Free Trial
            </motion.button>
          </div>
        </motion.div>
      ))}

      {/* Carousel indicators */}
      <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
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
