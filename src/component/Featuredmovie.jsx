import React from 'react';
import { Link } from 'react-router-dom';

const Featuredmovie = ({ movie }) => {
    const { _id, poster, title, genre, duration, releaseYear, rating } = movie
    return (
        <div className=" flex flex-col rounded-md shadow-md bg-white overflow-hidden">
            <figure>
                <img src={poster} className='object-cover w-full h-[260px]'  alt="Movie" /> 
            </figure>
            <div className="text-left my-auto items-center py-3 px-2">
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='font-medium'>{genre}</p>
                <div className='text-left mt-3'>
                    <Link to={`/movies/${_id}`} className=' rounded-lg text-sm  py-2 px-3 bg-teal-200'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Featuredmovie;