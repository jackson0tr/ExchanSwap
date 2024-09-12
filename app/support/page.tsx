'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import Support from '../components/Route/SupportedCurrencies/Support';
import { AuthProvider } from '../api/AuthContext';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(8);
    const [route, setRoute] = useState("Login");

    return (
            <AuthProvider>
                    <div>
                        <Heading
                            title='Supported Currencies ExchanSwap'
                            description="Supported Currencies Page. Welcome to ExchanSwap, your trusted partner in currency exchange. Protecting your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services."
                            keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                        <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                        <Support />
                        <Footer />
                    </div>
            </AuthProvider>
    )
}

export default Page;