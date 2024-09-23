import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from '@/app/data/data';
import Image from 'next/image';

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    };

    return (
        <section id='reviews' className="container bg-[#fff] md:px-14 max-w-s mx-auto py-10  mx-auto">
            <div className="flex flex-col items-center text-center mt-[20px]">
                <h1 className="text-slate-700 text-[30px] px-3 w-full font-[600] py-2 ">
                    Our Clients Opinion
                </h1>
                <br />
                <div className="w-full h-full m-auto">
                    <div className="mt-20">
                        <Slider {...settings}>
                            {
                                ReviewData.map((item: any,index:number) => (
                                    <div className='custom_bg border border-solid border-[#2190ff] h-full text-[#fff] rounded-xl' key={index}>
                                        <div className='rounded-t-xl bg-transparent flex justify-center items-center '> 
                                            <Image decoding="async" loading='lazy' src={item.img} width={60} height={60} className='h-[60px] w-[60px] object-cover p-2 rounded-full' alt='img'/>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                                            <p className='text-xl font-semibold'>{item.name}</p>
                                            <p>{item.review}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;