import React from 'react';

const Errorpage = () => {
    return (
        <div>
            <img className='mx-auto w-[500px] h-[400px] object-cover' src="/public/Images/error.png" alt="" />
            <p className='text-3xl font-semibold'>Page Not Found</p>
        </div>
    );
};

export default Errorpage;