'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import FAQ from '../components/Route/FAQ/FAQ';
import { AuthProvider } from '../api/AuthContext';


const Page = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login");
    return (
            <AuthProvider>
                    <div>
                        <Heading
                            title='FAQ ExchanSwap'
                            description="FAQ Page. At ExchanSwap, we understand that currency exchange can be complex and that our users often have questions about our services, processes, and policies. Our Frequently Asked Questions (FAQ) page is designed to provide you with clear, concise, and accurate information to help you navigate your currency exchange needs with ease and confidence."
                            keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
                        <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route} />
                        <FAQ />
                        <Footer />
                    </div>
            </AuthProvider>
    )
}

export default Page;