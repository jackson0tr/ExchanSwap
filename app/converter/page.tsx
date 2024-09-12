'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import { AuthProvider } from '../api/AuthContext';
import Converter from '../components/Route/Converter/Converter';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login");
    return (
        <AuthProvider>
            <div>
                <Heading
                    title='Converter ExchanSwap'
                    description="Converter Page. Welcome to ExchanSwap, the ultimate destination for seamless and efficient currency exchange. At ExchanSwap, we specialize in providing top-tier exchange services, ensuring you receive the best rates with unparalleled convenience and security. Whether you're a seasoned trader or a casual traveler, our platform is designed to cater to all your currency exchange needs."
                    keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                <Converter />
                <Footer />
            </div>
        </AuthProvider>
    )
}

export default Page;