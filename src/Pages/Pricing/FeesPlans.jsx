import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "../../Components/Modal";

function FeesPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      price: "30$/month",
      title: "Common",
      frequency: "2 Days/week",
      features: ["30 Min Lesson", "8 Classes/Month", "4 hours/Month"],
    },
    {
      price: "$40/month",
      title: "Suggested",
      frequency: "3 Days/Week",
      features: ["30 Min Lesson", "12 Classes/Month", "6 hours/Month"],
    },
    {
      price: "$50/month",
      title: "Recommended",
      frequency: "5 Days/Week",
      features: ["30 Min Lesson", "20 Classes/Month", "10 hours/Month"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="sm:pt-8 pt-5">
      <h1 className="font-semibold sm:text-5xl text-3xl text-center mb-6 text-[#1A1A1A]">
        Fees and Plans
      </h1>
      <div className="px-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {plans.map((plan, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });

            if (inView) controls.start("visible");

            return (
              <motion.div
                key={index}
                ref={ref}
                className="rounded-[50px] shadow-xl p-6 bg-white flex flex-col items-center"
                variants={cardVariants}
                initial="hidden"
                animate={controls}
              >
                <button className="h-[55px] w-[160px] bg-[#FFD050] text-[#1A1A1A] font-semibold text-lg rounded-2xl mb-5 -mt-[40px]">
                  {plan.price}
                </button>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {plan.title}
                </h3>
                <p className="mb-2 text-center text-sm">{plan.frequency}</p>
                <div className="flex flex-col gap-3 m-6 text-nowrap">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 justify-start font-medium"
                    >
                      <img
                        src="/uil_check.svg"
                        alt="check"
                        className="h-6 w-6"
                      />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="h-[45px] w-[140px] bg-[#FFD050] text-[#1A1A1A] font-semibold text-md rounded-full hover:bg-[#1C8E5A] hover:text-white"
                >
                  Select Plan
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}

export default FeesPlans;
