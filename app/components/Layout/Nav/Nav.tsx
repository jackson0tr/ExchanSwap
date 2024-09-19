'use client';
import Link from 'next/link';
import React, { FC, useContext, useEffect, useState } from 'react'
import NavItems from '../../../utils/NavItems'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import CustomModel from '../../../utils/CustomModel';
import Login from '../../Auth/Login';
import SignUp from '../../Auth/SignUp';
import Verify from '../../Auth/Verify';
import ForgotPassword from '../../Auth/ForgotPassword';
import Image from 'next/image';
import avatar from '../../../assets/user_d.webp';
import { AuthContext } from '../../../api/AuthContext';
import logo from '../../../assets/logo.svg';
import ResetPassword from '../../Auth/ResetPassword';
import Check from '../../Auth/Check';


type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    refetch?: any;
    setRoute: (route: string) => void;
}

const Nav: FC<Props> = ({ activeItem, setOpen, route, open, setRoute, refetch }) => {
    const [active, setActive] = useState(false);
    const { user, getProfile }: any = useContext(AuthContext);
    const [mobileNav, setMobileNav] = useState(false);

    // useEffect(() => {
    //     getProfile();
    // }, []);


    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 85) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            {
                setMobileNav(false);
            }
        }
    }



    return (
        <div className="w-full container relative">
            <div className={`${active} ? " bg-[#fff]  fixed top-0 left-0 w-full h-[80px] z-[80] border-b shadow-xl transition duration-500" : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80]  "`}>
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div>
                            <Link href={"/"}
                                className={`text-[25px] font-Poppins font-[500] text-[#2190ff] dark:text-white`}>
                                <Image
                                    priority
                                    width={100}
                                    height={100}
                                    src={logo}
                                    className='w-full h-full rounded-full cursor-pointer'
                                    alt='profile' />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <NavItems
                                activeItem={activeItem}
                                isMobile={false} />
                            <div className="800px:hidden">
                                <HiOutlineMenuAlt3
                                    size={25}
                                    className={`cursor-pointer ${mobileNav ? 'hidden' : 'block'} dark:text-white text-black`}
                                    onClick={() => setMobileNav(true)} />
                            </div>
                            {
                                user ? (
                                    <Link href={`/profile`}>
                                        <Image
                                            width={30}
                                            height={30}
                                            style={{ border: activeItem === 6 ? "2px solid #23bd70" : "none" }}
                                            src={avatar}
                                            className='hidden 800px:block w-[30px] h-[30px] rounded-full cursor-pointer'
                                            alt='profile' />
                                    </Link>
                                ) : (
                                    <HiOutlineUserCircle
                                        onClick={() => setOpen(true)}
                                        size={25}
                                        className='hidden 800px:block cursor-pointer dark:text-white text-black'
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
                {
                    mobileNav && (
                        <div className={`md:hidden w-full  transform transition-all duration-500 fixed h-screen top-0 right-0 z-[99999] bg-[#fff]`}
                            onClick={handleClose} id='screen'>
                            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
                                <NavItems
                                    activeItem={activeItem}
                                    isMobile={true} />
                                {
                                    user ? (
                                        <Link href={`/profile`} passHref>
                                            <Image
                                                width={30}
                                                height={30}
                                                style={{ border: activeItem === 6 ? "2px solid #23bd70" : "none" }}
                                                src={avatar}
                                                className='block !ml-5 my-2 w-[30px] h-[30px] rounded-full cursor-pointer'
                                                alt='profile' />
                                        </Link>
                                    ) : (
                                        <HiOutlineUserCircle
                                            onClick={() => setOpen(true)}
                                            size={25}
                                            className='cursor-pointer !ml-5 my-2 dark:text-white text-black'
                                        />
                                    )
                                }
                                <br />
                                <br />
                                <p className='text-[16px] px-2 pr-5 text-black dark:text-white'>
                                    &copy; 2024 . Created by ExchanSwap . All Rights Reserved .
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                route === "Login" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Login}
                                    refetch={refetch}
                                />
                            )
                        }
                    </>
                )
            }
            {
                route === "SignUp" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={SignUp} />
                            )
                        }
                    </>
                )
            }
            {
                route === "Verify" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Verify} />
                            )
                        }
                    </>
                )
            }
            {
                route === "ForgotPassword" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={ForgotPassword} />
                            )
                        }
                    </>
                )
            }
            {
                route === "Check" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Check} />
                            )
                        }
                    </>
                )
            }
            {
                route === "ResetPassword" && (
                    <>
                        {
                            open && (
                                <CustomModel
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    refetch={refetch}
                                    component={ResetPassword} />
                            )
                        }
                    </>
                )
            }

        </div>
    )
}

export default Nav;