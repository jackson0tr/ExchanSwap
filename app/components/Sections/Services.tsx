'use client';
import React, { useRef } from 'react';
import { ServiceData } from '@/app/data/data';
import { useScroll, motion, useTransform } from 'framer-motion';

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <>
    <motion.div 
    className='md:px-14 max-w-s mx-auto py-10' 
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }} 
    ref={ref}>
    <section id='services' className=" flex items-center justify-center bg-[#fff] flex-col">
      <div className="mt-10 pb-3 800px:pb-0 ">
        <div className="flex flex-col items-center text-center mt-[20px]">
          <h1 className="text-slate-700 text-[30px] px-3 w-full font-[600] py-2 ">
            Most popular currency tools
          </h1>
          <br />
          <div className="grid grid-cols-1 800px:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {
          ServiceData.map((item: any, index: number) => (
            <div className='border border-solid border-[#2190ff] custom_bg flex flex-col py-10 md:px-6 px-4 rounded-lg shadow-3xl' key={index}>
              <h3 className='text-3xl p-2 font-bold text-center text-[#fff]'>{item.title}</h3>
                  <p className="text-[18px] p-2 text-[#fff]">{item.content}</p>
            </div>
          ))
        }
      </div>
        </div>
      </div>

    </section>
    </motion.div>
    </>
  );
}

export default Services;