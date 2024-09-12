'use client';
import { style } from '@/app/utils/style';
import React, { FC } from 'react';

type Props = {
    setRoute: (route: string) => void;
}

const Signin: FC<Props>  = ({setRoute}) => {
   
    return (
        <>
            <section
                id="api"
                className="flex items-center justify-center h-auto custom_bg p-4"
            >
                <button
                    onClick={()=> setRoute("Login")}
                    className={`${style.button} !bg-[#fff] !text-[#2190ff] !rounded-[5px] p-3 !w-[80px] !h-[40px]`}
                >
                    Login
                </button>
            </section>
        </>
    );
};

export default Signin;
