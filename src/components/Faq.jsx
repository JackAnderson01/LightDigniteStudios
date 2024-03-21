import React from "react";

const Faq = () => {
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-1")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100   outline-none rounded-md   hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                First and foremost, who will be working on my project?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-1"
            className="hidden transition-all duration-200  "
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5    rounded-md mt-1 ">
              <p className="mb-2 text-gray-700 ">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-2")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>Will you provide consultation and ideas?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-2"
            className="hidden transition-all duration-200 "
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-3")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                Who owns the legal rights to the technology developed by a
                Dignite Studios developer?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-3"
            className="hidden transition-all duration-200 "
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-4")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                Does Dignite Studios build apps for both iOS and Android?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-4"
            className="hidden transition-all duration-200 "
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-5")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                I already have an existing website, how easy is it to alter it?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-5"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-6")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>How much does hosting my app or webite cost?</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-6"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("accordion-7")
                  .classList.toggle("hidden");
              }}
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 bg-gray-100  rounded-md  outline-none    hover:opacity-95 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                How do you ensure data security of mobile apps and websites?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-7"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5   rounded-md mt-1  ">
              <p className="mb-2 text-gray-700">
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
