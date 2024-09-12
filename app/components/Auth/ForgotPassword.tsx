'use client'
import React, { FC, useState } from "react";
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
});

const ForgotPassword: FC<Props> = ({ setRoute, setOpen, refetch }) => {
    const [openPass, setOpenPass] = useState(false);
    const forgotPassword = async (email: string) => {
        try{
            await axiosApi.post('/auth/forget_password', {email});
            toast.success("Check your Email");
            setRoute("Check");
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
        initialValues: { email: "" },
        validationSchema: schema,
        onSubmit: async ({ email }) => {
            await forgotPassword( email );
        }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <>
            <div className={`w-full ${openPass ? "hidden" : "block"}`}>
                <h1 className={`${style.title}`}>
                    Enter your email
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

export default ForgotPassword;