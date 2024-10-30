import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Courses", url: "/courses" },
  { title: "Pricing", url: "/pricing" },
  { title: "Contact Us", url: "/contact" },
  { title: "FAQs", url: "/faqs" },
  { title: "Blogs", url: "" },
];

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
    setShowModal(false);
  };

  const modalVariants = {
    hidden: { y: "-100vh" },
    visible: { y: 0, transition: { type: "tween", duration: 0.3 } },
    exit: {
      y: "-100vh",
      transition: { type: "tween", duration: 0.3, delay: 0.3 },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  return (
    <nav className="bg-white py-4 px-4 shadow-md sticky top-0 z-50 text-nowrap ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <img src="/Logo.svg" alt="Logo" />

        {/* Navbar Links */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link to={link.url} key={link.title}>
              <li
                onClick={() => handleSetActive(link.title)}
                className={`${
                  activeLink === link.title
                    ? "text-black font-semibold"
                    : "text-gray-500"
                } text-sm hover:text-black transition-all duration-300`}
              >
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* 'Book Now' Button */}
        <div className="hidden lg:block">
          <button className="bg-[#FFD050] text-[#1A1A1A] font-semibold py-2 px-4 rounded-md transition duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile & Tablet Menu Icon */}
        <div className="lg:hidden">
          <FaBars className="text-black text-2xl" onClick={toggleModal} />
        </div>
      </div>

      {/* Mobile & Tablet Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaTimes
              className="absolute top-6 right-4 text-white cursor-pointer"
              onClick={toggleModal}
              style={{ fontSize: "24px" }}
            />
            <motion.div
              className="bg-white w-full max-w-md p-8 rounded-lg"
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.li key={link.title} variants={linkItemVariants}>
                    <a
                      href={link.url}
                      onClick={() => handleSetActive(link.title)}
                      className={`${
                        activeLink === link.title
                          ? "text-black font-semibold"
                          : "text-gray-500"
                      } text-xl`}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={linkItemVariants}>
                  <button className="bg-[#FFD050] text-[#1A1A1A] font-semibold py-2 px-4 rounded-md transition duration-300">
                    Book Now
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
