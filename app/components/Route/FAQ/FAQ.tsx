'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";


const FAQ = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const toggleTab = (tab:any) => {
      if (activeTab === tab) {
        setActiveTab(0);
      } else {
        setActiveTab(tab);
      }
    };
  
    return (
      <section className="w-11/12 bg-[#fff] container px-5 pt-[50px] lg:pt-[130px] pb-[50px]  mx-auto">
        <motion.div
            initial={{
              opacity:  0 ,
            //   : 0.5
              scale:  0.5 ,
            //   : 0.3
            }}
            animate={{
              opacity:  1 ,
            //   : 0.5
              scale:  1 ,
            //   : 0.3
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className='mt-10 pb-3'>
          <h2 className="text-3xl font-bold text-[#2190ff] mb-8">FAQ </h2>
          <div className="mx-auto space-y-4">
            {/* single Faq */}
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(2)}
              >
                <span className="text-lg font-medium text-gray-900">
                What is ExchanSwap?
                </span>
                {activeTab === 2 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 2 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  ExchanSwap is an online platform that allows users to exchange money between different currencies. We provide competitive exchange rates and a user-friendly interface to make the process seamless and efficient.
                  </p>
                </div>
              )}
            </div>
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(3)}
              >
                <span className="text-lg font-medium text-gray-900">
                How do I exchange money on ExchanSwap?
                </span>
                {activeTab === 3 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 3 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  To exchange money, simply create an account, choose the currencies you wish to exchange, enter the amount, and follow the on-screen instructions. Our platform will handle the rest, ensuring your funds are securely exchanged and transferred.
                  </p>
                </div>
              )}
            </div>
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(4)}
              >
                <span className="text-lg font-medium text-gray-900">
                What is Paddle, and why is it used on ExchanSwap?
                </span>
                {activeTab === 4 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 4 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  Paddle is a secure and reliable payment gateway that we use to process transactions on ExchanSwap. It ensures that your payment details are handled with the highest level of security and compliance with global payment standards.
                  </p>
                </div>
              )}
            </div>
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(5)}
              >
                <span className="text-lg font-medium text-gray-900">
                Are there any fees associated with exchanging money on ExchanSwap?
                </span>
                {activeTab === 5 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 5 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  Yes, there are nominal fees associated with each transaction, which are clearly displayed before you complete your exchange. These fees cover the costs of processing the exchange and ensuring the security of your transactions.
                  </p>
                </div>
              )}
            </div>
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(6)}
              >
                <span className="text-lg font-medium text-gray-900">
                How long does it take to complete a currency exchange on ExchanSwap?
                </span>
                {activeTab === 6 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 6 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  The time it takes to complete an exchange can vary depending on the currencies involved and the payment method used. Typically, most exchanges are completed within a few minutes to a few hours. We strive to make the process as fast and efficient as possible.
                  </p>
                </div>
              )}
            </div>
  
            <div className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(7)}
              >
                <span className="text-lg font-medium text-gray-900">
                Is my personal and financial information secure on ExchanSwap?
                </span>
                {activeTab === 7 ? (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
              {activeTab === 7 && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                  Absolutely. We prioritize the security of your personal and financial information. Our platform uses advanced encryption and security measures to protect your data, and all transactions are processed through Paddle, a trusted and secure payment gateway.
                  </p>
                </div>
              )}
            </div>
          </div>
          </div>
          </motion.div>
        </section>
    );
  };
  
  export default FAQ;