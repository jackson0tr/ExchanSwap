'use client';
import { style } from "@/app/utils/style";
import React, { FC, useEffect, useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import CurrencyDropdown from "@/app/utils/CurrencyDropdown";
import axios from "axios";
import { motion } from "framer-motion";



const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [currencies, setCurrencies] = useState<string[]>([]);
    const [convertedAmount, setConvertedAmount] = useState<string>('');
    const [converting, setConverting] = useState(false);
    const [currencyData, setCurrencyData] = useState<any>(null);

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    // API CURRENCY
    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            //   const data = await res.json();
            const data: Record<string, unknown> = await res.json();
            const currencies: string[] = Object.keys(data);
            setCurrencies(Object.keys(data));
        } catch (error) {
            console.error("Error Fetching", error);
        }
    };

    useEffect(() => {
        fetchCurrencies();
    }, []);

    // CONVERT CURRENCY FUNCTION
    const convertCurrency = async () => {
        if (!amount) return;
        setConverting(true);
        try {
            const res = await fetch(
                `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
            );
            const data = await res.json();

            setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
        } catch (error) {
            console.error("Error Fetching", error);
        } finally {
            setConverting(false);
        }
    };


    const fetchDuoCurrencies = async (from: string, to: string) => {
        try {
            const response = await axios.get(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching currencies:', error);
            throw error;
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDuoCurrencies(fromCurrency, toCurrency);
                setCurrencyData(data);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        getData();
    }, []);
    
    return (
        <>
            <section id="hero" className="container heroj_bg flex items-center bg-[#fff] flex-col px-5 pt-[50px] lg:pt-[130px] pb-[50px]  mx-auto">
                <motion.div
            initial={{
              opacity:  0 ,
            //   : 0.5
              scale:  0.5 ,
            //   : 0.3
            }}
            animate={{
              opacity:  1 ,
            //   : 0.5
              scale:  1 ,
            //   : 0.3
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
                <div className="mt-10 pb-3 flex items-center justify-center ">
                    <div className="flex flex-col  mt-[20px]">
                        <h4 className="text-slate-700 items-center text-center  text-[30px] px-3 w-full  font-[600] fonst-Josefin py-2 ">
                            Trusted Global Currency Converter & Money Transfers
                        </h4>
                        <br />
                        <p className="text-slate-700 items-center text-center font-Josefin font-[600] text-[18px]">
                            Best source for currency conversion, sending money online and tracking exchange rates
                        </p>
                    </div>
                </div>
                </motion.div>
                <div className="custom_bg border border-solid border-[#2190ff] 800px:w-[75%] rounded-lg shadow-md">
                        <>                                
                            <div className="">
                                <div className="flex flex-col">
                                    <form>
                                    <div className="relative p-2 w-full mt-6 mb-1">
                                        <label
                                            htmlFor="number"
                                            className={`${style.label} !text-[#fff]`}>
                                            Amount:
                                        </label>
                                        <input
                                            type="number"
                                            name="number"
                                            value={amount}
                                            onChange={(e: any) => setAmount(e.target.value)}
                                            id="amount"
                                            placeholder="1.00"
                                            className={`${style.input} !pl-4 !text-[#fff] !placeholder:text-[#fff] !border-[#fff]`}
                                        />
                                    </div>
                                    <div className="flex flex-col p-2 800px:flex-row 800px:justify-between">
                                        <CurrencyDropdown
                                            currencies={currencies}
                                            title="From:"
                                            currency={fromCurrency}
                                            setCurrency={setFromCurrency}
                                        />
                                        <div className="flex justify-center p-2 -mb-5 sm:mb-0">
                                            <HiArrowsRightLeft size={20} onClick={swapCurrencies} className="text-xl bg-tansparent border-none text-[#2190ff] cursor-pointer" />
                                        </div>
                                        <CurrencyDropdown
                                            currencies={currencies}
                                            currency={toCurrency}
                                            setCurrency={setToCurrency}
                                            title="To:"
                                        />
                                    </div>
                                    </form>
                                </div>
                                <div className="flex p-3 flex-col 800px:flex-row">
                                    {convertedAmount && (
                                        <div className="mt-4 text-lg font-medium text-center 800px:text-right text-[#fff]">
                                            Converted Amount: {convertedAmount}
                                        </div>
                                    )}

                                    <div className="flex p-3 flex-col 800px:flex-row mt-6">
                                        <div className="w-3/4 bg-slate-200 rounded-[5px] p-2 flex flex-row">
                                            <div className="flex items-center cursor-pointer justify-center">
                                                <IoInformationCircleOutline size={20} className="text-[#2190ff]" />
                                            </div>
                                            <p className="text-[12px] p-2 text-slate-700">
                                                We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money.
                                            </p>
                                        </div>

                                    </div>
                                        <button
                                            onClick={convertCurrency}
                                            className={`${style.button} !bg-[#fff] !text-[#2190ff] left-[90px] !rounded-[5px] p-3 !w-[80px] !h-[40px] ${converting ? "animate-pulse" : ""}`}
                                        >
                                            Convert
                                        </button>
                                </div>
                            </div>
                        </>

            
        </div >
            </section >
        </>
    );
};

export default Converter;