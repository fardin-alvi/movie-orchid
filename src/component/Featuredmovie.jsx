import React from 'react';
import { Link } from 'react-router-dom';

const Featuredmovie = ({ movie }) => {
    const { poster, title, genre, duration, releaseYear, rating } = movie
    return (
        <div className="card card-side bg-base-50 shadow-md space-x-6">
            <figure>
                <img src={poster} className='object-cover w-[260px] h-[260px]'  alt="Movie" /> 
            </figure>
            <div className="text-left my-auto">
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='font-medium'>{genre}</p>
                <hr className='mt-3' />
                <div className='pt-4 space-y-1'>
                    <p className='text-sm'>Duration: {duration} min</p>
                    <p className='text-sm'>Releasing(Year): {releaseYear}</p>
                    <p className='text-sm'>Rating: {rating}</p>
                </div>
                <div className='text-left mt-5'>
                    <Link className=' rounded-lg  py-2 px-3 bg-teal-400'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Featuredmovie;