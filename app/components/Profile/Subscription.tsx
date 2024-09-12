import React, { FC, useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import { motion } from "framer-motion";
import { style } from '@/app/utils/style';
import axiosApi from '@/app/api/axios';
import { toast } from 'react-hot-toast';
import { VscDebugRestart } from "react-icons/vsc";


type Props = {
    user: any;
    data: any;
}

const Subscription: FC<Props> = ({ user, data }) => {
    const subscription = user && user?.subscription;

    const restore = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axiosApi.get('/subscription/restore', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success("Subscription restored successfully");
                window.location.reload();
            } else {
                console.error('No token found');
            }
        } catch (error: any) {
            console.error('Fetching restore failed', error);
            toast.error(error);
        }
    }

    const cancel = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axiosApi.delete(`/subscription/1`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success("Subscription deleted successfully");
                window.location.reload();
            } else {
                console.error('No token found');
            }
        } catch (error: any) {
            console.error('Fetching delete failed', error);
            toast.error(error);
        }
    }

    const resetApi = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axiosApi.get(`/subscription/reset_key`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                toast.success("Reset Api Key successfully");
                window.location.reload();
            } else {
                console.error('No token found');
                toast.error('No token found');
            }
        } catch (error: any) {
            console.error('Fetching Reset failed', error);
            toast.error(error);
        }
    }

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-full pl-6 800px:pl-10">
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
                        <div className="grid grid-cols-1 80k0px:grid-cols-4 gap-10 mt-20 mx-auto">
                            <div className={`border border-solid ${subscription.status === 'active' ? "border-green-600" : "border-red-600"}  flex flex-col py-10 md:px-6 px-4 rounded-lg shadow-3xl`}>
                                <h3 className='text-3xl font-bold text-center text-green-600'>{subscription.status}</h3>
                                <p className='text-slate-700'>

                                    {subscription.price}
                                    <span className='text-base text-[#2190ff] font-meduim'>/
                                        {subscription.type}
                                    </span>
                                </p>
                                <div className="mt-[.5rem] space-y-3">
                                    <div className="flex items-center space-x-4">
                                        <IoMdCall className='w-4 h-4 text-[#2190ff]' />
                                        <p className="text-[18px] text-slate-700">{subscription.max_calls} Max Calls</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <IoMdCall className='w-4 h-4 text-[#2190ff]' />
                                        <p className="text-[18px] text-slate-700">{subscription.currenct_calls} Current Calls</p>
                                    </div>
                                    <div className='flex items-center space-x-4 te0xt-[22px] font-0normal text-[#2190ff]'>
                                        Ends At: 
                                        <span className='tex0t-[18px] text-red-600'>
                                            {" "}{subscription?.ends_at}
                                        </span>
                                    </div>
                                    <div className='flex items-center 800px:flex-row flex-col space-x-4'>
                                        <div className='tex0t-[22px] fon0t-normal text-[#2190ff]'>
                                            API Key:
                                        </div>
                                        <div className="border rounded-lg p-3 800px:w-auto w-full overflow-hidden overflow-x-scroll custom_bg flex items-center border-solid border-[#2190ff] ">
                                            <p className='text-center flex text-[#fff] font-[600] te5xt-[16px]'>
                                                {subscription?.api_key}
                                            </p>
                                        </div>
                                        <div onClick={resetApi} className='cursor-poniter'>
                                            <VscDebugRestart size={30} className="cursor-poniter text-[#2190ff] m-2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full p-3 flex justify-between flex-col 800px:flex-row'>
                                <button onClick={restore} className="btn">
                                    Restore
                                </button>
                                <br className='800px:hidden block'/>
                                <button className="buttonCancel noselect" onClick={cancel}><span className="text">Cancel</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Subscription;