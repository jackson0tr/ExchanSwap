import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="border border-[#000000e] dark:border-[#ffffff1e]" />
            <br />
            <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3">
                        <Link href={"/"}>
                            <Image
                                width={50}
                                height={30}
                                src={logo}
                                className='w-1/2 h-1/4 rounded-full cursor-pointer'
                                alt='logo' />
                        </Link>
                        <ul className='space-y-4'>
                            <li>
                                <Link href={`/about`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    About US
                                </Link>
                            </li>
                            <li>
                                <Link href={`/privacy`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={`/faq`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={`/posts`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Our Posts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-[20px] font-[600] text-slate-700 ">
                            Fast <span className='text-[#2190ff]'>Links</span>
                        </h1>
                        <ul className='space-y-4'>
                            <li>
                                <Link href={`/#plans`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Plans
                                </Link>
                            </li>
                            <li>
                                <Link href={`/#docs`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href={`/`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={`/support`} className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Supported Currencies
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-[20px] font-[600] text-[#2190ff] ">
                            Social <span className='text-slate-700'>Links</span>
                        </h1>
                        <ul className='space-y-4'>
                            <li>
                                <Link href='https://www.facebook.com' className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.instagram.com' className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.linkedin.com' className='text-base text-slate-700  hover:text-[#2190ff] '>
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[20px] font-[600] text-slate-700  pb-3">
                            Contact <span className='text-[#2190ff]'>INFO</span>
                        </h1>
                        <p className='text-base text-slate-700  dark:hover:text-[#2190ff] pb-2'>
                            Send to US:{' '}
                            <Link className="border-b border-[#2190ff] dark:border-[#2190ff] border-solid dark:text-[#23bd70] text-[#2190ff]" href={`mailto:exchanswap@gmail.com`}>
                                exchanswap@gmail.com
                            </Link>
                        </p>
                    </div>
                </div>
                <br />
                <p className='text-center text-slate-700 '>
                    CopyRight &copy; ExchanSwap | All Rights Reserved
                </p>
            </div>
            <br />
        </footer>
    )
}

export default Footer;