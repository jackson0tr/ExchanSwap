'use client'
import React,{FC,useState} from "react"
import Heading from "./utils/Heading";
import Nav from './components/Layout/Nav/Nav';
import { Home } from "./components/Route/Home/Home";
import Footer from "./components/Layout/Footer/Footer";


const Page: FC = () =>{
  const [open,setOpen] = useState(false);
  const [activeItem,setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");


  return(
    <>
    <div className="overflow-hidden">
      <Heading 
      title='ExchanSwap' 
      description="Welcome to ExchanSwap, your premier destination for seamless and secure currency exchange services. At ExchanSwap, we specialize in providing fast, reliable, and competitive foreign exchange solutions tailored to meet your personal and business needs. Whether you are traveling, conducting international business, or sending money abroad, our state-of-the-art platform ensures that you get the best rates with minimal fees, all backed by top-tier security and exceptional customer service." 
      keywords="Currency exchange, Foreign exchange, Best exchange rates, Online currency exchange, Secure currency transactions, International money transfer, Competitive forex rates, Fast currency exchange, Foreign currency services, Exchange currency online, Money exchange solutions, Currency converter, Travel money exchange, Business currency exchange, Home delivery currency, Forex trading, Currency rate updates, Financial transactions, Global currency exchange, Foreign exchange services" />
      <Nav open={open} setOpen={setOpen} activeItem={activeItem} setRoute={setRoute} route={route}/>
      <Home />
      <Footer/> 
    </div>
    </>
  )
}

export default Page;