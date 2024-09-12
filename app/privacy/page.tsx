'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import Privacy from '../components/Route/Policies/Privacy';
import { AuthProvider } from '../api/AuthContext';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(4);
    const [route, setRoute] = useState("Login");
    return (
            <AuthProvider>
                    <div>
                        <Heading
                            title='Privacy Policy ExchanSwap'
                            description="Privacy Policy Page. Welcome to ExchanSwap, your trusted partner in currency exchange. Protecting your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services."
                            keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                        <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                        <Privacy />
                        <Footer />
                    </div>
            </AuthProvider>
    )
}

export default Page;