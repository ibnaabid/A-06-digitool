import React from 'react';
import { CircleDot } from 'lucide-react';
import image from "../../../../B13-A6-DigiTools-Platform/assets/products/banner.png"
import player from "../../../../B13-A6-DigiTools-Platform/assets/products/Play.png"

const Main = () => {
    return (
        <div className='mx-auto container mt-10'>
            <div className='flex border w-sm rounded-2xl'>
                <h2 className='flex font-bold py-3 pl-4 gap-3'> 
    <CircleDot />New: AI-Powered Tools Available</h2>
    </div>
                <div className='flex items-center justify-between mr-8'>
                    <div className='space-y-3 pt-3'>
                        <h1 className='text-5xl mt-2 font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                        <p className='text-gray-500 font-bold pt-4 text-xl'>Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>
 <div className=' flex gap-2 pt-3 '>
                        <button className='btn btn-soft rounded-2xl btn-primary'>Explore Products</button>
                        <button className='btn border-primary text-white font-bold rounded-2xl'> <img src={player} alt="" srcset="" />Watch Demo</button>
                    </div>
                    </div>
                   
                    <div className='max-w-full pl-6'>
                        <img src={image} alt="" srcset="" />
                    </div>

                </div>
            
        </div>
    );
};

export default Main;