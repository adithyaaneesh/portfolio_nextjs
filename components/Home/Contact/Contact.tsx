"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me today and let’s discuss how I can help you achieve your goals.
          </p>

          {/* INFO */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                +91 8848697024
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                adithyaaneesh29@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Panoor, Kannur
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all">
              <FaFacebookF className="text-white w-6 h-6" />
            </div>

            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all">
              <FaYoutube className="text-white w-6 h-6" />
            </div>

            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-400 transition-all">
              <FaTwitter className="text-white w-6 h-6" />
            </div>

            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all">
              <FaInstagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full h-40 placeholder:text-white/70"
          ></textarea>

          <button
            type="submit"
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 text-white rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
