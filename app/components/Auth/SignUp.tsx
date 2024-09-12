'use client';
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { style } from "../../utils/style";
import { toast } from "react-hot-toast";
import axiosApi from "@/app/api/axios";
import { FcGoogle } from "react-icons/fc";

type Props = {
    setRoute: (route: string) => void;
}

const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
    password: Yup.string().required("Please enter your password").min(6),
    password_confirmation: Yup.string().required("Please enter your confirm password").min(6),
    country: Yup.string().required("Please enter your country")
});

const SignUp: FC<Props> = ({ setRoute }) => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null);
    const register = async (name: string, email: string, password: string, password_confirmation: string, country: string) => {
        try {
            const response = await axiosApi.post<{ data: { token: string } }>('/auth/register', { name, email, password, password_confirmation, country });
            console.log("response:", response);
            toast.success("Check your Email!");
            setRoute("Verify");
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
    };

    const oAuth = async () => {
        try {
            const response = await axiosApi.get('/auth/login/google');
            const googleOAuthUrl = response.data.data.url;
            window.location.href = googleOAuthUrl;
            // localStorage.setItem('token', response.data.data.user.token);
            setUser(response.data.data.user);
        } catch (error: any) {
            if ("data" in error) {
                const errDate = error;
                toast.error(errDate.data.message);
            }
        }
    }

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "", password_confirmation: "", country: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, password, password_confirmation, country }) => {
            await register(name, email, password, password_confirmation, country);
        }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className="w-full">
            <h1 className={style.title}>
                Sign Up with ExchanSwap
            </h1>
            <form className="p-4" onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className={style.label}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        placeholder="Enter your name"
                        className={`${errors.name && touched.name ? "border-red-500" : ""} ${style.input}`}
                    />
                </div>
                {errors.name && touched.name && (
                    <span className="text-red-500 pt-2 block">{errors.name}</span>
                )}

                <label htmlFor="country" className={style.label}>
                    Country
                </label>
                <input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    id="country"
                    placeholder="Enter your country"
                    className={`${errors.country && touched.country ? "border-red-500" : ""} ${style.input}`}
                />
                {errors.country && touched.country && (
                    <span className="text-red-500 pt-2 block">{errors.country}</span>
                )}

                <label htmlFor="email" className={style.label}>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your email"
                    className={`${errors.email && touched.email ? "border-red-500" : ""} ${style.input}`}
                />
                {errors.email && touched.email && (
                    <span className="text-red-500 pt-2 block">{errors.email}</span>
                )}

                <div className="w-full mt-5 relative mb-1">
                    <label htmlFor="password" className={style.label}>
                        Password
                    </label>
                    <input
                        type={!show ? "password" : "text"}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Enter your password"
                        className={`${errors.password && touched.password ? "border-red-500" : ""} ${style.input}`}
                    />
                    {!show ? (
                        <AiOutlineEyeInvisible
                            size={20}
                            onClick={() => setShow(true)}
                            className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer"
                        />
                    ) : (
                        <AiOutlineEye
                            size={20}
                            onClick={() => setShow(false)}
                            className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer"
                        />
                    )}
                </div>
                {errors.password && touched.password && (
                    <span className="text-red-500 pt-2 block">{errors.password}</span>
                )}

                <div className="w-full mt-5 relative mb-1">
                    <label htmlFor="password_confirmation" className={style.label}>
                        Confirm Password
                    </label>
                    <input
                        type={!show ? "password" : "text"}
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        id="password_confirmation"
                        placeholder="Enter your password confirmation"
                        className={`${errors.password_confirmation && touched.password_confirmation ? "border-red-500" : ""} ${style.input}`}
                    />
                    {!show ? (
                        <AiOutlineEyeInvisible
                            size={20}
                            onClick={() => setShow(true)}
                            className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer"
                        />
                    ) : (
                        <AiOutlineEye
                            size={20}
                            onClick={() => setShow(false)}
                            className="absolute bottom-3 text-black dark:text-white right-2 z-1 cursor-pointer"
                        />
                    )}
                </div>
                {errors.password_confirmation && touched.password_confirmation && (
                    <span className="text-red-500 pt-2 block">{errors.password_confirmation}</span>
                )}

                <div className="w-full mt-5">
                    <input type="submit" value="Sign Up" className={style.button} />
                </div>
                <br />
                <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">Or join with</h5>
                <div className="flex items-center justify-center my-3">
                    <FcGoogle onClick={oAuth} size={30} className="cursor-poniter mr-2" />
                </div>
                <br />
                <h5 className="text-center text-black dark:text-white pt-4 font-Poppins text-[14px]">
                    Do you have an account?{" "}
                    <span className="text-[#2190ff] pl-1 cursor-pointer" onClick={() => setRoute("Login")}>
                        Login
                    </span>
                </h5>
            </form>
            <br />
        </div>
    )
}

export default SignUp;
