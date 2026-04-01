import React from 'react';
import userImg from "../../../B13-A6-DigiTools-Platform/assets/products/user.png";
import products from '../../../B13-A6-DigiTools-Platform/assets/products/package.png';
import rocket from "../../../B13-A6-DigiTools-Platform/assets/products/rocket.png"

const CardAvter = () => {
    return (
        <div className='text-center  mt-7 font-bold'>
  <h1 className='text-5xl'>Get Started in 3 Steps</h1>
  <p className='text-gray-400 pt-4'>
    Start using premium digital tools in minutes, not hours.
  </p>

  <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

    {/* Card 1 */}
    <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
      <div className="flex justify-end">
        <h2 className='rounded-full text-white px-2 bg-indigo-600'>01</h2>
      </div>
      <img className='w-[80px] mx-auto' src={userImg} alt="user" />
      <h2 className="card-title justify-center">Create Account</h2>
      <p>Sign up for free in seconds.</p>
    </div>

    {/* Card 2 */}
    <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
      <div className="flex justify-end">
        <h2 className='rounded-full text-white px-2 bg-indigo-600'>02</h2>
      </div>
      <img className='w-[80px] mx-auto' src={products} alt="product" />
      <h2 className="card-title justify-center">Choose Products</h2>
      <p>Browse and select tools.</p>
    </div>

    {/* Card 3 */}
    <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
      <div className="flex justify-end">
        <h2 className='rounded-full text-white px-2 bg-indigo-600'>03</h2>
      </div>
      <img className='w-[80px] mx-auto' src={rocket} alt="rocket" />
      <h2 className="card-title justify-center">Start Creating</h2>
      <p>Start using tools instantly.</p>
    </div>

  </div>
</div>
    );
};

export default CardAvter;