'use client';
import React from 'react';
import { motion } from "framer-motion";

const About = () => {
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
            <h2 className="text-3xl font-bold text-[#2190ff] mb-8">About ExchanSwap</h2>
            <div className="mx-auto space-y-4">
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Welcome to ExchanSwap, your trusted partner in currency exchange solutions.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Our platform offers competitive rates and seamless transactions to meet all your foreign exchange needs.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    At ExchanSwap, we prioritize security and transparency, ensuring a safe and reliable experience for our customers.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Our dedicated team of professionals is committed to providing exceptional service and support.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    We leverage advanced technology to deliver fast and efficient currency exchange services.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Join ExchanSwap today and experience the future of hassle-free currency exchange.
                    </span>
                </div>
            </div>
            </div>
            </motion.div>
        </section>
    )
}

export default About;