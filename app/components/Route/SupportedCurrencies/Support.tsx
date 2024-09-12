'use client';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import axiosApi from '@/app/api/axios';
import Loader from '../../Layout/Loader/Loader';

const Support = () => {
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axiosApi.get('/supported_currencies');
                setCurrencies(response.data.data);
                console.log("Response:", response);
                console.log("Data:", response.data.data);
            } catch (error) {
                console.error('Error fetching currencies:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCurrencies();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Find the index of the first occurrence of the search query in the currencies list
        const index = currencies.findIndex(currency => currency.toLowerCase().includes(query.toLowerCase()));
        setHighlightedIndex(index);
    };

    // Filter currencies based on search query
    const filteredCurrencies = currencies.filter(currency =>
        currency.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <section className="w-11/12 bg-[#fff] container px-5 pt-[50px] lg:pt-[130px] pb-[50px] mx-auto">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                ease: "linear",
                                duration: 2,
                                x: { duration: 1 },
                            }}
                            className="w-full"
                        >
                            <div className='mt-10 pb-3'>
                                <h2 className="text-3xl font-bold text-[#2190ff] mb-8">Supported Currencies</h2>
                                <input
                                    type="text"
                                    placeholder="Search currencies..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    className="border text-slate-700 p-2 rounded mb-4 w-full"
                                />
                                <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {filteredCurrencies.map((currency, index) => (
                                        <li
                                            key={index}
                                            className={`text-slate-700 text-lg rounded-lg p-2 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${
                                                highlightedIndex === index ? 'bg-blue-500 text-white' : 'bg-white bg-opacity-20 hover:bg-opacity-40'
                                            }`}
                                        >
                                            {currency}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </section>
                )
            }
        </>
    );
}

export default Support;
