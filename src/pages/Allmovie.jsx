import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';
import { FaSearch } from 'react-icons/fa';

const Allmovie = () => {
    const loadedmovie = useLoaderData()
    const [searchmovie, setSearchmovie] = useState(""); 
    const filtermovies = loadedmovie.filter(movie =>
        movie.title.toLowerCase().includes(searchmovie.toLowerCase())
    );
    return (
        <div>
            <Navbar />
            <section className="my-8 px-4">
                <div className="flex justify-center mb-6">
                    <div className="relative w-full max-w-md">
                        <input type="text" className="input input-bordered w-full pl-10 pr-4 py-2 rounded-md shadow-sm" placeholder="Search Movies by tilte" value={searchmovie} onChange={(e) => setSearchmovie(e.target.value)}/>
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"> <FaSearch size={20} /> </span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8 '>
                    {
                        filtermovies.length === 0 ?
                            <div className="col-span-3 text-center text-gray-500">No movies found.</div> : filtermovies.map(movie => ( <Featuredmovie key={movie._id} movie={movie} /> ))
                    }
                </div>

            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default Allmovie;