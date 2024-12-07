import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import Featuredmovie from '../component/Featuredmovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
    const movies = useLoaderData()
    const filtermovie = movies.filter(movie => {
        return movie.genre !== 'Tv Show'
    })
    const sortmovie = filtermovie.sort((a, b) => b.rating - a.rating).slice(0, 6);
    const filtermovies = movies.filter(movie => {
        const releaseYear = parseInt(movie.releaseYear);
        return releaseYear >= 2023 && releaseYear <= 2024 && movie.genre !== 'Drama';
    });
    const dramaMovies = movies.filter(movie => movie.genre === 'Drama').slice(0, 3);
    const actionMovies = movies.filter(movie => movie.genre === 'Action').slice(0, 3);
    const comedyMovies = movies.filter(movie => movie.genre === 'Comedy').slice(0, 3);


    return (
        <div className='dark:bg-black dark:text-white'>
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
            <section className="w-full px-2 sm:w-11/12 sm:mx-auto my-10">
                <div className='flex justify-between items-center'>
                    <p className="text-lg sm:text-xl font-semibold text-left mb-4">Trending Movies</p>
                    <Link to='allmovie' className="font-medium mb-4">See All</Link>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {filtermovies.map(movie => (
                        <SwiperSlide key={movie._id}>
                            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-800 w-full">
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="w-full h-64 object-cover rounded-md"
                                />
                                <div className="mt-4 text-center">
                                    <p className="font-bold text-base sm:text-lg text-gray-800 dark:text-white">{movie.title}</p>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{movie.genre}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            <section className="w-full px-2 sm:w-11/12 sm:mx-auto my-10">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg sm:text-xl font-semibold text-left">Top Category</p>
                    <Link to="/allmovie" className="font-medium">See All</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2 w-full '>
                    <div className="flex flex-col">
                        <p className="font-medium text-sm text-center mb-1">Drama</p>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            className="rounded-box border border-gray-200 dark:border-gray-700 h-[400px]"
                        >
                            {dramaMovies.map(movie => (
                                <SwiperSlide key={movie._id} className="h-[150px]">
                                    <div className="flex flex-col items-center h-full">
                                        <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover rounded-md shadow-md" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-sm text-center mb-2">Action</p>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            className="rounded-box border border-gray-200 dark:border-gray-700 h-[400px]"
                        >
                            {actionMovies.map(movie => (
                                <SwiperSlide key={movie._id} className="h-[150px]">
                                    <div className="flex flex-col items-center h-full">
                                        <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover rounded-md shadow-md" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-medium text-sm text-center mb-2">Comedy</p>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            direction="vertical"
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            className="rounded-box border border-gray-200 dark:border-gray-700 h-[400px]"
                        >
                            {comedyMovies.map(movie => (
                                <SwiperSlide key={movie._id} className="h-[150px]">
                                    <div className="flex flex-col items-center h-full">
                                        <img src={movie.poster} alt={movie.title} className="h-full w-full object-cover rounded-md shadow-md"/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;