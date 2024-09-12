'use client'
import React, { FC, useContext, useEffect, useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import ProfileInfo from './ProfileInfo'
import { AuthContext } from '@/app/api/AuthContext';
import Subscription from './Subscription';
import { toast } from 'react-hot-toast';
import axiosApi from '@/app/api/axios';
import Upgrade from './Upgrade';


type Props={
    user:any;
    data?:any;
}

const Profile:FC<Props> = ({user,data}) => {

    const [scroll,setScroll] = useState(false);
    const [active,setActive] = useState(1);
    const { getProfile }:any = useContext(AuthContext);
    
    const logoutHandler = async () =>{
        axiosApi.get("/auth/logout");
        toast.success("Logout Successful");
        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    const logoutAllHandler = async () =>{
        axiosApi.get("/auth/logout-all");
        toast.success("Logout Successful");
        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
  



    useEffect(()=>{
        getProfile();
    },[])

    if(typeof window !== "undefined"){
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 85){
                setScroll(true);
            }else{
                setScroll(false);
            }
        })
    }


    return(
        <div className="w-[85%] 800px:pt-[30px] flex mx-auto">
            <div className={`w-[60px]  800px:w-[310px] h-[450px] bg-white bg-opacity-90 border-[00000014] shadow-sm rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px] `}>
                <ProfileSidebar user={user} active={active} logoutAllHandler={logoutAllHandler} setActive={setActive} logoutHandler={logoutHandler} />
            </div>
                {
                    active === 1 &&(
                        <div className="w-full h-full bg-transparent mt-[80px]">
                            <ProfileInfo  user={user} />
                        </div>
                    )
                }
                {
                    active === 2 &&(
                        <div className="w-full h-full bg-transparent mt-[80px]">
                            <Subscription  user={user} data={data} />
                        </div>
                    )
                }
                {
                    active === 3 &&(
                        <div className="w-full h-full bg-transparent mt-[80px]">
                            <Upgrade user={user} data={data} />
                        </div>
                    )
                }
        </div>
    )
}

export default Profile;