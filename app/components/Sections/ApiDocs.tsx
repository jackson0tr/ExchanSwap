'use client';
import React, { FC, useContext } from 'react';
import { motion } from "framer-motion";
import CustomModel from '@/app/utils/CustomModel';
import Login from '../Auth/Login';
import ResetPassword from '../Auth/ResetPassword';
import Check from '../Auth/Check';
import ForgotPassword from '../Auth/ForgotPassword';
import Verify from '../Auth/Verify';
import SignUp from '../Auth/SignUp';
import { AuthContext } from '@/app/api/AuthContext';
import Link from 'next/link';
import { FiCopy } from "react-icons/fi";
import { toast } from 'react-hot-toast';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  refetch?: any;
  setRoute: (route: string) => void;
}

const ApiDocs: FC<Props> = ({ activeItem, setOpen, route, open, setRoute, refetch }) => {
  const { user }: any = useContext(AuthContext);

  const copyText = () => {
    const text = "https://backend.exchanswap.com/exhange/USD?api_key=bgIDlJ7TmgpaqL9#vYL2TXYgSAHsqK14";
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  const handleAuth = () => {
    if(user){
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  return (
    <>
      <section
        id="api"
        className="custom_bg flex items-center justify-center h-[100vh] bg-[#fff] px-4"
      >
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
          className="w-3/4"
        >
          <div className='flex flex-col items-center justify-center lg:flex-row px-4'>
            <div className="text-left max-w-2xl lg:mr-8 mb-6 lg:mb-0">
              <h2 className="md:text-3xl text-xl font-semibold text-[#fff] mb-4">
                Free Currency Conversion and Forex ExchanSwap Rate API
              </h2>
              <p className="text-[#fff] font-semibold py-2 text-lg">
                ExchanSwap provides currency conversion, current and historical forex exchange rate and currency fluctuation data through REST API in json and xml formats compatible.
              </p>
              <button
               onClick={handleAuth} 
              //  onClick={() => setOpen(true)} 
              className="px-6 py-2 border border-[#2190ff] custom_bg text-[#fff] font-bold rounded-full hover:bg-gray-200">
                {
                  user ? <Link rel='preload' passHref href='/profile'>
                    Profile
                  </Link> : 'Sign Up'
                }
              </button>
            </div>
            <div className="border relative overflow-x-auto scrollbar-hide flex w-full h-auto border-[#2190ff] rounded-lg p-2 custom_bg ">
              <p className="text-center py-3 flex text-white font-semibold text-lg">
                https://backend.exchanswap.com/exhange/USD?api_key=bgIDlJ7TmgpaqL9#vYL2TXYgSAHsqK14
              </p>
              <button
                onClick={copyText}
                className="absolute top-2 right-2 text-white cursor-pointer rounded-full hover:text-[#1b7ae2] transition-all"
                aria-label="Copy to clipboard"
              >
                <FiCopy size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
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
    </>
  );
};

export default ApiDocs;
