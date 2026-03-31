import React from 'react';
import { ShoppingCart } from 'lucide-react';
const Navbar = ({cart}) => {
    return (
        <div className='container border-b-2 mx-auto flex justify-between items-center py-5'>

            {/* Left (Logo) */}
            <h2 className='text-4xl font-bold text-[#4F39F6]'>
                DigiTools
            </h2>

            {/* Middle (Menu) */}
            <ul className='flex font-bold gap-6'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>

            {/* Right (Auth Buttons) */}
            <div className='flex items-center gap-4'>
                <button className='cursor-pointer btn text-red-700 text-xl rounded-full btn-soft btn-neutral'>   <ShoppingCart /
                >{cart.length}</button>
                <h2 className='font-bold'>Login</h2>
                <button className='btn bg-[#4F39F6] rounded-2xl text-white'>
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default Navbar;