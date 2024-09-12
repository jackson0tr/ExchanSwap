'use client';
import axiosApi from '@/app/api/axios';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from "yup";


const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid Email").required("Please enter your email"),
    message: Yup.string().min(5, 'Message must be at least 5 characters').max(500, 'Message cannot exceed 500 characters').required('Message is required'),
    subject: Yup.string().required("Please enter your subject")
});


const Contact = () => {

    const contactFun = async (name: string, email: string, message: string, subject: string) => {
        try {
            const response = await axiosApi.post('/contact_us', { name, email, message, subject });
            console.log("response:", response);
            toast.success("Email sent successful");
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
        initialValues: { name: "", email: "", message: "", subject: "" },
        validationSchema: schema,
        onSubmit: async ({ name, email, message, subject }) => {
            await contactFun(name, email, message, subject);
        }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <section className="pt-[5rem] pb-[3rem] custom_bg" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto ">
                <div>
                    <h1 className="md:text-5xl text-3xl font-extrabold text-[#fff] mb-2">Contact Us</h1>
                    <p className="text-[#fff] items-center text-center font-[600] text-[18px]">
                        Lets discuss about your situation...
                    </p>
                </div>

                <form className='bg-white border rounded-md border-solid border-[#2190ff] shadow-md' onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] p-[1rem] items-center ">
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            minLength={5}
                            maxLength={150}
                            autoComplete="off"
                            required
                            placeholder="Name"
                            className={`${errors.name && touched.name ? "border-red-500" : ""} custom_bg py-[0.7rem] outline-none text-white rounded-md px-4 `} />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            minLength={5}
                            maxLength={150}
                            autoComplete="off"
                            required
                            placeholder="Email"
                            className={`${errors.email && touched.email ? "border-red-500" : ""} custom_bg py-[0.7rem] outline-none text-white rounded-md px-4 `} />
                    </div>

                    <div className="grid grid-cols-1 gap-[1rem] p-[1rem] items-center ">
                        <input
                            type="subject"
                            id="subject"
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            minLength={5}
                            maxLength={150}
                            autoComplete="off"
                            required
                            placeholder="Subject"
                            className={`${errors.subject && touched.subject ? "border-red-500" : ""} custom_bg py-[0.7rem] outline-none text-white rounded-md px-4 `} />
                    </div>

                    <div className="grid grid-cols-1 gap-[1rem] p-[1rem] items-center ">
                        <textarea
                            placeholder='Message'
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            required
                            minLength={10}
                            maxLength={500}
                            rows={4}
                            className={`${errors.message && touched.message ? "border-red-500" : ""} custom_bg py-[0.7rem] px-4 mb-[1.5rem] w-full outline-none rounded-md text-white`}></textarea>
                    </div>

                    <div className="grid grid-cols-1 gap-[1rem] p-[1rem] items-center ">
                        <input type="submit" value="Submit" className="p-[1rem] custom_bg mb-[1.5rem] w-40 cursor-pointer items-center justify-center shadow-md outline-none rounded-md text-[#fff] " />
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Contact;