import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';

const Moviedetails = () => {
    const movie = useLoaderData()
    const { poster, title, genre, duration, releaseYear, rating, summary } = movie
    return (
        <div>
            <Navbar />
            <section className='my-10'>
                <div className="card md:card-side bg-base-50 max-w-3xl mx-auto shadow-md space-x-6">
                    <figure>
                        <img src={poster} className='object-cover w-[320px] h-auto' alt="Movie" />
                    </figure>
                    <div className="text-left mt-5 my-auto">
                        <h2 className='text-lg font-bold'>{title}</h2>
                        <p className='font-medium'>{genre}</p>
                        <hr className='mt-3' />
                        <div className='py-4 space-y-1'>
                            <p className='text-sm'>Duration: {duration} min</p>
                            <p className='text-sm'>Releasing(Year): {releaseYear}</p>
                            <p className='text-sm'>Rating: {rating}</p>
                        </div>
                        <p className='text-gray-500'>{summary} </p>
                        <div className="mt-4 flex space-x-2">
                            <button className="flex items-center px-3 md:py-2 bg-red-500 text-white rounded-md"
                            > <AiFillDelete className="mr-2" />Delete Movie</button>
                            <button className="flex items-center px-3 md:py-2 bg-teal-400 text-white rounded-md"
                            > <AiOutlineHeart className="mr-2" />Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Moviedetails;