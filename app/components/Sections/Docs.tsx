'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { FiCopy } from 'react-icons/fi';

const Docs = () => {
  const [active, setActive] = useState(1);

  const copyTextExchange = () => {
    const text = "https://backend.exchanswap.com/exhange/USD?api_key=YOUR_API_KEY";
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  const copyTextConverter = () => {
    const text = "http://jocomp.shop/api/converter/EUR/EGP/YOUR_API_KEY";
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
    });
  };
  
  return (
    <>
      <section id='docs' className="container flex items-center flex-col md:px-14 max-w-s mx-auto py-10">
        <div className="text-center">
          <h2 className='text-[30px] font-[600] w-full text-slate-700 mb-2'>
            API Documentation
          </h2>
        </div>
        <div className="grid grid-cols-1 800px:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto">
          <div className='border 800px:w-1/2 flex flex-col py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
            <Link href={'#plans'}>
            <h2
            className='uppercase cursor-pointer text-base font-bold text-center flex text-white p-2 bg-blue-500'>
              Get Started
            </h2>
            </Link>
            <h3 onClick={() => setActive(1)}
            className={`text-[12px] cursor-pointer font-semibold text-center flex text-slate-700 p-2 hover:bg-slate-300 ${active === 1 ? `text-[#2190ff] bg-[costum_bg] w-full` : 'bg-[#fff] text-slate-700'}`}>
              Exchange
            </h3>
            <h3 onClick={() => setActive(2)}
            className={`text-[12px] cursor-pointer font-semibold text-center flex text-slate-700 p-2 hover:bg-slate-300 ${active === 1 ? `text-[#2190ff] bg-[costum_bg] w-full` : 'bg-[#fff] text-slate-700'}`}>
              Converter
            </h3>
          </div>
          {
            active === 1 ? (
              <div className="bg-[#fff] flex flex-col justify-center items-center">
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                  Exchange API
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                  ExchanSwap API provides exchange rates of 762 currencies worldwide. This documentation provides complete details of the features and options available in this API.
                </p>
                <br />
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                  Authorization
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                  In order to use the API, you need to sign up. It does not require a credit card. The availability of endpoints and features depends on the subscription plan you have.
                </p>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                Once you will have created your account successfully, you will have an API key for free in your dashboard. You can use this dashboard to upgrade or downgrade your plan and monitor your API usage. We strongly discourage the use of API key in client-side JavaScript, as it will expose your API key to the public.
                </p>
                <br />
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                  JSON and XML Response Formats
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                  All the endpoints of ExchanSwap API can respond in JSON and XML formats, JSON is the default response format.
                </p>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                  Here is an example of JSON response:
                </p>
                <div className="border relative rounded-lg p-3 custom_bg flex items-center border-solid border-[#2190ff] ">
                  <p className='text-center py-2 flex text-[#fff] font-[600] text-[16px]'>
                  https://backend.exchanswap.com/exhange/USD?api_key=YOUR_API_KEY
                  </p>
                  <button
                onClick={copyTextExchange}
                className="absolute top-2 right-2 text-white cursor-pointer rounded-full hover:text-[#1b7ae2] transition-all"
                aria-label="Copy to clipboard"
              >
                <FiCopy size={20} />
              </button>
                </div>
                <br />
              </div>
            ) : (null)
          }
          {
            active === 2 ? (
              <div className="bg-[#fff] flex flex-col justify-center items-center">
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                Converter
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                We take security seriously and serve all of our API endpoints over a secure HTTPS connection for all users, even if you are on the free plan.
                </p>
                <br />
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                Rate & Requests Limits
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                We have hard limits on the number of requests for all paid and free plans. Once you reach the quota of the subscribed plan, we will stop serving your requests. For free plan, we send one email notification when you reach your quota. For paid plans, we send three notification emails on 80%, 90% and 100% usage, respectively. Other than the above mentioned hard limit, we do not have any daily or hourly rate limits on any of our plans. You can consume all of your monthly/yearly quota in a single day. Please visit our pricing section for allowed requests limit in each plan.
                </p>
                <br />
                <h2 className='text-[30px] font-[600] items-center text-center  text-slate-700 mb-2'>
                Supported Currencies
                </h2>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                This endpoint returns the complete information of all supported currencies by ExchanSwap APi such as currency code, currency full name, currency icon. country code & country name. It does not require an apikey.
                Note: If currency type is crypto and metal, its countryCode value will be Crypto and Metal, respectively, and countryName value will be Global.
                </p>
                <p className='text-gray-700 text-[18px] p-2 items-center flex text-center '>
                  This endpoint is accessible on all subscription plans
                </p>
                <p className='text-gray-600 p-2 items-center flex text-center '>
                  This endpoint is accessible on all subscription plans
                </p>
                <div className="border w-full overflow-x-auto scrollbar-hide relative rounded-lg p-3 custom_bg flex items-center border-solid border-[#2190ff] ">
                  <p className='text-center py-2 flex text-[#fff] font-[600] text-[16px]'>
                   http://jocomp.shop/api/converter/EUR/EGP/YOUR_API_KEY 
                  </p>
                  <button
                onClick={copyTextConverter}
                className="absolute top-2 right-2 text-white cursor-pointer rounded-full hover:text-[#1b7ae2] transition-all"
                aria-label="Copy to clipboard"
              >
                <FiCopy size={20} />
              </button>
                </div>
                <br />
              </div>
            ) : (null)
          }
        </div>
      </section>
    </>
  )
}

export default Docs