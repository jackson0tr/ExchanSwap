import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="loader border-r-2 rounded-full border-slate-700 bg-[#2190ff] animate-bounce aspect-square w-8 flex justify-center items-center text-[#fff]">$</div>
        </div>
    )
}

export default Loader;