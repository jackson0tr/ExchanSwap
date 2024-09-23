import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import logo from '../assets/logo.svg';


type Props = {
    activeItem: number;
    isMobile: boolean;
}

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
    const [mobileNav, setMobileNav] = useState(false);

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            {
                setMobileNav(false);
            }
        }
    }


    const navItemsData = [
        {
            name: 'Home',
            url: "/"
        },
        {
            name: 'Plans',
            url: "/#plans"
        },
        {
            name: 'Docs',
            url: "/#docs"
        },
        {
            name: 'About',
            url: `/about`
        },
        {
            name: 'Privacy Policy',
            url: `/privacy`
        },
        {
            name: 'Converter',
            url: `/converter`
        },
    ];

    return (
        <>
            <div className="hidden 800px:flex">
                {
                    navItemsData && navItemsData.map((item, index) => (
                        <Link href={`${item.url}`} key={index} passHref>
                            <span className={`${activeItem === index ? "text-[#2190ff]" : "text-slate-700"}  hover:text-[#2190ff] text-slate-700 text-[18px] px-6 font-Poppins font-[400]`}>
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            {
                isMobile && (
                    <div className="800px:hidden block mt-5" >
                        <IoClose id='screen' size={50} onClick={handleClose} className='cursor-pointer  pl-[20px] text-slate-700 top-[20px] left-[90px]' />
                        <div className="w-full text-center py-6">
                            <Link href='/' passHref>
                                <Image
                                    width={50}
                                    height={50}
                                    src={logo}
                                    className='w-1/2 h-1/2 rounded-full cursor-pointer'
                                    alt='profile' />
                            </Link>
                        </div>
                        {
                            navItemsData && navItemsData.map((item, index) => (
                                <Link onClick={handleClose} href={`${item.url}`} key={index} passHref>
                                    <span className={`${activeItem === index ? "text-[#2190ff]" : " text-slate-700"} hover:text-[#2190ff] block border-b border-solid border-slate-700 py-5 text-[18px] px-6 font-Poppins font-[400]`}>
                                        {item.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default NavItems;