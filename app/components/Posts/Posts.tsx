'use client';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import Loader from '../Layout/Loader/Loader';
import axiosApi from '@/app/api/axios';

interface Posts {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: any;

}

const Posts = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosApi.get('/post');
        console.log("response:",response);
        setPosts(response.data.data.data);
      } catch (error) {
        console.error('Error fetching Posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <section className="w-11/12 bg-[#fff] container px-5 pt-[50px] lg:pt-[130px] pb-[50px]  mx-auto">
            <motion.div
              initial={{
                opacity: 0,
                //   : 0.5
                scale: 0.5,
                //   : 0.3
              }}
              animate={{
                opacity: 1,
                //   : 0.5
                scale: 1,
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
                <h2 className="text-3xl font-bold text-[#2190ff] mb-8">Posts ExchanSwap</h2>
                <div className="mx-auto space-y-4">
                  <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                    <div
                      className={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}
                    >{
                        Array.isArray(posts) &&
                        posts?.map((item: any, index: number) => {
                          return (
                            <div key={index}>
                              <Link href={`/post/${item?.slug}`}>
                                <Image
                                  width={100}
                                  height={100}
                                  src={`https://backend.exchanswap.com${item?.featured_image}`}
                                  alt="title"
                                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                                />
                              </Link>
                              <div className="p-5">
                                <Link href={`/post/${item?.slug}`}>
                                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                                    {item?.title}
                                  </h2>
                                </Link>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

        )
      }
    </>
  )
}

export default Posts;