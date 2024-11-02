import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactDetail() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const contactInfo = [
    {
      title: "Our Address",
      description: "97 Queen Street ,London ,E30 8EN",
      iconSrc: "/Frame 141.svg",
      iconAlt: "Address Icon",
    },
    {
      title: "Phone Number",
      description: "+447577655475",
      iconSrc: "/Frame 143.svg",
      iconAlt: "Phone Icon",
    },
    {
      title: "Email Address",
      description: "Alqurandigitalinstitute@gmail.com",
      iconSrc: "/Frame 142.svg",
      iconAlt: "Email Icon",
    },
    {
      title: "Working Hours",
      description:
        "Our customers representative team is available 24/7 to answer your queries so please feel free to contact anytime",
      iconSrc: "/Frame 144.svg",
      iconAlt: "Clock Icon",
    },
  ];

  return (
    <section className=" p-4 sm:p-6 md:p-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mt-6">
        {/* Contact Info Section */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-lg p-4 sm:p-6 lg:p-8 space-y-4 md:space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-full flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center ">
                  <img
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < contactInfo.length - 1 && (
                <hr className="border-gray-300 mt-3 md:mt-5" />
              )}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="col-span-12 md:col-span-6 mt-4 md:mt-0  rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col w-full gap-y-4 sm:gap-y-6">
            {/* Name Input */}
            <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/solar_user-linear.png"
                alt="User Icon"
                className=""
              />
              <hr className="h-7 border-[#9F9F9F] border mx-2" />
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Name"
                className="p-1 sm:p-2 rounded-full text-gray-700 w-full outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <PhoneInput
                country="us"
                value={input2}
                onChange={(phone) => setInput2(phone)}
                inputClass="text-gray-700 rounded-full w-full outline-none border-none"
                buttonClass="rounded-full"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center bg-white p-2 sm:p-3 w-full rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/Frame 33.svg"
                alt="Email Icon"
                className=""
              />
              <hr className="h-7 border-[#9F9F9F] border mx-2" />
              <input
                type="email"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                placeholder="Email"
                className="p-1 sm:p-2 rounded-full text-gray-700 w-full outline-none"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-3 rounded-2xl pt-3 px-2 shadow-md hover:shadow-lg transition-shadow duration-300">
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder=""
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
              >
                Your message
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-8 md:mt-10">
            <button className="h-10 md:h-12 w-full bg-[#FFD050] rounded-3xl text-white font-semibold text-sm md:text-base">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetail;
