import React from 'react';
import errorimage from '../Images/error.png'

const Errorpage = () => {
    return (
        <div>
            <img className='mx-auto w-[500px] h-[400px] object-cover' src={errorimage} alt="error" />
            <p className='text-3xl text-center font-semibold'>Page Not Found</p>
        </div>
    );
};

export default Errorpage;