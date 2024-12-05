import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';

const Home = () => {
    const loadedmovie = useLoaderData()
    console.log(loadedmovie);
    return (
        <>
            <Navbar />
            <Banner />
            <section className='w-11/12 mx-auto'>
                <p className='text-xl font-semibold text-left my-4'>Featured Movie</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-7">
                    {
                        loadedmovie.map(movie => <Featuredmovie key={movie._id} movie={movie} ></Featuredmovie>)

                    }
                </div>
                <Link to='/allmovie' className='btn bg-teal-400 my-5' >See All Movies</Link>
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;