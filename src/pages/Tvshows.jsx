import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';

const Tvshows = () => {
    const loadedshow = useLoaderData()
    const filtertvshow = loadedshow.filter(show => {
        return show.genre == 'Tv Show'
    })
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8 w-11/12 mx-auto '>
                {
                    filtertvshow.map(movie => <Featuredmovie key={movie._id} movie={movie} /> )
                }
            </div>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Tvshows;