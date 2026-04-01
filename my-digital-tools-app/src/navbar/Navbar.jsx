import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cart = [] }) => {
    return (
        <div className='container mx-auto border-b-2 flex justify-between items-center py-5'>

            <h2 className='text-2xl md:text-4xl font-bold text-[#4F39F6]'>
                DigiTools
            </h2>

            <ul className='hidden lg:flex font-bold gap-6'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
            </ul>

            <div className='flex items-center gap-4'>

                <button className='relative btn rounded-full btn-soft btn-neutral'>
                    <ShoppingCart size={20} />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </button>

                <h2 className='hidden md:block font-bold'>Login</h2>

                <button className='btn bg-[#4F39F6] rounded-2xl text-white'>
                    Get Started
                </button>

            </div>

        </div>
    );
};

export default Navbar;