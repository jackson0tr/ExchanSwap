'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import About from '../components/Route/About/About';
import Footer from '../components/Layout/Footer/Footer';
import { AuthProvider } from '../api/AuthContext';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(3);
    const [route, setRoute] = useState("Login");
    return (
        <AuthProvider>
            <div>
                <Heading
                    title='About ExchanSwap'
                    description="About Us Page. Welcome to ExchanSwap, the ultimate destination for seamless and efficient currency exchange. At ExchanSwap, we specialize in providing top-tier exchange services, ensuring you receive the best rates with unparalleled convenience and security. Whether you're a seasoned trader or a casual traveler, our platform is designed to cater to all your currency exchange needs."
                    keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <About />
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default Page;