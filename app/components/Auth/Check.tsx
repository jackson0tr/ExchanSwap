'use client'
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "../../utils/style";
import { toast } from "react-hot-toast";
import axiosApi from "@/app/api/axios";

type Props = {
    setRoute: (route: string) => void;
    setOpen: (open: boolean) => void;
    refetch?: any;
}

const schema = Yup.object().shape({
    email: Yup.string().email("Email not found").required("Please enter your Email"),
    otp: Yup.number().required("Please enter your OTP"),
});

const Check: FC<Props> = ({ setRoute, setOpen, refetch }) => {
    const [openPass, setOpenPass] = useState(false);
    const checkPassword = async (email: string, otp: string) => {
        try{
            const response = await axiosApi.post('/auth/check_forget_password', {email, otp});
            toast.success("Check your Email");
            setRoute("ResetPassword");
            localStorage.setItem('token', response.data.data.token);
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
        initialValues: { email: "", otp : ""},
        validationSchema: schema,
        onSubmit: async ({ email, otp }) => {
            await checkPassword( email, otp );
        }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <>
            <div className={`w-full ${openPass ? "hidden" : "block"}`}>
                <h1 className={`${style.title}`}>
                    Checking Your Email
                </h1>
                <form className="p-4" onSubmit={handleSubmit}>

                    <label
                        htmlFor="email"
                        className={`${style.label}`}>
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Enter your email"
                        className={`${errors.email && touched.email && "border-red-500"} ${style.input}`}
                    />

                    {errors.email && touched.email && (
                        <span className="text-red-500 pt-2 block">{errors.email}</span>
                    )}
                    <br />
                    <br />
                    <label
                        htmlFor="otp"
                        className={`${style.label}`}>
                        OTP
                    </label>

                    <input
                        type="otp"
                        name="otp"
                        value={values.otp}
                        onChange={handleChange}
                        id="otp"
                        placeholder="Enter your otp"
                        className={`${errors.otp && touched.otp && "border-red-500"} ${style.input}`}
                    />

                    {errors.otp && touched.otp && (
                        <span className="text-red-500 pt-2 block">{errors.otp}</span>
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
                            onClick={() => setRoute("Login")}
                        >
                            Login
                        </span>
                    </h5>
                </form>
                <br />
            </div>
        </>
    )
}

export default Check;