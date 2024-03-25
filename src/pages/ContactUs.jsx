import React, { useState } from "react";
import { Dubai, Wyoming } from "../assets/export";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const ContactUs = () => {
  // States:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
    };

    const params = {
      email: email,
      name: name,
      message: message,
      phone: phone,
    };

    if (email == "") {
      setErrorMessage("Email is required");
    } else if (message == "") {
      setErrorMessage("You must add some message to sent");
    } else if (message.length > 300) {
      setErrorMessage("Message length must be less than 300 characters");
    } else {
      setLoading(true);

      axios
        .post("/api/landing/contactUs", params, { headers })
        .then((response) => {
          // proceed
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setSuccess(true);
          setLoading(false);
        })
        .catch((error) => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setErrorMessage(
            error?.response?.data?.error?.details[0]?.message
              ? error?.response?.data?.error?.details[0]?.message
              : "Something went wrong"
          );
          setLoading(false);
        });
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row justify-start items-start">
      <div className="w-full lg:w-1/2 p-10 lg:p-4 h-full flex flex-col gap-6 items-center justify-center bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8]">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide className="flex text-center lg:text-left flex-col gap-6 items-center justify-center">
            <span className="text-5xl font-extrabold text-white">
              Florida - Lake Lynda Drive
            </span>
            <span className="text-gray-200 text-[19px] font-medium">
              3505 Lake Lynda Drive Suite 200, Orlando, FL 32817
            </span>
            <span className="w-auto px-4 h-12 rounded-full flex items-center justify-center bg-black text-[#fff] text-[19px] font-medium">
              Branch Office
            </span>

            <img src={Dubai} className="w-[90%]" />
            <Link
              className="w-32 h-10 mt-4 bg-white/[0.2] hover:border-b hover:border-white text-white font-medium flex justify-center items-center"
              to="https://www.google.com/maps/place//@28.599880,-81.221460,15z/data=!3m1!4b1?entry=ttu"
            >
              View Location
            </Link>
          </SwiperSlide>
          <SwiperSlide className="flex text-center lg:text-left  flex-col gap-4 items-center justify-center">
            <span className="text-5xl font-extrabold text-white">
              Casper - W 2nd Street
            </span>
            <span className="text-gray-200 text-[19px] font-medium">
              312 W 2nd Street, Casper, WY 82601
            </span>
            <span className="w-auto px-4 h-12 rounded-full flex items-center justify-center bg-black text-[#fff] text-[19px] font-medium">
              Head Office
            </span>

            <img src={Wyoming} className="w-[90%]" />
            <Link
              className="w-32 h-10 mt-4 bg-white/[0.2] hover:border-b hover:border-white text-white font-medium flex justify-center items-center"
              to="https://www.google.com/maps/place//@42.849390,-106.329070,15z/data=!3m1!4b1?entry=ttu"
            >
              View Location
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2 flex-1 py-14 px-10 lg:px-4 lg:py-4 lg:flex-auto h-auto lg:h-full flex items-center justify-center  relative">
        <Link
          to="/"
          className="fixed top-4 left-3  w-10 h-10 flex items-center justify-center rounded-full  border-2 border-gray-900 text-gray-900 hover:bg-gradient-to-r from-[#f15c20] to-[#e00e2dd8] hover:text-white hover:border-orange-500"
        >
          <IoMdArrowBack />
        </Link>
        <form
          onSubmit={sendMessage}
          className="w-full h-auto flex flex-col gap-6 justify-start items-center"
        >
          <h1 className="text-[46px]  text-center  font-extrabold text-black leading-tight">
            Let's Start A Project
            <span className="text-[#dd1b38]"> Together</span>
          </h1>
          <span className="text-gray-700 text-[19px] font-medium">
            We make all your dreams come true in a successful project.
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            placeholder={"Name"}
            className="w-full h-12 bg-[#fdfdfd] border border-gray-700 text-gray-700 rounded-md text-sm font-medium px-3  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
            placeholder={"Email"}
            className="w-full h-12 bg-[#fdfdfd] border border-gray-700 text-gray-700 rounded-md text-sm font-medium px-3  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type={"text"}
            placeholder={"Phone"}
            className="w-full h-12 bg-[#fdfdfd] border border-gray-700 text-gray-700 rounded-md text-sm font-medium px-3  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-[#fdfdfd] text-sm h-40 resize-none border border-gray-700 rounded-md  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            placeholder={"Message"}
          ></textarea>

          {/* <div className="w-full h-auto flex gap-1">
            <input
              type={"date"}
              placeholder={"Date"}
              className="w-1/2 h-12 bg-[#fdfdfd] border border-gray-700 text-gray-700 rounded-md text-sm font-medium px-3  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            />
            <input
              type={"time"}
              placeholder={"Time"}
              className="w-1/2 h-12 bg-[#fdfdfd] border border-gray-700 text-gray-700 rounded-md text-sm font-medium px-3  transition-all duration-100 outline-none hover:border-[#dd1b38] focus:border-[#dd1b38]"
            />
          </div> */}

          {/* Buttons container */}
          <diV className="w-full flex gap-2 justify-start items-center">
            <button className="w-full h-10 bg-[#dd1b38] transition-all rounded-md duration-150 hover:opacity-95 text-xs font-bold flex items-center justify-center text-white uppercase">
              Submit
            </button>
          </diV>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
