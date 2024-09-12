import Image from 'next/image';
import React, { FC } from 'react';
import avatarDefault from '../../assets/user_d.webp';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdSubscriptions } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import Link from 'next/link';

type Props = {
    user: any;
    active: number;
    setActive: (active: number) => void;
    logoutHandler: any;
    logoutAllHandler: any;
}

const SidebarProfile: FC<Props> = ({ user, active, setActive, logoutHandler, logoutAllHandler }) => {
    return (
        <div className="w-full">
            <div
                onClick={() => setActive(1)}
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 1 ? " bg-white " : "bg-transparent"}`}>
                <Image width={20} height={20} className='w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full '
                    src={avatarDefault} alt='profile' />
                <h5 className='pl-2 800px:block hidden font-Poppins  text-[#333]'>Account</h5>
            </div>
            <div onClick={() => setActive(2)}
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 2 ? " bg-white" : "bg-transparent"}`}>
                <MdSubscriptions className={`${active === 2 ? "text-[#2190ff]" : "text-[#333]"}`} size={20} />
                <h5 className='pl-2 800px:block hidden font-Poppins  text-[#333]'>Subscription</h5>
            </div>
            <div onClick={() => setActive(3)}
                className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 3 ? " bg-white" : "bg-transparent"}`}>
                <GiUpgrade className={`${active === 3 ? "text-[#2190ff]" : "text-[#333]"}`} size={20} />
                <h5 className='pl-2 800px:block hidden font-Poppins  text-[#333]'>Upgrade</h5>
            </div>
            <Link href='/' passHref>
                <div onClick={() => logoutHandler()}
                    className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 5 ? " bg-white" : "bg-transparent"}`}>
                    <AiOutlineLogout className=' text-red-600' size={20} />
                    <h5 className='pl-2 800px:block hidden font-Poppins  text-[#333]'>Logout</h5>
                </div>
            </Link>
            <Link href='/' passHref>
                <div onClick={() => logoutAllHandler()}
                    className={`w-full flex items-center px-3 py-4 cursor-pointer ${active === 6 ? " bg-white" : "bg-transparent"}`}>
                    <AiOutlineLogout className=' text-red-600' size={20} />
                    <h5 className='pl-2 800px:block hidden font-Poppins  text-[#333]'>Logout All Devices</h5>
                </div>
            </Link>
        </div>
    )
}

export default SidebarProfile;