import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';

const Allmovie = () => {
    const loadedmovie = useLoaderData()
    return (
        <div>
            <Navbar />
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8 '>
                {
                    loadedmovie.map(movie => <Featuredmovie key={movie._id} movie={movie} ></Featuredmovie>)

                }
            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default Allmovie;