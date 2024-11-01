import React, { useState } from "react";

function FAQsdetail() {
  const faqs = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing ",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    // Add other FAQ items here
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-20  md:mt-16 mt-6">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div className="px-4 gap-4 md:px-10 bg-[#F6F6F6] rounded-md flex justify-between items-center">
            <div className="flex p-4 justify-between items-center w-full">
              <h1
                className={`font-normal text-base md:text-lg ${
                  openIndex === index ? "text-green-600" : "text-[#252525]"
                }`}
              >
                {faq.title}
              </h1>

              <img
                src="/icon-park-outline_down.svg"
                alt="icon-down"
                className="cursor-pointer transition-transform duration-300"
                onClick={() => toggleContent(index)}
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </div>
          <hr className=" border border-[#000000] mt-4" />

          {openIndex === index && (
            <div className="px-12 py-4 mt-2 bg-gray-100 rounded-md">
              <p className="text-base md:text-lg text-[#333333]">
                {faq.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQsdetail;
