import React, { useState } from "react";
import { IoCaretDownCircleOutline } from "react-icons/io5";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };
  return (
    <div
      id="faq"
      className="relative w-full h-auto  py-6  md:py-14 px-6 lg:px-8 xl:px-48 lg:py-8 flex flex-col justify-center items-start md:items-center lg:items-start gap-12 "
    >
      <div className="w-auto flex flex-col gap-1 justify-start items-start md:items-center lg:items-start">
        <span className="text-3xl text-left md:text-center lg:text-left text-[#dd1b38] font-medium">
          Frequently Asked Questions
        </span>
        <h1 className="text-[46px] md:text-[50px] md:text-center lg:text-left font-extrabold text-black leading-tight">
          About Our
          <span className="text-[#dd1b38]"> Mobile App Development </span>{" "}
          Company
        </h1>
      </div>

      <div className="w-full h-auto  flex flex-col gap-3 justify-start items-start">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(1)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 1 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>
                First and foremost, who will be working on my project?
              </span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 1 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                The key asset of digital agencies is their staff of digital
                professionals. You want to evaluate their competence as well as
                their work culture to see whether you can form a meaningful
                relationship with the agency. We recommend taking a step further
                and requesting to meet with the folks who will be working on
                your account.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(2)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 2 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>Will you provide consultation and ideas?</span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 2 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                You be astonished at how many agencies provide passive
                assistance, waiting for your requests and directions. You want
                your digital agency to take the lead on your project by working
                with you, implementing authorized tactics, and periodically
                reporting on your progress. Other important questions to
                consider: 1. Have you worked on similar projects before? 2. What
                were the outcomes of the projects you worked on? 3. How would
                you provide long-term value to my company?
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(3)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 3 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 3 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>
                Who owns the legal rights to the technology developed by a
                Dignite Studios developer?
              </span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 3 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                The legal rights to the technology produced by Dignite Studios
                developers are owned by the client. All development done by our
                firm is the clients sole property.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(4)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 4 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>
                Does Dignite Studios build apps for both iOS and Android?
              </span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 4 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                Yes, the majority of the apps we create are compatible with both
                iOS and Android. People frequently prefer their applications to
                function on both mobile and online platforms, therefore we
                utilize development frameworks like React and React native to
                swiftly support both.Yes, we have push notifications and
                automated alerts via text & email. All notification settings are
                customizable in your account settings.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(5)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 5 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 5 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>
                I already have an existing website, how easy is it to alter it?
              </span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 5 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                Depending on the adjustments that must be made, upgrading an old
                one might be challenging. If the need is complicated, it could
                take some time to fulfil; however, if only minor adjustments
                need to be made, it can be handled and fulfilled as soon as
                possible. At Dignite Studios, we will speak with our clients to
                better understand their needs before moving on with the required
                actions.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(6)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 6 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 6 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span>How much does hosting my app or webite cost?</span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 6 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                The price varies depending on the type of hosting you select and
                the hosting service provider. Choose the most appropriate
                hosting type and provider from the range of choices on the
                market.
              </p>
            </div>
          </div>
        </div>
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full"
        >
          <button
            type="button"
            onClick={() => handleAccordionClick(7)}
            className="flex items-center justify-between w-full py-4 font-medium rtl:text-right text-[#7D7D7D] outline-none hover:opacity-95 border-b border-[#7D7D7D] gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 7 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <div
              className={`w-full flex justify-start items-center text-lg lg:text-2xl text-left gap-2 ${
                openAccordion === 7 ? "text-[#dd1b36]" : "text-inherit"
              }`}
            >
              <span className="w-[80%]">
                How do you ensure data security of mobile apps and websites?
              </span>
            </div>
            <IoCaretDownCircleOutline className="text-lg" />
          </button>
          <div
            id="accordion-1"
            className={`transition-all duration-200 ${
              openAccordion === 7 ? "" : "hidden"
            }`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="py-1 rounded-md mt-1 ">
              <p className="mb-2 text-gray-800 ">
                For the purpose of creating highly secure mobile apps and
                websites, we adhere to suitable encryption and the most recent
                data security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
