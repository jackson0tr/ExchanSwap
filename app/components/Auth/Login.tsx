'use client'
import React, { FC, useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { style } from "../../utils/style";
import { toast } from "react-hot-toast";
import { AuthContext } from '../../api/AuthContext';

type Props = {
    setRoute: (route: string) => void;
    setOpen: (open: boolean) => void;
    refetch?: any;
}

const schema = Yup.object().shape({
    email: Yup.string().email("Email not found").required("Please enter your Email"),
    password: Yup.string().required("Please enter your Password").min(6)
});


const Login: FC<Props> = ({ setRoute, setOpen, refetch }) => {
    const [show, setShow] = useState(false);
    const [openPass, setOpenPass] = useState(false);
    const {login}: any = useContext(AuthContext);
   

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => {
            try {
                await login(email, password);
                setOpen(false);
                refetch();
            } catch (error: any) {
                if ("data" in error) {
                    const errDate = error;
                    toast.error(errDate.data.message);
                }
            }
        }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className={`w-full ${openPass ? "hidden" : "block"}`}>
                <h1 className={`${style.title}`}>
                    Login With ExchanSwap
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

                    <div className="w-full mt-5 relative mb-1">
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
                    </div>

                    <div className="w-full mt-5">
                        <input type="submit" value="Login" className={`${style.button}`} />
                    </div>
                    <br />
                    <h5 className="text-center text-black dark:text-white pt-4 font-Poppins text-[14px]">
                        Do not have any account?{" "}
                        <span className="text-[#2190ff] pr-1 cursor-pointer" onClick={() => setRoute("SignUp")}>
                            Sign Up
                        </span>
                        <br />
                        <span onClick={() => setRoute("ForgotPassword")} className="text-[#2190ff]  cursor-pointer">
                            Forgot your Password?
                        </span>
                    </h5>
                </form>
                <br />
            </div>
        </>
    )
}

export default Login;