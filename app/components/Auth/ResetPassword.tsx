'use client'
import { style } from '@/app/utils/style';
import { useFormik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import * as Yup from "yup";
import axiosApi from '@/app/api/axios';

type Props = {
    setRoute: (route: string) => void;
    setOpen: (open: boolean) => void;
    refetch?: any;
}

const ResetPassword: FC<Props> = ({setRoute, refetch, setOpen}) => {
    const [openPass, setOpenPass] = useState(false);
    const [show, setShow] = useState(false);

    const schema = Yup.object().shape({
        password: Yup.string().required("Please enter your password").min(6),
        password_confirmation: Yup.string().required("Please enter your confirm password").min(6),
    });

    const resetPassword = async (password:string, password_confirmation:string) => {
        try{
            const token = localStorage.getItem('token');
                if (token) {
                   await axiosApi.post('/auth/reset_password', {password, password_confirmation} , {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                  toast.success("Password changed successfully!");
                  setRoute("/Login");
                } else {
                  console.error('No token found');
                }
        } catch (error: any) {
            if (error.response && error.response.data) {
                const errData = error.response.data;
                toast.error(errData.message);
                console.log("error", errData);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    }    

    const formik = useFormik({
        initialValues: { password: "", password_confirmation: "" },
        validationSchema: schema,
        onSubmit: async ({ password, password_confirmation }) => {
            await resetPassword( password, password_confirmation );
        }
    });

   

    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <>
            <div className={`w-full ${openPass ? "hidden" : "block"}`}>
                <h1 className={`${style.title}`}>
                    Reset your password
                </h1>
                <form className="p-4" onSubmit={handleSubmit}>

                <label
                            htmlFor="password"
                            className={`${style.label}`}>
                            Password
                        </label>

                        <input
                            type={!show ? "password" : "text"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            placeholder="Enter your password"
                            className={`${errors.password && touched.password && "border-red-500"} ${style.input}`}
                        />

                        {!show ? (
                            <AiOutlineEyeInvisible size={20} onClick={() => setShow(true)} className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer" />
                        ) : (
                            <AiOutlineEye size={20} onClick={() => setShow(false)} className="absolute bottom-3 right-2 text-black dark:text-white z-1 cursor-pointer" />
                        )}

                        {errors.password && touched.password && (
                            <span className="text-red-500 pt-2 block">{errors.password}</span>
                        )}
                    <br />
                    <br />
                    <label
                            htmlFor="password_confirmation"
                            className={`${style.label}`}>
                            Password Confirmation
                        </label>

                        <input
                            type={!show ? "password_confirmation" : "text"}
                            name="password_confirmation"
                            value={values.password_confirmation}
                            onChange={handleChange}
                            id="password_confirmation"
                            placeholder="Enter your password_confirmation"
                            className={`${errors.password_confirmation && touched.password_confirmation && "border-red-500"} ${style.input}`}
                        />

                        {!show ? (
                            <AiOutlineEyeInvisible size={20} onClick={() => setShow(true)} className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer" />
                        ) : (
                            <AiOutlineEye size={20} onClick={() => setShow(false)} className="absolute bottom-3 right-2 text-black dark:text-white z-1 cursor-pointer" />
                        )}

                        {errors.password_confirmation && touched.password_confirmation && (
                            <span className="text-red-500 pt-2 block">{errors.password_confirmation}</span>
                        )}
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        className={`${style.button} mt-3`}
                    />
                    <br />
                    <h5 className="text-center text-slate-700 pt-4 font-Poppins text-[14px]">
                        Or Go Back to
                        <span
                            className="text-[#2190ff] pl-1 cursor-pointer"
                            onClick={() => setRoute("SignUp")}
                        >
                            Sign Up
                        </span>
                    </h5>
                </form>
                <br />
            </div>
        </>
    )
}

export default ResetPassword