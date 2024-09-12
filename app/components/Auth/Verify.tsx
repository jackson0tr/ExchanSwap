import axiosApi from "@/app/api/axios";
import { style } from "../../utils/style";
import React,{FC, useRef, useState} from "react";
import {toast} from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type Props={
    setRoute:(route:string)=>void;
    refetch?: any;
}

type VerifiyNumber={
    "0":string;
    "1":string;
    "2":string;
    "3":string;
    "4":string;
    "5":string;
}

const Verify:FC<Props> = ({setRoute, refetch}) =>{
    const [invalidError,setInvalidError]=useState<boolean>(false);
    const inputRefs =[
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const  [verifiyNumber,setVerifiyNumber] = useState<VerifiyNumber>({
        0:"",
        1:"",
        2:"",
        3:"",
        4:"",
        5:"",
    });

    const verificationHandler = async () =>{
        const verificationNumber =  Object.values(verifiyNumber).join("");
        if(verificationNumber.length !== 6){
            setInvalidError(true);
            return;
        }
        const otp = verificationNumber;
        const verify = async (otp:string)=>  {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                   await axiosApi.post('/auth/check_otp', {otp} , {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                  toast.success("Your email actived successfully!");
                  setRoute("Login");
                } else {
                  console.error('No token found');
                }
              } catch (error) {
                console.error('Fetching verify failed', error);
              }
            }

        await verify(otp);

    }
    
    const handleInputChange =  (index:number,value:string)=>{
        setInvalidError(false);
        const newVerifiyNumber = {...verifiyNumber, [index]:value};
        setVerifiyNumber(newVerifiyNumber);

        if(value === "" && index > 0){
            inputRefs[index - 1]?.current?.focus();
        }else if(value.length === 1 && index < 6){
            inputRefs[index + 1]?.current?.focus();
        }
    }


    return(
        <div className="p-4">
            <h1 className={`${style.title}`}>
                Email Verification
            </h1>
            <br />
            <div className="w-full flex items-center justify-center mt-2">
                <div className="w-[80px] h-[80px] rounded-full bg-[#4927DF2] flex items-center justify-center">
                    <VscWorkspaceTrusted size={40} className="text-[#2190ff]"/>
                </div>
            </div>
            <br />
            <br />
            <div className="flex m-auto items-center justify-around">
                {Object.keys(verifiyNumber).map((key,index)=>(
                    <input 
                    type="number" 
                    key={key} 
                    ref={inputRefs[index]} 
                    className={`w-[65px] h-[65px] bgb-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center ${
                        invalidError ? "shake border-red-500" : "dark:border-white border-[#0000004a]"
                    } `}
                    placeholder=""
                    maxLength={1}
                    value={verifiyNumber[key as keyof VerifiyNumber]}
                    onChange={(e)=>handleInputChange(index,e.target.value)} />
                ))}
            </div>
            <br />
            <br />
            <div className="w-full flex justify-center">
                <button onClick={verificationHandler}
                className={`${style.button}`}>
                    One-time password (OTP) verification.
                </button>
            </div>
            <br />
            <h5 className="text-center text-black dark:text-white pt-4 font-Poppins text-[14px]">
            Back to Login? <span className="text-[#2190ff] pl-1 cursor-pointer" onClick={()=>setRoute("Login")}>
            Login
                </span>
            </h5>
        </div>
    )
}

export default Verify;