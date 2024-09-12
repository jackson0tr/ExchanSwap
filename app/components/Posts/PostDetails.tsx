'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import axiosApi from "@/app/api/axios";
import Image from "next/image";

interface Post {
    id: string;
    slug: string;
    title: string;
    summary: string;
    featured_image: any;
    body: string;
}

interface Img {
    featured_image: any;
}


function createMarkup(body: string) {
    return { __html: body };
}

function MyComponent({ body }: { body: string }) {
    return <div dangerouslySetInnerHTML={createMarkup(body)} />;
}

const PostDetails = () => {
    const { slug }: any = useParams();
    const [post, setPost] = useState<Post>();
    // const [img, setImg] = useState<Img[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosApi.get(`/post/${slug}`);
                setPost(response.data.data);
                // setImg(response.data.data.featured_image);
                console.log("Details: ", response.data.data);
                console.log("IMG: ", response.data.data.featured_image);
            } catch (error) {
                console.error('Error fetching Post:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, []);

    return (
        <>
            <section className="w-11/12 bg-[#fff] container px-5 pt-[50px] lg:pt-[130px] pb-[50px]  mx-auto">
                <div className='mt-10 pb-3'>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{post?.title} Post</h2>
                        <div className="mx-auto space-y-4">
                            <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                                <article className="flex-1">
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
                                        {/* {
                                            Array.isArray(img) &&
                                            img?.map((item: any) => {
                                                return ( */}
                                                    <img
                                                        loading="lazy"
                                                        className="rounded-xl w-full items-center justify-center"
                                                        // src={`https://backend.exchanswap.com/storage/canvas/images/h3EyF3gq7XDN8s4Y4ZdRQnFlWJKRdK3gIGWHd5XQ.png`}
                                                        src={`https://backend.exchanswap.com${post?.featured_image}`}
                                                        alt="img"
                                                    />
                                                    {/* <Image
                                                        width={100}
                                                        height={100}
                                                        className="rounded-xl w-full items-center justify-center"
                                                        // src={`https://backend.exchanswap.com/storage/canvas/images/h3EyF3gq7XDN8s4Y4ZdRQnFlWJKRdK3gIGWHd5XQ.png`}
                                                        src={`https://backend.exchanswap.com/${post?.featured_image}`}
                                                        alt="img"
                                                    /> */}
                                                {/* )
                                            })
                                        } */}
                                        <div>
                                            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                                                {post?.title}
                                            </h1>
                                            <br />
                                            <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                                {post?.summary}
                                            </h4>
                                            <br />
                                            <br />
                                            <h4 className="text-lg font-roboto m-4 text-gray-800 md:text-base">
                                                {post?.body && <MyComponent body={post.body} />}
                                            </h4>
                                        </div>
                                    </motion.div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PostDetails;