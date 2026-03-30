import React from 'react';
import { ShoppingCart } from 'lucide-react';
const Navbar = () => {
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
                <h2 className='cursor-pointer flex gap-2 font-bold'>   <ShoppingCart />Login</h2>
                <button className='btn bg-[#4F39F6] rounded-2xl text-white'>
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default Navbar;