import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';

const Home = () => {
    const movies = useLoaderData()
    const sortmovie = movies.sort((a, b) => b.rating - a.rating).slice(0, 6);


    return (
        <div className='dark:bg-black'>
            <Navbar />
            <Banner />
            <section className='w-11/12 mx-auto'>
                <p className='text-xl font-semibold text-left my-4'>Featured Movie</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7">
                    {
                        sortmovie.map(movie => <Featuredmovie key={movie._id} movie={movie} ></Featuredmovie>)

                    }
                </div>
                <Link to='/allmovie' className='btn bg-teal-400 my-5' >See All Movies</Link>
            </section>
            <section>
                <p className='text-xl font-semibold text-left w-10/12 '>Trending</p>
                
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;