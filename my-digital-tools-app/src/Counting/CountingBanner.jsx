import React from 'react';

const CountingBanner = () => {
    return (
        <div className='bg-violet-600 mt-10 container mx-auto w[300px] h-40 rounded-xl'>
            <div className='flex ml-8 mr-8 text-center justify-between items-center pt-8 py-5'>
                <div>
                    <h2 className='font-bold text-4xl'>50K+</h2>
                    <h2 className='text-gray-400'>Active Users</h2>
                </div>
                <div>
                    <h2 className='font-bold text-4xl'>200+</h2>
                    <h2 className='text-gray-400'>Premium Tools</h2>
                </div>
                <div>
                    <h2 className='font-bold text-4xl'>4.9</h2>
                    <h1 className='text-gray-400'>Rating</h1>
                </div>

            </div>
            
        </div>
    );
};

export default CountingBanner;