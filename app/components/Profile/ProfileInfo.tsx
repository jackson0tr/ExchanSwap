import Image from 'next/image';
import React, { FC } from 'react';
import avatarIcon from '../../assets/user_d.webp'
import {style} from '../../../app/utils/style';

type Props={
    user:any;
}

const ProfileInfo:FC<Props> = ({user}) => {

    const name = user && user?.name;
    const country = user && user?.country;
    const email = user && user?.email;
    const role = user && user?.role;

    return(
        <>
            <div className="w-full flex justify-center">
                <div>
                    <Image width={120} height={120} className='w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full ' src={avatarIcon} alt="setImg" />
                </div>
            </div>
            <br />
            <br />
            <div className="w-full pl-6 800px:pl-10">
                <form>
                    <div className="800px:w-[50%] m-auto block pb-4">
                        <div className="w-full pt-2">
                            <label className="block text-[#333] pb-2">Name</label>
                            <input type="text" readOnly value={name}  className={`${style.input} !w-[95%] mb-4 800px:mb-0 `} />
                        </div>
                        <div className="w-full pt-2">
                            <label className="block text-[#333] pb-2">Country</label>
                            <input type="text" readOnly value={country}  className={`${style.input} !w-[95%] mb-4 800px:mb-0 `} />
                        </div>
                        <div className="w-full pt-2">
                            <label className='block text-[#333] pb-2'>Email</label>
                            <input type="text" readOnly value={email} className={`${style.input} !w-[95%] mb-1 800px:mb-0 `} />
                        </div>
                        <div className="w-full pt-2">
                            <label className='block text-[#333] pb-2'>Role</label>
                            <input type="text" readOnly value={role} className={`${style.input} !w-[95%] mb-1 800px:mb-0 `} />
                        </div>
                    </div>
                </form>
                <br />
            </div>
        </>
    )
}

export default ProfileInfo;