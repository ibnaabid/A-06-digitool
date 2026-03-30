import React from 'react';

const PricingCard = () => {
  return (
    <div>

      {/* heading */}
      <div className='text-center mt-20
      font-bold'>
        <h2 className='text-5xl'>Simple, Transparent Pricing</h2>
        <p className='text-gray-400 pt-4'>
          Choose the plan that fits your needs.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 font-bold gap-6 mt-10">

        {/* Card 1 */}
        <div className="card bg-base-100 shadow-sm p-5">
          <span className="badge badge-warning">Starter</span>
          <h2 className="text-2xl font-bold mt-2">Perfect for getting started</h2>
          <p className="text-xl">$0/mo</p>

          {/* feature list */}
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li> Access to 10 free tools</li>
            <li> Basic templates</li>
            <li> 1 project per month</li>
            <li> Community support</li>
          </ul>

          <button className="btn btn-primary rounded-2xl mt-4">Get started Free</button>
        </div>

        {/* Card 2 */}
        <div className="card bg-indigo-500 text-white shadow-sm p-5">
          <span className="badge badge-warning">Pro</span>
          <h2 className="text-2xl font-bold mt-2">Best for professionals</h2>
          <p className="text-xl">$29/mo</p>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li> Everything in Starter</li>
            <li> Priority support</li>
            <li> Unlimited projects</li>
          </ul>

          <button className="btn rounded-2xl  mt-4">Start Pro Trial</button>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-sm p-5">
          <span className="badge badge-warning">Enterprise</span>
          <h2 className="text-2xl font-bold mt-2">For teams and businesses</h2>
          <p className="text-xl">$49/mo</p>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>All Pro features</li>
            <li> Team collaboration</li>
            <li> Dedicated support</li>
          </ul>

          <button className="btn rounded-2xl btn-primary mt-4">Contact sales</button>
        </div>

      </div>
    </div>
  );
};

export default PricingCard;