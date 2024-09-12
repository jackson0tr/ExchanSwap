'use client';
import React, { useContext, useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import Profile from '../components/Profile/Profile';
import { AuthContext, AuthProvider } from '../api/AuthContext';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(6);
    const [route, setRoute] = useState("Login");
    const { user }: any = useContext(AuthContext);

    return (
        <AuthProvider>
            <div className='min-h-screen'>
                    <Heading
                        title="Your Account"
                        description="Profile Page. Welcome to ExchanSwap, your trusted partner in currency exchange. Protecting your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services."
                        keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                    <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                    <Profile user={user} />
                    <Footer />
            </div>
        </AuthProvider>
    )
}

export default Page;