'use client';
import React from 'react';
import { motion } from "framer-motion";

const Privacy = () => {
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
            <h2 className="text-3xl font-bold text-[#2190ff] mb-8">Privacy Policy</h2>
            <div className="mx-auto space-y-4">
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    At ExchanSwap, we prioritize the security and confidentiality of your personal information, implementing robust measures to protect your data from unauthorized access and breaches.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    We collect only the essential information required to facilitate currency exchange transactions and enhance your user experience on our platform.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    Your personal data is stored securely and is never shared with third parties without your explicit consent, except where required by law.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    We use advanced encryption technologies to ensure that your financial details and personal information are transmitted securely.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    You have the right to access, modify, or delete your personal information at any time by contacting our customer support team.
                    </span>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-gray-900">
                    ExchanSwap is committed to adhering to all applicable data protection regulations and continuously updating our practices to safeguard your privacy.
                    </span>
                </div>
            </div>
            </div>
            </motion.div>
        </section>
    )
}

export default Privacy;