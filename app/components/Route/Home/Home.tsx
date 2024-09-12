'use client';
import React, { useState } from "react";
import Services from "../../Sections/Services";
import Plans from "../../Sections/Plans";
import Sponsored from "../../Sections/Sponsered";
import Reviews from "../../Sections/Reviews";
import ApiDocs from "../../Sections/ApiDocs";
import Docs from "../../Sections/Docs";
import Contact from "../../Sections/Contact";
// import Dollar from "@/app/utils/Dollar";
import dynamic from "next/dynamic";

const Dollar = dynamic(() => import('@/app/utils/Dollar'), {
    ssr: false,
});

export const Home = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(9);
    const [route, setRoute] = useState("Login");
    return (
        <>
            <div className="relative">
                <Dollar />
                <ApiDocs open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                {/* lg:max-w-[1200px] */}
                <div className=" my-0 mx-auto">
                    <Services />
                    <Plans />
                    <Docs />
                    <Sponsored />
                    <Reviews />
                </div>
                <Contact />
            </div>
        </>
    )
}

export default Home;
