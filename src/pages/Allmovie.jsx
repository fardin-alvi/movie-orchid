import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';
import { FaSearch } from 'react-icons/fa';

const Allmovie = () => {
    const loadedmovie = useLoaderData()
    const [searchmovie, setSearchmovie] = useState("");
    const [sortOrder, setSortOrder] = useState('');
    

    const filterloaded = loadedmovie.filter(movie => {
        return movie.genre !== 'Tv Show'
    })
    const filtermovies = filterloaded.filter(movie =>
        movie.title.toLowerCase().includes(searchmovie.toLowerCase())
    );

    const sortedMovies = filtermovies.sort((a, b) => {
        return sortOrder === "asc"
            ? a.releaseYear - b.releaseYear
            : b.releaseYear - a.releaseYear;
    });



    return (
        <div>
            <section className="my-8 px-4 w-11/12 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            className="input input-bordered w-full pl-10 pr-4 py-2 rounded-md shadow-sm"
                            placeholder="Search Movies by title"
                            value={searchmovie}
                            onChange={(e) => setSearchmovie(e.target.value)}
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FaSearch size={20} />
                        </span>
                    </div>
                    <div className="w-48">
                        <select
                            className="select select-bordered w-full rounded-md shadow-sm"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="" disabled>
                                Sort By Year
                            </option>
                            <option value="asc">Year(asc)</option>
                            <option value="desc">Year(desc)</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 my-8'>
                    {
                        filtermovies.length === 0 ?
                            <div className="col-span-3 text-center text-gray-500">No movies found.</div> : filtermovies.map(movie => ( <Featuredmovie key={movie._id} movie={movie} /> ))
                    }
                </div>

            </section>
        </div>
    );
};

export default Allmovie;